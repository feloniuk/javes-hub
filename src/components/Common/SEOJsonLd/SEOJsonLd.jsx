import { WebPageJsonLd } from 'next-seo';

const SEOJsonLd = ({ description, id }) => {
  return (
    <WebPageJsonLd
      useAppDir={true}
      description={description}
      id={id}
      lastReviewed='2024-05-22T08:00:00+08:00'
      reviewedBy={{
        type: 'Organization',
        name: 'Javes',
      }}
    />
  );
};

export default SEOJsonLd