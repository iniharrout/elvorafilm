import React, { useState } from "react";
import { BLOG_POSTS } from "../data/blogData";
import { BRAND_INFO } from "../data/brandInfo";
import SeoMeta from "../components/SeoMeta";
import { Clock, ArrowRight } from "lucide-react";

export default function BlogListPage({ onNavigate, onSelectPost }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const filteredPosts = selectedCategory === "All"
    ? BLOG_POSTS
    : BLOG_POSTS.filter((p) => p.category === selectedCategory);

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Elvora Journal | Wedding Photography & Cinematography Guides",
    "description": "Expert advice, luxury wedding venue reviews, pricing breakdowns, and cultural ritual insights for couples in Odisha by Elvora Film.",
    "url": "https://www.elvorafilm.com/#blog",
    "publisher": {
      "@type": "Organization",
      "name": "Elvora Film",
      "logo": "https://www.elvorafilm.com/assets/images/elvora-emblem.png"
    },
    "blogPost": BLOG_POSTS.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "url": `https://www.elvorafilm.com/#blog/${post.slug}`,
      "datePublished": post.publishedDate,
      "dateModified": post.updatedDate,
      "author": {
        "@type": "Organization",
        "name": post.author
      }
    }))
  };

  return (
    <main style={{ backgroundColor: "#FAF7F2", color: "#181614", paddingTop: "5.5rem" }}>
      <SeoMeta
        title="The Elvora Journal | Wedding Photography, Venues & Cost in Odisha"
        description="Comprehensive guides on Bhubaneswar wedding venues, photography costs in Odisha, Odia rituals, pre-wedding locations, and cinematography tips by Elvora Film."
        keywords={[
          "Wedding blog Odisha",
          "Wedding photography tips Bhubaneswar",
          "Odia wedding rituals guide",
          "Wedding venues Bhubaneswar",
          "Wedding photography cost Odisha",
          "Elvora Film blog"
        ]}
        canonicalUrl="https://www.elvorafilm.com/#blog"
        schemaJson={blogListSchema}
      />

      {/* Hero Header */}
      <section
        style={{
          backgroundColor: "#0C0C0E",
          color: "#FAF7F2",
          padding: "clamp(4.5rem, 8vw, 7rem) 1.5rem",
          textAlign: "center"
        }}
      >
        <div className="container" style={{ maxWidth: "860px" }}>
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.78rem",
              letterSpacing: "0.24em",
              color: "var(--color-gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem"
            }}
          >
            THE ELVORA JOURNAL
          </span>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: "1.2rem",
              color: "#FFFFFF"
            }}
          >
            Stories, Venues &amp; Wedding Cinema Craft
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.75)",
              maxWidth: "700px",
              margin: "0 auto"
            }}
          >
            A curated library of guides, pricing wisdom, venue reviews, and cultural traditions designed to help couples plan an extraordinary wedding in Odisha.
          </p>
        </div>
      </section>

      {/* Category Pills Bar */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "1rem 1.5rem",
          position: "sticky",
          top: "60px",
          zIndex: 10
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            gap: "0.6rem",
            overflowX: "auto",
            paddingBottom: "0.25rem",
            scrollbarWidth: "none"
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                backgroundColor: selectedCategory === cat ? "var(--color-gold)" : "#F3EFE8",
                color: selectedCategory === cat ? "#0C0C0E" : "#4A453F",
                border: "none",
                padding: "0.5rem 1.1rem",
                borderRadius: "20px",
                fontSize: "0.84rem",
                fontWeight: selectedCategory === cat ? 600 : 400,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.2s"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Articles Grid */}
      <section style={{ padding: "clamp(3.5rem, 6vw, 6rem) 1.5rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem"
            }}
          >
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                <div style={{ padding: "2.2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "0.8rem",
                      color: "#7E7870",
                      marginBottom: "1rem"
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "rgba(197, 160, 89, 0.15)",
                        color: "var(--color-gold-dark)",
                        padding: "0.2rem 0.65rem",
                        borderRadius: "12px",
                        fontWeight: 600
                      }}
                    >
                      {post.category}
                    </span>

                    <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.65rem",
                      fontWeight: 500,
                      lineHeight: 1.28,
                      color: "#181614",
                      marginBottom: "0.85rem"
                    }}
                  >
                    {post.title}
                  </h2>

                  <p
                    style={{
                      fontSize: "0.93rem",
                      lineHeight: 1.65,
                      color: "#5E5850",
                      marginBottom: "1.5rem",
                      flex: 1
                    }}
                  >
                    {post.excerpt}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: "1.2rem",
                      borderTop: "1px solid rgba(0, 0, 0, 0.06)",
                      marginTop: "auto"
                    }}
                  >
                    <span style={{ fontSize: "0.8rem", color: "#8C867E" }}>
                      {post.author.replace("Elvora Film ", "")}
                    </span>

                    <button
                      onClick={() => onSelectPost(post.slug)}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--color-gold-dark)",
                        fontWeight: 600,
                        fontSize: "0.88rem",
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        padding: 0
                      }}
                    >
                      <span>Read Guide</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
