import ContactForm from "./components/ContactForm";
import ContactHero from "./components/ContactHero";
import ContactInfo from "./components/ContactInfo";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <div className="grid lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
