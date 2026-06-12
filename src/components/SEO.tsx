import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
}

const SEO = ({
  title = 'Fraylon Technologies | Engineering the Future',
  description = 'Fraylon Technologies is a global leader in next-generation digital services and consulting. We engineer the future through AI, engineering strategy, and digital evolution.',
  keywords = 'IT services, software development, AI integration, digital transformation, consulting, technology solutions, Fraylon Technologies, Hyderabad IT company, Web Development, UI/UX',
  image = 'https://fraylontech.com/logo.png',
  url,
  type = 'website',
  noindex = false
}: SEOProps) => {
  const location = useLocation();
  const canonicalUrl = url || `https://fraylontech.com${location.pathname === '/' ? '' : location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Robots Meta Tag for noindex */}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEO;
