import React, { useEffect } from 'react';
import { pageTitle } from '../utils/pageTitle';

const SEO = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // Update title
    pageTitle(title);

    // Helper to update or create meta tags
    const setMetaTag = (selector, attribute, value) => {
      if (!value) return;
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('name=')) {
            element.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        } else if (selector.includes('property=')) {
            element.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    if (description) setMetaTag('meta[name="description"]', 'content', description);
    if (keywords) setMetaTag('meta[name="keywords"]', 'content', keywords);
    
    // Open Graph / Facebook
    if (title) setMetaTag('meta[property="og:title"]', 'content', title + " - ThreOmegaCV - Advanced CardiacProtection.");
    if (description) setMetaTag('meta[property="og:description"]', 'content', description);
    if (image) setMetaTag('meta[property="og:image"]', 'content', image);
    if (url) setMetaTag('meta[property="og:url"]', 'content', url);

    // Twitter
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    if (title) setMetaTag('meta[name="twitter:title"]', 'content', title + " - ThreOmegaCV - Advanced CardiacProtection.");
    if (description) setMetaTag('meta[name="twitter:description"]', 'content', description);
    if (image) setMetaTag('meta[name="twitter:image"]', 'content', image);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;
