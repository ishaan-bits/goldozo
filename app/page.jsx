import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { InfoStrip, Marquee } from "@/components/Strips";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Amenities from "@/components/Amenities";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";
import CTABand from "@/components/CTABand";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ContentProvider } from "@/components/ContentProvider";

export default function Home() {
  return (
    <ContentProvider>
      <ScrollReveal />
      <Navbar />
      <Hero />
      <InfoStrip />
      <Marquee />
      <About />
      <Programs />
      <Gallery />
      <Amenities />
      <Pricing />
      <Reviews />
      <Visit />
      <EnquiryForm />
      <CTABand />
      <Footer />
    </ContentProvider>
  );
}
