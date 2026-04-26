# 📸 Images Folder

## Required Images

Tambahkan foto-foto Anda ke folder ini:

### 1. Profile Photos
- `profile.jpg` - Foto untuk Hero section (Recommended: 1080x1920px, ratio 9:16)
- `about-photo.jpg` - Foto untuk About section (Recommended: 1080x1920px, ratio 9:16)

### 2. Project Screenshots (`/projects/`)
Tambahkan screenshot project Anda:
- `defi-platform.jpg`
- `nft-marketplace.jpg`
- `cms-dashboard.jpg`
- `ecommerce.jpg`
- `chat-app.jpg`
- `blockchain-explorer.jpg`

**Recommended size**: 1920x1080px (16:9 ratio)

### 3. Certificates (`/certificates/`)
Tambahkan scan/foto certificate Anda:
- `blockchain-developer.jpg`
- `aws-architect.jpg`
- `react-advanced.jpg`
- `fullstack-dev.jpg`
- `typescript-pro.jpg`
- `solidity-dev.jpg`

**Note**: Gunakan ukuran asli certificate untuk kualitas terbaik

## Image Optimization Tips

1. **Format**: Gunakan WebP untuk ukuran lebih kecil
2. **Compression**: Compress dengan tools seperti TinyPNG
3. **Size**: Jangan upload gambar > 2MB
4. **Naming**: Gunakan kebab-case (lowercase dengan dash)

## Quick Setup

```bash
# Struktur folder:
public/
└── images/
    ├── profile.jpg
    ├── about-photo.jpg
    ├── projects/
    │   ├── project-1.jpg
    │   ├── project-2.jpg
    │   └── ...
    └── certificates/
        ├── cert-1.jpg
        ├── cert-2.jpg
        └── ...
```

**Setelah menambahkan images, update path di `/src/data/` files!**
