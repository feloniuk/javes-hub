/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'adm.mmonster.co',
          port: '',
          pathname: '/uploads/**',
        },
        {
          protocol: 'https',
          hostname: 'dev2-store.mmonster.co',
          port: '',
          pathname: '/media/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig