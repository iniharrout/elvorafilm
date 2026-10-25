import React from "react";
import { LOCATIONS_DATA } from "../data/locationsData";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import SeoMeta from "../components/SeoMeta";
import { MapPin, ArrowRight, ShieldCheck, Camera, Sparkles, MessageCircle } from "lucide-react";

export default function LocationsHubPage({ onNavigate, onOpenInquiry }) {
  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Wedding Photography & Cinematography Locations in Odisha by Elvora Film",
    "description": "Elvora Film documents luxury weddings and destination celebrations across all major cities and coastal retreats in Odisha.",
    "itemListElement": Object.values(LOCATIONS_DATA).map((loc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": `Wedding Photography in ${loc.city}`,
      "url": `https://www.elvorafilm.com/#location-${loc.slug}`
    }))
  };

  return (
    <main style={{ backgroundColor: "#FAF7F2", color: "#181614", paddingTop: "5.5rem" }}>
      <SeoMeta
        title="Top Wedding Photography Locations in Odisha | Elvora Film"
        description="Explore luxury wedding photography & cinematography across Odisha: Bhubaneswar, Cuttack, Berhampur, Puri, and destination coastal retreats with Elvora Film."
        keywords={[
          "Wedding photography locations Odisha",
          "Wedding photographer Bhubaneswar",
          "Wedding photography Cuttack",
          "Wedding photographer Berhampur",
          "Beach wedding Puri",
          "Elvora Film Odisha"
        ]}
        canonicalUrl="https://www.elvorafilm.com/#locations"
        schemaJson={hubSchema}
      />

      {/* Hero */}
      <section
        style={{
          backgroundColor: "#0C0C0E",
          color: "#FAF7F2",
          padding: "clamp(4.5rem, 8vw, 7rem) 1.5rem",
          textAlign: "center"
        }}
      >
        <div className="container" style={{ maxWidth: "900px" }}>
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.78rem",
              letterSpacing: "0.24em",
              color: "var(--color-gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem"
            }}
          >
            REGIONAL WEDDING COVERAGE • ODISHA
          </span>

          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: "1.5rem",
              color: "#FFFFFF"
            }}
          >
            Preserving Love Stories Across Odisha
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "750px",
              margin: "0 auto 2.5rem auto"
            }}
          >
            From the historic temples of Bhubaneswar and the silver filigree heritage of Cuttack, to the silk handloom traditions of Berhampur and the roaring shores of Puri.
          </p>

          <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={() => onOpenInquiry()}
              className="btn btn-gold"
              style={{ padding: "0.95rem 2rem" }}
            >
              Inquire for Your Date
            </button>
            <a
              href={getWhatsAppLink("Hi Elvora Film, I would like to check availability for our wedding in Odisha.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "#FFF", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              <MessageCircle size={17} color="var(--color-gold)" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Grid of Locations */}
      <section style={{ padding: "clamp(4.5rem, 7vw, 6.5rem) 1.5rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem"
            }}
          >
            {Object.values(LOCATIONS_DATA).map((loc) => (
              <article
                key={loc.slug}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease"
                }}
              >
                <div style={{ padding: "2.2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    <MapPin size={17} color="var(--color-gold)" />
                    <span style={{ fontSize: "0.82rem", color: "var(--color-gold)", fontWeight: 600, letterSpacing: "0.08em" }}>
                      {loc.regionName.toUpperCase()}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2rem",
                      fontWeight: 400,
                      color: "#181614",
                      marginBottom: "0.75rem"
                    }}
                  >
                    {loc.city}
                  </h2>

                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: "1.05rem",
                      color: "var(--color-gold-dark)",
                      marginBottom: "1rem"
                    }}
                  >
                    "{loc.tagline}"
                  </p>

                  <p style={{ fontSize: "0.93rem", color: "#5E5850", lineHeight: 1.65, marginBottom: "1.5rem", flex: 1 }}>
                    {loc.heroExcerpt}
                  </p>

                  {/* Top Venues pill list */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#888", display: "block", marginBottom: "0.5rem" }}>
                      FEATURED VENUES &amp; HUBS:
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {loc.topVenues.slice(0, 3).map((v, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: "0.76rem",
                            backgroundColor: "#F3EFE8",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "14px",
                            color: "#4A453F"
                          }}
                        >
                          {v.name.split("&")[0]}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link CTA */}
                  <button
                    onClick={() => onNavigate(`location-${loc.slug}`)}
                    className="btn btn-outline"
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "auto"
                    }}
                  >
                    <span>View {loc.city} Wedding Guide</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
