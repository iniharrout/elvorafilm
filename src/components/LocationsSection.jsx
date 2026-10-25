import React from "react";
import { LOCATIONS_DATA } from "../data/locationsData";
import { MapPin, ArrowRight } from "lucide-react";

export default function LocationsSection({ onNavigate }) {
  const locations = Object.values(LOCATIONS_DATA);

  return (
    <section
      id="locations-section"
      style={{
        backgroundColor: "#0C0C0E",
        color: "#FAF7F2",
        padding: "clamp(4.5rem, 7.5vw, 7.5rem) 1.5rem",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
      }}
    >
      <div className="container-wide">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "820px", margin: "0 auto 3.5rem auto" }}>
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.74rem",
              letterSpacing: "0.22em",
              color: "var(--color-gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.85rem"
            }}
          >
            REGIONAL WEDDING DESTINATIONS
          </span>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.1rem, 4.2vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.18,
              color: "#FFFFFF",
              marginBottom: "1rem"
            }}
          >
            Luxury Wedding Cinematography Across Odisha
          </h2>

          <p
            style={{
              fontSize: "1.02rem",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.72)",
              margin: 0
            }}
          >
            From the grand ballrooms of Bhubaneswar to the royal courtyards of Cuttack, the silk traditions of Berhampur, and serene beach vows in Puri.
          </p>
        </div>

        {/* 4 Location Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.8rem",
            marginBottom: "3rem"
          }}
        >
          {locations.map((loc) => (
            <div
              key={loc.slug}
              style={{
                backgroundColor: "#141417",
                borderRadius: "10px",
                border: "1px solid rgba(197, 160, 89, 0.2)",
                padding: "2rem 1.8rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "border-color 0.3s ease, transform 0.3s ease"
              }}
              className="location-card"
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                  <MapPin size={15} color="var(--color-gold)" />
                  <span
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: "0.72rem",
                      letterSpacing: "0.15em",
                      color: "var(--color-gold-light)",
                      textTransform: "uppercase"
                    }}
                  >
                    {loc.regionName.split("&")[0]}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.75rem",
                    fontWeight: 400,
                    color: "#FAF7F2",
                    marginBottom: "0.6rem"
                  }}
                >
                  {loc.city}
                </h3>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "rgba(255, 255, 255, 0.68)",
                    lineHeight: 1.6,
                    marginBottom: "1.4rem"
                  }}
                >
                  {loc.heroExcerpt}
                </p>

                {/* Popular Venues snippets */}
                <div style={{ marginBottom: "1.2rem", fontSize: "0.8rem", color: "var(--color-gold-light)" }}>
                  <span style={{ color: "rgba(255, 255, 255, 0.5)", display: "block", marginBottom: "0.25rem" }}>
                    Notable Venues:
                  </span>
                  {loc.topVenues.slice(0, 2).map((v) => v.name.split("&")[0]).join(" • ")}
                </div>
              </div>

              <button
                onClick={() => onNavigate(`location-${loc.slug}`)}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--color-gold-light)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                  cursor: "pointer",
                  letterSpacing: "0.06em"
                }}
              >
                <span>{loc.city} Wedding Guide</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* View All Locations Button */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => onNavigate("locations")}
            className="btn btn-outline"
            style={{
              borderColor: "rgba(197, 160, 89, 0.4)",
              color: "var(--color-gold-light)",
              padding: "0.85rem 2rem",
              fontSize: "0.88rem"
            }}
          >
            Explore All Odisha Wedding Services
          </button>
        </div>
      </div>
    </section>
  );
}
