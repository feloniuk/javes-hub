/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '146.190.27.157'],
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