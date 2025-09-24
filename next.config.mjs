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
  // Оптимизации для сборки
  experimental: {
    workerThreads: false,
    cpus: 1
  },
  // Отключаем некоторые оптимизации для экономии памяти
  swcMinify: false,
};

export default nextConfig;