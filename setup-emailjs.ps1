# Quick EmailJS Setup Script
# Run this to create your .env.local file

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "  EmailJS Configuration Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Check if .env.local already exists
if (Test-Path ".env.local") {
    Write-Host "Warning: .env.local already exists!" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to overwrite it? (y/n)"
    if ($overwrite -ne "y") {
        Write-Host "Setup cancelled." -ForegroundColor Red
        exit
    }
}

Write-Host "Please visit: https://dashboard.emailjs.com/" -ForegroundColor Green
Write-Host ""
Write-Host "You'll need to get these 3 values from EmailJS:" -ForegroundColor Yellow
Write-Host "1. Service ID (from Email Services)" -ForegroundColor White
Write-Host "2. Template ID (from Email Templates)" -ForegroundColor White
Write-Host "3. Public Key (from Account > General)" -ForegroundColor White
Write-Host ""

# Get user input
$serviceId = Read-Host "Enter your EmailJS Service ID"
$templateId = Read-Host "Enter your EmailJS Template ID"
$publicKey = Read-Host "Enter your EmailJS Public Key"

# Create .env.local file
$envContent = @"
# EmailJS Configuration
# Generated on $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")

NEXT_PUBLIC_EMAILJS_SERVICE_ID=$serviceId
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$templateId
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$publicKey
"@

$envContent | Out-File -FilePath ".env.local" -Encoding utf8

Write-Host ""
Write-Host "✓ Success! .env.local file created!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Restart your dev server (npm run dev)" -ForegroundColor White
Write-Host "2. Test the contact form on your site" -ForegroundColor White
Write-Host "3. Check your email for the test message" -ForegroundColor White
Write-Host ""
Write-Host "For detailed setup instructions, see: EMAILJS-SETUP.md" -ForegroundColor Yellow
