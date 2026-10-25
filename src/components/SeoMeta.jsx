import { useEffect } from "react";

/**
 * SeoMeta dynamically updates document title, meta tags, and injects Schema.org JSON-LD
 * into the document head for maximum Google indexing efficiency.
 */
export default function SeoMeta({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = "https://www.elvorafilm.com/assets/images/hero/hero-main.jpg",
  ogType = "website",
  schemaJson = null
}) {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // Helper to set or create meta tag
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // 2. Primary Meta Tags
    setMetaTag("name", "description", description);
    if (keywords && keywords.length) {
      const kwString = Array.isArray(keywords) ? keywords.join(", ") : keywords;
      setMetaTag("name", "keywords", kwString);
    }
    setMetaTag("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

    // 3. Canonical URL
    const fullCanonical = canonicalUrl || window.location.href.split("#")[0];
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", fullCanonical);

    // 4. OpenGraph
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:url", fullCanonical);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:site_name", "Elvora Film");

    // 5. Twitter Card
    setMetaTag("property", "twitter:card", "summary_large_image");
    setMetaTag("property", "twitter:title", title);
    setMetaTag("property", "twitter:description", description);
    setMetaTag("property", "twitter:image", ogImage);

    // 6. Structured Data (JSON-LD)
    const scriptId = "dynamic-seo-schema";
    let schemaScript = document.getElementById(scriptId);

    if (schemaJson) {
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = scriptId;
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaJson);
    } else if (schemaScript) {
      schemaScript.remove();
    }

    return () => {
      // Optional cleanup on unmount if needed
    };
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaJson]);

  return null;
}
