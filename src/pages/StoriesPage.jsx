import React, { useState } from "react";
import { PORTFOLIO_STORIES, PORTFOLIO_CATEGORIES } from "../data/portfolioData";
import { Eye, ArrowUpRight, MapPin, Play, Sparkles } from "lucide-react";

export default function StoriesPage({ onSelectStory, onOpenInquiry, onOpenFilm }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredStories = activeCategory === "all"
    ? PORTFOLIO_STORIES
    : PORTFOLIO_STORIES.filter(s => s.categoryKey === activeCategory || s.category.toLowerCase().includes(activeCategory));

  return (
    <div style={{ paddingTop: "7rem", backgroundColor: "var(--color-cinema-black)", minHeight: "100vh" }}>
      {/* Page Header */}
      <section style={{ padding: "3rem 0 4rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "840px" }}>
          <span className="eyebrow">PORTFOLIO ARCHIVE</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              color: "#FAF7F2",
              fontWeight: 300,
              lineHeight: 1.12,
              marginBottom: "1.2rem"
            }}
          >
            Stories Captured In Light, <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold-light)", fontWeight: 400 }}>
              Preserved For Generations.
            </em>
          </h1>
          <p
            style={{
              color: "var(--color-text-light-muted)",
              fontSize: "1.1rem",
              lineHeight: 1.75
            }}
          >
            Explore our curated showcase of wedding films, candid moments, and
            traditional ceremonies documented across Odisha and throughout India.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.65rem",
              justifyContent: "center",
              marginTop: "2.5rem"
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
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    padding: "0.6rem 1.4rem",
                    borderRadius: "30px",
                    border: isActive
                      ? "1px solid var(--color-gold)"
                      : "1px solid rgba(255, 255, 255, 0.12)",
                    backgroundColor: isActive
                      ? "rgba(197, 160, 89, 0.2)"
                      : "rgba(255, 255, 255, 0.03)",
                    color: isActive ? "var(--color-gold-light)" : "rgba(247, 244, 238, 0.75)",
                    transition: "all 0.2s ease"
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stories Gallery Grid */}
      <section style={{ padding: "4rem 0 6rem" }}>
        <div className="container-wide">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "2.8rem"
            }}
          >
            {filteredStories.map((story) => (
              <div
                key={story.id}
                onClick={() => onSelectStory(story)}
                style={{
                  backgroundColor: "var(--color-cinema-card)",
                  border: "1px solid var(--color-cinema-border)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease"
                }}
                className="story-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "var(--color-gold-border)";
                  e.currentTarget.style.boxShadow = "0 22px 50px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--color-cinema-border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Visual Image */}
                <div className="image-zoom-frame" style={{ height: "380px", position: "relative" }}>
                  <img
                    src={story.coverImage}
                    alt={`${story.title} - ${story.subtitle}`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(180deg, rgba(12,12,14,0.1) 0%, rgba(12,12,14,0.85) 100%)"
                    }}
                  />

                  {/* Top Badges */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.2rem",
                      left: "1.2rem",
                      display: "flex",
                      gap: "0.5rem"
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: "rgba(12, 12, 14, 0.8)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(197, 160, 89, 0.3)",
                        padding: "0.3rem 0.8rem",
                        borderRadius: "20px",
                        fontSize: "0.65rem",
                        color: "var(--color-gold-light)",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase"
                      }}
                    >
                      {story.category}
                    </span>
                  </div>

                  {/* Hover Inspect Badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.2rem",
                      right: "1.2rem",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      backgroundColor: "rgba(197, 160, 89, 0.95)",
                      color: "#0C0C0E",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      padding: "0.45rem 1rem",
                      borderRadius: "20px"
                    }}
                  >
                    <Eye size={13} />
                    <span>EXPLORE PROJECT</span>
                  </div>
                </div>

                {/* Card Text Content */}
                <div style={{ padding: "2rem 2.2rem 2.4rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "0.4rem"
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.9rem",
                        color: "#FAF7F2",
                        margin: 0,
                        fontWeight: 400
                      }}
                    >
                      {story.title}
                    </h2>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        color: "var(--color-gold)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem"
                      }}
                    >
                      <MapPin size={12} />
                      <span>{story.location}</span>
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      color: "rgba(247, 244, 238, 0.7)",
                      fontSize: "1.08rem",
                      margin: "0 0 1rem"
                    }}
                  >
                    {story.subtitle}
                  </p>

                  <p
                    style={{
                      color: "var(--color-text-light-muted)",
                      fontSize: "0.93rem",
                      lineHeight: 1.65,
                      marginBottom: "1.4rem"
                    }}
                  >
                    {story.excerpt}
                  </p>

                  <div
                    style={{
                      paddingTop: "1.1rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "0.75rem",
                      color: "rgba(247, 244, 238, 0.55)"
                    }}
                  >
                    <span>{story.deliverables.split("•")[0]}</span>
                    <span
                      style={{
                        color: "var(--color-gold-light)",
                        fontWeight: 500,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.2rem"
                      }}
                    >
                      <span>View Gallery ({story.stills.length})</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Development Showcase Disclaimer Banner */}
          <div
            style={{
              marginTop: "4.5rem",
              padding: "1.5rem 2rem",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(197, 160, 89, 0.25)",
              borderRadius: "2px",
              textAlign: "center",
              maxWidth: "760px",
              margin: "4.5rem auto 0"
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.4rem"
              }}
            >
              STUDIO PORTFOLIO ARCHITECTURE
            </span>
            <p
              style={{
                color: "var(--color-text-light-muted)",
                fontSize: "0.88rem",
                lineHeight: 1.6,
                margin: 0
              }}
            >
              These representative stories reflect our cinematic composition
              and grading style during initial studio setup. As new celebrations
              conclude, real client projects can be added to the portfolio
              archive with zero code changes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
