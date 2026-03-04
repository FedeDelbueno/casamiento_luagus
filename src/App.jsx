import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import RSVPForm from "./components/RSVPForm";
import EventDetails from "./components/EventDetails";
import WelcomeSection from "./components/WelcomeSection";
import GiftSection from "./components/GiftSection";
import HashtagSection from "./components/HashtagSection";
import SongsSection from "./components/SongsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <WelcomeSection />
      <EventDetails />
      <GiftSection />
      <RSVPForm />
      <HashtagSection />
      <SongsSection />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;