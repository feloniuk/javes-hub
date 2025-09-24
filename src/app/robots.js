export default function robots() {
  const allowIndexing = process.env.ALLOW_INDEXING === 'true';

  return {
    rules: [
      {
        userAgent: '*',
        disallow: allowIndexing ? '' : '/',
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}