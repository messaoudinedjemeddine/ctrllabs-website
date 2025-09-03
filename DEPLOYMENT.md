# 🚀 Deploying CtrlLabs Website to Vercel

This guide will help you deploy your CtrlLabs website to Vercel with optimal performance and configuration.

## 📋 Prerequisites

- [Vercel Account](https://vercel.com/signup)
- [GitHub Account](https://github.com)
- Your CtrlLabs project pushed to GitHub

## 🚀 Quick Deploy

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import your GitHub repository:**
   - Select your `ctrllabs-website` repository
   - Vercel will auto-detect it's a Vite project
4. **Configure project settings:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. **Click "Deploy"**

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts to configure your project
```

## ⚙️ Configuration

### Environment Variables (Optional)

You can set these in your Vercel project settings:

```bash
VITE_APP_NAME=CtrlLabs
VITE_APP_DESCRIPTION=Digital Control Unlocked | Algerian Digital Agency
VITE_CONTACT_EMAIL=hello@ctrllabs.com
VITE_CONTACT_PHONE=+213 (0) XXX XXX XXX
```

### Custom Domain (Optional)

1. **In Vercel Dashboard:** Go to your project → Settings → Domains
2. **Add your custom domain:** e.g., `ctrllabs.com`
3. **Configure DNS:** Follow Vercel's DNS configuration instructions
4. **SSL Certificate:** Automatically provided by Vercel

## 🔧 Build Configuration

The project is already configured for Vercel deployment:

- **`vercel.json`** - Vercel-specific configuration
- **Build optimization** - Code splitting and minification
- **Security headers** - XSS protection, content type options
- **Caching** - Static assets cached for 1 year
- **SPA routing** - All routes redirect to index.html

## 📱 Performance Features

- **Automatic optimization** - Vercel Edge Network
- **Image optimization** - Automatic WebP conversion
- **Code splitting** - Vendor and UI libraries separated
- **Minification** - Production builds are minified
- **Caching** - Static assets cached globally

## 🔍 Post-Deployment

### 1. Test Your Website
- Navigate through all sections
- Test language switching (English/French)
- Verify contact form functionality
- Check mobile responsiveness

### 2. Performance Monitoring
- Use Vercel Analytics (optional)
- Monitor Core Web Vitals
- Check Lighthouse scores

### 3. SEO Verification
- Verify meta tags are working
- Check Open Graph images
- Test social media sharing

## 🚨 Troubleshooting

### Build Errors
```bash
# Check build locally first
npm run build

# Clear Vercel cache
vercel --force
```

### Routing Issues
- Ensure `vercel.json` is in your project root
- Verify all routes redirect to `index.html`

### Performance Issues
- Check bundle size in Vercel build logs
- Optimize images and assets
- Review code splitting configuration

## 📈 Analytics & Monitoring

### Vercel Analytics (Optional)
1. **Enable in project settings**
2. **Add tracking code** to your app
3. **Monitor performance metrics**

### Google Analytics
1. **Get your GA4 ID**
2. **Add to environment variables**
3. **Implement tracking code**

## 🔄 Continuous Deployment

- **Automatic deployments** on every push to main branch
- **Preview deployments** for pull requests
- **Rollback** to previous versions if needed

## 📞 Support

- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Vercel Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Project Issues:** Check your GitHub repository

---

🎉 **Your CtrlLabs website is now ready for professional deployment on Vercel!**
