import React, { useState } from "react";
import { LOCATIONS_DATA } from "../data/locationsData";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import SeoMeta from "../components/SeoMeta";
import { MapPin, ArrowRight, Search, MessageCircle } from "lucide-react";

export default function LocationsHubPage({ onNavigate, onOpenInquiry }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState("All");

  const allLocations = Object.values(LOCATIONS_DATA);

  // Extract distinct zones
  const zones = ["All", "Coastal Odisha", "Western Odisha", "Northern Odisha", "Southern Odisha", "Central Odisha"];

  const filteredLocations = allLocations.filter((loc) => {
    const matchesSearch =
      loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (loc.district && loc.district.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (loc.tagline && loc.tagline.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesZone = selectedZone === "All" || loc.zone === selectedZone;

    return matchesSearch && matchesZone;
  });

  const hubSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Wedding Photography & Cinematography Services Across All 30 Districts of Odisha — Elvora Film",
    "description": "Elvora Film covers luxury weddings, traditional Odia ceremonies, and destination celebrations across every single district of Odisha.",
    "numberOfItems": allLocations.length,
    "itemListElement": allLocations.map((loc, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": `Wedding Photography in ${loc.city} (${loc.district || loc.city})`,
      "url": `https://www.elvorafilm.com/#location-${loc.slug}`
    }))
  };

  return (
    <main style={{ backgroundColor: "#FAF7F2", color: "#181614", paddingTop: "5.5rem" }}>
      <SeoMeta
        title="Wedding Photography in All 30 Districts of Odisha | Elvora Film"
        description="Comprehensive wedding photography & cinematic films across all 30 districts of Odisha: Bhubaneswar, Cuttack, Sambalpur, Rourkela, Berhampur, Puri, Balasore & beyond."
        keywords={[
          "Wedding photography in Odisha 30 districts",
          "Wedding photographer Bhubaneswar",
          "Wedding photographer Cuttack",
          "Wedding photographer Sambalpur",
          "Wedding photographer Rourkela",
          "Wedding photographer Berhampur",
          "Wedding photographer Puri",
          "Wedding photography Balasore",
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
        <div className="container" style={{ maxWidth: "950px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "rgba(197, 160, 89, 0.15)",
              border: "1px solid rgba(197, 160, 89, 0.3)",
              padding: "0.35rem 1rem",
              borderRadius: "20px",
              marginBottom: "1.2rem"
            }}
          >
            <MapPin size={15} color="var(--color-gold)" />
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.76rem",
                letterSpacing: "0.2em",
                color: "var(--color-gold-light)",
                textTransform: "uppercase"
              }}
            >
              ALL 30 DISTRICTS OF ODISHA COVERED
            </span>
          </div>

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
            Preserving Sacred Love Stories in Every Corner of Odisha
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.75,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "780px",
              margin: "0 auto 2.5rem auto"
            }}
          >
            From the grand coastal ballrooms of Bhubaneswar and Puri to the royal Sambalpuri handloom weddings of Western Odisha, the steel city opulence of Rourkela, and the misty hills of Koraput and Daringbadi.
          </p>

          <div style={{ display: "inline-flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <button
              onClick={() => onOpenInquiry()}
              className="btn btn-gold"
              style={{ padding: "0.95rem 2rem" }}
            >
              Inquire for Your Wedding Date
            </button>
            <a
              href={getWhatsAppLink("Hi Elvora Film, I would like to check wedding photography availability for our district in Odisha.")}
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

      {/* Search & Zone Filter Bar */}
      <section
        style={{
          backgroundColor: "#FFFFFF",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "1.5rem",
          position: "sticky",
          top: "60px",
          zIndex: 10,
          boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
        }}
      >
        <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Search Box */}
          <div style={{ position: "relative", maxWidth: "550px", width: "100%", margin: "0 auto" }}>
            <Search
              size={18}
              color="var(--color-gold-dark)"
              style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}
            />
            <input
              type="text"
              placeholder="Search your district or city (e.g. Sambalpur, Rourkela, Balasore, Mayurbhanj)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem 0.75rem 2.6rem",
                borderRadius: "30px",
                border: "1px solid rgba(197, 160, 89, 0.4)",
                backgroundColor: "#FAF7F2",
                fontSize: "0.92rem",
                outline: "none"
              }}
            />
          </div>

          {/* Zone Filter Pills */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              overflowX: "auto",
              justifyContent: "center",
              flexWrap: "wrap",
              paddingBottom: "0.2rem"
            }}
          >
            {zones.map((zone) => (
              <button
                key={zone}
                onClick={() => setSelectedZone(zone)}
                style={{
                  backgroundColor: selectedZone === zone ? "var(--color-gold)" : "#F3EFE8",
                  color: selectedZone === zone ? "#0C0C0E" : "#4A453F",
                  border: "none",
                  padding: "0.45rem 1.1rem",
                  borderRadius: "20px",
                  fontSize: "0.82rem",
                  fontWeight: selectedZone === zone ? 600 : 400,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease"
                }}
              >
                {zone}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid of All 30 Districts */}
      <section style={{ padding: "clamp(3.5rem, 6vw, 5.5rem) 1.5rem" }}>
        <div className="container">
          <div style={{ marginBottom: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", margin: 0, fontWeight: 400 }}>
              Showing {filteredLocations.length} of 30 Districts
            </h2>
            <span style={{ fontSize: "0.85rem", color: "#666" }}>
              Click any district to explore venues, rituals, pricing &amp; availability
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem"
            }}
          >
            {filteredLocations.map((loc) => (
              <article
                key={loc.slug}
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "10px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease"
                }}
              >
                <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <MapPin size={15} color="var(--color-gold)" />
                      <span style={{ fontSize: "0.78rem", color: "var(--color-gold-dark)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        {loc.zone || "ODISHA"}
                      </span>
                    </div>

                    <span style={{ fontSize: "0.72rem", backgroundColor: "#F3EFE8", padding: "0.2rem 0.55rem", borderRadius: "10px", color: "#555" }}>
                      PIN: {loc.pinCode}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.85rem",
                      fontWeight: 500,
                      color: "#181614",
                      margin: "0.3rem 0 0.5rem 0"
                    }}
                  >
                    {loc.city}
                  </h3>

                  {loc.district && loc.district !== loc.city && (
                    <span style={{ fontSize: "0.82rem", color: "#777", marginBottom: "0.6rem", display: "block" }}>
                      {loc.district} District
                    </span>
                  )}

                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
                      fontSize: "0.98rem",
                      color: "var(--color-gold-dark)",
                      marginBottom: "0.85rem",
                      lineHeight: 1.45
                    }}
                  >
                    "{loc.tagline}"
                  </p>

                  <p style={{ fontSize: "0.9rem", color: "#5E5850", lineHeight: 1.6, marginBottom: "1.2rem", flex: 1 }}>
                    {loc.heroExcerpt}
                  </p>

                  {/* Venues Snippet */}
                  {loc.topVenues && loc.topVenues.length > 0 && (
                    <div style={{ marginBottom: "1.5rem" }}>
                      <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#888", display: "block", marginBottom: "0.4rem" }}>
                        POPULAR VENUES:
                      </span>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                        {loc.topVenues.slice(0, 2).map((v, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: "0.74rem",
                              backgroundColor: "#FAF7F2",
                              border: "1px solid rgba(0,0,0,0.06)",
                              padding: "0.2rem 0.55rem",
                              borderRadius: "12px",
                              color: "#4A453F"
                            }}
                          >
                            {v.name.split("&")[0].slice(0, 26)}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Link */}
                  <button
                    onClick={() => onNavigate(`location-${loc.slug}`)}
                    className="btn btn-outline"
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                      display: "flex",
                      alignItems: "center",
                      marginTop: "auto",
                      padding: "0.75rem 1.2rem",
                      fontSize: "0.85rem"
                    }}
                  >
                    <span>{loc.city} Wedding Guide</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredLocations.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 1rem", backgroundColor: "#FFFFFF", borderRadius: "10px" }}>
              <p style={{ fontSize: "1.1rem", color: "#666", marginBottom: "1rem" }}>
                No district found matching "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedZone("All");
                }}
                className="btn btn-gold"
              >
                Clear Search &amp; Show All 30 Districts
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
