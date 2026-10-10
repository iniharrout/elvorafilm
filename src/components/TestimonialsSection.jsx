import React from "react";
import { MessageSquare, HeartHandshake, ShieldCheck } from "lucide-react";
import { BRAND_INFO } from "../data/brandInfo";

export default function TestimonialsSection({ testimonials = [] }) {
  // Respecting brand instruction: Build a reusable component without fabricating fictional client reviews.
  const hasRealReviews = testimonials && testimonials.length > 0;

  return (
    <section className="section-dark grain-overlay">
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: "760px",
            margin: "0 auto 3.5rem"
          }}
        >
          <span className="eyebrow">CLIENT STORIES &amp; TRUST</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
              fontWeight: 300,
              color: "#FAF7F2",
              lineHeight: 1.15,
              marginBottom: "1.2rem"
            }}
          >
            Words That Live <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-light)",
                fontWeight: 400
              }}
            >
              Beyond The Celebration.
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-text-light-muted)",
              fontSize: "1.06rem",
              lineHeight: 1.7
            }}
          >
            We let our films and genuine client trust speak for themselves. We
            never fabricate reviews or borrow generic testimonials.
          </p>
        </div>

        {hasRealReviews ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.2rem"
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--color-cinema-card)",
                  border: "1px solid var(--color-cinema-border)",
                  padding: "2.5rem 2rem",
                  borderRadius: "2px"
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "1.2rem",
                    color: "#FAF7F2",
                    marginBottom: "1.4rem"
                  }}
                >
                  "{t.quote}"
                </p>
                <div>
                  <h4 style={{ color: "var(--color-gold-light)", margin: 0 }}>
                    {t.coupleName}
                  </h4>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-text-light-muted)" }}>
                    {t.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Honest Studio Trust & Client Feedback Portal Component */
          <div
            style={{
              maxWidth: "840px",
              margin: "0 auto",
              backgroundColor: "var(--color-cinema-card)",
              border: "1px solid var(--color-gold-border)",
              borderRadius: "2px",
              padding: "clamp(2rem, 4vw, 3.5rem)",
              textAlign: "center"
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                backgroundColor: "rgba(197, 160, 89, 0.15)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.4rem"
              }}
            >
              <HeartHandshake size={26} color="var(--color-gold-light)" />
            </div>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.85rem",
                color: "#FAF7F2",
                marginBottom: "0.8rem",
                fontWeight: 400
              }}
            >
              Our Commitment to Authentic Feedback
            </h3>

            <p
              style={{
                color: "var(--color-text-light-muted)",
                fontSize: "0.98rem",
                lineHeight: 1.75,
                maxWidth: "640px",
                margin: "0 auto 1.8rem"
              }}
            >
              At Elvora Film, every story is genuine. We hold ourselves to
              uncompromising integrity: we never manufacture reviews, borrow
              quotes, or display fictional client testimonials. Newlywed couples
              are invited to share their verified wedding film experiences
              directly with us.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.2rem",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <a
                href={`mailto:${BRAND_INFO.email}?subject=Wedding%20Experience%20Feedback%20-%20Elvora%20Film`}
                className="btn-gold"
                style={{ padding: "0.75rem 1.6rem", fontSize: "0.74rem" }}
              >
                <span>SHARE YOUR WEDDING EXPERIENCE</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light"
                style={{ padding: "0.75rem 1.6rem", fontSize: "0.74rem" }}
              >
                <span>EXPLORE LIVE INSTAGRAM HIGHLIGHTS</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
