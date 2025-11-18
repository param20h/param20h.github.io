# 🔄 Automatic Daily Data Updates

Your portfolio site automatically fetches fresh data from GitHub API and rebuilds daily!

## How It Works

### Static Site with Daily Refresh
- Your site is **static HTML** (super fast, no server needed)
- **GitHub Actions** rebuilds the site **every day at midnight UTC**
- Each rebuild fetches **fresh GitHub stats** (repos, stars, forks, followers)
- Site updates automatically without any manual intervention

### Two Workflows

#### 1. **deploy.yml** (Main Deployment)
Triggers on:
- ✅ Every push to `main` branch
- ✅ Daily at 00:00 UTC (midnight)
- ✅ Manual trigger (workflow_dispatch)

#### 2. **daily-update.yml** (Backup Daily Update)
- Same as deploy.yml but dedicated for scheduled updates
- Ensures data stays fresh even without code changes

## What Gets Updated Daily

1. **GitHub Statistics**
   - Total repositories count
   - Total stars across all repos
   - Total forks
   - Follower count

2. **GitHub Contribution Graphs**
   - Activity heatmap (via github-readme-stats)
   - Contribution streak (via github-readme-streak-stats)

3. **Repository Data**
   - Top 3 most recently updated repos
   - Each with name, description, language, and stats

## API Rate Limits

### Without GitHub Token (Default)
- **60 requests/hour** from GitHub API
- Sufficient for daily updates
- Falls back to cached data if rate limited

### With GitHub Token (Recommended)
- **5,000 requests/hour** from GitHub API
- No rate limit concerns
- More reliable for frequent visitors

### How to Add GitHub Token

1. **Create Personal Access Token**
   ```
   Go to: https://github.com/settings/tokens
   Click: "Generate new token (classic)"
   Select scopes: ✓ public_repo (read access to public repos)
   Generate and copy the token
   ```

2. **Add to GitHub Secrets**
   ```
   Go to: https://github.com/param20h/param20h.github.io/settings/secrets/actions
   Click: "New repository secret"
   Name: NEXT_PUBLIC_GITHUB_TOKEN
   Value: [paste your token]
   Save
   ```

3. **Workflow Will Use It Automatically**
   - Next scheduled build will use the token
   - Rate limit increases to 5,000/hour
   - More reliable data fetching

## Manual Trigger

Want to update data immediately? No problem!

1. Go to: https://github.com/param20h/param20h.github.io/actions
2. Click on "Deploy Next.js to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select `main` branch
5. Click "Run workflow" again
6. Site rebuilds in ~2 minutes with fresh data!

## Schedule Customization

Want to change the update frequency? Edit the cron schedule:

```yaml
# Current: Daily at midnight UTC
- cron: '0 0 * * *'

# Examples:
- cron: '0 */6 * * *'    # Every 6 hours
- cron: '0 0,12 * * *'   # Twice daily (midnight and noon)
- cron: '0 0 * * 1'      # Every Monday at midnight
- cron: '30 8 * * *'     # Daily at 8:30 AM UTC
```

Edit in:
- `.github/workflows/deploy.yml` (line 6)
- `.github/workflows/daily-update.yml` (line 6)

## Monitoring Updates

### Check Last Deployment
```
https://github.com/param20h/param20h.github.io/deployments
```

### Check Workflow Runs
```
https://github.com/param20h/param20h.github.io/actions
```

### View Build Logs
1. Go to Actions tab
2. Click on latest workflow run
3. Expand "Build with Next.js" step
4. See data fetching logs

## Benefits of This Approach

✅ **Always Fresh Data** - Visitors see up-to-date GitHub stats
✅ **No Server Needed** - Pure static hosting (GitHub Pages)
✅ **Super Fast** - Pre-built HTML loads instantly
✅ **Free Hosting** - GitHub Pages is completely free
✅ **Automatic** - Set it and forget it
✅ **Reliable** - GitHub Actions runs consistently
✅ **Cost-Efficient** - No database or API costs

## Troubleshooting

### Data Not Updating?

1. **Check Workflow Runs**
   - Go to Actions tab
   - Look for failed runs (red X)
   - Check error logs

2. **Verify Schedule**
   - Ensure cron syntax is correct
   - Remember: Runs at UTC time, not your local time

3. **Check API Rate Limits**
   - Look for "403" errors in logs
   - Add GitHub token to increase limits

4. **Manual Trigger Test**
   - Manually trigger workflow
   - If it works, schedule is the issue
   - If it fails, check build errors

### Build Failing?

1. **Check Dependencies**
   ```bash
   npm ci
   ```

2. **Test Local Build**
   ```bash
   npm run build
   ```

3. **Verify Environment Variables**
   - EmailJS credentials in workflow file
   - GitHub token in repository secrets

## Cost Analysis

| Component | Cost | Status |
|-----------|------|--------|
| GitHub Pages Hosting | $0 | Free forever |
| GitHub Actions (2,000 min/month) | $0 | Free tier |
| Domain (param20h.github.io) | $0 | Free subdomain |
| EmailJS (200 emails/month) | $0 | Free tier |
| GitHub API (5,000 req/hour) | $0 | Free with token |
| **Total Monthly Cost** | **$0** | **100% Free** |

## Future Enhancements

Want to add more auto-updating data? Here are ideas:

1. **Blog Posts** - Fetch from DEV.to or Medium API
2. **YouTube Stats** - Subscriber count, views
3. **Twitter/X Stats** - Follower count, engagement
4. **NPM Package Stats** - Download counts
5. **Weather Widget** - Current weather for your location
6. **Crypto Prices** - Real-time prices for favorites
7. **Stock Tickers** - Portfolio performance

Each can be added to the build process to fetch fresh data daily!

## Questions?

- Check workflow logs in Actions tab
- Review this documentation
- Inspect component code in `components/sections/GitHubStats.tsx`
- Test manually with "Run workflow" button

---

**Last Updated:** November 18, 2025  
**Auto-Update Status:** ✅ Active  
**Update Frequency:** Daily at 00:00 UTC  
**Next Update:** Check https://github.com/param20h/param20h.github.io/actions
