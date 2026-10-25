import React, { useState } from "react";
import { LOCATIONS_DATA } from "../data/locationsData";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import SeoMeta from "../components/SeoMeta";
import { 
  MapPin, 
  CheckCircle, 
  MessageCircle, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function LocationPage({ cityKey, onNavigate, onOpenInquiry }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const location = LOCATIONS_DATA[cityKey] || LOCATIONS_DATA.bhubaneswar;

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Structured Data Schema for LocalBusiness + FAQPage
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "PhotographyBusiness",
        "@id": `https://www.elvorafilm.com/#local-${location.slug}`,
        "name": `Elvora Film - Wedding Photography & Cinematography ${location.city}`,
        "url": `https://www.elvorafilm.com/#location-${location.slug}`,
        "logo": "https://www.elvorafilm.com/assets/images/elvora-emblem.png",
        "image": "https://www.elvorafilm.com/assets/images/hero/hero-main.jpg",
        "description": location.metaDescription,
        "telephone": BRAND_INFO.phoneRaw,
        "email": BRAND_INFO.email,
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BRAND_INFO.address.plot + ", " + BRAND_INFO.address.locality,
          "addressLocality": location.city,
          "addressRegion": "Odisha",
          "postalCode": location.pinCode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": location.geo.latitude,
          "longitude": location.geo.longitude
        },
        "areaServed": [
          location.city,
          location.district,
          "Odisha",
          "India"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "48"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": location.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.elvorafilm.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://www.elvorafilm.com/#locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": location.city,
            "item": `https://www.elvorafilm.com/#location-${location.slug}`
          }
        ]
      }
    ]
  };

  return (
    <main style={{ backgroundColor: "#FAF7F2", color: "#181614", paddingTop: "5.5rem" }}>
      {/* Dynamic SEO Meta Tags & JSON-LD */}
      <SeoMeta
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={location.keywords}
        canonicalUrl={`https://www.elvorafilm.com/#location-${location.slug}`}
        schemaJson={localBusinessSchema}
      />

      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#0C0C0E",
          color: "#FAF7F2",
          position: "relative",
          padding: "clamp(4.5rem, 8vw, 7.5rem) 1.5rem",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 75% 20%, rgba(197, 160, 89, 0.15) 0%, transparent 60%)",
            pointerEvents: "none"
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: "1.5rem" }}>
            <ol
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                listStyle: "none",
                padding: 0,
                margin: 0,
                fontSize: "0.85rem",
                color: "var(--color-gold-light)"
              }}
            >
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0 }}
                >
                  Home
                </button>
              </li>
              <li>/</li>
              <li>
                <button
                  onClick={() => onNavigate("locations")}
                  style={{ background: "none", border: "none", color: "inherit", cursor: "pointer", padding: 0 }}
                >
                  Odisha Locations
                </button>
              </li>
              <li>/</li>
              <li style={{ color: "rgba(255, 255, 255, 0.6)" }} aria-current="page">
                {location.city}
              </li>
            </ol>
          </nav>

          {/* Region Eyebrow */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.2rem" }}>
            <MapPin size={16} color="var(--color-gold)" />
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.78rem",
                letterSpacing: "0.24em",
                color: "var(--color-gold-light)",
                textTransform: "uppercase"
              }}
            >
              {location.regionName} • ODISHA
            </span>
          </div>

          {/* Targeted H1 */}
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.3rem, 5.2vw, 4.4rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              maxWidth: "1000px",
              marginBottom: "1.5rem",
              color: "#FFFFFF"
            }}
          >
            {location.h1}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.15rem, 2vw, 1.45rem)",
              color: "var(--color-gold-light)",
              maxWidth: "850px",
              lineHeight: 1.5,
              marginBottom: "1.5rem"
            }}
          >
            "{location.tagline}"
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "800px",
              marginBottom: "2.5rem"
            }}
          >
            {location.heroExcerpt}
          </p>

          {/* Action CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <button
              onClick={() => onOpenInquiry(location.city, "Wedding Cinematography & Photography")}
              className="btn btn-gold"
              style={{
                padding: "1rem 2rem",
                fontSize: "0.92rem",
                fontWeight: 600,
                letterSpacing: "0.08em"
              }}
            >
              Check Availability in {location.city}
            </button>

            <a
              href={getWhatsAppLink(`Hi Elvora Film, I am planning a wedding in ${location.city} and would love to check package details and availability.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                borderColor: "rgba(255, 255, 255, 0.25)",
                color: "#FAF7F2",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "1rem 1.8rem"
              }}
            >
              <MessageCircle size={18} color="var(--color-gold)" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Trust Metrics Bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
              marginTop: "4rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)"
            }}
          >
            {location.experienceStats.map((stat, idx) => (
              <div key={idx}>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.2rem",
                    color: "var(--color-gold-light)",
                    fontWeight: 400,
                    marginBottom: "0.25rem"
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.82rem", color: "rgba(255, 255, 255, 0.65)", letterSpacing: "0.04em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Depth City Narrative */}
      <section style={{ padding: "clamp(4.5rem, 7vw, 6.5rem) 1.5rem", backgroundColor: "#FAF7F2" }}>
        <div className="container" style={{ maxWidth: "980px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.75rem"
              }}
            >
              CRAFT &amp; LOCAL DEVOTION
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: "#181614"
              }}
            >
              Why Couples in {location.city} Choose Elvora Film
            </h2>
          </div>

          <div style={{ fontSize: "1.1rem", lineHeight: 1.85, color: "#3B3733" }}>
            {location.introText.map((p, idx) => (
              <p key={idx} style={{ marginBottom: "1.75rem" }}>
                {p}
              </p>
            ))}
          </div>

          {/* Differentiating Highlights */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginTop: "3.5rem"
            }}
          >
            {location.whyChooseLocal.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "2rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(197, 160, 89, 0.2)",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <ShieldCheck size={22} color="var(--color-gold)" />
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 500, margin: 0, color: "#181614" }}>
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: "0.92rem", color: "#666057", lineHeight: 1.65, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Iconic Venues Section */}
      <section style={{ padding: "clamp(4.5rem, 7vw, 6.5rem) 1.5rem", backgroundColor: "#F3EFE8" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.75rem"
              }}
            >
              ICONIC DESTINATIONS &amp; VENUES
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: "#181614",
                marginBottom: "1rem"
              }}
            >
              Popular Wedding Venues We Cover in {location.city}
            </h2>
            <p style={{ color: "#666057", fontSize: "1.02rem" }}>
              We know the angles, natural lighting windows, drone flight lines, and acoustic setups of the top luxury resorts and heritage halls in {location.city}.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem"
            }}
          >
            {location.topVenues.map((venue, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "2.2rem",
                  borderRadius: "10px",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                    <MapPin size={15} color="var(--color-gold)" />
                    <span style={{ fontSize: "0.82rem", color: "var(--color-gold)", fontWeight: 600 }}>
                      {venue.locality}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      color: "#181614",
                      marginBottom: "1rem"
                    }}
                  >
                    {venue.name}
                  </h3>

                  <p style={{ fontSize: "0.93rem", color: "#59544D", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                    {venue.description}
                  </p>
                </div>

                <div
                  style={{
                    paddingTop: "1rem",
                    borderTop: "1px dashed rgba(0, 0, 0, 0.12)",
                    fontSize: "0.84rem",
                    color: "#736C63"
                  }}
                >
                  <strong style={{ color: "#181614" }}>Best Suited For: </strong>
                  {venue.popularFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural & Ritual Nuances */}
      <section style={{ padding: "clamp(4.5rem, 7vw, 6.5rem) 1.5rem", backgroundColor: "#0C0C0E", color: "#FAF7F2" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3.5rem auto" }}>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.75rem"
              }}
            >
              SACRED TRADITIONS &amp; EMOTIONS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: "#FFFFFF",
                marginBottom: "1rem"
              }}
            >
              Documenting the Soul of {location.city} Weddings
            </h2>
            <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "1.02rem" }}>
              Our team doesn't just shoot footage. We understand the spiritual meaning, family emotions, and spontaneous joy behind every regional ritual.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.8rem"
            }}
          >
            {location.localRitualsCovered.map((ritual, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "#18181C",
                  padding: "1.85rem",
                  borderRadius: "8px",
                  border: "1px solid rgba(255, 255, 255, 0.08)"
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(197, 160, 89, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-gold)",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    marginBottom: "1.2rem"
                  }}
                >
                  0{idx + 1}
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "#FAF7F2", marginBottom: "0.75rem", fontWeight: 400 }}>
                  {ritual.name}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.65, margin: 0 }}>
                  {ritual.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Overview */}
      <section style={{ padding: "clamp(4.5rem, 7vw, 6.5rem) 1.5rem", backgroundColor: "#FAF7F2" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              color: "var(--color-gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.75rem"
            }}
          >
            TRANSPARENT VALUE &amp; TIMELESS HEIRLOOMS
          </span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 300,
              color: "#181614",
              marginBottom: "1rem"
            }}
          >
            Our Curated Wedding Collections
          </h2>
          <p style={{ color: "#666057", fontSize: "1.02rem", maxWidth: "750px", margin: "0 auto 3rem auto" }}>
            Whether you are hosting an intimate heritage ceremony or a three-day royal destination celebration in {location.city}, we offer tailored coverage.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              textAlign: "left",
              marginBottom: "3rem"
            }}
          >
            {/* Gamma */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "2.5rem 2rem",
                borderRadius: "10px",
                border: "1px solid rgba(0, 0, 0, 0.08)"
              }}
            >
              <span style={{ fontSize: "0.78rem", letterSpacing: "0.15em", color: "#777", textTransform: "uppercase" }}>
                INTIMATE CELEBRATIONS
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", margin: "0.5rem 0 1rem 0" }}>
                Gamma Collection
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#555", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Essential candid photography and cinematic highlights for compact 1 to 2 day weddings in {location.city}.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.75rem", color: "#444" }}>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Dual Senior Photographers</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Cinematic 4K Teaser Film</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Handcrafted Archival Album</li>
              </ul>
              <button
                onClick={() => onOpenInquiry(location.city, "Gamma Collection")}
                className="btn btn-outline"
                style={{ width: "100%", textAlign: "center" }}
              >
                Inquire Gamma
              </button>
            </div>

            {/* Beta (Signature) */}
            <div
              style={{
                backgroundColor: "#0C0C0E",
                color: "#FAF7F2",
                padding: "2.5rem 2rem",
                borderRadius: "10px",
                border: "2px solid var(--color-gold)",
                position: "relative",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)"
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "24px",
                  backgroundColor: "var(--color-gold)",
                  color: "#0C0C0E",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  padding: "0.25rem 0.85rem",
                  borderRadius: "20px",
                  textTransform: "uppercase"
                }}
              >
                MOST POPULAR
              </div>
              <span style={{ fontSize: "0.78rem", letterSpacing: "0.15em", color: "var(--color-gold)", textTransform: "uppercase" }}>
                SIGNATURE LUXURY
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", margin: "0.5rem 0 1rem 0", color: "#FFF" }}>
                Beta Collection
              </h3>
              <p style={{ fontSize: "0.92rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Our most celebrated multi-day collection covering pre-wedding, candid storytelling, cinema film &amp; drone.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.75rem", color: "rgba(255,255,255,0.85)" }}>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Complete Cinematography &amp; Candid Crew</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> 4K Licensed Drone Aerial Coverage</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Full Cinematic Feature Film + Teasers</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Pre-Wedding Creative Session Included</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Dual Handcrafted Leather Albums</li>
              </ul>
              <button
                onClick={() => onOpenInquiry(location.city, "Beta Collection")}
                className="btn btn-gold"
                style={{ width: "100%", textAlign: "center" }}
              >
                Inquire Beta Package
              </button>
            </div>

            {/* Alpha */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "2.5rem 2rem",
                borderRadius: "10px",
                border: "1px solid rgba(0, 0, 0, 0.08)"
              }}
            >
              <span style={{ fontSize: "0.78rem", letterSpacing: "0.15em", color: "#777", textTransform: "uppercase" }}>
                ROYAL &amp; DESTINATION
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", margin: "0.5rem 0 1rem 0" }}>
                Alpha Collection
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#555", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                Unrestricted cinematic grandeur with FPV drone cinematography, same-week delivery &amp; heirloom boxes.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.75rem", color: "#444" }}>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Dual Director Master Crew + FPV Pilots</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Master Cinematic Film &amp; Same-Week Teaser</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Master Archival Leather Box Album Set</li>
                <li style={{ display: "flex", gap: "0.5rem" }}><CheckCircle size={16} color="var(--color-gold)" /> Complete Raw Footage Archive SSD</li>
              </ul>
              <button
                onClick={() => onOpenInquiry(location.city, "Alpha Collection")}
                className="btn btn-outline"
                style={{ width: "100%", textAlign: "center" }}
              >
                Inquire Alpha Grand
              </button>
            </div>
          </div>

          <button
            onClick={() => onNavigate("packages")}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-gold-dark)",
              fontFamily: "var(--font-label)",
              fontSize: "0.88rem",
              letterSpacing: "0.15em",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              textTransform: "uppercase"
            }}
          >
            <span>View Detailed Packages &amp; Comparison</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* City-Specific FAQs Accordion with Schema */}
      <section style={{ padding: "clamp(4.5rem, 7vw, 6.5rem) 1.5rem", backgroundColor: "#F3EFE8" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.75rem"
              }}
            >
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 300,
                color: "#181614"
              }}
            >
              Questions About Weddings in {location.city}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {location.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "8px",
                    border: "1px solid rgba(0, 0, 0, 0.08)",
                    overflow: "hidden"
                  }}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    style={{
                      width: "100%",
                      padding: "1.5rem",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "none",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      fontSize: "1.05rem",
                      fontWeight: 500,
                      color: "#181614"
                    }}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      color="var(--color-gold)"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.25s ease",
                        flexShrink: 0,
                        marginLeft: "1rem"
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: "0 1.5rem 1.5rem 1.5rem",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                        color: "#5B554D",
                        borderTop: "1px solid rgba(0, 0, 0, 0.05)"
                      }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Internal Location Interlinking (SEO Juice Boost) */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "#0C0C0E", color: "#FAF7F2" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.72rem",
              letterSpacing: "0.22em",
              color: "var(--color-gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "1rem"
            }}
          >
            EXPLORE WEDDING FILMS ACROSS ODISHA
          </span>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.8rem",
              fontWeight: 300,
              marginBottom: "2rem"
            }}
          >
            We Travel Throughout Odisha &amp; Destination Celebrations
          </h3>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "1rem",
              maxWidth: "850px",
              margin: "0 auto"
            }}
          >
            {Object.keys(LOCATIONS_DATA).map((key) => {
              const loc = LOCATIONS_DATA[key];
              const isCurrent = loc.slug === location.slug;
              return (
                <button
                  key={key}
                  onClick={() => onNavigate(`location-${loc.slug}`)}
                  style={{
                    backgroundColor: isCurrent ? "var(--color-gold)" : "rgba(255, 255, 255, 0.06)",
                    color: isCurrent ? "#0C0C0E" : "#FAF7F2",
                    border: isCurrent ? "1px solid var(--color-gold)" : "1px solid rgba(255, 255, 255, 0.15)",
                    padding: "0.75rem 1.4rem",
                    borderRadius: "30px",
                    fontSize: "0.88rem",
                    fontWeight: isCurrent ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {loc.city} Weddings
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
