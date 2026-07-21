import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import DataFlow from "@/components/home/DataFlow";
import SystemSection from "@/components/home/SystemSection";
import Capabilities from "@/components/home/Capabilities";
import Results from "@/components/home/Results";
import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DataFlow />
      <SystemSection />
      <Capabilities />
      <Results />
      <CTA />
      <Footer />
    </>
  );
}