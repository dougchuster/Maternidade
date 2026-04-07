import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import Specialties from '../components/Specialties';
import WhatsAppCtaBanner from '../components/WhatsAppCtaBanner';
import HowItWorks from '../components/HowItWorks';
import About from '../components/About';
import Results from '../components/Results';
import WhyChooseUs from '../components/WhyChooseUs';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';

export default function LandingPage() {
  return (
    <div className="min-h-screen min-w-0 overflow-x-hidden bg-surface selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Specialties />
        <WhatsAppCtaBanner />
        <HowItWorks />
        <About />
        <Results />
        <WhyChooseUs />
        <Benefits />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
