import React from "react";
import { Play, Volume2, Film } from "lucide-react";

export default function FilmShowcase({ onWatchFilms }) {
  return (
    <section className="section-dark-alt" style={{ overflow: "hidden", position: "relative" }}>
      <div className="container">
        {/* Cinematic Header Block */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto 3.5rem"
          }}
        >
          <span className="eyebrow">CINEMATIC WEDDING FILMS</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
              fontWeight: 300,
              lineHeight: 1.12,
              color: "#FAF7F2",
              marginBottom: "1.4rem"
            }}
          >
            Not Just How It Looked. <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-light)",
                fontWeight: 400
              }}
            >
              How It Felt.
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-text-light-muted)",
              fontSize: "1.08rem",
              lineHeight: 1.75
            }}
          >
            From the vows and celebrations to the quiet moments in between, every
            film is crafted to bring you back to the emotions of your wedding day.
          </p>
        </div>

        {/* 16:9 Cinematic Video Display Panel */}
        <div
          style={{
            position: "relative",
            maxWidth: "1080px",
            margin: "0 auto",
            borderRadius: "2px",
            overflow: "hidden",
            boxShadow: "0 30px 80px rgba(0, 0, 0, 0.7)",
            border: "1px solid var(--color-gold-border)",
            backgroundColor: "#000000"
          }}
          className="film-panel"
        >
          {/* Aspect Ratio 16:9 Container */}
          <div style={{ position: "relative", paddingTop: "56.25%" }}>
            <img
              src="/assets/images/film-showcase-poster.jpg"
              alt="Cinematic Wedding Film Still by Elvora Film"
              loading="lazy"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.85)"
              }}
            />

            {/* Cinematic Anamorphic Letterbox Bars (Optional Aesthetic Overlay) */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3%",
                backgroundColor: "#000000"
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "3%",
                backgroundColor: "#000000"
              }}
            />

            {/* Central Play Trigger Button */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "radial-gradient(circle, rgba(12,12,14,0.3) 0%, rgba(12,12,14,0.7) 100%)",
                gap: "1.2rem"
              }}
            >
              <button
                onClick={onWatchFilms}
                style={{
                  width: "84px",
                  height: "84px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(197, 160, 89, 0.95)",
                  color: "#0C0C0E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 0 12px rgba(197, 160, 89, 0.25), 0 12px 35px rgba(0, 0, 0, 0.6)",
                  transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: "2px solid #FFFFFF"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.backgroundColor = "#DFC48C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.backgroundColor = "rgba(197, 160, 89, 0.95)";
                }}
                aria-label="Play Wedding Showreel"
              >
                <Play size={32} fill="#0C0C0E" style={{ marginLeft: "4px" }} />
              </button>

              <div style={{ textAlign: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.35rem",
                    color: "#FAF7F2",
                    display: "block",
                    letterSpacing: "0.02em"
                  }}
                >
                  Elvora Signature Wedding Reel
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--color-gold)",
                    display: "block",
                    marginTop: "4px"
                  }}
                >
                  4K MASTER • CINEMATIC SCORE • 03:45 MIN
                </span>
              </div>
            </div>

            {/* Subtle Audio Indicator Badge */}
            <div
              style={{
                position: "absolute",
                bottom: "1.8rem",
                left: "2rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "rgba(12, 12, 14, 0.75)",
                backdropFilter: "blur(6px)",
                padding: "0.4rem 0.9rem",
                borderRadius: "30px",
                border: "1px solid rgba(255, 255, 255, 0.12)"
              }}
            >
              <Volume2 size={14} color="var(--color-gold)" />
              <span
                style={{
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  color: "#FAF7F2"
                }}
              >
                Original Master Sound Design
              </span>
            </div>
          </div>
        </div>

        {/* Watch Our Films CTA */}
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <button onClick={onWatchFilms} className="btn-gold">
            <span>WATCH OUR FILMS</span>
            <Film size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
