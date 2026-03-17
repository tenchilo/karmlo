import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ExpertiseSection />
      <TrackRecordSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
