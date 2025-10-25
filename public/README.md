# Public Assets

This folder contains static assets served directly by Next.js.

## Folder Structure

```
public/
├── images/          # Hero banners, page images, backgrounds
├── icons/           # Icon files (SVG, PNG)
├── logos/           # Logo variants and branding assets
└── README.md        # This file
```

## Usage

### Images
Place hero images, page backgrounds, and other visual content here:
```tsx
<Image src="/images/hero.jpg" alt="Hero" width={1200} height={600} />
```

### Icons
Store SVG icons and icon sets:
```tsx
<Image src="/icons/arrow.svg" alt="Arrow" width={24} height={24} />
```

### Logos
Keep logo variations and branding assets:
```tsx
<Image src="/logos/logo-dark.svg" alt="Logo" width={200} height={50} />
```

## Notes
- Files are cached by Next.js. For frequently changing content, use Cloudinary instead.
- Supported formats: PNG, JPG, SVG, WebP, GIF
- Optimize images before uploading for best performance.
