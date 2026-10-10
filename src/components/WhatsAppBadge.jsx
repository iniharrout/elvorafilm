import React, { useState } from "react";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import { MessageCircle, X, ArrowUpRight } from "lucide-react";

export default function WhatsAppBadge() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      label: "Check Wedding Date Availability",
      text: "Hi Elvora Film, I would like to check your availability for my wedding celebration."
    },
    {
      label: "Inquire About Wedding Packages",
      text: "Hi Elvora Film, I would like to learn more about the Gamma, Beta, and Alpha wedding packages."
    },
    {
      label: "Discuss Pre-Wedding Shoot",
      text: "Hi Elvora Film, I am interested in planning a pre-wedding film and photoshoot."
    }
  ];

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.8rem",
        right: "1.8rem",
        zIndex: 900
      }}
    >
      {/* Quick Menu Popover */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "4.2rem",
            right: 0,
            width: "300px",
            backgroundColor: "#121215",
            border: "1px solid var(--color-gold-border)",
            borderRadius: "4px",
            boxShadow: "0 18px 45px rgba(0, 0, 0, 0.6)",
            padding: "1.4rem",
            animation: "slideUp 0.25s ease forwards",
            color: "#FAF7F2"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem"
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.1rem",
                  color: "#FAF7F2",
                  display: "block"
                }}
              >
                Chat with Elvora Film
              </span>
              <span style={{ fontSize: "0.72rem", color: "var(--color-gold)" }}>
                +91 8895499662 • Direct Studio Line
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{ color: "rgba(247, 244, 238, 0.5)", padding: "2px" }}
              aria-label="Close WhatsApp Menu"
            >
              <X size={16} />
            </button>
          </div>

          <p
            style={{
              fontSize: "0.82rem",
              color: "var(--color-text-light-muted)",
              lineHeight: 1.5,
              marginBottom: "1rem"
            }}
          >
            Choose a quick question or message us directly on WhatsApp:
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {quickMessages.map((item, idx) => (
              <a
                key={idx}
                href={getWhatsAppLink(item.text)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.6rem 0.8rem",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "2px",
                  fontSize: "0.78rem",
                  color: "#FAF7F2",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(197, 160, 89, 0.15)";
                  e.currentTarget.style.borderColor = "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                }}
              >
                <span>{item.label}</span>
                <ArrowUpRight size={13} color="var(--color-gold)" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          color: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 6px 25px rgba(37, 211, 102, 0.4)",
          border: "2px solid #FFFFFF",
          transition: "transform 0.25s ease"
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        aria-label="Contact Studio on WhatsApp"
      >
        <MessageCircle size={26} />
      </button>
    </div>
  );
}
