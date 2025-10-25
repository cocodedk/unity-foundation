import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin(
  // This is the default, but you can change it if your config is elsewhere
  './i18n.ts'
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typedRoutes: false,
  outputFileTracingRoot: '/home/bba/0-projects/unity-foundation',
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'res.cloudinary.com'},
      {protocol: 'https', hostname: 'images.unsplash.com'}
    ]
  }
};

export default withNextIntl(nextConfig);
