import React from "react";
import { BRAND_INFO } from "../data/brandInfo";
import { Compass, Calendar, Camera, Film } from "lucide-react";

export default function ApproachSection() {
  const icons = [Compass, Calendar, Camera, Film];

  return (
    <section className="section-dark grain-overlay">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 4.5rem"
          }}
        >
          <span className="eyebrow">THE ELVORA APPROACH</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.3rem, 4.8vw, 3.6rem)",
              fontWeight: 300,
              color: "#FAF7F2",
              lineHeight: 1.15,
              marginBottom: "1.2rem"
            }}
          >
            Beautiful Frames Begin <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-light)",
                fontWeight: 400
              }}
            >
              With Understanding Your Story.
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-text-light-muted)",
              fontSize: "1.06rem",
              lineHeight: 1.7
            }}
          >
            Our seamless four-stage process ensures unhurried preparation,
            unobtrusive celebration coverage, and timeless artisan finishing.
          </p>
        </div>

        {/* 4-Stage Editorial Process Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2rem",
            position: "relative"
          }}
          className="approach-grid"
        >
          {BRAND_INFO.approach.map((item, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={item.step}
                style={{
                  backgroundColor: "var(--color-cinema-card)",
                  border: "1px solid var(--color-cinema-border)",
                  padding: "2.4rem 2rem",
                  borderRadius: "2px",
                  position: "relative",
                  transition: "transform 0.35s ease, border-color 0.35s ease"
                }}
                className="approach-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.borderColor = "var(--color-gold-border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "var(--color-cinema-border)";
                }}
              >
                {/* Step Number & Icon */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.8rem"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2.4rem",
                      color: "var(--color-gold)",
                      lineHeight: 1,
                      fontWeight: 400
                    }}
                  >
                    {item.step}
                  </span>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(197, 160, 89, 0.25)"
                    }}
                  >
                    <Icon size={18} color="var(--color-gold-light)" />
                  </div>
                </div>

                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "0.68rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(247, 244, 238, 0.5)",
                    display: "block",
                    marginBottom: "0.4rem"
                  }}
                >
                  {item.subtitle}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.7rem",
                    color: "#FAF7F2",
                    marginBottom: "1rem",
                    fontWeight: 400
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "var(--color-text-light-muted)",
                    fontSize: "0.94rem",
                    lineHeight: 1.68,
                    margin: 0
                  }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
