import React from "react";
import InquiryForm from "../components/InquiryForm";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import { Phone, Mail, MapPin, Globe, MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import InstagramIcon from "../components/InstagramIcon";

export default function ContactPage({ initialPackage = "", initialService = "" }) {
  const waUrl = getWhatsAppLink("Hi Elvora Film, I would like to check availability for my upcoming wedding.");

  return (
    <div style={{ paddingTop: "7rem", backgroundColor: "var(--color-cinema-black)", minHeight: "100vh" }}>
      {/* Page Header */}
      <section style={{ padding: "3rem 0 4rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span className="eyebrow">WEDDING INQUIRY &amp; CONTACT</span>
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
            Let's Tell The Story <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold-light)", fontWeight: 400 }}>
              Of Your Forever.
            </em>
          </h1>
          <p
            style={{
              color: "var(--color-text-light-muted)",
              fontSize: "1.1rem",
              lineHeight: 1.75
            }}
          >
            We take on a limited number of celebrations each wedding season to
            ensure dedicated creative focus and timely post-production delivery.
            Share your dates and vision with us below.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Info Two-Column Layout */}
      <section style={{ padding: "4rem 0 7rem" }}>
        <div className="container-wide">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "4rem",
              alignItems: "start"
            }}
            className="contact-layout-grid"
          >
            {/* Left Column: Interactive Wedding Inquiry Form */}
            <div
              style={{
                backgroundColor: "var(--color-cinema-card)",
                border: "1px solid var(--color-gold-border)",
                borderRadius: "2px",
                padding: "clamp(2rem, 4vw, 3.5rem)",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)"
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <span className="eyebrow">CHECK AVAILABILITY</span>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.2rem",
                    color: "#FAF7F2",
                    margin: 0,
                    fontWeight: 400
                  }}
                >
                  Wedding Details Form
                </h2>
                <p style={{ color: "var(--color-text-light-muted)", fontSize: "0.92rem", marginTop: "0.4rem" }}>
                  Please complete the required details below. Your information is
                  saved securely and formatted for direct delivery.
                </p>
              </div>

              <InquiryForm
                initialPackage={initialPackage}
                initialService={initialService}
              />
            </div>

            {/* Right Column: Studio Contact & WhatsApp Quick Hub */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {/* Direct WhatsApp Box */}
              <div
                style={{
                  backgroundColor: "#16161B",
                  border: "1px solid var(--color-gold)",
                  borderRadius: "2px",
                  padding: "2.5rem 2rem",
                  position: "relative"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1rem"
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      backgroundColor: "#25D366",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#FFFFFF"
                    }}
                  >
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.45rem",
                        color: "#FAF7F2",
                        margin: 0
                      }}
                    >
                      Instant WhatsApp Chat
                    </h3>
                    <span style={{ fontSize: "0.75rem", color: "var(--color-gold-light)" }}>
                      DIRECT STUDIO LINE • +91 8895499662
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    color: "var(--color-text-light-muted)",
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem"
                  }}
                >
                  Prefer an immediate conversation? Connect with our team directly
                  on WhatsApp to check date availability, request sample showreels,
                  or schedule a studio consultation.
                </p>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  <MessageCircle size={16} />
                  <span>START WHATSAPP CONVERSATION</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Studio Address & Details Card */}
              <div
                style={{
                  backgroundColor: "var(--color-cinema-card)",
                  border: "1px solid var(--color-cinema-border)",
                  borderRadius: "2px",
                  padding: "2.5rem 2rem"
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: "0.72rem",
                    letterSpacing: "0.2em",
                    color: "var(--color-gold)",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: "1.2rem"
                  }}
                >
                  STUDIO HEADQUARTERS
                </span>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
                    <MapPin size={18} color="var(--color-gold)" style={{ marginTop: "3px", flexShrink: 0 }} />
                    <div style={{ fontSize: "0.92rem", color: "#FAF7F2", lineHeight: 1.6 }}>
                      <strong>Elvora Film Studio</strong>
                      <p style={{ margin: 0, color: "var(--color-text-light-muted)" }}>
                        {BRAND_INFO.address.plot}, {BRAND_INFO.address.locality}
                      </p>
                      <p style={{ margin: 0, color: "var(--color-text-light-muted)" }}>
                        {BRAND_INFO.address.city}, {BRAND_INFO.address.state} - {BRAND_INFO.address.pin}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <Phone size={18} color="var(--color-gold)" />
                    <a href={`tel:${BRAND_INFO.phoneRaw}`} style={{ color: "#FAF7F2", fontSize: "0.92rem" }}>
                      {BRAND_INFO.phone}
                    </a>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <Mail size={18} color="var(--color-gold)" />
                    <a href={`mailto:${BRAND_INFO.email}`} style={{ color: "#FAF7F2", fontSize: "0.92rem" }}>
                      {BRAND_INFO.email}
                    </a>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                    <InstagramIcon size={18} color="var(--color-gold)" />
                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--color-gold-light)", fontSize: "0.92rem" }}
                    >
                      {BRAND_INFO.instagramHandle} (Instagram Direct)
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "2rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)"
                  }}
                >
                  <a
                    href={BRAND_INFO.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "var(--color-gold-light)",
                      fontSize: "0.82rem",
                      letterSpacing: "0.08em"
                    }}
                  >
                    <span>Open in Google Maps Navigation</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .contact-layout-grid {
            grid-template-columns: 1.35fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
