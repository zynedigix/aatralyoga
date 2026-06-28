import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Philosophy from "./components/Philosophy";
import Founders from "./components/Founders";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Programs from "./components/Programs";
import QuoteSection from "./components/QuoteSection";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-ivory">
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Founders />
      <Programs />
      {/* <Services /> */}
      <Gallery />
      <Testimonials />
      <QuoteSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
