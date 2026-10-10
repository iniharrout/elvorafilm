import React from "react";
import { Sparkles, Heart, Film } from "lucide-react";

export default function BrandStory() {
  return (
    <section id="brand-story" className="section-light">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "clamp(2.5rem, 5vw, 5.5rem)",
            alignItems: "center"
          }}
          className="brand-story-grid"
        >
          {/* Editorial Visual Composition */}
          <div style={{ position: "relative" }}>
            <div
              className="image-zoom-frame"
              style={{
                borderRadius: "2px",
                boxShadow: "0 24px 50px rgba(24, 22, 20, 0.12)",
                maxHeight: "680px",
                border: "1px solid rgba(24, 22, 20, 0.08)"
              }}
            >
              <img
                src="/assets/images/brand-story.jpg"
                alt="Intimate bridal reflection and authentic emotion by Elvora Film"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>

            {/* Overlaid Floating Editorial Quote Box */}
            <div
              style={{
                position: "absolute",
                bottom: "-1.8rem",
                right: "-1.2rem",
                backgroundColor: "#FFFFFF",
                padding: "1.6rem 2rem",
                border: "1px solid rgba(197, 160, 89, 0.35)",
                boxShadow: "0 18px 40px rgba(0, 0, 0, 0.08)",
                maxWidth: "340px",
                display: "none"
              }}
              className="brand-floating-card"
            >
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.4rem"
                }}
              >
                OUR CORE PHILOSOPHY
              </span>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.18rem",
                  fontStyle: "italic",
                  color: "var(--color-text-main)",
                  lineHeight: 1.45,
                  margin: 0
                }}
              >
                "A wedding is not an event to document. It is a story to preserve."
              </p>
            </div>
          </div>

          {/* Emotional Brand Copy */}
          <div style={{ maxWidth: "580px" }}>
            <span className="eyebrow">MORE THAN PHOTOGRAPHS</span>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)",
                fontWeight: 300,
                lineHeight: 1.16,
                letterSpacing: "-0.015em",
                color: "var(--color-text-main)",
                marginBottom: "1.8rem"
              }}
            >
              Because The Best Memories <br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-gold-dark)",
                  fontWeight: 400
                }}
              >
                Are The Ones You Can Feel Again.
              </em>
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
                fontSize: "1.06rem",
                lineHeight: 1.82,
                color: "var(--color-text-muted)"
              }}
            >
              <p>
                Years from now, you may forget the little details of your wedding
                day. But the laughter, the tears, the nervous smiles, and the
                people who stood beside you deserve to be remembered.
              </p>

              <p>
                At <strong>Elvora Film</strong>, we preserve those moments through
                thoughtful photography and cinematic storytelling. Every glance,
                every ritual, every touch of hands is approached not as a shot to
                check off, but as a priceless piece of living family history.
              </p>
            </div>

            {/* Studio Identity Signatures */}
            <div
              style={{
                marginTop: "2.8rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(24, 22, 20, 0.12)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1.8rem"
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.8rem",
                    color: "var(--color-text-main)",
                    fontWeight: 400,
                    display: "block",
                    lineHeight: 1
                  }}
                >
                  Authentic
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                    textTransform: "uppercase",
                    marginTop: "4px",
                    display: "block"
                  }}
                >
                  Unforced Expressions
                </span>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.8rem",
                    color: "var(--color-text-main)",
                    fontWeight: 400,
                    display: "block",
                    lineHeight: 1
                  }}
                >
                  Cinematic
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    letterSpacing: "0.1em",
                    color: "var(--color-text-muted)",
                    textTransform: "uppercase",
                    marginTop: "4px",
                    display: "block"
                  }}
                >
                  Color-Graded Mastery
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .brand-story-grid {
            grid-template-columns: 1.05fr 1fr !important;
          }
          .brand-floating-card {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
