import React, { useEffect } from "react";
import InquiryForm from "./InquiryForm";
import { X } from "lucide-react";

export default function InquiryModal({ isOpen, onClose, initialPackage = "", initialService = "" }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
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
        style={{ padding: "clamp(1.8rem, 4vw, 3rem)" }}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.2rem",
            right: "1.2rem",
            color: "rgba(247, 244, 238, 0.7)",
            padding: "0.4rem",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.2s ease"
          }}
          aria-label="Close Inquiry Dialog"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: "2rem", paddingRight: "2rem" }}>
          <span className="eyebrow">WEDDING INQUIRY</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              color: "#FAF7F2",
              margin: 0,
              fontWeight: 400
            }}
          >
            Let's Talk About Your Wedding
          </h2>
          <p
            style={{
              color: "var(--color-text-light-muted)",
              fontSize: "0.94rem",
              marginTop: "0.5rem",
              lineHeight: 1.6
            }}
          >
            Fill out your details below and our team will get back to you with
            date availability and bespoke proposal options.
          </p>
        </div>

        {/* Form Body */}
        <InquiryForm
          initialPackage={initialPackage}
          initialService={initialService}
          onClose={onClose}
        />
      </div>
    </div>
  );
}
