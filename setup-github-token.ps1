# Quick GitHub Token Setup Script
# This will help you add a GitHub token to fix the rate limit issue

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  GitHub Token Setup for Portfolio" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Problem: GitHub API rate limit (60 requests/hour)" -ForegroundColor Yellow
Write-Host "Solution: Add a GitHub token (5000 requests/hour)" -ForegroundColor Green
Write-Host ""

# Check if .env.local exists
if (Test-Path ".env.local") {
    Write-Host "✓ Found existing .env.local file" -ForegroundColor Green
    $content = Get-Content ".env.local" -Raw
    
    if ($content -match "NEXT_PUBLIC_GITHUB_TOKEN") {
        Write-Host "✓ GitHub token already configured!" -ForegroundColor Green
        Write-Host ""
        $update = Read-Host "Do you want to update it? (y/n)"
        if ($update -ne "y") {
            Write-Host "Setup cancelled." -ForegroundColor Yellow
            exit
        }
    }
} else {
    Write-Host "Creating new .env.local file..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Step 1: Get Your GitHub Token" -ForegroundColor Cyan
Write-Host "---------------------------------------"
Write-Host "1. Open: https://github.com/settings/tokens" -ForegroundColor White
Write-Host "2. Click 'Generate new token (classic)'" -ForegroundColor White
Write-Host "3. Name it: Portfolio Stats" -ForegroundColor White
Write-Host "4. Select scope: public_repo (ONLY)" -ForegroundColor White
Write-Host "5. Click 'Generate token'" -ForegroundColor White
Write-Host "6. Copy the token (starts with ghp_)" -ForegroundColor White
Write-Host ""

# Open browser
$openBrowser = Read-Host "Open GitHub tokens page in browser? (y/n)"
if ($openBrowser -eq "y") {
    Start-Process "https://github.com/settings/tokens"
    Write-Host "✓ Browser opened. Get your token and come back here." -ForegroundColor Green
    Write-Host ""
}

Write-Host "Step 2: Enter Your Token" -ForegroundColor Cyan
Write-Host "---------------------------------------"
$token = Read-Host "Paste your GitHub token here (or press Enter to skip)"

if ([string]::IsNullOrWhiteSpace($token)) {
    Write-Host ""
    Write-Host "⚠ No token provided. Exiting..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "You can manually create .env.local with:" -ForegroundColor White
    Write-Host "NEXT_PUBLIC_GITHUB_TOKEN=your_token_here" -ForegroundColor Gray
    exit
}

# Validate token format
if (-not ($token -match "^(ghp_|github_pat_)")) {
    Write-Host ""
    Write-Host "⚠ Warning: Token doesn't look correct." -ForegroundColor Yellow
    Write-Host "GitHub tokens usually start with 'ghp_' or 'github_pat_'" -ForegroundColor Yellow
    $continue = Read-Host "Continue anyway? (y/n)"
    if ($continue -ne "y") {
        Write-Host "Setup cancelled." -ForegroundColor Red
        exit
    }
}

Write-Host ""
Write-Host "Step 3: Save Configuration" -ForegroundColor Cyan
Write-Host "---------------------------------------"

# Prepare .env.local content
$envContent = @"
# GitHub Personal Access Token
# Increases API rate limit from 60 to 5000 requests/hour
# Get from: https://github.com/settings/tokens
NEXT_PUBLIC_GITHUB_TOKEN=$token

# EmailJS Configuration (add these if you have them)
# NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
# NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
# NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
"@

# Save to .env.local
$envContent | Out-File -FilePath ".env.local" -Encoding utf8 -Force

Write-Host "✓ Token saved to .env.local" -ForegroundColor Green
Write-Host ""

Write-Host "Step 4: Test the Configuration" -ForegroundColor Cyan
Write-Host "---------------------------------------"

try {
    Write-Host "Testing GitHub API with your token..." -ForegroundColor Yellow
    
    $headers = @{ 
        Authorization = "token $token"
        Accept = "application/vnd.github.v3+json"
    }
    
    $response = Invoke-RestMethod -Uri "https://api.github.com/users/param20h" -Headers $headers
    
    Write-Host ""
    Write-Host "✓ SUCCESS! API is working!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your Stats:" -ForegroundColor Cyan
    Write-Host "  • Repositories: $($response.public_repos)" -ForegroundColor White
    Write-Host "  • Followers: $($response.followers)" -ForegroundColor White
    Write-Host "  • Following: $($response.following)" -ForegroundColor White
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "⚠ API Test Failed" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Possible issues:" -ForegroundColor Yellow
    Write-Host "  • Token is invalid or expired" -ForegroundColor White
    Write-Host "  • Token doesn't have 'public_repo' scope" -ForegroundColor White
    Write-Host "  • Internet connection problem" -ForegroundColor White
    Write-Host ""
}

Write-Host "Step 5: Restart Dev Server" -ForegroundColor Cyan
Write-Host "---------------------------------------"
Write-Host "To apply changes:" -ForegroundColor White
Write-Host "  1. Stop current server (Ctrl+C)" -ForegroundColor Gray
Write-Host "  2. Run: npm run dev" -ForegroundColor Gray
Write-Host "  3. Open: http://localhost:3000" -ForegroundColor Gray
Write-Host ""

$restart = Read-Host "Restart dev server now? (y/n)"
if ($restart -eq "y") {
    Write-Host ""
    Write-Host "Stopping current server..." -ForegroundColor Yellow
    
    # Try to stop processes on port 3000 and 3001
    $ports = @(3000, 3001)
    foreach ($port in $ports) {
        $process = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess
        if ($process) {
            Stop-Process -Id $process -Force -ErrorAction SilentlyContinue
            Write-Host "✓ Stopped process on port $port" -ForegroundColor Green
        }
    }
    
    Start-Sleep -Seconds 1
    
    Write-Host "Starting dev server..." -ForegroundColor Yellow
    Write-Host ""
    
    # Start in new window
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run dev"
    
    Write-Host "✓ Dev server started in new window!" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup Complete! 🎉" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "What happens now:" -ForegroundColor Cyan
Write-Host "  ✓ GitHub stats will show real data" -ForegroundColor White
Write-Host "  ✓ No more rate limit errors" -ForegroundColor White
Write-Host "  ✓ 5000 requests per hour (vs 60)" -ForegroundColor White
Write-Host ""
Write-Host "Security notes:" -ForegroundColor Yellow
Write-Host "  ✓ .env.local is in .gitignore (safe)" -ForegroundColor White
Write-Host "  ✓ Token is read-only for public repos" -ForegroundColor White
Write-Host "  ⚠ Never commit .env.local to git" -ForegroundColor White
Write-Host ""
Write-Host "Need help? Check: GITHUB-TOKEN-SETUP.md" -ForegroundColor Cyan
Write-Host ""
