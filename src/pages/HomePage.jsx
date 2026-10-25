import React from "react";
import Hero from "../components/Hero";
import BrandStory from "../components/BrandStory";
import FeaturedStories from "../components/FeaturedStories";
import FilmShowcase from "../components/FilmShowcase";
import CraftServices from "../components/CraftServices";
import ApproachSection from "../components/ApproachSection";
import DifferenceSection from "../components/DifferenceSection";
import PackagesSection from "../components/PackagesSection";
import EmotionsCollage from "../components/EmotionsCollage";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import FinalConversion from "../components/FinalConversion";
import LatestJournalSection from "../components/LatestJournalSection";

export default function HomePage({
  onNavigate,
  onOpenInquiry,
  onOpenFilm,
  onSelectStory,
  onSelectPost
}) {
  return (
    <main id="main-content">
      {/* 1. Cinematic Hero */}
      <Hero
        onExploreStories={() => {
          const el = document.getElementById("stories");
          if (el) el.scrollIntoView({ behavior: "smooth" });
          else onNavigate("stories");
        }}
        onOpenInquiry={() => onOpenInquiry()}
        onOpenFilm={onOpenFilm}
      />

      {/* 2. Emotional Brand Introduction */}
      <BrandStory />

      {/* 3. Featured Wedding Stories */}
      <FeaturedStories
        onSelectStory={onSelectStory}
        onViewAllStories={() => onNavigate("stories")}
      />

      {/* 4. Cinematic Film Experience */}
      <FilmShowcase onWatchFilms={onOpenFilm} />

      {/* 5. What We Do / Our Craft */}
      <CraftServices
        onSelectService={(service) => onNavigate("services")}
        onInquireService={(serviceTitle) => onOpenInquiry("", serviceTitle)}
      />

      {/* 6. The Elvora Approach */}
      <ApproachSection />

      {/* 7. Our Difference (7 Commitments) */}
      <DifferenceSection />

      {/* 8. Wedding Packages (Gamma, Beta, Alpha) */}
      <PackagesSection
        onInquirePackage={(pkgName) => onOpenInquiry(pkgName)}
      />

      {/* 9. The People and Emotions */}
      <EmotionsCollage />

      {/* 10. Client Stories & Trust */}
      <TestimonialsSection testimonials={[]} />

      {/* 10b. The Elvora Journal / SEO Guides */}
      <LatestJournalSection
        onNavigate={onNavigate}
        onSelectPost={onSelectPost}
      />

      {/* 11. Frequently Asked Questions */}
      <FAQSection onOpenInquiry={() => onOpenInquiry()} />

      {/* 12. Final Conversion Section */}
      <FinalConversion onOpenInquiry={() => onOpenInquiry()} />
    </main>
  );
}
