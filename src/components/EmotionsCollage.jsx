import React from "react";

export default function EmotionsCollage() {
  const moments = [
    {
      src: "/assets/images/emotions/emotion-1.jpg",
      title: "Unscripted Joy",
      caption: "Laughter between lifelong friends"
    },
    {
      src: "/assets/images/emotions/emotion-2.jpg",
      title: "Bridal Stillness",
      caption: "A quiet breath before the procession"
    },
    {
      src: "/assets/images/emotions/emotion-3.jpg",
      title: "Sacred Touch",
      caption: "Parents' blessings and whispered prayers"
    },
    {
      src: "/assets/images/emotions/emotion-4.jpg",
      title: "The Stolen Glance",
      caption: "Moments shared in the crowd"
    }
  ];

  return (
    <section className="section-light">
      <div className="container">
        {/* Section Header */}
        <div
          style={{
            maxWidth: "760px",
            marginBottom: "3.5rem"
          }}
        >
          <span className="eyebrow">THE PEOPLE AND EMOTIONS</span>
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
            Some Of The Most Beautiful Moments <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-gold-dark)",
                fontWeight: 400
              }}
            >
              Aren't Planned.
            </em>
          </h2>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "1.06rem",
              lineHeight: 1.75
            }}
          >
            The quiet glance before the ceremony. A parent's tears. The laughter
            between old friends. The embrace that says everything. We pay
            attention to the moments that happen naturally, because they often
            become the memories that matter most.
          </p>
        </div>

        {/* Editorial Photo Sequence */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.8rem"
          }}
        >
          {moments.map((item, idx) => (
            <div
              key={idx}
              className="image-zoom-frame"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(24, 22, 20, 0.08)",
                borderRadius: "2px",
                overflow: "hidden"
              }}
            >
              <div style={{ height: "340px", overflow: "hidden" }}>
                <img
                  src={item.src}
                  alt={`${item.title} - ${item.caption}`}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1.2rem 1.4rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.25rem",
                    color: "var(--color-text-main)",
                    fontWeight: 400,
                    margin: "0 0 0.2rem"
                  }}
                >
                  {item.title}
                </h3>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-text-muted)",
                    fontFamily: "var(--font-sans)"
                  }}
                >
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
