import React from "react";
import { BRAND_INFO } from "../data/brandInfo";
import { ShieldCheck, Sparkles, Layers, Sliders, Clock, RotateCcw, Lock } from "lucide-react";

export default function DifferenceSection() {
  const commitIcons = [
    Sparkles,
    Layers,
    Sliders,
    ShieldCheck,
    Clock,
    RotateCcw,
    Lock
  ];

  return (
    <section className="section-light">
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            maxWidth: "760px",
            marginBottom: "4rem"
          }}
        >
          <span className="eyebrow">OUR DIFFERENCE</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.3rem, 4.8vw, 3.8rem)",
              fontWeight: 300,
              color: "var(--color-text-main)",
              lineHeight: 1.15,
              marginBottom: "1.2rem"
            }}
          >
            The Little Things <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-dark)",
                fontWeight: 400
              }}
            >
              Make The Lasting Difference.
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.06rem",
              lineHeight: 1.7
            }}
          >
            We believe honest craftsmanship and structured commitments build
            unshakeable trust. Here are our core commitments to every couple we
            serve.
          </p>
        </div>

        {/* 7 Commitments Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem"
          }}
        >
          {BRAND_INFO.commitments.map((item, idx) => {
            const Icon = commitIcons[idx % commitIcons.length];
            const isHighlight = item.id === "revision" || item.id === "care";
            return (
              <div
                key={item.id}
                style={{
                  backgroundColor: isHighlight ? "rgba(197, 160, 89, 0.06)" : "#FFFFFF",
                  border: isHighlight
                    ? "1px solid var(--color-gold-border)"
                    : "1px solid rgba(24, 22, 20, 0.08)",
                  borderRadius: "2px",
                  padding: "2rem 2.2rem",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-gold)";
                  e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.06)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isHighlight
                    ? "var(--color-gold-border)"
                    : "rgba(24, 22, 20, 0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    marginBottom: "1rem"
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "50%",
                      backgroundColor: isHighlight
                        ? "var(--color-gold)"
                        : "rgba(24, 22, 20, 0.05)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: isHighlight ? "#0C0C0E" : "var(--color-gold-dark)"
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.45rem",
                      fontWeight: 400,
                      color: "var(--color-text-main)",
                      margin: 0
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.94rem",
                    lineHeight: 1.65,
                    margin: 0
                  }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
