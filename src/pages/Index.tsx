import HeroSection from "@/components/HeroSection";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorIntro from "@/components/DoctorIntro";
import TestimonialsPreview from "@/components/TestimonialsPreview";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <DoctorIntro />
      <TestimonialsPreview />
      <CTASection />
    </>
  );
};

export default Index;
