/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/grains', destination: 'http://localhost:3001/grains' },
      { source: '/grains/:path*', destination: 'http://localhost:3001/grains/:path*' },
      { source: '/cosmetics', destination: 'http://localhost:3001/cosmetics' },
      { source: '/cosmetics/:path*', destination: 'http://localhost:3001/cosmetics/:path*' },
    ];
  },
};

export default nextConfig;
