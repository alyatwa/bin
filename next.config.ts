import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'helpful-flame-06c1187733.media.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
};
//@ts-ignore
export default withNextIntl(nextConfig);
