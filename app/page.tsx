import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Destinations from "@/components/Destinations";
import Packages from "@/components/Packages";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Inspiration from "@/components/Inspiration";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="home">
        <Hero />
        <TrustBar />
        <Destinations />
        <Packages />
        <Services />
        <WhyChoose />
        <Inspiration />
        <HowItWorks />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
