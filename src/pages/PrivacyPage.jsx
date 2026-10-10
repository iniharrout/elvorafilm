import React from "react";
import { BRAND_INFO } from "../data/brandInfo";
import { Shield, Lock, Mail } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div style={{ paddingTop: "7rem", backgroundColor: "var(--color-ivory)", minHeight: "100vh" }}>
      <section style={{ padding: "3rem 0 3.5rem", borderBottom: "1px solid rgba(24, 22, 20, 0.08)" }}>
        <div className="container-narrow">
          <span className="eyebrow">LEGAL &amp; PRIVACY</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
              color: "var(--color-text-main)",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: "1rem"
            }}
          >
            Privacy Policy
          </h1>
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>
            Last updated: October 2026 • Elvora Film, Bhubaneswar, Odisha, India
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 0 6rem" }}>
        <div
          className="container-narrow"
          style={{
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "var(--color-text-main)",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem"
          }}
        >
          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 400 }}>
              1. Overview
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              At Elvora Film ("we", "our", or "us"), based at Plot No. 451, Bhagawanpur,
              Patrapada, Bhubaneswar, Odisha - 751019, India, we recognize the deeply
              personal nature of wedding celebrations and are committed to safeguarding
              the privacy of couples and visitors who interact with our website (https://www.elvorafilm.com).
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 400 }}>
              2. Information We Collect
            </h2>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "0.8rem" }}>
              When you voluntarily submit a wedding inquiry or communicate with our studio,
              we collect the following details:
            </p>
            <ul style={{ paddingLeft: "1.5rem", color: "var(--color-text-muted)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <li>Full names of you and your partner.</li>
              <li>Contact details, including your email address and telephone/WhatsApp number.</li>
              <li>Wedding dates, celebration timelines, and venue locations.</li>
              <li>Event details, guest count estimates, and preferred coverage packages.</li>
              <li>Any personal messages or artistic requests you provide in inquiry notes.</li>
            </ul>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 400 }}>
              3. Purpose of Collection
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              We use your submitted information exclusively for the purpose of checking our
              studio's availability for your dates, discussing customized cinematography and
              photography options, providing bespoke proposal quotations, and coordinating
              celebration logistics. We do not sell, rent, or trade your personal information
              to any third-party advertisers or marketing brokers.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 400 }}>
              4. Media and Visual Content
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              Photographs, showreels, and film stills displayed on this website are part of
              our artistic portfolio showcase. Portfolio content is published only with the
              mutual consent of client couples. Clients who wish to review or request the
              removal of any specific visual asset may reach out to our studio directly.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 400 }}>
              5. Data Storage and Contact
            </h2>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>
              If you have any questions about this Privacy Policy, wish to update your details,
              or request the deletion of your inquiry records, please contact us:
            </p>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(24, 22, 20, 0.1)",
                padding: "1.5rem 2rem",
                borderRadius: "2px"
              }}
            >
              <p style={{ margin: "0 0 0.4rem", fontWeight: 600 }}>Elvora Film</p>
              <p style={{ margin: "0 0 0.4rem", color: "var(--color-text-muted)" }}>
                Plot No. 451, Bhagawanpur, Patrapada, Bhubaneswar, Odisha, India - 751019
              </p>
              <p style={{ margin: "0 0 0.4rem", color: "var(--color-text-muted)" }}>
                Email: <a href={`mailto:${BRAND_INFO.email}`} style={{ color: "var(--color-gold-dark)" }}>{BRAND_INFO.email}</a>
              </p>
              <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
                Phone / WhatsApp: <a href={`tel:${BRAND_INFO.phoneRaw}`} style={{ color: "var(--color-gold-dark)" }}>{BRAND_INFO.phone}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
