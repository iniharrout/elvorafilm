import React from "react";
import { SERVICES_DATA } from "../data/servicesData";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function CraftServices({ onSelectService, onInquireService }) {
  return (
    <section id="services" className="section-light">
      <div className="container-wide">
        {/* Section Header */}
        <div
          style={{
            maxWidth: "740px",
            marginBottom: "4rem"
          }}
        >
          <span className="eyebrow">OUR CRAFT</span>
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
            Every Detail <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-dark)",
                fontWeight: 400
              }}
            >
              Has A Story.
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.06rem",
              lineHeight: 1.7
            }}
          >
            From quiet glances before the rituals to grand aerial venue sweeps
            and hand-bound heirloom box albums, we offer complete artistic
            coverage tailored to modern Indian celebrations.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: "2.2rem"
          }}
          className="services-grid"
        >
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(24, 22, 20, 0.08)",
                borderRadius: "2px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.4s var(--ease-editorial), box-shadow 0.4s ease, border-color 0.4s ease"
              }}
              className="service-card"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "var(--color-gold)";
                e.currentTarget.style.boxShadow = "0 18px 45px rgba(24, 22, 20, 0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(24, 22, 20, 0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Service Visual Header */}
              <div
                className="image-zoom-frame"
                style={{ height: "220px", position: "relative" }}
              >
                <img
                  src={service.image}
                  alt={`${service.title} by Elvora Film`}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(12, 12, 14, 0.1) 0%, rgba(12, 12, 14, 0.6) 100%)"
                  }}
                />

                {/* Service Number Tag */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    left: "1rem",
                    backgroundColor: "rgba(12, 12, 14, 0.8)",
                    backdropFilter: "blur(4px)",
                    color: "var(--color-gold-light)",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.1rem",
                    padding: "0.2rem 0.7rem",
                    border: "1px solid rgba(197, 160, 89, 0.3)"
                  }}
                >
                  {service.number}
                </div>

                {/* Aspect Badge */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    color: "#FFFFFF",
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-label)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase"
                  }}
                >
                  {service.aspect}
                </div>
              </div>

              {/* Service Content Body */}
              <div
                style={{
                  padding: "1.8rem 1.8rem 2rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    fontWeight: 400,
                    color: "var(--color-text-main)",
                    marginBottom: "0.4rem"
                  }}
                >
                  {service.title}
                </h3>

                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.78rem",
                    letterSpacing: "0.08em",
                    color: "var(--color-gold-dark)",
                    display: "block",
                    marginBottom: "1rem",
                    fontWeight: 500
                  }}
                >
                  {service.tagline}
                </span>

                <p
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "0.93rem",
                    lineHeight: 1.65,
                    marginBottom: "1.4rem"
                  }}
                >
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "1.2rem",
                    borderTop: "1px solid rgba(24, 22, 20, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.45rem"
                  }}
                >
                  {service.deliverables.slice(0, 3).map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        fontSize: "0.8rem",
                        color: "var(--color-text-main)"
                      }}
                    >
                      <CheckCircle2 size={13} color="var(--color-gold-dark)" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: "1.4rem" }}>
                  <button
                    onClick={() => onInquireService(service.title)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.65rem 0",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-text-main)",
                      borderTop: "1px solid rgba(24, 22, 20, 0.06)",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-dark)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-main)")}
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
