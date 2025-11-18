# 🔑 GitHub Token Setup Guide

## Why You Need This

The GitHub API has rate limits:
- **Without token**: 60 requests per hour
- **With token**: 5,000 requests per hour ✅

Your portfolio was hitting the rate limit, causing the stats to show "0". Adding a token fixes this!

---

## Quick Setup (5 minutes)

### Step 1: Create GitHub Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Portfolio Stats`
4. Set expiration: **No expiration** (or choose your preference)
5. Select scopes:
   - ✅ **public_repo** (read-only access to public repos)
   - That's it! Don't select anything else for security
6. Click **"Generate token"**
7. **Copy the token immediately** (you won't see it again!)

### Step 2: Add Token to Your Project

1. Create `.env.local` file in your project root:

```powershell
New-Item -Path ".env.local" -ItemType File
```

2. Open `.env.local` and add:

```env
# GitHub Token for API access
NEXT_PUBLIC_GITHUB_TOKEN=ghp_your_token_here

# EmailJS (if you have these)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Replace `ghp_your_token_here` with your actual token

### Step 3: Restart Dev Server

```powershell
# Stop current server (Ctrl+C)
# Start again
npm run dev
```

---

## Verify It Works

1. Open http://localhost:3000
2. Check browser console (F12)
3. You should see:
   ```
   GitHub User Data: {login: "param20h", public_repos: 25, ...}
   GitHub Repos Data: 25 repos
   Stats: {repos: 25, stars: 50, forks: 15, followers: 10}
   ```

4. Stats should now show real numbers, not zeros!

---

## Alternative: Wait for Rate Limit Reset

If you don't want to create a token:

1. **Wait 1 hour** - Rate limit resets every hour
2. Clear browser cache
3. Refresh the page

But this is temporary - you'll hit the limit again quickly.

---

## For Production Deployment

### Option 1: Environment Variables (Recommended)

**Vercel:**
1. Go to project settings
2. Add environment variable:
   - Name: `NEXT_PUBLIC_GITHUB_TOKEN`
   - Value: Your token
3. Redeploy

**Netlify:**
1. Site settings → Build & deploy → Environment
2. Add variable: `NEXT_PUBLIC_GITHUB_TOKEN`
3. Redeploy

**GitHub Pages:**
- Add token to repository secrets
- Update GitHub Actions workflow to use it

### Option 2: Use Fallback Data

The component now shows fallback stats when rate limited:
- Repositories: 25
- Stars: 50
- Forks: 15
- Followers: 10

Update these in `GitHubStats.tsx` to match your actual stats.

---

## Security Notes

✅ **SAFE**: The token is read-only for public repos
✅ **SAFE**: `.env.local` is in `.gitignore` (not committed)
✅ **SAFE**: `NEXT_PUBLIC_` prefix means it's safe for client-side use
⚠️ **Don't**: Share your token publicly
⚠️ **Don't**: Commit `.env.local` to git

---

## Token Permissions Explained

**public_repo** scope allows:
- ✅ Read your public repositories
- ✅ Read repository stats (stars, forks, etc.)
- ❌ Cannot modify anything
- ❌ Cannot access private repos (unless you explicitly add that scope)

---

## Troubleshooting

### Still showing zeros?

1. **Check token is set correctly:**
```powershell
# Run in project directory
Get-Content .env.local
# Should show: NEXT_PUBLIC_GITHUB_TOKEN=ghp_...
```

2. **Restart dev server:**
```powershell
# Ctrl+C to stop
npm run dev
```

3. **Check browser console:**
- Press F12
- Look for "GitHub User Data" logs
- Check for errors

### Token not working?

- Verify you copied the entire token (starts with `ghp_`)
- Check token hasn't expired
- Ensure `public_repo` scope is selected
- Token should be in `.env.local`, not `.env.local.example`

### Rate limit still hit?

- You might have multiple tabs/windows open
- Clear browser cache
- Wait for rate limit to reset (check headers in Network tab)

---

## Quick Test Command

```powershell
# Test API with your token
$token = "ghp_your_token_here"
$headers = @{ Authorization = "token $token" }
$response = Invoke-RestMethod -Uri "https://api.github.com/users/param20h" -Headers $headers
Write-Host "Repos: $($response.public_repos)" -ForegroundColor Green
```

Replace `ghp_your_token_here` with your actual token.

---

## Need Help?

1. Check your GitHub token hasn't expired
2. Verify `.env.local` exists and has the token
3. Restart dev server after changes
4. Check browser console for specific errors
5. Try the test page: http://localhost:3000/test-github-api.html

---

**Ready? Create your token and add it to `.env.local` to fix the stats!** 🚀
