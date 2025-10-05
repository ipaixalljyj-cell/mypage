import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ExperienceClassSection } from "@/components/experience-class-section"
import { AnalysisReportSection } from "@/components/analysis-report-section"
import { PricingSection } from "@/components/pricing-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { DemoSection } from "@/components/demo-section"
import { Footer } from "@/components/footer"
import { WaitlistModal } from "@/components/waitlist-modal"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AnalysisReportSection />
        <ExperienceClassSection />
        <PricingSection />
        <UseCasesSection />
        <DemoSection />
      </main>
      <Footer />
      <WaitlistModal />
    </div>
  )
}
