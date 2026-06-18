import { AudienceSection } from "@/components/AudienceSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MethodSection } from "@/components/MethodSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { TrustSection } from "@/components/TrustSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AudienceSection />
        <ProblemSection />
        <SolutionsSection />
        <MethodSection />
        <TrustSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
