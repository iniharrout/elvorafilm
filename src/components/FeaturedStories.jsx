import React, { useState } from "react";
import { PORTFOLIO_STORIES, PORTFOLIO_CATEGORIES } from "../data/portfolioData";
import { ArrowUpRight, Play, Eye } from "lucide-react";

export default function FeaturedStories({ onSelectStory, onViewAllStories }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredStories = activeCategory === "all"
    ? PORTFOLIO_STORIES
    : PORTFOLIO_STORIES.filter(s => s.categoryKey === activeCategory || s.category.toLowerCase().includes(activeCategory));

  return (
    <section id="stories" className="section-dark grain-overlay">
      <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 3.5rem"
          }}
        >
          <span className="eyebrow">SELECTED STORIES</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontWeight: 300,
              color: "#FAF7F2",
              marginBottom: "1.2rem",
              lineHeight: 1.15
            }}
          >
            Every Love Story <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-light)",
                fontWeight: 400
              }}
            >
              Has Its Own Frame.
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-text-light-muted)",
              fontSize: "1.06rem",
              lineHeight: 1.7
            }}
          >
            A collection of celebrations, emotions, and moments that deserve to
            be remembered.
          </p>

          {/* Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.6rem",
              justifyContent: "center",
              marginTop: "2.2rem"
            }}
          >
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.55rem 1.25rem",
                    borderRadius: "30px",
                    border: isActive
                      ? "1px solid var(--color-gold)"
                      : "1px solid rgba(255, 255, 255, 0.12)",
                    backgroundColor: isActive
                      ? "rgba(197, 160, 89, 0.16)"
                      : "rgba(255, 255, 255, 0.03)",
                    color: isActive ? "var(--color-gold-light)" : "rgba(247, 244, 238, 0.75)",
                    transition: "all 0.25s ease"
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Portfolio Showcase Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2.5rem"
          }}
          className="stories-grid"
        >
          {filteredStories.map((story, index) => {
            const isWide = index === 0 || index === 3;
            return (
              <div
                key={story.id}
                onClick={() => onSelectStory(story)}
                style={{
                  gridColumn: isWide ? "span 1" : "span 1",
                  position: "relative",
                  cursor: "pointer",
                  backgroundColor: "var(--color-cinema-card)",
                  border: "1px solid var(--color-cinema-border)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  transition: "transform 0.4s var(--ease-editorial), border-color 0.4s ease, box-shadow 0.4s ease"
                }}
                className="story-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "var(--color-gold-border)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--color-cinema-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Visual Cover Frame */}
                <div
                  className="image-zoom-frame"
                  style={{
                    height: isWide ? "440px" : "360px",
                    width: "100%",
                    position: "relative"
                  }}
                >
                  <img
                    src={story.coverImage}
                    alt={`${story.title} wedding story in ${story.location}`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  {/* Gradient Vignette over image */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(12, 12, 14, 0.1) 0%, rgba(12, 12, 14, 0.75) 100%)"
                    }}
                  />

                  {/* Category Pill on top left */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.2rem",
                      left: "1.2rem",
                      backgroundColor: "rgba(12, 12, 14, 0.75)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(197, 160, 89, 0.35)",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "20px"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--color-gold-light)"
                      }}
                    >
                      {story.category}
                    </span>
                  </div>

                  {/* View Details Hover Badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.2rem",
                      right: "1.2rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      backgroundColor: "rgba(197, 160, 89, 0.9)",
                      color: "#0C0C0E",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      padding: "0.4rem 0.9rem",
                      borderRadius: "20px"
                    }}
                  >
                    <Eye size={13} />
                    <span>VIEW STORY</span>
                  </div>
                </div>

                {/* Editorial Story Content Footer */}
                <div style={{ padding: "1.8rem 2rem 2.2rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "0.4rem"
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.85rem",
                        color: "#FAF7F2",
                        fontWeight: 400,
                        margin: 0
                      }}
                    >
                      {story.title}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--color-gold)",
                        fontFamily: "var(--font-sans)",
                        letterSpacing: "0.08em"
                      }}
                    >
                      {story.location}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      color: "rgba(247, 244, 238, 0.7)",
                      fontSize: "1.05rem",
                      margin: "0 0 1.2rem"
                    }}
                  >
                    {story.subtitle}
                  </p>

                  <p
                    style={{
                      color: "var(--color-text-light-muted)",
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      margin: "0 0 1.4rem"
                    }}
                  >
                    {story.excerpt}
                  </p>

                  <div
                    style={{
                      paddingTop: "1rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between"
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "rgba(247, 244, 238, 0.55)",
                        letterSpacing: "0.08em"
                      }}
                    >
                      {story.deliverables.split("•")[0]}
                    </span>
                    <span
                      style={{
                        color: "var(--color-gold-light)",
                        fontSize: "0.78rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        letterSpacing: "0.08em"
                      }}
                    >
                      <span>Read Story</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View Full Gallery CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "4.5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)"
          }}
        >
          <button
            onClick={onViewAllStories}
            className="btn-ghost-light"
            style={{ padding: "1rem 2.8rem" }}
          >
            <span>VIEW COMPLETE PORTFOLIO ARCHIVE</span>
            <ArrowUpRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
