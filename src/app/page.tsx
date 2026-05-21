import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EquipmentGrid from "@/components/EquipmentGrid";
import WhyUs from "@/components/WhyUs";
import WorkPhotos from "@/components/WorkPhotos";
import ServiceArea from "@/components/ServiceArea";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <EquipmentGrid />
        <WhyUs />
        <WorkPhotos />
        <ServiceArea />
        <Testimonials />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
