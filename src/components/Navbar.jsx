import React, { useState, useEffect } from "react";
import { BRAND_INFO } from "../data/brandInfo";
import { Menu, X, ArrowUpRight, Phone, MessageCircle } from "lucide-react";

export default function Navbar({ currentRoute, onNavigate, onOpenInquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", route: "home" },
    { label: "Our Stories", route: "stories" },
    { label: "Locations", route: "locations" },
    { label: "Services", route: "services" },
    { label: "Packages", route: "packages" },
    { label: "Journal", route: "blog" },
    { label: "About", route: "about" },
    { label: "Contact", route: "contact" }
  ];

  const handleLinkClick = (route) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "background-color 0.4s ease, border-color 0.4s ease, padding 0.4s ease",
          backgroundColor: isScrolled
            ? "rgba(12, 12, 14, 0.94)"
            : "rgba(12, 12, 14, 0.35)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: isScrolled
            ? "1px solid rgba(197, 160, 89, 0.2)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          padding: isScrolled ? "0.85rem 0" : "1.35rem 0"
        }}
      >
        <div
          className="container-wide"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          {/* Brand Logo & Monogram */}
          <button
            onClick={() => handleLinkClick("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.85rem",
              background: "none",
              border: "none",
              textAlign: "left",
              padding: 0
            }}
            aria-label="Elvora Film Home"
          >
            <img
              src="/assets/images/elvora-emblem.png"
              alt="Elvora Film Monogram"
              style={{
                width: "36px",
                height: "36px",
                objectFit: "contain",
                filter: "drop-shadow(0 2px 8px rgba(197, 160, 89, 0.3))"
              }}
            />
            <div>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.35rem",
                  letterSpacing: "0.14em",
                  color: "#FAF7F2",
                  fontWeight: 400,
                  display: "block",
                  lineHeight: 1
                }}
              >
                ELVORA FILM
              </span>
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: "0.58rem",
                  letterSpacing: "0.26em",
                  color: "var(--color-gold)",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: "3px"
                }}
              >
                BHUBANESWAR • CINEMA &amp; STILLS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2.2rem"
            }}
            className="desktop-nav"
          >
            {navLinks.map((item) => {
              const active = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleLinkClick(item.route)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.82rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontWeight: active ? 600 : 400,
                    color: active ? "var(--color-gold-light)" : "rgba(247, 244, 238, 0.8)",
                    borderBottom: active ? "1px solid var(--color-gold)" : "1px solid transparent",
                    paddingBottom: "4px",
                    transition: "color 0.25s ease, border-color 0.25s ease"
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.color = "rgba(247, 244, 238, 0.8)";
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem"
            }}
          >
            <a
              href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(
                "Hi Elvora Film, I would like to inquire about wedding photography and cinematography."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              style={{
                display: "none",
                alignItems: "center",
                gap: "0.4rem",
                color: "var(--color-gold-light)",
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                padding: "0.5rem 0.8rem",
                border: "1px solid rgba(197, 160, 89, 0.3)",
                transition: "all 0.25s ease"
              }}
              className="desktop-wa-btn"
            >
              <MessageCircle size={15} color="var(--color-gold)" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="btn-gold"
              style={{
                padding: "0.65rem 1.4rem",
                fontSize: "0.72rem",
                letterSpacing: "0.14em"
              }}
            >
              <span>INQUIRE NOW</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                padding: "0.4rem",
                marginLeft: "0.25rem"
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(10, 10, 12, 0.98)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "6rem 2rem 3rem",
            animation: "fadeIn 0.25s ease forwards"
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <span
              style={{
                fontFamily: "var(--font-label)",
                fontSize: "0.7rem",
                letterSpacing: "0.24em",
                color: "var(--color-gold)",
                textTransform: "uppercase"
              }}
            >
              NAVIGATION
            </span>

            {navLinks.map((item) => (
              <button
                key={item.route}
                onClick={() => handleLinkClick(item.route)}
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2rem",
                  color: currentRoute === item.route ? "var(--color-gold)" : "#FAF7F2",
                  textAlign: "left",
                  padding: "0.25rem 0",
                  transition: "color 0.2s ease"
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              paddingTop: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem"
            }}
          >
            <div style={{ color: "rgba(247, 244, 238, 0.7)", fontSize: "0.85rem" }}>
              <p style={{ margin: 0, color: "var(--color-gold)" }}>Bhubaneswar, Odisha, India</p>
              <p style={{ margin: "4px 0 0" }}>{BRAND_INFO.phone}</p>
            </div>

            <div style={{ display: "flex", gap: "0.75rem" }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="btn-gold"
                style={{ flex: 1, padding: "0.85rem" }}
              >
                TELL US ABOUT YOUR WEDDING
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Responsive Inline CSS for desktop nav display */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-wa-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
