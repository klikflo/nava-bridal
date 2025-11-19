import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Eager load Home page for better initial performance
import Home from "./pages/Home";

// Lazy load other pages for code splitting
const CollectionDetail = lazy(() => import("./pages/CollectionDetail"));
const DressGallery = lazy(() => import("./pages/DressGallery"));
const OurBrides = lazy(() => import("./pages/OurBrides"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Consultation = lazy(() => import("./pages/Consultation"));
const WeddingPlanner = lazy(() => import("./pages/WeddingPlanner"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load components
const FloatingWhatsApp = lazy(() => import("./components/FloatingWhatsApp"));
const ContactPopup = lazy(() => import("./components/ContactPopup"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));
const ScrollProgress = lazy(() => import("./components/ScrollProgress"));
const BackToTop = lazy(() => import("./components/BackToTop"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-muted-foreground font-serif">טוען...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <ScrollProgress />
          <BackToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collections/:collectionId" element={<CollectionDetail />} />
            <Route path="/collections/:collectionId/:dressName" element={<DressGallery />} />
            <Route path="/our-brides" element={<OurBrides />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/wedding-planner" element={<WeddingPlanner />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingWhatsApp />
          <ContactPopup />
          <CookieConsent />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
