import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppBadge from "./components/WhatsAppBadge";
import InquiryModal from "./components/InquiryModal";
import StoryModal from "./components/StoryModal";
import VideoModal from "./components/VideoModal";

// Existing Pages
import HomePage from "./pages/HomePage";
import StoriesPage from "./pages/StoriesPage";
import ServicesPage from "./pages/ServicesPage";
import PackagesPage from "./pages/PackagesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

// SEO & Regional Pages
import LocationPage from "./pages/LocationPage";
import LocationsHubPage from "./pages/LocationsHubPage";
import BlogListPage from "./pages/BlogListPage";
import BlogPostPage from "./pages/BlogPostPage";
import { LOCATIONS_DATA } from "./data/locationsData";

export default function App() {
  const [currentRoute, setCurrentRoute] = useState("home");
  const [selectedBlogSlug, setSelectedBlogSlug] = useState("");
  const [currentCityKey, setCurrentCityKey] = useState("bhubaneswar");

  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryPackage, setInquiryPackage] = useState("");
  const [inquiryService, setInquiryService] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Sync with browser URL / hash
  useEffect(() => {
    const parseUrl = () => {
      let raw = window.location.hash.replace(/^#/, "").trim().toLowerCase();
      if (!raw) {
        raw = window.location.pathname.replace(/^\//, "").trim().toLowerCase();
      }

      // Check for blog post path e.g. blog/slug or blog-post/slug
      if (raw.startsWith("blog/") || raw.startsWith("blog-post/")) {
        const parts = raw.split("/");
        if (parts[1]) {
          setSelectedBlogSlug(parts[1]);
          setCurrentRoute("blog-post");
          return;
        }
      }

      // Check for location prefix: e.g. #location-sambalpur
      if (raw.startsWith("location-")) {
        const key = raw.replace("location-", "");
        if (LOCATIONS_DATA[key]) {
          setCurrentCityKey(key);
          setCurrentRoute(raw);
          return;
        }
      }

      // Common aliases for key cities/districts
      if (raw === "rourkela" || raw === "location-rourkela") {
        setCurrentCityKey("sundargarh");
        setCurrentRoute("location-sundargarh");
        return;
      }
      if (raw === "baripada" || raw === "location-baripada") {
        setCurrentCityKey("mayurbhanj");
        setCurrentRoute("location-mayurbhanj");
        return;
      }
      if (raw === "jeypore" || raw === "location-jeypore") {
        setCurrentCityKey("koraput");
        setCurrentRoute("location-koraput");
        return;
      }
      if (raw === "kattag" || raw === "location-kattag") {
        setCurrentCityKey("cuttack");
        setCurrentRoute("location-cuttack");
        return;
      }
      if (raw === "barampur" || raw === "brahmapur" || raw === "location-barampur") {
        setCurrentCityKey("berhampur");
        setCurrentRoute("location-berhampur");
        return;
      }

      // Direct district slug match (e.g. #sambalpur, #angul, #balasore)
      if (LOCATIONS_DATA[raw]) {
        setCurrentCityKey(raw);
        setCurrentRoute(`location-${raw}`);
        return;
      }

      const standardRoutes = [
        "home",
        "stories",
        "services",
        "packages",
        "about",
        "contact",
        "privacy",
        "terms",
        "locations",
        "blog"
      ];

      if (standardRoutes.includes(raw)) {
        setCurrentRoute(raw);
      } else {
        setCurrentRoute("home");
      }
    };

    parseUrl();
    window.addEventListener("popstate", parseUrl);
    window.addEventListener("hashchange", parseUrl);

    return () => {
      window.removeEventListener("popstate", parseUrl);
      window.removeEventListener("hashchange", parseUrl);
    };
  }, []);

  const navigateTo = (route, param = "") => {
    if (route.startsWith("location-")) {
      const city = route.replace("location-", "");
      setCurrentCityKey(city);
      setCurrentRoute(route);
      window.location.hash = route;
    } else if (LOCATIONS_DATA[route]) {
      setCurrentCityKey(route);
      setCurrentRoute(`location-${route}`);
      window.location.hash = `location-${route}`;
    } else if (route === "blog-post" && param) {
      setSelectedBlogSlug(param);
      setCurrentRoute("blog-post");
      window.location.hash = `blog/${param}`;
    } else {
      setCurrentRoute(route);
      window.location.hash = route === "home" ? "" : route;
    }
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
            onSelectPost={(slug) => navigateTo("blog-post", slug)}
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

        {/* Regional Locations Pages */}
        {currentRoute === "locations" && (
          <LocationsHubPage
            onNavigate={navigateTo}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {currentRoute.startsWith("location-") && (
          <LocationPage
            cityKey={currentCityKey}
            onNavigate={navigateTo}
            onOpenInquiry={handleOpenInquiry}
          />
        )}

        {/* Blog & Journal Pages */}
        {currentRoute === "blog" && (
          <BlogListPage
            onNavigate={navigateTo}
            onSelectPost={(slug) => navigateTo("blog-post", slug)}
          />
        )}

        {currentRoute === "blog-post" && (
          <BlogPostPage
            slug={selectedBlogSlug}
            onNavigate={navigateTo}
            onSelectPost={(slug) => navigateTo("blog-post", slug)}
            onOpenInquiry={handleOpenInquiry}
          />
        )}
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
