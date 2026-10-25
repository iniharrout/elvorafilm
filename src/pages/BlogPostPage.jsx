import React, { useState } from "react";
import { BLOG_POSTS } from "../data/blogData";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import SeoMeta from "../components/SeoMeta";
import { 
  Calendar, 
  Clock, 
  ChevronLeft, 
  Share2, 
  MessageCircle, 
  Check, 
  ChevronDown, 
  ArrowRight,
  User,
  Sparkles
} from "lucide-react";

export default function BlogPostPage({ slug, onNavigate, onSelectPost, onOpenInquiry }) {
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDescription,
        "image": "https://www.elvorafilm.com/assets/images/hero/hero-main.jpg",
        "datePublished": post.publishedDate,
        "dateModified": post.updatedDate,
        "author": {
          "@type": "Organization",
          "name": post.author,
          "url": "https://www.elvorafilm.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Elvora Film",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.elvorafilm.com/assets/images/elvora-emblem.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.elvorafilm.com/#blog/${post.slug}`
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.elvorafilm.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Journal",
            "item": "https://www.elvorafilm.com/#blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://www.elvorafilm.com/#blog/${post.slug}`
          }
        ]
      },
      ...(post.faqs && post.faqs.length
        ? [
            {
              "@type": "FAQPage",
              "mainEntity": post.faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a
                }
              }))
            }
          ]
        : [])
    ]
  };

  return (
    <main style={{ backgroundColor: "#FAF7F2", color: "#181614", paddingTop: "5.5rem" }}>
      <SeoMeta
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        canonicalUrl={`https://www.elvorafilm.com/#blog/${post.slug}`}
        schemaJson={articleSchema}
      />

      {/* Header Container */}
      <article>
        <header
          style={{
            backgroundColor: "#0C0C0E",
            color: "#FAF7F2",
            padding: "clamp(3.5rem, 6vw, 5.5rem) 1.5rem 3rem 1.5rem"
          }}
        >
          <div className="container" style={{ maxWidth: "860px" }}>
            {/* Back button & Breadcrumb */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "2rem",
                flexWrap: "wrap",
                gap: "1rem"
              }}
            >
              <button
                onClick={() => onNavigate("blog")}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-gold-light)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  padding: 0
                }}
              >
                <ChevronLeft size={16} />
                <span>Back to Journal</span>
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: "0.8rem", fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.6)" }}>
                <span
                  style={{
                    backgroundColor: "rgba(197, 160, 89, 0.2)",
                    color: "var(--color-gold-light)",
                    padding: "0.2rem 0.65rem",
                    borderRadius: "12px",
                    fontWeight: 600
                  }}
                >
                  {post.category}
                </span>
                <span>•</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </div>

            {/* Post Title */}
            <h1
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.1rem, 4.5vw, 3.6rem)",
                fontWeight: 300,
                lineHeight: 1.18,
                marginBottom: "1.2rem",
                color: "#FFFFFF"
              }}
            >
              {post.title}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                color: "var(--color-gold-light)",
                lineHeight: 1.5,
                marginBottom: "2rem"
              }}
            >
              {post.subtitle}
            </p>

            {/* Meta Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.12)",
                flexWrap: "wrap",
                gap: "1rem",
                fontSize: "0.85rem",
                color: "rgba(255, 255, 255, 0.75)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <User size={16} color="var(--color-gold)" />
                <span>By {post.author}</span>
                <span>•</span>
                <span>Updated: {post.updatedDate}</span>
              </div>

              {/* Share buttons */}
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — Read on Elvora Film: ${window.location.href}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "#FAF7F2",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "4px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.8rem",
                    textDecoration: "none"
                  }}
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle size={14} color="#25D366" />
                  <span>Share</span>
                </a>

                <button
                  onClick={handleCopyLink}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    color: "#FAF7F2",
                    border: "none",
                    padding: "0.35rem 0.75rem",
                    borderRadius: "4px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    fontSize: "0.8rem",
                    cursor: "pointer"
                  }}
                >
                  {copied ? <Check size={14} color="var(--color-gold)" /> : <Share2 size={14} />}
                  <span>{copied ? "Link Copied" : "Copy Link"}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div style={{ padding: "clamp(3.5rem, 6vw, 5rem) 1.5rem" }}>
          <div className="container" style={{ maxWidth: "820px" }}>
            {/* Lead Excerpt */}
            <div
              style={{
                fontSize: "1.25rem",
                fontFamily: "var(--font-serif)",
                lineHeight: 1.75,
                color: "#2C2825",
                marginBottom: "3rem",
                paddingLeft: "1.5rem",
                borderLeft: "3px solid var(--color-gold)"
              }}
            >
              {post.excerpt}
            </div>

            {/* Content Sections */}
            {post.contentSections.map((sec, idx) => (
              <section key={idx} style={{ marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.75rem, 3vw, 2.3rem)",
                    fontWeight: 400,
                    lineHeight: 1.25,
                    color: "#181614",
                    marginBottom: "1.2rem"
                  }}
                >
                  {sec.heading}
                </h2>

                <p style={{ fontSize: "1.06rem", lineHeight: 1.85, color: "#3B3733", marginBottom: "1.5rem" }}>
                  {sec.text}
                </p>

                {sec.bulletPoints && (
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 1.5rem 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.85rem"
                    }}
                  >
                    {sec.bulletPoints.map((bp, bidx) => (
                      <li
                        key={bidx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          fontSize: "1rem",
                          lineHeight: 1.65,
                          color: "#4A453F"
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: "var(--color-gold)",
                            marginTop: "9px",
                            flexShrink: 0
                          }}
                        />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {sec.callout && (
                  <div
                    style={{
                      backgroundColor: "#F3EFE8",
                      padding: "1.5rem 1.8rem",
                      borderRadius: "8px",
                      borderLeft: "4px solid var(--color-gold)",
                      fontSize: "0.98rem",
                      lineHeight: 1.7,
                      color: "#3A3530",
                      fontStyle: "italic",
                      marginTop: "1.5rem"
                    }}
                  >
                    {sec.callout}
                  </div>
                )}
              </section>
            ))}

            {/* In-Article FAQs if available */}
            {post.faqs && post.faqs.length > 0 && (
              <section
                style={{
                  marginTop: "4rem",
                  paddingTop: "3rem",
                  borderTop: "1px solid rgba(0, 0, 0, 0.1)"
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.9rem",
                    marginBottom: "1.5rem",
                    color: "#181614"
                  }}
                >
                  Frequently Asked Questions
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  {post.faqs.map((f, fidx) => {
                    const isOpen = openFaqIndex === fidx;
                    return (
                      <div
                        key={fidx}
                        style={{
                          backgroundColor: "#FFFFFF",
                          borderRadius: "8px",
                          border: "1px solid rgba(0, 0, 0, 0.08)",
                          overflow: "hidden"
                        }}
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : fidx)}
                          style={{
                            width: "100%",
                            padding: "1.25rem 1.5rem",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            background: "none",
                            border: "none",
                            textAlign: "left",
                            cursor: "pointer",
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "#181614"
                          }}
                        >
                          <span>{f.q}</span>
                          <ChevronDown
                            size={18}
                            color="var(--color-gold)"
                            style={{
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.2s"
                            }}
                          />
                        </button>
                        {isOpen && (
                          <div
                            style={{
                              padding: "0 1.5rem 1.25rem 1.5rem",
                              fontSize: "0.93rem",
                              lineHeight: 1.7,
                              color: "#5B554D"
                            }}
                          >
                            {f.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Author Box */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                padding: "2rem",
                marginTop: "4rem",
                border: "1px solid rgba(197, 160, 89, 0.3)",
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                alignItems: "center"
              }}
            >
              <img
                src="/assets/images/elvora-emblem.png"
                alt="Elvora Film Monogram"
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />
              <div style={{ flex: 1, minWidth: "240px" }}>
                <h4 style={{ margin: "0 0 0.3rem 0", fontSize: "1.1rem", fontWeight: 600 }}>
                  Published by {post.author}
                </h4>
                <p style={{ margin: 0, fontSize: "0.88rem", color: "#666057", lineHeight: 1.6 }}>
                  Based in Bhubaneswar, Odisha, Elvora Film is an editorial wedding cinematography and fine-art photography studio dedicated to authentic emotional storytelling.
                </p>
              </div>
            </div>

            {/* Call to Action Box */}
            <div
              style={{
                backgroundColor: "#0C0C0E",
                color: "#FAF7F2",
                borderRadius: "12px",
                padding: "3rem 2rem",
                marginTop: "3.5rem",
                textAlign: "center"
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.75rem"
                }}
              >
                PLANNING YOUR WEDDING?
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                  fontWeight: 300,
                  marginBottom: "1rem"
                }}
              >
                Let Us Preserve Your Once-in-a-Lifetime Celebration
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  maxWidth: "550px",
                  margin: "0 auto 2rem auto",
                  lineHeight: 1.65
                }}
              >
                We accept a strictly limited number of weddings each year to ensure every film and album receives artisan care.
              </p>
              <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
                <button
                  onClick={() => onOpenInquiry("", post.title)}
                  className="btn btn-gold"
                  style={{ padding: "0.9rem 2rem" }}
                >
                  Check Your Date's Availability
                </button>
                <a
                  href={getWhatsAppLink(`Hi Elvora Film, I was reading your guide on "${post.title}" and would like to talk about our wedding plans.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ borderColor: "rgba(255, 255, 255, 0.25)", color: "#FFF", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <MessageCircle size={16} color="var(--color-gold)" />
                  <span>WhatsApp Studio</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section style={{ backgroundColor: "#F3EFE8", padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.9rem",
              textAlign: "center",
              marginBottom: "2.5rem"
            }}
          >
            More Helpful Guides from The Journal
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem"
            }}
          >
            {relatedPosts.map((rel) => (
              <div
                key={rel.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "1.8rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-gold-dark)", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
                    {rel.category}
                  </span>
                  <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: 500, margin: "0 0 0.8rem 0" }}>
                    {rel.title}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "#666", lineHeight: 1.6, margin: 0 }}>
                    {rel.excerpt.slice(0, 110)}...
                  </p>
                </div>
                <button
                  onClick={() => onSelectPost(rel.slug)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--color-gold-dark)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    marginTop: "1.5rem",
                    padding: 0
                  }}
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
