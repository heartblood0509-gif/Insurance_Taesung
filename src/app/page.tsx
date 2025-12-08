import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConsultationForm from "@/components/ConsultationForm";
import Calculator from "@/components/Calculator";
import ProductCards from "@/components/ProductCards";
import Charts from "@/components/Charts";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Calculator />
      <ProductCards />
      <Charts />
      <Timeline />
      <Testimonials />
      <Partners />
      <Pricing />
      <ConsultationForm />
      <Footer />
    </main>
  );
}
