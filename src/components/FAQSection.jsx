import React, { useState } from "react";
import { FAQ_DATA } from "../data/faqData";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQSection({ onOpenInquiry }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section-light">
      <div className="container-narrow">
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem"
          }}
        >
          <span className="eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.3rem, 4.8vw, 3.8rem)",
              fontWeight: 300,
              color: "var(--color-text-main)",
              lineHeight: 1.15,
              marginBottom: "1.2rem"
            }}
          >
            Clear Answers For <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-dark)",
                fontWeight: 400
              }}
            >
              Your Special Day.
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.06rem",
              lineHeight: 1.7
            }}
          >
            Here are the most common questions regarding our wedding coverage,
            packages, equipment, and deliverables.
          </p>
        </div>

        {/* Accordion List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: isOpen
                    ? "1px solid var(--color-gold)"
                    : "1px solid rgba(24, 22, 20, 0.08)",
                  borderRadius: "2px",
                  overflow: "hidden",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease"
                }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  style={{
                    width: "100%",
                    padding: "1.4rem 1.8rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    textAlign: "left",
                    backgroundColor: "transparent",
                    color: "var(--color-text-main)",
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    fontWeight: 400
                  }}
                  aria-expanded={isOpen}
                >
                  <span style={{ flex: 1 }}>{faq.question}</span>
                  <span
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      backgroundColor: isOpen
                        ? "var(--color-gold)"
                        : "rgba(24, 22, 20, 0.05)",
                      color: isOpen ? "#0C0C0E" : "var(--color-text-main)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.25s ease"
                    }}
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </span>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.8rem 1.5rem",
                      borderTop: "1px solid rgba(24, 22, 20, 0.05)",
                      marginTop: "0.2rem"
                    }}
                  >
                    <p
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.96rem",
                        lineHeight: 1.75,
                        margin: 0
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Question Note */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            padding: "1.5rem",
            backgroundColor: "rgba(24, 22, 20, 0.03)",
            borderRadius: "2px",
            border: "1px dashed rgba(24, 22, 20, 0.15)"
          }}
        >
          <p style={{ color: "var(--color-text-muted)", fontSize: "0.92rem", margin: 0 }}>
            Have a question about specific dates, destination locations, or custom
            ceremonies?{" "}
            <button
              onClick={onOpenInquiry}
              style={{
                color: "var(--color-gold-dark)",
                fontWeight: 600,
                textDecoration: "underline",
                background: "none",
                border: "none",
                padding: 0,
                cursor: "pointer"
              }}
            >
              Contact our team directly
            </button>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
