# 🚀 Deployment Guide - Ipanzx Portfolio

## Pre-Deployment Checklist

### ✅ Required Files to Replace
1. **Images** (`/public/images/`)
   - `profile.jpg` - Your profile photo (recommended: 1080x1920px, 9:16 ratio)
   - `about-photo.jpg` - About section photo (same ratio)
   - `projects/*` - Project screenshots (recommended: 1920x1080px)
   - `certificates/*` - Certificate images (actual certificate size)

2. **Data Files** (`/src/data/`)
   - Update all data with your actual information
   - Add real GitHub/live URLs to projects
   - Add your actual social media links

3. **Environment Variables** (if needed)
   - Create `.env.local` for API keys
   - Add to Vercel/Netlify environment settings

### 🔑 Configuration Changes

**1. Update Package.json**
```json
{
  "name": "your-portfolio-name",
  "version": "1.0.0",
  "description": "Your description"
}
```

**2. Update Social Links** (`/src/lib/constants.ts`)
```typescript
export const SOCIAL_MEDIA: SocialMedia[] = [
  { name: 'GitHub', url: 'https://github.com/YOUR_USERNAME', icon: 'FaGithub' },
  // ... update all URLs
];
```

**3. Update Metadata** (`/src/app/[locale]/layout.tsx`)
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Full Stack & Web3 Developer',
  description: 'Your description',
  // ... update all metadata
};
```

## 📦 Build Process

### Local Build Test
```bash
# Install dependencies
npm install

# Run build
npm run build

# Test production build locally
npm start

# Check for errors
npm run lint
```

### Build Optimization
```bash
# Analyze bundle size
npm run build -- --profile
npx @next/bundle-analyzer
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Automatic Next.js optimization
- Zero configuration
- Global CDN
- Automatic HTTPS
- Preview deployments
- Built-in analytics

**Steps:**

1. **Connect Repository**
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

2. **Import to Vercel**
- Go to https://vercel.com/new
- Click "Import Git Repository"
- Select your repository
- Click "Deploy"

3. **Environment Variables** (if needed)
- Go to Project Settings
- Environment Variables tab
- Add variables (e.g., API keys)

4. **Custom Domain**
- Go to Project Settings > Domains
- Add your domain
- Update DNS records (provided by Vercel)

**Vercel Configuration** (`vercel.json`)
```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["sfo1"],
  "env": {
    "NODE_ENV": "production"
  }
}
```

### Option 2: Netlify

**Steps:**

1. **Create `netlify.toml`**
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. **Deploy**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

3. **Configure**
- Build command: `npm run build`
- Publish directory: `.next`

### Option 3: Railway

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize
railway init

# Deploy
railway up
```

**railway.json**
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

### Option 4: AWS (Advanced)

**Using AWS Amplify:**
```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Configure
amplify configure

# Initialize
amplify init

# Add hosting
amplify add hosting

# Publish
amplify publish
```

### Option 5: Docker + VPS

**Dockerfile**
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

**Deploy:**
```bash
# Build image
docker build -t ipanzx-portfolio .

# Run container
docker run -p 3000:3000 ipanzx-portfolio

# Or use docker-compose
docker-compose up -d
```

**docker-compose.yml**
```yaml
version: '3.8'
services:
  portfolio:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

## 🔧 Post-Deployment

### 1. Verify Deployment
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Animations work smoothly
- [ ] Responsive on all devices
- [ ] All links work
- [ ] SEO meta tags present

### 2. Performance Testing
```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun --config=lighthouserc.js
```

**lighthouserc.js**
```javascript
module.exports = {
  ci: {
    collect: {
      url: ['https://your-domain.com'],
      numberOfRuns: 3,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

### 3. Monitor Performance
- Google Analytics
- Vercel Analytics
- Sentry for error tracking

### 4. SEO Optimization
- Submit sitemap to Google Search Console
- Add robots.txt
- Configure Open Graph images
- Test with social media previews

## 🛡️ Security Best Practices

### Headers Configuration
**next.config.js**
```javascript
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ]
  }
}
```

## 📊 Analytics Setup

### Google Analytics
```typescript
// src/lib/analytics.ts
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export const pageview = (url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}
```

### Vercel Analytics
```bash
npm install @vercel/analytics
```

```typescript
// src/app/[locale]/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## 🔄 CI/CD Pipeline

### GitHub Actions
**.github/workflows/deploy.yml**
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
```

## 🐛 Troubleshooting

### Common Issues

**1. Build Fails**
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

**2. Images Not Loading**
- Check image paths
- Verify image optimization config
- Check file permissions

**3. 3D Graphics Not Working**
```bash
# Install Three.js dependencies
npm install three @react-three/fiber @react-three/drei --legacy-peer-deps
```

**4. Slow Performance**
- Enable image optimization
- Use code splitting
- Implement lazy loading
- Check bundle size

## 📞 Support

If you encounter issues:
1. Check Next.js documentation
2. Review error logs in deployment platform
3. Test locally first
4. Check browser console for errors

---

**Happy Deploying! 🚀**
