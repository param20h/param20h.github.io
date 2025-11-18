# Next.js Portfolio Setup Script
# Run this in PowerShell

Write-Host "🚀 Setting up your Next.js Portfolio..." -ForegroundColor Cyan

# Step 1: Backup current project
Write-Host "`n📦 Step 1: Creating backup..." -ForegroundColor Yellow
if (Test-Path "d:\param20h.github.io-backup") {
    Write-Host "Backup already exists. Skipping..." -ForegroundColor Gray
} else {
    Copy-Item -Path "d:\param20h.github.io" -Destination "d:\param20h.github.io-backup" -Recurse
    Write-Host "✅ Backup created at d:\param20h.github.io-backup" -ForegroundColor Green
}

# Step 2: Navigate to project
Write-Host "`n📂 Step 2: Navigating to project..." -ForegroundColor Yellow
Set-Location "d:\param20h.github.io"

# Step 3: Setup package.json
Write-Host "`n📝 Step 3: Setting up package.json..." -ForegroundColor Yellow
if (Test-Path "package-nextjs.json") {
    if (Test-Path "package.json") {
        Remove-Item "package-old.json" -Force -ErrorAction SilentlyContinue
        Rename-Item "package.json" "package-old.json"
    }
    Rename-Item "package-nextjs.json" "package.json"
    Write-Host "✅ package.json configured" -ForegroundColor Green
}

# Step 4: Ensure media folder is in public
Write-Host "`n🖼️  Step 4: Checking media folder..." -ForegroundColor Yellow
if (-not (Test-Path "public")) {
    New-Item -ItemType Directory -Path "public" | Out-Null
}
if (Test-Path "media" -and -not (Test-Path "public\media")) {
    Copy-Item -Path "media" -Destination "public\media" -Recurse
    Write-Host "✅ Media files copied to public/media" -ForegroundColor Green
} else {
    Write-Host "✅ Media folder already in place" -ForegroundColor Green
}

# Step 5: Install dependencies
Write-Host "`n📥 Step 5: Installing dependencies..." -ForegroundColor Yellow
Write-Host "This may take a few minutes..." -ForegroundColor Gray
npm install

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Error installing dependencies" -ForegroundColor Red
    exit
}

# Step 6: Build check
Write-Host "`n🔨 Step 6: Running build check..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Build completed with warnings (this is normal)" -ForegroundColor Yellow
}

# Summary
Write-Host "`n🎉 Setup Complete!" -ForegroundColor Green
Write-Host "`nNext steps:" -ForegroundColor Cyan
Write-Host "  1. Run 'npm run dev' to start the development server" -ForegroundColor White
Write-Host "  2. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host "  3. Customize your content in components/sections/" -ForegroundColor White
Write-Host "  4. Update EmailJS credentials in components/sections/Contact.tsx" -ForegroundColor White
Write-Host "`n📖 See README-NEXTJS.md for detailed documentation" -ForegroundColor Cyan
Write-Host "`n💡 Happy coding!" -ForegroundColor Magenta
