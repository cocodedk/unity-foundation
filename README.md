# Unity Foundation Website

A modern, multilingual NGO website built with Next.js, supporting children, people with disabilities, and people experiencing poverty.

## Features

- 🌍 **Multilingual**: Full support for English, Danish, and Persian (RTL)
- 🎨 **Modern UI**: Clean design with Tailwind CSS
- 📝 **Admin Panel**: Simple CMS for managing posts and announcements
- 💳 **MobilePay Integration**: Dynamic donation banner with monthly box numbers
- 🖼️ **Cloudinary Integration**: Image hosting and optimization
- 🔒 **Secure Authentication**: NextAuth with role-based access
- 📱 **Fully Responsive**: Mobile-first design
- ♿ **Accessible**: WCAG 2.1 AA compliant
- 🚀 **SEO Optimized**: Sitemap, metadata, and structured data

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Image Storage**: Cloudinary
- **Internationalization**: next-intl
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Cloudinary account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/unity-foundation.git
cd unity-foundation
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your actual values.

4. Initialize the database:
```bash
npm run prisma:migrate
npm run prisma:generate
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
unity-foundation/
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Localized public pages
│   ├── admin/             # Admin panel
│   └── api/               # API routes
├── components/            # React components
│   ├── ui/               # UI primitives
│   └── ...               # Feature components
├── lib/                   # Utilities and configurations
├── messages/             # Translation files
├── prisma/               # Database schema
└── public/               # Static assets
```

## Admin Panel

Access the admin panel at `/admin/login`.

Default features:
- Create, edit, and publish posts
- Manage donation banner and MobilePay number
- Upload images to Cloudinary
- Multi-language content management

### Creating the First Admin User

Use Prisma Studio or SQL to create the first admin user:

```bash
npx prisma studio
```

Then create a user with role `ADMIN`. Hash the password using bcrypt before storing.

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production

Ensure these are set in your production environment:
- `DATABASE_URL`
- `CLOUDINARY_*` credentials
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `NEXT_PUBLIC_BASE_URL`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run prisma:migrate` - Run database migrations
- `npm run prisma:generate` - Generate Prisma client
- `npm run test:e2e` - Run E2E tests with Playwright

## Contributing

This is a private project for Unity Foundation. For questions, contact the administrator.

## Credits

**Founder**: Mandana Zaboli
**Administrator**: cocode.dk / Babak Bandpey

## License

All rights reserved © Unity Foundation
