import React, { useEffect } from "react";
import { X, MapPin, Calendar, Film, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function StoryModal({ story, onClose, onInquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (story) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [story, onClose]);

  if (!story) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "960px",
          padding: 0,
          backgroundColor: "#0F0F12"
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            zIndex: 10,
            color: "#FAF7F2",
            padding: "0.5rem",
            borderRadius: "50%",
            backgroundColor: "rgba(12, 12, 14, 0.75)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          aria-label="Close Project View"
        >
          <X size={20} />
        </button>

        {/* Hero Visual Banner */}
        <div style={{ position: "relative", height: "420px", width: "100%" }}>
          <img
            src={story.coverImage}
            alt={`${story.title} wedding story`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(180deg, rgba(12,12,14,0.3) 0%, rgba(15,15,18,0.95) 100%)"
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "clamp(1.5rem, 4vw, 3rem)",
              right: "clamp(1.5rem, 4vw, 3rem)"
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-gold-light)",
                fontSize: "0.74rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: "0.5rem"
              }}
            >
              <MapPin size={13} />
              <span>{story.location}</span>
              <span>•</span>
              <span>{story.category}</span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                color: "#FAF7F2",
                fontWeight: 300,
                lineHeight: 1.1,
                margin: "0 0 0.4rem"
              }}
            >
              {story.title}
            </h2>

            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--color-gold-light)",
                fontSize: "1.2rem",
                margin: 0
              }}
            >
              {story.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: "2.5rem clamp(1.5rem, 4vw, 3rem) 3.5rem" }}>
          {/* Narrative Text */}
          <div style={{ maxWidth: "800px", marginBottom: "2.8rem" }}>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.8rem"
              }}
            >
              STORY ARCHIVE NOTE
            </span>

            <p
              style={{
                color: "var(--color-text-light-muted)",
                fontSize: "1.05rem",
                lineHeight: 1.85,
                margin: "0 0 1.5rem"
              }}
            >
              {story.fullDescription}
            </p>

            <div
              style={{
                padding: "1rem 1.4rem",
                backgroundColor: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "2px",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                fontSize: "0.88rem",
                color: "#FAF7F2"
              }}
            >
              <Film size={18} color="var(--color-gold)" />
              <div>
                <strong>Deliverables Summary: </strong>
                <span style={{ color: "var(--color-text-light-muted)" }}>{story.deliverables}</span>
              </div>
            </div>
          </div>

          {/* Stills Gallery Grid */}
          <div style={{ marginBottom: "3rem" }}>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.68rem",
                letterSpacing: "0.2em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.2rem"
              }}
            >
              CURATED MASTER STILLS
            </span>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1.2rem"
              }}
            >
              {story.stills.map((imgUrl, i) => (
                <div
                  key={i}
                  style={{
                    height: "180px",
                    overflow: "hidden",
                    borderRadius: "2px",
                    border: "1px solid rgba(255, 255, 255, 0.08)"
                  }}
                  className="image-zoom-frame"
                >
                  <img
                    src={imgUrl}
                    alt={`${story.title} photograph ${i + 1}`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Story Inquiry Footer */}
          <div
            style={{
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.2rem"
            }}
          >
            <div>
              <h4 style={{ color: "#FAF7F2", margin: 0, fontFamily: "var(--font-serif)", fontSize: "1.3rem" }}>
                Inspired by this celebration?
              </h4>
              <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--color-text-light-muted)" }}>
                Let's discuss how we can tell the story of your own wedding day.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(story.title);
              }}
              className="btn-gold"
            >
              <span>INQUIRE ABOUT THIS STYLE</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
