# 🚀 QUICK START GUIDE

## Langkah 1: Install Dependencies

```bash
npm install
# atau
yarn install
# atau
pnpm install
```

## Langkah 2: Run Development Server

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Buka browser: **http://localhost:3000**

## Langkah 3: Customize Content

### A. Update Personal Data

Edit file-file di `/src/data/`:

1. **`projects.ts`** - Update dengan project Anda
2. **`experience.ts`** - Update experience & education
3. **`techStack.ts`** - Update skills & technologies
4. **`certificates.ts`** - Update certificates

### B. Update Social Media Links

Edit `/src/lib/constants.ts`:

```typescript
export const SOCIAL_MEDIA: SocialMedia[] = [
  { name: 'GitHub', url: 'YOUR_GITHUB_URL', icon: 'FaGithub' },
  { name: 'LinkedIn', url: 'YOUR_LINKEDIN_URL', icon: 'FaLinkedin' },
  { name: 'Instagram', url: 'YOUR_INSTAGRAM_URL', icon: 'FaInstagram' },
  { name: 'Telegram', url: 'YOUR_TELEGRAM_URL', icon: 'FaTelegram' },
  { name: 'Email', url: 'mailto:YOUR_EMAIL', icon: 'FaEnvelope' },
];
```

### C. Add Your Photos

Tambahkan foto ke `/public/images/`:

- `profile.jpg` (9:16 ratio)
- `about-photo.jpg` (9:16 ratio)
- `projects/` folder - screenshots project
- `certificates/` folder - scan certificates

### D. Update Translations (Optional)

Edit translations di `/src/app/[locale]/page.tsx`:

```typescript
const translations = {
  en: { /* English translations */ },
  id: { /* Indonesian translations */ },
  cn: { /* Chinese translations */ },
};
```

## Langkah 4: Build & Test

```bash
# Build for production
npm run build

# Test production build
npm start
```

## Langkah 5: Deploy

### Option A: Vercel (Recommended) ⭐

1. Push code ke GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO
git push -u origin main
```

2. Deploy ke Vercel:
   - Go to https://vercel.com
   - Import GitHub repository
   - Click "Deploy"
   - Done! ✨

### Option B: Netlify

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option C: Docker

```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📝 Important Notes

1. **Node.js Version**: Requires Node.js 18+
2. **Images**: Add all images before deploying
3. **Data**: Update all data files dengan info real Anda
4. **Testing**: Test di berbagai devices (mobile, tablet, desktop)
5. **SEO**: Update metadata di `layout.tsx`

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Three.js Errors
```bash
# Install with legacy peer deps
npm install --legacy-peer-deps
```

## 📚 Documentation

- **README.md** - Complete project overview
- **DEPLOYMENT_GUIDE.md** - Detailed deployment instructions
- **PROJECT_SUMMARY.md** - Full feature documentation

## 🎉 You're All Set!

Sekarang portfolio Anda sudah siap! Customize, test, dan deploy! 🚀

---

**Need Help?** Check dokumentasi lengkap di README.md
