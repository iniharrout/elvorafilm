import React from "react";
import { ArrowDown, Play, Sparkles } from "lucide-react";

export default function Hero({ onExploreStories, onOpenInquiry, onOpenFilm }) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--color-cinema-black)",
        color: "#FAF7F2",
        overflow: "hidden",
        paddingTop: "5.5rem",
        paddingBottom: "3.5rem"
      }}
    >
      {/* Background Image Layer with Cinematic Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/assets/images/hero/hero-main.jpg')`,
          backgroundPosition: "center 30%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.52,
          filter: "contrast(1.05) saturate(1.1)",
          transform: "scale(1.02)",
          transition: "transform 10s ease-out"
        }}
      />

      {/* Cinematic Gradient Overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(180deg, rgba(12, 12, 14, 0.75) 0%, rgba(12, 12, 14, 0.4) 40%, rgba(12, 12, 14, 0.88) 85%, #0C0C0E 100%),
            radial-gradient(circle at center, transparent 40%, rgba(12, 12, 14, 0.75) 90%)
          `,
          pointerEvents: "none"
        }}
      />

      {/* Fine-art Film Frame Margins */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          bottom: "1.5rem",
          left: "1.5rem",
          right: "1.5rem",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          pointerEvents: "none",
          display: "none"
        }}
        className="hero-frame"
      />

      {/* Hero Content Container */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "1040px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        {/* Location & Brand Monogram Pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.65rem",
            padding: "0.4rem 1.1rem",
            border: "1px solid rgba(197, 160, 89, 0.35)",
            backgroundColor: "rgba(18, 18, 22, 0.65)",
            backdropFilter: "blur(8px)",
            borderRadius: "40px",
            marginBottom: "1.6rem"
          }}
        >
          <img
            src="/assets/images/elvora-emblem.png"
            alt="Elvora Crest"
            style={{ width: "16px", height: "16px", objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              fontWeight: 500
            }}
          >
            BHUBANESWAR, INDIA • WEDDING CINEMATOGRAPHY
          </span>
        </div>

        {/* Small Eyebrow */}
        <span
          className="eyebrow no-line"
          style={{
            marginBottom: "0.8rem",
            letterSpacing: "0.28em",
            fontSize: "0.75rem"
          }}
        >
          WEDDING PHOTOGRAPHY &amp; CINEMATOGRAPHY
        </span>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: "clamp(2.6rem, 6.8vw, 5.2rem)",
            fontFamily: "var(--font-serif)",
            fontWeight: 300,
            lineHeight: 1.08,
            letterSpacing: "-0.015em",
            color: "#FAF7F2",
            maxWidth: "920px",
            margin: "0 auto 1.4rem"
          }}
        >
          Some Moments Deserve <br />
          <em
            style={{
              fontStyle: "italic",
              fontFamily: "var(--font-serif)",
              color: "var(--color-gold-light)",
              fontWeight: 400
            }}
          >
            To Live Forever.
          </em>
        </h1>

        {/* Supporting Text */}
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            color: "rgba(247, 244, 238, 0.82)",
            maxWidth: "680px",
            lineHeight: 1.68,
            fontWeight: 300,
            margin: "0 auto 2.5rem"
          }}
        >
          We capture the emotions, traditions, and little moments that make your
          wedding uniquely yours.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.2rem",
            marginBottom: "3.5rem"
          }}
        >
          <button onClick={onExploreStories} className="btn-gold">
            <span>EXPLORE OUR STORIES</span>
          </button>

          <button onClick={onOpenInquiry} className="btn-ghost-light">
            <span>LET'S TALK ABOUT YOUR WEDDING</span>
          </button>

          {/* Discreet Play Hero Film Trigger */}
          <button
            onClick={onOpenFilm}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              color: "var(--color-gold-light)",
              fontSize: "0.78rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "0.85rem 1.2rem",
              border: "1px dashed rgba(197, 160, 89, 0.4)",
              backgroundColor: "rgba(12, 12, 14, 0.5)",
              transition: "all 0.3s ease"
            }}
            aria-label="Watch Cinematic Showreel"
          >
            <span
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                backgroundColor: "var(--color-gold)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#000"
              }}
            >
              <Play size={10} fill="#000" />
            </span>
            <span>PLAY SHOWREEL (4K)</span>
          </button>
        </div>

        {/* Brand Signature */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            opacity: 0.75,
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "1.2rem",
            width: "100%",
            maxWidth: "600px",
            justifyContent: "space-between"
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.22em",
              color: "var(--color-gold)"
            }}
          >
            ELVORA FILM
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              color: "rgba(247, 244, 238, 0.5)"
            }}
          >
            ESTABLISHED IN BHUBANESWAR
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              color: "rgba(247, 244, 238, 0.5)"
            }}
          >
            PAN-INDIA COVERAGE
          </span>
        </div>

        {/* Minimal Scroll Indicator */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            opacity: 0.65,
            cursor: "pointer"
          }}
          onClick={() => {
            const el = document.getElementById("brand-story");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)"
            }}
          >
            DISCOVER THE STORY
          </span>
          <ArrowDown size={14} color="var(--color-gold-light)" />
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-frame {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}
