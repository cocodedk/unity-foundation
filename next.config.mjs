import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  // This is the default, but you can change it if your config is elsewhere
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    typedRoutes: true
  },
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'res.cloudinary.com'},
      {protocol: 'https', hostname: 'images.unsplash.com'}
    ]
  }
};

export default withNextIntl(nextConfig);
