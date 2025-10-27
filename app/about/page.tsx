import AboutHero from "./components/AboutHero";
import AboutStory from "./components/AboutStory";
import TeamSection from "./components/TeamSection";
import ValuesSection from "./components/ValuesSection";
import AboutCTA from "./components/AboutCTA";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutStory />
      <ValuesSection />
      <TeamSection />
      <AboutCTA />
    </div>
  );
}
