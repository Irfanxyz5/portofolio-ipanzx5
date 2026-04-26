# 🌊 Ipanzx Portfolio - Ocean Tech Wave

Modern, interactive portfolio website for a Full Stack & Web3 Developer featuring cutting-edge animations, 3D graphics, and seamless user experience.

## ✨ Features

### 🎨 Unique Design
- **Ocean Tech Wave Theme** - Dark ocean gradient with cyan/teal accents
- **Glassmorphism & Neumorphism** - Modern UI elements
- **Smooth Animations** - Framer Motion + GSAP integration
- **3D Interactive Photo** - Three.js hanging card effect
- **Wave Loading Screen** - Water rising animation in text

### 🚀 Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **3D Graphics**: Three.js + React Three Fiber
- **Internationalization**: Multi-language (EN, ID, CN)
- **Icons**: React Icons + Lucide React

### 📱 Sections
1. **Loading Screen** - Wave animation inside "Ipanzx" text
2. **Hero Section** - 3D interactive photo card, social media links
3. **About Section** - Photo with floating skill bubbles
4. **Experience Timeline** - Visual journey with cards
5. **Portfolio Tabs** - Tech Stack, Projects, Certificates
6. **Contact Section** - Social media grid with rounded design

### ⚡ Performance
- Server-Side Rendering (SSR)
- Image Optimization
- Code Splitting
- Lazy Loading
- Responsive Design
- SEO Optimized

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Setup Steps

1. **Clone Repository**
```bash
git clone https://github.com/ipanzx/portfolio.git
cd portfolio
```

2. **Install Dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run Development Server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open Browser**
```
http://localhost:3000
```

## 📂 Project Structure

```
ipanzx-portfolio/
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx          # Root layout
│   │       ├── page.tsx            # Main page
│   │       └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx          # Navigation with i18n
│   │   ├── sections/
│   │   │   ├── LoadingScreen.tsx   # Wave loading animation
│   │   │   ├── HeroSection.tsx     # Hero with 3D photo
│   │   │   ├── AboutSection.tsx    # About with bubbles
│   │   │   ├── ExperienceSection.tsx # Timeline
│   │   │   ├── PortfolioSection.tsx  # Tabs container
│   │   │   └── ContactSection.tsx    # Social media grid
│   │   ├── portfolio/
│   │   │   ├── TechStack.tsx       # Tech stack grid
│   │   │   ├── ProjectCard.tsx     # Project cards
│   │   │   └── CertificateGallery.tsx # Certificates with modal
│   │   └── three/
│   │       └── PhotoCard3D.tsx     # 3D hanging photo
│   ├── data/
│   │   ├── projects.ts             # Projects data
│   │   ├── experience.ts           # Experience data
│   │   ├── techStack.ts            # Tech stack data
│   │   └── certificates.ts         # Certificates data
│   ├── lib/
│   │   ├── utils.ts                # Utility functions
│   │   └── constants.ts            # Constants
│   └── types/
│       └── index.ts                # TypeScript types
├── public/
│   └── images/                     # Images (add your photos here)
├── tailwind.config.ts              # Tailwind configuration
├── next.config.js                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
└── package.json
```

## 🎨 Customization

### 1. Personal Information
Edit `/src/data/` files:
- `projects.ts` - Add your projects
- `experience.ts` - Update your experience
- `techStack.ts` - Modify your skills
- `certificates.ts` - Add certificates

### 2. Images
Add your images to `/public/images/`:
- `profile.jpg` - Hero section photo (9:16 ratio)
- `about-photo.jpg` - About section photo (9:16 ratio)
- `projects/` - Project screenshots
- `certificates/` - Certificate images

### 3. Social Media
Update `/src/lib/constants.ts`:
```typescript
export const SOCIAL_MEDIA = [
  { name: 'GitHub', url: 'YOUR_GITHUB_URL', icon: 'FaGithub' },
  // ... update URLs
];
```

### 4. Colors
Modify `/tailwind.config.ts` to change color scheme:
```typescript
colors: {
  ocean: {
    // Customize ocean theme colors
  }
}
```

### 5. Translations
Edit translations in `/src/app/[locale]/page.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your repository
- Vercel will auto-detect Next.js
- Click "Deploy"

3. **Custom Domain** (Optional)
- Go to Project Settings > Domains
- Add your custom domain

### Netlify

```bash
npm run build
# Upload .next/ folder to Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance Optimization

### Images
- Use WebP format
- Optimize with next/image
- Lazy load off-screen images

### Fonts
- Use next/font for optimization
- Preload critical fonts

### Code Splitting
- Dynamic imports for heavy components
- Route-based splitting (automatic)

### Caching
- Configure Cache-Control headers
- Use ISR for static content

## 🔧 Troubleshooting

### Three.js Issues
```bash
npm install --legacy-peer-deps
```

### Build Errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript Errors
```bash
npm run lint
```

## 📝 Best Practices

1. **SEO**
   - Add meta tags in layout.tsx
   - Use semantic HTML
   - Optimize images with alt text

2. **Accessibility**
   - Use ARIA labels
   - Keyboard navigation
   - Screen reader support

3. **Performance**
   - Minimize bundle size
   - Use code splitting
   - Optimize images

4. **Security**
   - Sanitize user inputs
   - Use HTTPS
   - Implement CSP headers

## 🎯 Future Enhancements

- [ ] Blog section with MDX
- [ ] Admin panel for content management
- [ ] Dark/Light mode toggle
- [ ] More interactive 3D elements
- [ ] Analytics integration
- [ ] Contact form with email service
- [ ] Progressive Web App (PWA)
- [ ] Advanced animations with GSAP ScrollTrigger

## 📄 License

MIT License - feel free to use this portfolio as a template!

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📧 Contact

- **Email**: contact@ipanzx.com
- **GitHub**: [@ipanzx](https://github.com/ipanzx)
- **LinkedIn**: [ipanzx](https://linkedin.com/in/ipanzx)

---

**Built with ❤️ using Next.js, TypeScript, Three.js & Tailwind CSS**
