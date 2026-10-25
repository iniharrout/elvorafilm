import React from "react";
import { BLOG_POSTS } from "../data/blogData";
import { Clock, ArrowRight } from "lucide-react";

export default function LatestJournalSection({ onNavigate, onSelectPost }) {
  // Select 3 high-intent, universal planning guides for the homepage
  const universalSlugs = [
    "wedding-photography-cost-odisha-pricing-packages",
    "candid-vs-traditional-wedding-photography",
    "drone-fpv-cinematography-indian-weddings"
  ];
  const latestPosts = universalSlugs
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <section
      id="journal-section"
      style={{
        backgroundColor: "#FAF7F2",
        color: "#181614",
        padding: "clamp(4.5rem, 7.5vw, 7.5rem) 1.5rem"
      }}
    >
      <div className="container-wide">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1.5rem"
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.74rem",
                letterSpacing: "0.22em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.85rem"
              }}
            >
              WEDDING KNOWLEDGE &amp; PLANNING
            </span>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)",
                fontWeight: 300,
                lineHeight: 1.18,
                color: "#181614",
                margin: 0
              }}
            >
              The Elvora Journal
            </h2>
          </div>

          <button
            onClick={() => onNavigate("blog")}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-gold-dark)",
              fontFamily: "var(--font-label)",
              fontSize: "0.84rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              padding: 0
            }}
          >
            <span>View All 10 Guides</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 3 Featured Guides */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.2rem"
          }}
        >
          {latestPosts.map((post) => (
            <article
              key={post.id}
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                padding: "2.2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)"
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.8rem",
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

                  <span style={{ color: "#777", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                    <Clock size={13} />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.55rem",
                    fontWeight: 500,
                    lineHeight: 1.3,
                    color: "#181614",
                    marginBottom: "0.85rem"
                  }}
                >
                  {post.title}
                </h3>

                <p style={{ fontSize: "0.92rem", color: "#5A544D", lineHeight: 1.65, margin: 0 }}>
                  {post.excerpt.slice(0, 130)}...
                </p>
              </div>

              <button
                onClick={() => onSelectPost(post.slug)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-gold-dark)",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  marginTop: "1.8rem",
                  padding: 0
                }}
              >
                <span>Read Full Guide</span>
                <ArrowRight size={15} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
