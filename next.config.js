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
      ],
    },
  }
  
  module.exports = nextConfig