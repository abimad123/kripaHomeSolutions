import React, { useEffect } from 'react';

/**
 * SEO component to handle meta tags dynamically
 * @param {Object} props
 * @param {string} props.title - The title of the page
 * @param {string} props.description - Meta description
 * @param {string} [props.canonical] - Canonical URL override
 */
const SEO = ({ title, description, canonical }) => {
  useEffect(() => {
    // Update Document Title
    document.title = title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Update Canonical Link
    const baseCanonical = "https://kripahomesolutions.abijith.me";
    const currentCanonical = canonical || `${baseCanonical}${window.location.pathname}`;
    
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', currentCanonical);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = "canonical";
      linkCanonical.href = currentCanonical;
      document.head.appendChild(linkCanonical);
    }

    // Update Open Graph tags for better social sharing
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', currentCanonical);

  }, [title, description, canonical]);

  return null; // This component doesn't render anything
};

export default SEO;
