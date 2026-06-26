import { useState, useCallback } from "react";
import confetti from "canvas-confetti";

import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import RSVPForm from "./components/RSVPForm";
import EventDetails from "./components/EventDetails";
import WelcomeSection from "./components/WelcomeSection";
import GiftSection from "./components/GiftSection";
import HashtagSection from "./components/HashtagSection";
import SongsSection from "./components/SongsSection";
import DrivePhotoSection from "./components/DrivePhotoSection";
import Footer from "./components/Footer";

import IntroAnimation from "./components/IntroAnimation";
import ScrollProgress from "./components/ScrollProgress";
import SectionDivider from "./components/SectionDivider";
import ScrollToTop from "./components/ScrollToTop";
import ClickSparkle from "./components/ClickSparkle";
import FloatingRSVPReminder from "./components/FloatingRSVPReminder";

const CONFETTI_COLORS = ["#FDE68A", "#D4AF37", "#B8962E", "#F9E27A", "#FFFEF9", "#FAF3E0"];

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);

    // Ráfaga de confetti dorado desde ambos lados
    setTimeout(() => {
      confetti({
        particleCount: 75,
        angle: 60,
        spread: 65,
        origin: { x: 0.02, y: 0.65 },
        colors: CONFETTI_COLORS,
        scalar: 0.88,
        gravity: 0.85,
        drift: 0.2,
      });
    }, 150);

    setTimeout(() => {
      confetti({
        particleCount: 75,
        angle: 120,
        spread: 65,
        origin: { x: 0.98, y: 0.65 },
        colors: CONFETTI_COLORS,
        scalar: 0.88,
        gravity: 0.85,
        drift: -0.2,
      });
    }, 350);

    // Tercer burst central más sutil
    setTimeout(() => {
      confetti({
        particleCount: 40,
        angle: 90,
        spread: 45,
        origin: { x: 0.5, y: 0.75 },
        colors: CONFETTI_COLORS,
        scalar: 0.7,
        gravity: 1,
      });
    }, 600);
  }, []);

  return (
    <div className="App">
      {/* Intro animada */}
      {!introComplete && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Barra de progreso dorada */}
      <ScrollProgress />

      {/* Sparkles en cada click/tap */}
      <ClickSparkle />

      <Hero />

      <WelcomeSection />
      <SectionDivider bg="#FDFAF2" />

      <EventDetails />
      <SectionDivider bg="#FFFEF9" />

      <GiftSection />
      <SectionDivider bg="#FEF9D9" />

      <RSVPForm />
      <SectionDivider bg="#FDFAF2" />

      <HashtagSection />
      <SectionDivider bg="#FAF3E0" />

      <SongsSection />
      <SectionDivider bg="#FAF3E0" />

      <DrivePhotoSection />
      <SectionDivider bg="#FFFEF9" />

      <Gallery />

      <Footer />

      {/* Botón scroll-to-top */}
      <ScrollToTop />

      {/* Recordatorio flotante de RSVP */}
      <FloatingRSVPReminder />
    </div>
  );
}

export default App;
