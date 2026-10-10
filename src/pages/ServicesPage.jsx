import React from "react";
import { SERVICES_DATA } from "../data/servicesData";
import { CheckCircle2, ArrowUpRight, Camera, Film } from "lucide-react";

export default function ServicesPage({ onInquireService }) {
  return (
    <div style={{ paddingTop: "7rem", backgroundColor: "var(--color-ivory)", minHeight: "100vh" }}>
      {/* Page Header */}
      <section style={{ padding: "3rem 0 4.5rem", borderBottom: "1px solid rgba(24, 22, 20, 0.08)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span className="eyebrow">SERVICES &amp; DISCIPLINES</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              color: "var(--color-text-main)",
              fontWeight: 300,
              lineHeight: 1.12,
              marginBottom: "1.2rem"
            }}
          >
            Artisan Cinematography <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold-dark)", fontWeight: 400 }}>
              &amp; Timeless Photography.
            </em>
          </h1>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.1rem",
              lineHeight: 1.75
            }}
          >
            We offer eight specialized disciplines spanning pre-wedding
            storytelling, traditional ceremony preservation, acrobatic FPV drone
            perspectives, and handcrafted fine-art album printing.
          </p>
        </div>
      </section>

      {/* In-depth 8 Services Showcase */}
      <section style={{ padding: "5rem 0 7rem" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "5.5rem" }}>
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "clamp(2.5rem, 5vw, 4.5rem)",
                    alignItems: "center"
                  }}
                  className={`service-detail-row ${isEven ? "service-detail-reverse" : ""}`}
                >
                  {/* Visual Imagery Panel */}
                  <div style={{ position: "relative" }}>
                    <div
                      className="image-zoom-frame"
                      style={{
                        height: "420px",
                        borderRadius: "2px",
                        boxShadow: "0 20px 45px rgba(24, 22, 20, 0.12)",
                        border: "1px solid rgba(24, 22, 20, 0.08)"
                      }}
                    >
                      <img
                        src={service.image}
                        alt={`${service.title} - Elvora Film`}
                        loading="lazy"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>

                    {/* Service Number Accent */}
                    <div
                      style={{
                        position: "absolute",
                        top: "-15px",
                        left: isEven ? "auto" : "-15px",
                        right: isEven ? "-15px" : "auto",
                        backgroundColor: "#0C0C0E",
                        color: "var(--color-gold-light)",
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.6rem",
                        padding: "0.4rem 1rem",
                        border: "1px solid var(--color-gold-border)",
                        boxShadow: "0 8px 24px rgba(0,0,0,0.2)"
                      }}
                    >
                      {service.number}
                    </div>
                  </div>

                  {/* Descriptive Content */}
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-label)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.2em",
                        color: "var(--color-gold-dark)",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "0.5rem"
                      }}
                    >
                      {service.aspect}
                    </span>

                    <h2
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(2rem, 3.8vw, 2.9rem)",
                        color: "var(--color-text-main)",
                        fontWeight: 400,
                        lineHeight: 1.18,
                        marginBottom: "0.4rem"
                      }}
                    >
                      {service.title}
                    </h2>

                    <p
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontStyle: "italic",
                        color: "var(--color-gold-dark)",
                        fontSize: "1.15rem",
                        marginBottom: "1.4rem"
                      }}
                    >
                      "{service.tagline}"
                    </p>

                    <p
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "1.02rem",
                        lineHeight: 1.75,
                        marginBottom: "1.8rem"
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div
                      style={{
                        backgroundColor: "#FFFFFF",
                        border: "1px solid rgba(24, 22, 20, 0.08)",
                        padding: "1.6rem",
                        borderRadius: "2px",
                        marginBottom: "2rem"
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-label)",
                          fontSize: "0.68rem",
                          letterSpacing: "0.16em",
                          textTransform: "uppercase",
                          color: "var(--color-text-main)",
                          display: "block",
                          marginBottom: "0.8rem",
                          fontWeight: 600
                        }}
                      >
                        KEY DELIVERABLES &amp; CRAFT HIGHLIGHTS
                      </span>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                          gap: "0.65rem"
                        }}
                      >
                        {service.deliverables.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              fontSize: "0.86rem",
                              color: "var(--color-text-main)"
                            }}
                          >
                            <CheckCircle2 size={14} color="var(--color-gold-dark)" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onInquireService(service.title)}
                      className="btn-primary"
                    >
                      <span>INQUIRE ABOUT {service.title}</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .service-detail-row {
            grid-template-columns: 1fr 1.05fr !important;
          }
          .service-detail-reverse {
            direction: rtl;
          }
          .service-detail-reverse > * {
            direction: ltr;
          }
        }
      `}</style>
    </div>
  );
}
