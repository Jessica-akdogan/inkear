import React from 'react';
import { Helmet } from 'react-helmet-async';


interface SEOProps {
    title: string;
    description: string;
    name: string;
    type: string;
  }
  
  const Seo: React.FC<SEOProps> = ({ title, description, name, type }) => {
    return (
      <Helmet>
        {/* Standard metadata tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        
        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
  
        {/* Twitter Meta Tags */}
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content={type} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>
    );
  };

  
export default Seo;