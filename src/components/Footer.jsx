import React from "react";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import { Phone, Mail, MapPin, Globe, ArrowUpRight, Heart } from "lucide-react";
import InstagramIcon from "./InstagramIcon";

export default function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear();

  const handleNav = (route) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "#080809",
        color: "#FAF7F2",
        borderTop: "1px solid rgba(197, 160, 89, 0.2)",
        paddingTop: "5rem",
        paddingBottom: "2.5rem"
      }}
    >
      <div className="container-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "3.5rem",
            marginBottom: "4.5rem"
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "340px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                marginBottom: "1.2rem"
              }}
            >
              <img
                src="/assets/images/elvora-emblem.png"
                alt="Elvora Film Monogram"
                style={{ width: "38px", height: "38px", objectFit: "contain" }}
              />
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  letterSpacing: "0.14em",
                  color: "#FAF7F2"
                }}
              >
                ELVORA FILM
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "1.15rem",
                color: "var(--color-gold-light)",
                lineHeight: 1.45,
                marginBottom: "1rem"
              }}
            >
              "{BRAND_INFO.tagline}"
            </p>

            <p
              style={{
                fontSize: "0.88rem",
                color: "var(--color-text-light-muted)",
                lineHeight: 1.65,
                marginBottom: "1.5rem"
              }}
            >
              {BRAND_INFO.statement}
            </p>

            {/* Social & Contact Shortcuts */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold-light)",
                  transition: "all 0.2s ease"
                }}
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={17} />
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold-light)",
                  transition: "all 0.2s ease"
                }}
                aria-label="WhatsApp Contact"
              >
                <Phone size={17} />
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-gold-light)",
                  transition: "all 0.2s ease"
                }}
                aria-label="Email Inquiry"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.4rem"
              }}
            >
              EXPLORE
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.88rem"
              }}
            >
              <li>
                <button
                  onClick={() => handleNav("home")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("stories")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Our Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("services")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Craft &amp; Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("packages")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Packages (Gamma, Beta, Alpha)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("about")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  About Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("contact")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Wedding Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Odisha Locations (SEO Goldmine) */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.4rem"
              }}
            >
              ODISHA LOCATIONS
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.88rem"
              }}
            >
              <li>
                <button
                  onClick={() => handleNav("location-bhubaneswar")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Bhubaneswar Weddings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("location-cuttack")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Cuttack (Kattag) Films
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("location-berhampur")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Berhampur (Barampur) Silk Weddings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("location-puri")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Puri Beach Destination Weddings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("locations")}
                  style={{ color: "var(--color-gold-light)", fontWeight: 500, transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  View All Odisha Coverage →
                </button>
              </li>
            </ul>
          </div>

          {/* Journal / Blog Guides */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.4rem"
              }}
            >
              THE JOURNAL
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                fontSize: "0.88rem"
              }}
            >
              <li>
                <button
                  onClick={() => handleNav("blog-post", "top-wedding-venues-in-bhubaneswar-odisha")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Bhubaneswar Luxury Venues
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("blog-post", "wedding-photography-cost-odisha-pricing-packages")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Wedding Photography Cost Guide
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("blog-post", "odia-wedding-rituals-guide-traditions")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Sacred Odia Wedding Rituals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("blog-post", "best-pre-wedding-shoot-locations-bhubaneswar-odisha")}
                  style={{ color: "rgba(247, 244, 238, 0.8)", transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)")}
                >
                  Top 10 Pre-Wedding Shoot Places
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("blog")}
                  style={{ color: "var(--color-gold-light)", fontWeight: 500, transition: "color 0.2s", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  Read All 10 Guides →
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.4rem"
              }}
            >
              STUDIO CONTACT
            </span>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Phone size={16} color="var(--color-gold)" />
                <a
                  href={`tel:${BRAND_INFO.phoneRaw}`}
                  style={{ color: "rgba(247, 244, 238, 0.9)" }}
                >
                  {BRAND_INFO.phone}
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Mail size={16} color="var(--color-gold)" />
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  style={{ color: "rgba(247, 244, 238, 0.9)" }}
                >
                  {BRAND_INFO.email}
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <InstagramIcon size={16} color="var(--color-gold)" />
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(247, 244, 238, 0.9)" }}
                >
                  {BRAND_INFO.instagramHandle}
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Globe size={16} color="var(--color-gold)" />
                <a
                  href={BRAND_INFO.websiteUrl}
                  style={{ color: "rgba(247, 244, 238, 0.9)" }}
                >
                  www.elvorafilm.com
                </a>
              </div>
            </div>
          </div>

          {/* Location & Studio Address Column */}
          <div>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                color: "var(--color-gold)",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "1.4rem"
              }}
            >
              STUDIO LOCATION
            </span>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
              <MapPin size={18} color="var(--color-gold)" style={{ marginTop: "3px", flexShrink: 0 }} />
              <div style={{ fontSize: "0.9rem", color: "var(--color-text-light-muted)", lineHeight: 1.6 }}>
                <p style={{ margin: 0, color: "#FAF7F2", fontWeight: 500 }}>
                  {BRAND_INFO.address.plot}
                </p>
                <p style={{ margin: 0 }}>{BRAND_INFO.address.locality}</p>
                <p style={{ margin: 0 }}>
                  {BRAND_INFO.address.city}, {BRAND_INFO.address.state}
                </p>
                <p style={{ margin: 0 }}>India - {BRAND_INFO.address.pin}</p>

                <a
                  href={BRAND_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    color: "var(--color-gold-light)",
                    fontSize: "0.78rem",
                    marginTop: "0.75rem",
                    letterSpacing: "0.08em"
                  }}
                >
                  <span>View on Google Maps</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1.2rem",
            fontSize: "0.82rem",
            color: "rgba(247, 244, 238, 0.5)"
          }}
        >
          <div>
            © {currentYear} Elvora Film. All rights reserved.
          </div>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            <button
              onClick={() => handleNav("privacy")}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                fontSize: "inherit",
                padding: 0,
                cursor: "pointer"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.5)")}
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => handleNav("terms")}
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                fontSize: "inherit",
                padding: 0,
                cursor: "pointer"
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold-light)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(247, 244, 238, 0.5)")}
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
