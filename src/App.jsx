import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Corporate from "./components/Corporate";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Plans from "./components/Plans";
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
      <Services />
      <Corporate />
      <Gallery />
      <Testimonials />
      <Plans />
      <QuoteSection />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
