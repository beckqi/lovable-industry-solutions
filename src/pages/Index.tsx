import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AlternatingSections from "@/components/AlternatingSections";
import TechAdvantages from "@/components/TechAdvantages";
import ProcessFlow from "@/components/ProcessFlow";
import TrustWall from "@/components/TrustWall";
import ProductMatrix from "@/components/ProductMatrix";
import SolutionTabs from "@/components/SolutionTabs";
import CaseStudies from "@/components/CaseStudies";
import SocialProof from "@/components/SocialProof";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProcessFlow />
      <TrustWall />
      <ProductMatrix />
      <AlternatingSections />
      <TechAdvantages />
      {/* <SolutionTabs /> */}
      <CaseStudies />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
