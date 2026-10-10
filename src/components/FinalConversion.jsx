import React from "react";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import { ArrowUpRight, MessageCircle, Calendar } from "lucide-react";

export default function FinalConversion({ onOpenInquiry }) {
  const defaultWaMessage = "Hi Elvora Film, I would like to check your availability for my wedding. Could we discuss coverage options?";
  const waUrl = getWhatsAppLink(defaultWaMessage);

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "clamp(5rem, 9vw, 9rem)",
        paddingBottom: "clamp(5rem, 9vw, 9rem)",
        backgroundColor: "var(--color-cinema-black)",
        color: "#FAF7F2",
        overflow: "hidden",
        textAlign: "center"
      }}
    >
      {/* Background Wedding Image with Deep Dark Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/images/conversion-bg.jpg')",
          backgroundPosition: "center 40%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.35,
          filter: "contrast(1.05) saturate(1.05)"
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(12,12,14,0.92) 0%, rgba(12,12,14,0.7) 50%, rgba(12,12,14,0.95) 100%)",
          pointerEvents: "none"
        }}
      />

      <div
        className="container"
        style={{ position: "relative", zIndex: 2, maxWidth: "860px" }}
      >
        <span
          className="eyebrow no-line"
          style={{ letterSpacing: "0.26em", marginBottom: "1rem" }}
        >
          PRESERVE YOUR FOREVER
        </span>

        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.4rem, 5.5vw, 4.4rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#FAF7F2",
            margin: "0 auto 1.6rem",
            maxWidth: "800px"
          }}
        >
          Your Wedding Will Become A Memory. <br />
          <em
            style={{
              fontStyle: "italic",
              color: "var(--color-gold-light)",
              fontWeight: 400
            }}
          >
            Let's Make It A Beautiful One.
          </em>
        </h2>

        <p
          style={{
            color: "rgba(247, 244, 238, 0.85)",
            fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
            lineHeight: 1.7,
            maxWidth: "680px",
            margin: "0 auto 3rem",
            fontWeight: 300
          }}
        >
          Tell us about your wedding, the moments that matter to you, and the
          story you want us to capture.
        </p>

        {/* Dual Primary & WhatsApp CTAs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.2rem",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <button
            onClick={onOpenInquiry}
            className="btn-gold"
            style={{ padding: "1.1rem 2.6rem", fontSize: "0.82rem" }}
          >
            <Calendar size={16} />
            <span>TELL US ABOUT YOUR WEDDING</span>
            <ArrowUpRight size={16} />
          </button>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light"
            style={{ padding: "1.1rem 2.4rem", fontSize: "0.82rem" }}
          >
            <MessageCircle size={17} color="var(--color-gold-light)" />
            <span>CHAT WITH US ON WHATSAPP</span>
          </a>
        </div>

        {/* Quick Phone & City Subtitle */}
        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.5rem",
            fontSize: "0.82rem",
            color: "rgba(247, 244, 238, 0.55)",
            letterSpacing: "0.12em",
            textTransform: "uppercase"
          }}
        >
          <span>Bhubaneswar, Odisha</span>
          <span>•</span>
          <a
            href={`tel:${BRAND_INFO.phoneRaw}`}
            style={{ color: "var(--color-gold)", textDecoration: "none" }}
          >
            {BRAND_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
