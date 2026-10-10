import React from "react";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import { Sparkles, MapPin, Heart, Shield, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function AboutPage({ onOpenInquiry }) {
  return (
    <div style={{ paddingTop: "7rem", backgroundColor: "var(--color-ivory)", minHeight: "100vh" }}>
      {/* Page Header */}
      <section style={{ padding: "3rem 0 4.5rem", borderBottom: "1px solid rgba(24, 22, 20, 0.08)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <span className="eyebrow">ABOUT ELVORA FILM</span>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              color: "var(--color-text-main)",
              fontWeight: 300,
              lineHeight: 1.12,
              marginBottom: "1.2rem"
            }}
          >
            We Don't Just Capture Moments. <br />
            <em style={{ fontStyle: "italic", color: "var(--color-gold-dark)", fontWeight: 400 }}>
              We Preserve Emotions For Generations.
            </em>
          </h1>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.1rem",
              lineHeight: 1.75
            }}
          >
            Rooted in Bhubaneswar, Odisha, Elvora Film is an artisan wedding
            photography and cinematography studio dedicated to the belief that
            a wedding is not an event to document, but a living story to preserve.
          </p>
        </div>
      </section>

      {/* Brand Philosophy Section */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "clamp(2.5rem, 5vw, 5rem)",
              alignItems: "center"
            }}
            className="about-grid"
          >
            <div className="image-zoom-frame" style={{ borderRadius: "2px", overflow: "hidden", maxHeight: "560px" }}>
              <img
                src="/assets/images/hero/hero-ceremony.jpg"
                alt="Sacred Indian wedding ceremony captured by Elvora Film"
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div>
              <span className="eyebrow">THE CORE PROMISE</span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 3.8vw, 3rem)",
                  color: "var(--color-text-main)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  marginBottom: "1.4rem"
                }}
              >
                Your Story. Your Emotions. <br />
                <em style={{ fontStyle: "italic", color: "var(--color-gold-dark)" }}>Your Forever.</em>
              </h2>

              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "1.4rem"
                }}
              >
                Every wedding has a unique story. Elvora Film captures the people,
                emotions, traditions, celebrations, and details that make each wedding
                unforgettable. The finished photographs and films should allow couples
                to revisit not just what happened, but how their wedding felt.
              </p>

              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  marginBottom: "2rem"
                }}
              >
                From the quiet glances before the rituals to the laughter between
                generations and the timeless beauty of the sacred vows, our approach
                blends editorial aesthetics with unobtrusive, documentary sensitivity.
              </p>

              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid rgba(24, 22, 20, 0.08)",
                  padding: "1.6rem 2rem",
                  borderRadius: "2px"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", marginBottom: "0.5rem" }}>
                  <MapPin size={18} color="var(--color-gold-dark)" />
                  <strong style={{ color: "var(--color-text-main)", fontSize: "0.95rem" }}>
                    Bhubaneswar &amp; Odisha Studio
                  </strong>
                </div>
                <p style={{ margin: 0, fontSize: "0.88rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                  {BRAND_INFO.address.formatted}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Personality & Values Grid */}
      <section className="section-dark grain-overlay" style={{ padding: "5rem 0" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3.5rem" }}>
            <span className="eyebrow">OUR VALUES</span>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 4.2vw, 3.4rem)",
                color: "#FAF7F2",
                fontWeight: 300
              }}
            >
              The Hallmarks of Our Craft
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem"
            }}
          >
            {[
              {
                title: "Cinematic & Artistic",
                desc: "We approach wedding filmmaking with an editorial eye for light, intentional framing, natural skin tones, and rich audio design."
              },
              {
                title: "Authentic & Emotional",
                desc: "We honor genuine human connection over artificial staging, ensuring the laughter, tears, and spontaneous interactions shine."
              },
              {
                title: "Detail-Oriented & Professional",
                desc: "Every post-production cut, color pass, and fine-art album layout is treated with precision and uncompromising care."
              },
              {
                title: "Timeless & Generational",
                desc: "Our work is crafted to look as moving thirty years from now as it did on the day you first watched your wedding film."
              }
            ].map((val, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: "var(--color-cinema-card)",
                  border: "1px solid var(--color-cinema-border)",
                  padding: "2.2rem",
                  borderRadius: "2px"
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.6rem",
                    color: "var(--color-gold-light)",
                    marginBottom: "0.8rem",
                    fontWeight: 400
                  }}
                >
                  {val.title}
                </h3>
                <p style={{ color: "var(--color-text-light-muted)", fontSize: "0.94rem", lineHeight: 1.7, margin: 0 }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <button onClick={onOpenInquiry} className="btn-gold">
              <span>TALK TO OUR CREATIVE TEAM</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr 1.05fr !important;
          }
        }
      `}</style>
    </div>
  );
}
