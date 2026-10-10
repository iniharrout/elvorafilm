import React from "react";
import { PACKAGES_DATA, PACKAGE_NOTE } from "../data/packagesData";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import { Check, ArrowUpRight, MessageCircle, Info } from "lucide-react";

export default function PackagesSection({ onInquirePackage }) {
  return (
    <section id="packages" className="section-dark-alt grain-overlay">
      <div className="container-wide" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "780px",
            margin: "0 auto 4rem"
          }}
        >
          <span className="eyebrow">WEDDING PACKAGES</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.3rem, 4.8vw, 3.8rem)",
              fontWeight: 300,
              color: "#FAF7F2",
              lineHeight: 1.15,
              marginBottom: "1.2rem"
            }}
          >
            Curated Coverage Options, <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-light)",
                fontWeight: 400
              }}
            >
              Crafted For Your Celebration.
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-text-light-muted)",
              fontSize: "1.06rem",
              lineHeight: 1.7
            }}
          >
            Choose from our three signature collections. Every package includes
            dedicated drone aerial perspectives, full cinematic editing, and
            bespoke fine-art album printing.
          </p>
        </div>

        {/* 3 Packages Editorial Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2.2rem",
            alignItems: "stretch"
          }}
          className="packages-grid"
        >
          {PACKAGES_DATA.map((pkg) => {
            const isFeatured = pkg.recommended;
            const waMessage = `Hi Elvora Film, I am interested in the ${pkg.code} — ${pkg.name} package. Could you share more details and availability?`;
            const waUrl = getWhatsAppLink(waMessage);

            return (
              <div
                key={pkg.id}
                style={{
                  backgroundColor: isFeatured ? "#17161A" : "var(--color-cinema-card)",
                  border: isFeatured
                    ? "1px solid var(--color-gold)"
                    : "1px solid var(--color-cinema-border)",
                  borderRadius: "2px",
                  padding: "2.8rem 2.2rem",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease"
                }}
                className="package-card"
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = isFeatured
                    ? "0 24px 60px rgba(197, 160, 89, 0.18)"
                    : "0 20px 45px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Top Badge for Featured */}
                {isFeatured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-12px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "var(--color-gold)",
                      color: "#0C0C0E",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      padding: "0.3rem 1.1rem",
                      borderRadius: "20px",
                      whiteSpace: "nowrap"
                    }}
                  >
                    MOST POPULAR COLLECTION
                  </div>
                )}

                {/* Package Code & Name */}
                <div style={{ marginBottom: "1.8rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "0.3rem"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.22em",
                        color: "var(--color-gold)",
                        textTransform: "uppercase"
                      }}
                    >
                      {pkg.code}
                    </span>
                    <span
                      style={{
                        fontSize: "0.74rem",
                        color: "rgba(247, 244, 238, 0.55)",
                        letterSpacing: "0.08em"
                      }}
                    >
                      {pkg.durationSummary}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2rem",
                      color: "#FAF7F2",
                      fontWeight: 400,
                      lineHeight: 1.15,
                      margin: "0 0 0.8rem"
                    }}
                  >
                    {pkg.name}
                  </h3>

                  <p
                    style={{
                      color: "var(--color-text-light-muted)",
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      minHeight: "48px"
                    }}
                  >
                    {pkg.summary}
                  </p>
                </div>

                {/* Inclusions Title */}
                <div
                  style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    paddingTop: "1.4rem",
                    marginBottom: "1.2rem"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "0.68rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--color-gold-light)",
                      display: "block",
                      marginBottom: "1rem"
                    }}
                  >
                    PACKAGE INCLUSIONS ({pkg.inclusions.length})
                  </span>

                  {/* Checklist of all official inclusions */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem"
                    }}
                  >
                    {pkg.inclusions.map((item, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          fontSize: "0.88rem",
                          color: "rgba(247, 244, 238, 0.88)",
                          lineHeight: 1.45
                        }}
                      >
                        <span
                          style={{
                            marginTop: "2px",
                            flexShrink: 0,
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            backgroundColor: "rgba(197, 160, 89, 0.15)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          <Check size={11} color="var(--color-gold-light)" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Actions */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "2rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.85rem"
                  }}
                >
                  <button
                    onClick={() => onInquirePackage(pkg.name)}
                    className={isFeatured ? "btn-gold" : "btn-primary"}
                    style={{ width: "100%", padding: "0.95rem 1rem" }}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowUpRight size={14} />
                  </button>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      color: "var(--color-gold-light)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.6rem",
                      transition: "opacity 0.2s ease"
                    }}
                  >
                    <MessageCircle size={14} />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Customization and Pricing Confirmation */}
        <div
          style={{
            marginTop: "3.5rem",
            padding: "1.4rem 2rem",
            backgroundColor: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "2px",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
            maxWidth: "920px",
            margin: "3.5rem auto 0"
          }}
        >
          <Info size={20} color="var(--color-gold)" style={{ flexShrink: 0, marginTop: "2px" }} />
          <div>
            <p
              style={{
                color: "var(--color-text-light-muted)",
                fontSize: "0.88rem",
                lineHeight: 1.6,
                margin: 0
              }}
            >
              {PACKAGE_NOTE}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
