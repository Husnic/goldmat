import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/home/AboutSection";
import ServicesSection from "./components/home/ServicesSection";
import ProjectSnapshot from "./components/home/ProjectSnapshot";
import MissionStatement from "./components/home/MissionStatement";
import TestimonialSection from "./components/home/TestimonialSection";
import CallToAction from "./components/home/CallToAction";
import FAQSection from "./components/home/FAQSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectSnapshot />
      <MissionStatement />
      <TestimonialSection />
      <CallToAction />
      <FAQSection />
    </div>
  );
}
