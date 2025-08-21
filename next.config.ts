import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // disable esline
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
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
