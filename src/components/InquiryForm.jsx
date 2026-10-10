import React, { useState } from "react";
import { PACKAGES_DATA } from "../data/packagesData";
import { BRAND_INFO, getWhatsAppLink } from "../data/brandInfo";
import { CheckCircle2, AlertCircle, MessageCircle, Send, Copy, ArrowRight, Check } from "lucide-react";

export default function InquiryForm({ initialPackage = "", initialService = "", onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    partnerName: "",
    email: "",
    phone: "",
    weddingDate: "",
    location: "Bhubaneswar, Odisha",
    eventType: "Full Wedding Celebration",
    numberOfEvents: "3-4 Events",
    preferredPackage: initialPackage || "BETA — ADVANCED PACKAGE",
    selectedServices: initialService ? [initialService] : ["Wedding Photography", "Cinematic Wedding Films"],
    additionalDetails: "",
    honeypot: "" // Anti-spam field
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [copied, setCopied] = useState(false);

  const availableServices = [
    "Wedding Photography",
    "Cinematic Wedding Films",
    "Candid Photography",
    "Pre-Wedding Photography & Films",
    "Drone & FPV Cinematography",
    "Premium Wedding Albums",
    "Engagement Films",
    "Documentary-Style Coverage"
  ];

  const handleServiceToggle = (service) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      const updated = exists
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service];
      return { ...prev, selectedServices: updated };
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your full name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Please enter your phone number";
    } else if (formData.phone.trim().replace(/\D/g, "").length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number";
    }
    if (!formData.weddingDate.trim()) errs.weddingDate = "Please provide your wedding date or approximate dates";
    if (!formData.location.trim()) errs.location = "Please enter your wedding venue or city location";
    if (!formData.eventType.trim()) errs.eventType = "Please specify event type";

    return errs;
  };

  const generateWhatsAppMessage = () => {
    let msg = `Hi Elvora Film,\n\nI would like to check availability and inquire about wedding coverage.\n\n`;
    msg += `• Name: ${formData.name}${formData.partnerName ? ` & ${formData.partnerName}` : ""}\n`;
    msg += `• Phone: ${formData.phone}\n`;
    msg += `• Email: ${formData.email}\n`;
    msg += `• Wedding Date: ${formData.weddingDate}\n`;
    msg += `• Location: ${formData.location}\n`;
    msg += `• Event Type: ${formData.eventType} (${formData.numberOfEvents})\n`;
    msg += `• Preferred Package: ${formData.preferredPackage || "Custom"}\n`;
    if (formData.selectedServices.length > 0) {
      msg += `• Preferred Services: ${formData.selectedServices.join(", ")}\n`;
    }
    if (formData.additionalDetails.trim()) {
      msg += `• Notes: ${formData.additionalDetails}\n`;
    }
    return msg;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic spam bot catch
    if (formData.honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Persist locally so user data is never lost
    try {
      const stored = JSON.parse(localStorage.getItem("elvora_inquiries") || "[]");
      stored.push({
        ...formData,
        submittedAt: new Date().toISOString()
      });
      localStorage.setItem("elvora_inquiries", JSON.stringify(stored));
    } catch (e) {
      console.warn("Storage not available", e);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionComplete(true);
    }, 400);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateWhatsAppMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (submissionComplete) {
    const waUrl = getWhatsAppLink(generateWhatsAppMessage());

    return (
      <div style={{ padding: "2.5rem 2rem", textAlign: "center" }}>
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "rgba(197, 160, 89, 0.2)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.4rem"
          }}
        >
          <CheckCircle2 size={32} color="var(--color-gold-light)" />
        </div>

        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2rem",
            color: "#FAF7F2",
            marginBottom: "0.8rem",
            fontWeight: 400
          }}
        >
          Inquiry Prepared &amp; Verified
        </h3>

        <p
          style={{
            color: "var(--color-text-light-muted)",
            fontSize: "0.95rem",
            lineHeight: 1.65,
            maxWidth: "540px",
            margin: "0 auto 1.8rem"
          }}
        >
          Thank you, <strong>{formData.name}</strong>. Your inquiry has been
          prepared and securely saved. Because our website operates in client
          mode without an automated email server configured, we provide direct
          instant delivery straight to Elvora Film's studio team below:
        </p>

        {/* WhatsApp Direct Action */}
        <div
          style={{
            backgroundColor: "#111114",
            border: "1px solid var(--color-gold-border)",
            padding: "1.8rem",
            borderRadius: "2px",
            maxWidth: "520px",
            margin: "0 auto 1.8rem",
            textAlign: "left"
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.18em",
              color: "var(--color-gold)",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.6rem"
            }}
          >
            RECOMMENDED: DIRECT WHATSAPP DISPATCH
          </span>

          <p
            style={{
              fontSize: "0.88rem",
              color: "rgba(247, 244, 238, 0.8)",
              lineHeight: 1.5,
              marginBottom: "1.2rem"
            }}
          >
            Click below to open WhatsApp with your complete wedding details
            pre-filled directly to <strong>+91 8895499662</strong>.
          </p>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
            style={{ width: "100%", justifyContent: "center" }}
          >
            <MessageCircle size={16} />
            <span>OPEN WHATSAPP &amp; SEND INQUIRY</span>
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Alternative Email Action */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={copyToClipboard}
            className="btn-ghost-light"
            style={{ fontSize: "0.76rem", padding: "0.75rem 1.4rem" }}
          >
            {copied ? <Check size={14} color="var(--color-gold)" /> : <Copy size={14} />}
            <span>{copied ? "COPIED TO CLIPBOARD" : "COPY DETAILS"}</span>
          </button>

          <a
            href={`mailto:${BRAND_INFO.email}?subject=Wedding%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(generateWhatsAppMessage())}`}
            className="btn-ghost-light"
            style={{ fontSize: "0.76rem", padding: "0.75rem 1.4rem" }}
          >
            <span>SEND VIA EMAIL CLIENT</span>
          </a>
        </div>

        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => {
              setSubmissionComplete(false);
              if (onClose) onClose();
            }}
            style={{
              color: "rgba(247, 244, 238, 0.5)",
              fontSize: "0.78rem",
              textDecoration: "underline"
            }}
          >
            Close / Submit another inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem 0" }} noValidate>
      {/* Honeypot field for bot suppression */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.4rem",
          marginBottom: "1.4rem"
        }}
      >
        {/* Your Name */}
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "0.4rem"
            }}
          >
            Your Name *
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Meera Sharma"
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: errors.name ? "1px solid #E06C75" : "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FAF7F2",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              borderRadius: "2px"
            }}
          />
          {errors.name && (
            <span style={{ color: "#E06C75", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>
              {errors.name}
            </span>
          )}
        </div>

        {/* Partner's Name */}
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(247, 244, 238, 0.7)",
              marginBottom: "0.4rem"
            }}
          >
            Partner's Name (Optional)
          </label>
          <input
            type="text"
            value={formData.partnerName}
            onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
            placeholder="e.g. Aarav Patel"
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FAF7F2",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              borderRadius: "2px"
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.4rem",
          marginBottom: "1.4rem"
        }}
      >
        {/* Email Address */}
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "0.4rem"
            }}
          >
            Email Address *
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. meera@example.com"
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: errors.email ? "1px solid #E06C75" : "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FAF7F2",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              borderRadius: "2px"
            }}
          />
          {errors.email && (
            <span style={{ color: "#E06C75", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>
              {errors.email}
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "0.4rem"
            }}
          >
            Phone Number *
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: errors.phone ? "1px solid #E06C75" : "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FAF7F2",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              borderRadius: "2px"
            }}
          />
          {errors.phone && (
            <span style={{ color: "#E06C75", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>
              {errors.phone}
            </span>
          )}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.4rem",
          marginBottom: "1.4rem"
        }}
      >
        {/* Wedding Date */}
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "0.4rem"
            }}
          >
            Wedding Date (or Approximate) *
          </label>
          <input
            type="text"
            value={formData.weddingDate}
            onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
            placeholder="e.g. 15-18 November 2026"
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: errors.weddingDate ? "1px solid #E06C75" : "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FAF7F2",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              borderRadius: "2px"
            }}
          />
          {errors.weddingDate && (
            <span style={{ color: "#E06C75", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>
              {errors.weddingDate}
            </span>
          )}
        </div>

        {/* Wedding Location */}
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "0.4rem"
            }}
          >
            Wedding Location / City *
          </label>
          <input
            type="text"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            placeholder="e.g. Mayfair Lagoon, Bhubaneswar"
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: errors.location ? "1px solid #E06C75" : "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FAF7F2",
              fontFamily: "var(--font-sans)",
              fontSize: "0.95rem",
              borderRadius: "2px"
            }}
          />
          {errors.location && (
            <span style={{ color: "#E06C75", fontSize: "0.75rem", marginTop: "4px", display: "block" }}>
              {errors.location}
            </span>
          )}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.4rem",
          marginBottom: "1.4rem"
        }}
      >
        {/* Preferred Package */}
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-gold-light)",
              marginBottom: "0.4rem"
            }}
          >
            Preferred Package
          </label>
          <select
            value={formData.preferredPackage}
            onChange={(e) => setFormData({ ...formData, preferredPackage: e.target.value })}
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              backgroundColor: "#16161A",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FAF7F2",
              fontFamily: "var(--font-sans)",
              fontSize: "0.92rem",
              borderRadius: "2px"
            }}
          >
            <option value="GAMMA — ESSENTIAL PACKAGE">GAMMA — Essential Package (3-Day)</option>
            <option value="BETA — ADVANCED PACKAGE">BETA — Advanced Package (5-Day incl. Pre-Wedding)</option>
            <option value="ALPHA — SIGNATURE PACKAGE">ALPHA — Signature Package (6-Day Flagship FPV)</option>
            <option value="Custom Requirement">Custom Requirement / Unsure</option>
          </select>
        </div>

        {/* Number of Events */}
        <div>
          <label
            style={{
              display: "block",
              fontFamily: "var(--font-label)",
              fontSize: "0.68rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "rgba(247, 244, 238, 0.7)",
              marginBottom: "0.4rem"
            }}
          >
            Number of Events
          </label>
          <select
            value={formData.numberOfEvents}
            onChange={(e) => setFormData({ ...formData, numberOfEvents: e.target.value })}
            style={{
              width: "100%",
              padding: "0.85rem 1rem",
              backgroundColor: "#16161A",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FAF7F2",
              fontFamily: "var(--font-sans)",
              fontSize: "0.92rem",
              borderRadius: "2px"
            }}
          >
            <option value="1-2 Events (Single Day)">1-2 Events (Single Day)</option>
            <option value="3-4 Events (2-3 Days)">3-4 Events (2-3 Days)</option>
            <option value="5+ Events (Multi-Day Celebration)">5+ Events (Multi-Day Celebration)</option>
          </select>
        </div>
      </div>

      {/* Preferred Craft Services Selector */}
      <div style={{ marginBottom: "1.4rem" }}>
        <label
          style={{
            display: "block",
            fontFamily: "var(--font-label)",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(247, 244, 238, 0.7)",
            marginBottom: "0.6rem"
          }}
        >
          Desired Services (Select All That Apply)
        </label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {availableServices.map((service) => {
            const isSelected = formData.selectedServices.includes(service);
            return (
              <button
                type="button"
                key={service}
                onClick={() => handleServiceToggle(service)}
                style={{
                  fontSize: "0.76rem",
                  padding: "0.4rem 0.9rem",
                  borderRadius: "20px",
                  border: isSelected
                    ? "1px solid var(--color-gold)"
                    : "1px solid rgba(255, 255, 255, 0.12)",
                  backgroundColor: isSelected
                    ? "rgba(197, 160, 89, 0.2)"
                    : "rgba(255, 255, 255, 0.03)",
                  color: isSelected ? "var(--color-gold-light)" : "rgba(247, 244, 238, 0.75)",
                  transition: "all 0.2s ease"
                }}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      {/* Additional Details */}
      <div style={{ marginBottom: "1.8rem" }}>
        <label
          style={{
            display: "block",
            fontFamily: "var(--font-label)",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(247, 244, 238, 0.7)",
            marginBottom: "0.4rem"
          }}
        >
          Tell Us About Your Story &amp; Wedding Plans
        </label>
        <textarea
          rows={4}
          value={formData.additionalDetails}
          onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
          placeholder="Share your wedding timeline, traditions, venue details, or anything specific you want us to know..."
          style={{
            width: "100%",
            padding: "0.85rem 1rem",
            backgroundColor: "rgba(255, 255, 255, 0.04)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            color: "#FAF7F2",
            fontFamily: "var(--font-sans)",
            fontSize: "0.95rem",
            borderRadius: "2px",
            resize: "vertical"
          }}
        />
      </div>

      {/* Submit Button */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-gold"
          style={{ width: "100%", padding: "1.1rem", fontSize: "0.82rem" }}
        >
          <Send size={15} />
          <span>{isSubmitting ? "VERIFYING INQUIRY..." : "SUBMIT WEDDING INQUIRY"}</span>
        </button>

        <p
          style={{
            fontSize: "0.78rem",
            color: "rgba(247, 244, 238, 0.5)",
            textAlign: "center",
            lineHeight: 1.5,
            margin: 0
          }}
        >
          We respect your privacy. Inquiries are handled directly by Elvora Film.
          You can also reach us directly at +91 8895499662.
        </p>
      </div>
    </form>
  );
}
