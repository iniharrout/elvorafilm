import React from "react";
import { BRAND_INFO } from "../data/brandInfo";

export default function TermsPage() {
  return (
    <div style={{ paddingTop: "7rem", backgroundColor: "var(--color-ivory)", minHeight: "100vh" }}>
      <section style={{ padding: "3rem 0 3.5rem", borderBottom: "1px solid rgba(24, 22, 20, 0.08)" }}>
        <div className="container-narrow">
          <span className="eyebrow">TERMS OF USE</span>
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
            Terms &amp; Conditions
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
              1. Acceptance of Website Terms
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              Welcome to the website of Elvora Film (https://www.elvorafilm.com). By accessing
              or browsing this website, you agree to comply with and be bound by these Terms and
              Conditions. If you do not agree with any part of these terms, please discontinue
              use of the website.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 400 }}>
              2. Distinction Between Inquiries and Final Contracts
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              Please note that submitting an inquiry form or communicating via WhatsApp does
              not constitute a confirmed booking or binding agreement. Official wedding
              photography and cinematography engagements are confirmed solely upon the signing
              of a formal service contract and payment of the designated reservation retainer.
              Final deliverables, shoot schedules, cancellation policies, and payment terms will
              be set forth explicitly in that formal agreement.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 400 }}>
              3. Intellectual Property
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              All photographs, cinematography clips, logos, monograms, text, and design assets
              appearing on this website are the intellectual property of Elvora Film and its
              collaborators, protected under applicable copyright laws. You may not reproduce,
              redistribute, or repurpose any portfolio media without prior written consent from
              Elvora Film.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 400 }}>
              4. Accuracy of Information
            </h2>
            <p style={{ color: "var(--color-text-muted)" }}>
              While we make every effort to maintain accurate and up-to-date information regarding
              services and package deliverables, specifications may evolve. Official deliverables
              for any wedding celebration will always be governed by the direct consultation and
              written confirmation provided by Elvora Film.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", marginBottom: "0.8rem", fontWeight: 400 }}>
              5. Governing Law and Inquiries
            </h2>
            <p style={{ color: "var(--color-text-muted)", marginBottom: "1rem" }}>
              These website terms are governed by the laws of India, under the jurisdiction of the
              courts in Bhubaneswar, Odisha. For questions or clarifications, please reach out to:
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
              <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
                Email: <a href={`mailto:${BRAND_INFO.email}`} style={{ color: "var(--color-gold-dark)" }}>{BRAND_INFO.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
