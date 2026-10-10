import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppBadge from "./components/WhatsAppBadge";
import InquiryModal from "./components/InquiryModal";
import StoryModal from "./components/StoryModal";
import VideoModal from "./components/VideoModal";

// Pages
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import ServicesPage from "./pages/ServicesPage";
import PackagesPage from "./pages/PackagesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryPackage, setInquiryPackage] = useState("");
  const [inquiryService, setInquiryService] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Sync with browser URL / hash
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      const validRoutes = ["home", "stories", "services", "packages", "about", "contact", "privacy", "terms"];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      } else {
        const path = window.location.pathname.replace("/", "").toLowerCase();
        if (validRoutes.includes(path)) {
          setCurrentRoute(path);
        }
      }
    };

    handleLocationChange();
    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);

    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  const navigateTo = (route) => {
    setCurrentRoute(route);
    window.location.hash = route === "home" ? "" : route;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenInquiry = (pkg = "", service = "") => {
    setInquiryPackage(pkg);
    setInquiryService(service);
    setInquiryModalOpen(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Navigation Header */}
      <Navbar
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Page Content */}
      <div style={{ flex: 1 }}>
        {currentRoute === "home" && (
          <HomePage
            onNavigate={navigateTo}
            onOpenInquiry={handleOpenInquiry}
            onOpenFilm={() => setVideoModalOpen(true)}
            onSelectStory={(story) => setSelectedStory(story)}
          />
        )}

        {currentRoute === "stories" && (
          <StoriesPage
            onSelectStory={(story) => setSelectedStory(story)}
            onOpenInquiry={handleOpenInquiry}
            onOpenFilm={() => setVideoModalOpen(true)}
          />
        )}

        {currentRoute === "services" && (
          <ServicesPage
            onInquireService={(srv) => handleOpenInquiry("", srv)}
          />
        )}

        {currentRoute === "packages" && (
          <PackagesPage
            onInquirePackage={(pkg) => handleOpenInquiry(pkg)}
          />
        )}

        {currentRoute === "about" && (
          <AboutPage
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        {currentRoute === "contact" && (
          <ContactPage
            initialPackage={inquiryPackage}
            initialService={inquiryService}
          />
        )}

        {currentRoute === "privacy" && <PrivacyPage />}

        {currentRoute === "terms" && <TermsPage />}
      </div>

      {/* Floating Discreet WhatsApp Badge */}
      <WhatsAppBadge />

      {/* Persistent Luxury Footer */}
      <Footer onNavigate={navigateTo} />

      {/* Interactive Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        initialPackage={inquiryPackage}
        initialService={inquiryService}
      />

      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
        onInquire={(storyTitle) => handleOpenInquiry("", storyTitle)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}
