/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['gsap'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'adm.mmonster.co',
      },
    ],
  },
};

export default nextConfig;
