import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/onepage-landing',
        permanent: false,
      },
    ];
  },
};
export default nextConfig;
