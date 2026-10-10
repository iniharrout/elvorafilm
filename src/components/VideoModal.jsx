import React, { useEffect } from "react";
import { X, Volume2, Sparkles } from "lucide-react";

export default function VideoModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-content-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "1000px",
          padding: 0,
          backgroundColor: "#000000",
          border: "1px solid var(--color-gold-border)"
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            zIndex: 10,
            color: "#FFFFFF",
            padding: "0.5rem",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          aria-label="Close Film Viewer"
        >
          <X size={20} />
        </button>

        {/* 16:9 Video Embed Player / Cinematic Showcase */}
        <div style={{ position: "relative", paddingTop: "56.25%", width: "100%", backgroundColor: "#000" }}>
          <iframe
            src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1&mute=0&controls=1&rel=0&modestbranding=1"
            title="Elvora Film Cinematic Wedding Reel Showcase"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none"
            }}
          />
        </div>

        {/* Video Information Bar */}
        <div
          style={{
            padding: "1.5rem 2rem",
            backgroundColor: "#0A0A0C",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem"
          }}
        >
          <div>
            <h4
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.4rem",
                color: "#FAF7F2",
                margin: "0 0 0.2rem"
              }}
            >
              Elvora Film — Cinematic Wedding Reel
            </h4>
            <span
              style={{
                fontSize: "0.78rem",
                color: "var(--color-gold-light)",
                letterSpacing: "0.12em",
                textTransform: "uppercase"
              }}
            >
              4K CINEMA MASTER • SOUND DESIGN &amp; BESPOKE SCORING
            </span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.8rem",
              color: "rgba(247, 244, 238, 0.6)"
            }}
          >
            <Sparkles size={14} color="var(--color-gold)" />
            <span>Official Elvora Film Production</span>
          </div>
        </div>
      </div>
    </div>
  );
}
