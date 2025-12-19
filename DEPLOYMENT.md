# Deployment Guide - gauravghadge.com

This guide covers deploying the React portfolio to production with custom domain `gauravghadge.com`.

## 📋 Prerequisites

1. **Node.js 18+** installed
2. **GitHub account** with repository access
3. **Domain:** `gauravghadge.com` configured

## 🛠️ Build Process

### 1. Install Dependencies

```bash
npm install
```

### 2. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### 3. Test Build Locally (Optional)

```bash
npm run preview
```

Visit `http://localhost:4173` to preview the production build before deploying.

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Best for:** Automatic deployments, custom domains, zero configuration

#### Method 1: GitHub Integration (Recommended)

1. **Push code to GitHub:**
   ```bash
   git add .
   git commit -m "Replace old portfolio with new React AI portfolio"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"
   - Your site will be live in ~30 seconds

3. **Add Custom Domain:**
   - Go to Project Settings → Domains
   - Add `gauravghadge.com`
   - Add `www.gauravghadge.com` (optional)
   - Follow DNS instructions:
     - Add A record: `@` → Vercel IP (shown in dashboard)
     - Add CNAME: `www` → `cname.vercel-dns.com`
   - Wait for DNS propagation (5-60 minutes)
   - SSL certificate is automatically provisioned

**Advantages:**
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Auto-deploy on every git push
- ✅ Zero configuration needed
- ✅ Global CDN
- ✅ Preview deployments for PRs

#### Method 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Then add domain in Vercel dashboard.

---

### Option 2: GitHub Pages

**Best for:** Free hosting, simple setup

#### Setup Steps:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`:**
   Add these scripts:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.js`:**
   ```js
   export default defineConfig({
     base: '/',
     // ... rest of config
   })
   ```

4. **Add CNAME file:**
   The `CNAME` file is already in the root. For GitHub Pages, it should be in `public/` folder:
   ```bash
   # Copy CNAME to public folder (Vite will include it in dist/)
   cp CNAME public/CNAME
   ```

5. **Deploy:**
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: `gh-pages` branch
   - Custom domain: `gauravghadge.com`
   - Save

7. **Configure DNS:**
   - Add CNAME record: `gauravghadge.com` → `yourusername.github.io`
   - Add CNAME record: `www.gauravghadge.com` → `yourusername.github.io`
   - Wait for DNS propagation

**Note:** GitHub Pages doesn't support SPA routing by default. You may need a 404.html redirect for client-side routing.

---

### Option 3: Netlify

**Best for:** Drag & drop simplicity, form handling

#### Method 1: GitHub Integration

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Connect GitHub, select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"
7. Add custom domain in Site Settings → Domain Management

#### Method 2: Netlify CLI

```bash
npm i -g netlify-cli
netlify deploy --prod
```

---

## 🔧 Post-Deployment Checklist

After deploying, verify:

- [ ] Site loads at `https://gauravghadge.com`
- [ ] All pages load correctly (Home, About, Skills, Projects, Services, Solutions, Contact)
- [ ] Client-side routing works (no 404s on refresh)
- [ ] Contact form works (if connected to backend)
- [ ] WhatsApp button has correct number
- [ ] Resume downloads work (`/assets/resume.pdf`)
- [ ] All images load correctly
- [ ] Mobile responsiveness works
- [ ] SEO meta tags are correct
- [ ] Google Analytics is tracking (if configured)
- [ ] No console errors
- [ ] HTTPS is enabled
- [ ] Custom domain is active

---

## 🌐 Custom Domain Configuration

### DNS Records for gauravghadge.com

#### For Vercel:
```
Type: A
Name: @
Value: [Vercel IP from dashboard]

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### For GitHub Pages:
```
Type: CNAME
Name: @
Value: yourusername.github.io

Type: CNAME
Name: www
Value: yourusername.github.io
```

#### For Netlify:
```
Type: A
Name: @
Value: [Netlify IP]

Type: CNAME
Name: www
Value: yoursite.netlify.app
```

**DNS Propagation:** Can take 5 minutes to 48 hours. Usually completes within 1 hour.

---

## 🔄 Continuous Deployment

### Vercel / Netlify
- Automatically deploys on every `git push` to `main` branch
- Creates preview deployments for pull requests
- No manual steps needed

### GitHub Pages
- Run `npm run deploy` after each update
- Or set up GitHub Actions for automatic deployment

---

## 🐛 Troubleshooting

### Build Fails
- Check Node.js version: `node --version` (should be 18+)
- Delete `node_modules` and `package-lock.json`, then `npm install`
- Check for syntax errors in console

### 404 Errors on Page Refresh
- **Vercel:** Automatically handled
- **Netlify:** Add `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```
- **GitHub Pages:** Add `404.html` that redirects to `index.html`

### Assets Not Loading
- Ensure files are in `public/` folder (not `src/`)
- Use absolute paths: `/assets/resume.pdf` (not `./assets/resume.pdf`)
- Check browser console for 404 errors

### Domain Not Working
- Verify DNS records are correct
- Wait for DNS propagation (can take up to 48 hours)
- Check domain status in hosting provider dashboard
- Ensure SSL certificate is provisioned

### Slow Loading
- Enable compression on server (usually automatic)
- Optimize images before adding to project
- Check network tab in browser DevTools

---

## 📝 Environment Variables (If Needed)

If you need environment variables:

1. **Create `.env` file:**
   ```
   VITE_API_URL=https://api.example.com
   VITE_ANALYTICS_ID=G-XXXXXXXXXX
   ```

2. **Access in code:**
   ```js
   import.meta.env.VITE_API_URL
   ```

3. **Add to `.gitignore`:**
   ```
   .env
   .env.local
   ```

4. **Add to Vercel/Netlify:**
   - Go to Project Settings → Environment Variables
   - Add variables there (don't commit `.env` files)

---

## 📞 Support

For deployment issues:
- Email: gghadge225@gmail.com
- Check hosting provider documentation
- Review build logs in hosting dashboard

---

**Last Updated:** 2025-01-13
**Domain:** gauravghadge.com
**Framework:** React + Vite
