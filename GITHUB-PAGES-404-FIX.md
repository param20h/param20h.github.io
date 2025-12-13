# 🔧 GitHub Pages 404 Fix Guide

## Common Causes & Solutions

### ✅ Solution 1: Ensure Proper Build Output

The build should create these files in `out/` directory:
- `index.html` (main page)
- `.nojekyll` (to allow `_next` folder)
- `CNAME` (for custom domain)
- `_next/` folder with static assets

**Check locally:**
```bash
npm run build
```

Then verify these files exist:
```bash
ls out/
ls out/_next/
cat out/.nojekyll
cat out/CNAME
```

---

### ✅ Solution 2: GitHub Pages Settings

1. Go to: https://github.com/param20h/param20h.github.io/settings/pages
2. **Source:** Should be "GitHub Actions" (not "Deploy from branch")
3. **Custom domain:** param20h.me
4. **Enforce HTTPS:** Checked

---

### ✅ Solution 3: Check Deployment Status

1. Go to: https://github.com/param20h/param20h.github.io/actions
2. Check if the latest workflow run succeeded
3. Look for any errors in the logs

**Common errors:**
- Build failed → Check build logs
- Upload artifact failed → Check path is `./out`
- Deploy failed → Check permissions

---

### ✅ Solution 4: DNS Configuration

For custom domain `param20h.me`, ensure DNS records are correct:

**A Records (for apex domain):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**OR CNAME (for www subdomain):**
```
www.param20h.me → param20h.github.io
```

Check DNS: https://dnschecker.org/all-dns-records-of-domain.php?query=param20h.me

---

### ✅ Solution 5: Clear Cache & Force Rebuild

```bash
# Delete out folder
rm -rf out

# Delete .next folder
rm -rf .next

# Rebuild
npm run build

# Verify index.html exists
cat out/index.html

# Push to trigger deployment
git add .
git commit -m "Rebuild: Fix 404 error"
git push origin main
```

---

### ✅ Solution 6: Check CNAME File

The CNAME file must be in the `out/` folder after build.

**Fixed in create-export.js:**
```javascript
// Copy CNAME file
const cnameFile = path.join(__dirname, 'CNAME');
if (fs.existsSync(cnameFile)) {
  fs.copyFileSync(cnameFile, path.join(targetDir, 'CNAME'));
}
```

---

### ✅ Solution 7: Verify Workflow Permissions

Check `.github/workflows/deploy.yml` has:
```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

---

## 🧪 Testing Steps

### 1. Test Local Build
```bash
npm run build
cd out
npx serve
```
Then open: http://localhost:3000

### 2. Test GitHub Pages Deployment
After pushing, wait 2-3 minutes, then:
- Check: https://param20h.github.io (should redirect to param20h.me)
- Check: https://param20h.me (should show your site)

### 3. Test Specific Files
- https://param20h.me/ (index.html)
- https://param20h.me/google363700889b36bce9.html
- https://param20h.me/_next/static/ (should not 404)

---

## 🔍 Debugging Commands

### Check if site is deployed:
```bash
curl -I https://param20h.me
```

Expected: `200 OK`

### Check if index.html exists:
```bash
curl https://param20h.me/ | grep "Paramjit Singh"
```

### Check GitHub Pages status:
```bash
curl https://param20h.github.io
```

Should redirect to param20h.me

---

## 🚀 Quick Fix Steps

1. **Rebuild locally:**
   ```bash
   npm run build
   ```

2. **Verify files:**
   ```bash
   ls out/index.html
   ls out/.nojekyll
   ls out/CNAME
   ```

3. **Push changes:**
   ```bash
   git add .
   git commit -m "Fix: Ensure CNAME and .nojekyll in build output"
   git push origin main
   ```

4. **Wait 2-3 minutes** for GitHub Actions

5. **Test:** https://param20h.me

---

## 📊 Current Status Check

Run these commands to verify your setup:

```bash
# Check if out folder exists
ls out/

# Check if index.html has content
wc -l out/index.html

# Check if .nojekyll exists
ls out/.nojekyll

# Check if CNAME is correct
cat out/CNAME
```

Expected output:
```
out/:
index.html .nojekyll CNAME _next/ ...

out/index.html: ~500 lines

out/.nojekyll: (empty file exists)

out/CNAME:
param20h.me
```

---

## ⚠️ If Still Not Working

1. **Disable custom domain temporarily:**
   - Go to Settings → Pages
   - Remove "param20h.me"
   - Save
   - Try: https://param20h.github.io

2. **If param20h.github.io works:**
   - DNS issue with param20h.me
   - Check DNS records
   - Wait for DNS propagation (up to 48 hours)

3. **If param20h.github.io also 404:**
   - Build output issue
   - Check `out/index.html` exists locally
   - Check GitHub Actions logs
   - Verify `path: ./out` in workflow

---

## 📝 Checklist

- [ ] `npm run build` completes without errors
- [ ] `out/index.html` exists and has content
- [ ] `out/.nojekyll` exists
- [ ] `out/CNAME` contains "param20h.me"
- [ ] GitHub Actions workflow succeeds
- [ ] GitHub Pages source is "GitHub Actions"
- [ ] DNS records are correct
- [ ] Wait 2-3 minutes after deployment
- [ ] Clear browser cache / try incognito

---

**Need more help?** Check the GitHub Actions logs at:
https://github.com/param20h/param20h.github.io/actions
