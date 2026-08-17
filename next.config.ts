import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/user/onepage-landing',
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
