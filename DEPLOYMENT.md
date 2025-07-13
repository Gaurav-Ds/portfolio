# 🚀 Deployment Guide - Python Practice Website

This guide will help you deploy your Python Practice Website to various platforms.

## 📋 Prerequisites

- Python 3.8+ installed
- Git repository set up
- Domain name (optional): `gauravghadge.com`

## 🎯 Deployment Options

### Option 1: Streamlit Cloud (Recommended)

**Best for: Python Code Runner**

1. **Prepare your repository:**
   ```bash
   # Ensure these files are in your repo:
   - code-runner.py
   - requirements.txt
   - README.md
   ```

2. **Deploy to Streamlit Cloud:**
   - Go to [share.streamlit.io](https://share.streamlit.io)
   - Sign in with GitHub
   - Connect your repository
   - Set the main file path: `code-runner.py`
   - Click "Deploy"

3. **Your Streamlit app will be available at:**
   ```
   https://your-app-name.streamlit.app
   ```

### Option 2: Netlify (Static Site)

**Best for: Main website (HTML/CSS/JS)**

1. **Prepare for deployment:**
   ```bash
   # Your static files should include:
   - index.html
   - style.css
   - script.js
   - success.html
   - 404.html
   - favicon.svg
   - sitemap.xml
   - robots.txt
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"
   - Select your repository
   - Set build command: (leave empty for static site)
   - Set publish directory: `/` (root)
   - Click "Deploy site"

3. **Custom domain setup:**
   - In Netlify dashboard, go to "Domain settings"
   - Add custom domain: `gauravghadge.com`
   - Update DNS records with your domain provider

### Option 3: Vercel

**Best for: Static site with serverless functions**

1. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Import your repository
   - Vercel will auto-detect it's a static site
   - Click "Deploy"

2. **Custom domain:**
   - In Vercel dashboard, go to "Settings" → "Domains"
   - Add your custom domain

### Option 4: GitHub Pages

**Best for: Simple static hosting**

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch
   - Click "Save"

2. **Your site will be available at:**
   ```
   https://yourusername.github.io/portfolio
   ```

## 🔧 Configuration Files

### For Streamlit Cloud

**requirements.txt:**
```
streamlit==1.28.1
pandas==2.1.3
numpy==1.24.3
```

**streamlit/config.toml (optional):**
```toml
[theme]
primaryColor = "#00d4ff"
backgroundColor = "#0a0a0a"
secondaryBackgroundColor = "#111111"
textColor = "#ffffff"
```

### For Netlify/Vercel

**netlify.toml (optional):**
```toml
[build]
  publish = "."

[[redirects]]
  from = "/code-runner"
  to = "https://your-streamlit-app.streamlit.app"
  status = 302

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🌐 Domain Configuration

### DNS Settings

If using custom domain `gauravghadge.com`:

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

**For Vercel:**
```
Type: A
Name: @
Value: 76.76.19.19

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## 📱 Environment Variables

### For Streamlit Cloud

Set these in your Streamlit Cloud dashboard:

```
STREAMLIT_SERVER_PORT = 8501
STREAMLIT_SERVER_ADDRESS = 0.0.0.0
```

### For Netlify/Vercel

Set these in your deployment platform:

```
SITE_URL = https://gauravghadge.com
CONTACT_EMAIL = gghadge225@gmail.com
```

## 🔒 Security Considerations

1. **HTTPS**: All platforms provide SSL certificates
2. **CORS**: Configure if needed for API calls
3. **Rate Limiting**: Consider for contact form
4. **Input Validation**: Already implemented in forms

## 📊 Analytics Setup

### Google Analytics

Add to your HTML head:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property: `https://gauravghadge.com`
3. Verify ownership (usually via DNS or HTML tag)
4. Submit your sitemap: `https://gauravghadge.com/sitemap.xml`

## 🚀 Final Deployment Checklist

- [ ] All files committed to Git
- [ ] Requirements.txt updated
- [ ] Sitemap.xml updated with correct URLs
- [ ] Robots.txt configured
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] Analytics tracking working
- [ ] Contact form tested
- [ ] Python code runner working
- [ ] 404 page working
- [ ] Success page working
- [ ] Mobile responsiveness tested
- [ ] SEO meta tags verified

## 🔄 Continuous Deployment

Both Netlify and Vercel offer automatic deployments:

1. **Connect your GitHub repository**
2. **Every push to main branch triggers deployment**
3. **Preview deployments for pull requests**

## 📞 Support

If you encounter issues:

1. Check platform-specific documentation
2. Verify all files are in the correct locations
3. Check browser console for errors
4. Test locally before deploying

## 🎉 Success!

Once deployed, your Python Practice Website will be live at:
- **Main Site**: `https://gauravghadge.com`
- **Python Runner**: `https://your-app-name.streamlit.app`

Your students can now practice Python programming with live code execution! 🐍✨ 