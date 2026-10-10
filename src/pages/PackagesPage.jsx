import React from "react";
import { PACKAGES_DATA, PACKAGE_NOTE } from "../data/packagesData";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import { Check, Info, ArrowUpRight, MessageCircle } from "lucide-react";

export default function PackagesPage({ onInquirePackage }) {
  // Comprehensive feature comparison list across all packages
  const comparisonFeatures = [
    { name: "Total Coverage Duration", gamma: "3-Day Shoot", beta: "5-Day Shoot (incl. 2-Day Pre-Wedding)", alpha: "6-Day Shoot (incl. 3-Day Pre-Wedding)" },
    { name: "Drone Aerial Coverage", gamma: "Included", beta: "Included", alpha: "Included" },
    { name: "Cinematic Feature Video", gamma: "One full cinematic edit", beta: "One full cinematic edit", alpha: "One full cinematic edit" },
    { name: "Teaser & Highlights", gamma: "Teaser", beta: "Teaser & highlights", alpha: "Teaser & highlights" },
    { name: "Social Media Reels", gamma: "4 Reels", beta: "6 Reels", alpha: "8 Reels" },
    { name: "Social Media Posts", gamma: "10 Posts", beta: "20 Posts", alpha: "30 Posts" },
    { name: "Post Calendar", gamma: "Included", beta: "Included", alpha: "Included" },
    { name: "Pendrive Delivery", gamma: "Included", beta: "Included", alpha: "Included" },
    { name: "Pre-Wedding Coverage", gamma: "—", beta: "2-Day Pre-Wedding (Videos, Reels, Post)", alpha: "3-Day Pre-Wedding (Videos, Reels, Post)" },
    { name: "3 Days To Go Post", gamma: "—", beta: "Included", alpha: "Included" },
    { name: "Fine-Art Album", gamma: "20-page advanced-design album", beta: "25-page advanced-design box album", alpha: "30-page advanced-design box album" },
    { name: "Mini Album Book", gamma: "—", beta: "Included", alpha: "Included" },
    { name: "FPV Aerial Shoot", gamma: "—", beta: "—", alpha: "Dedicated FPV Shoot" },
    { name: "Candid Shoot", gamma: "—", beta: "—", alpha: "Dedicated Candid Shoot" },
    { name: "Server Face Cam", gamma: "—", beta: "—", alpha: "Included" },
    { name: "Documentary Short Video", gamma: "—", beta: "—", alpha: "Included" }
  ];

  return (
    <div style={{ paddingTop: "7rem", backgroundColor: "var(--color-cinema-black)", minHeight: "100vh" }}>
      {/* Page Header */}
      <section style={{ padding: "3rem 0 4.5rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span className="eyebrow">WEDDING COLLECTIONS</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              color: "#FAF7F2",
              fontWeight: 300,
              lineHeight: 1.12,
              marginBottom: "1.2rem"
            }}
          >
            Curated Investment In <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold-light)", fontWeight: 400 }}>
              Timeless Wedding Storytelling.
            </em>
          </h1>
          <p
            style={{
              color: "var(--color-text-light-muted)",
              fontSize: "1.1rem",
              lineHeight: 1.75
            }}
          >
            We offer three distinct collections designed to match your celebration
            itinerary, venue scale, and storytelling vision. Inquire directly for
            date availability and pricing confirmation.
          </p>
        </div>
      </section>

      {/* Package Cards Grid */}
      <section style={{ padding: "4rem 0 5rem" }}>
        <div className="container-wide">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.4rem",
              alignItems: "stretch"
            }}
          >
            {PACKAGES_DATA.map((pkg) => {
              const isFeatured = pkg.recommended;
              const waUrl = getWhatsAppLink(
                `Hi Elvora Film, I would like to inquire about the ${pkg.code} — ${pkg.name} package for my wedding dates.`
              );

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
                    position: "relative"
                  }}
                >
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
                        borderRadius: "20px"
                      }}
                    >
                      RECOMMENDED
                    </div>
                  )}

                  <div style={{ marginBottom: "1.8rem" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.22em",
                        color: "var(--color-gold)",
                        textTransform: "uppercase"
                      }}
                    >
                      {pkg.code}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "2rem",
                        color: "#FAF7F2",
                        fontWeight: 400,
                        margin: "0.3rem 0 0.6rem"
                      }}
                    >
                      {pkg.name}
                    </h2>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: "rgba(247, 244, 238, 0.6)",
                        display: "block",
                        marginBottom: "0.8rem"
                      }}
                    >
                      {pkg.durationSummary}
                    </span>
                    <p style={{ color: "var(--color-text-light-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                      {pkg.summary}
                    </p>
                  </div>

                  {/* Checklist */}
                  <div
                    style={{
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      paddingTop: "1.4rem",
                      marginBottom: "1.4rem"
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
                      DELIVERABLES INCLUDED ({pkg.inclusions.length})
                    </span>

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

                  {/* Action Buttons */}
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
                        padding: "0.5rem"
                      }}
                    >
                      <MessageCircle size={14} />
                      <span>WhatsApp Inquiry</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Side-by-Side Inclusions Comparison Table */}
      <section style={{ padding: "3rem 0 6rem", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="eyebrow">FEATURE COMPARISON</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#FAF7F2",
                fontWeight: 300
              }}
            >
              Side-by-Side Coverage Matrix
            </h2>
          </div>

          <div
            style={{
              overflowX: "auto",
              backgroundColor: "var(--color-cinema-card)",
              border: "1px solid var(--color-cinema-border)",
              borderRadius: "2px"
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                minWidth: "680px"
              }}
            >
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.12)", backgroundColor: "#111114" }}>
                  <th style={{ padding: "1.2rem 1.5rem", color: "var(--color-gold-light)", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Deliverable / Feature
                  </th>
                  <th style={{ padding: "1.2rem 1.5rem", color: "#FAF7F2", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Gamma Essential
                  </th>
                  <th style={{ padding: "1.2rem 1.5rem", color: "var(--color-gold)", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Beta Advanced
                  </th>
                  <th style={{ padding: "1.2rem 1.5rem", color: "#FAF7F2", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    Alpha Signature
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                      backgroundColor: i % 2 === 0 ? "transparent" : "rgba(255, 255, 255, 0.02)"
                    }}
                  >
                    <td style={{ padding: "1rem 1.5rem", color: "#FAF7F2", fontSize: "0.88rem", fontWeight: 500 }}>
                      {row.name}
                    </td>
                    <td style={{ padding: "1rem 1.5rem", color: "var(--color-text-light-muted)", fontSize: "0.85rem" }}>
                      {row.gamma}
                    </td>
                    <td style={{ padding: "1rem 1.5rem", color: "var(--color-gold-light)", fontSize: "0.85rem" }}>
                      {row.beta}
                    </td>
                    <td style={{ padding: "1rem 1.5rem", color: "#FAF7F2", fontSize: "0.85rem", fontWeight: 500 }}>
                      {row.alpha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.2rem 1.8rem",
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "2px",
              display: "flex",
              alignItems: "center",
              gap: "0.85rem"
            }}
          >
            <Info size={18} color="var(--color-gold)" style={{ flexShrink: 0 }} />
            <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--color-text-light-muted)", lineHeight: 1.6 }}>
              {PACKAGE_NOTE}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
