"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TrackingDownloadSection } from "@/components/tracking-download-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")

  return (
    <div className="min-h-screen">
      <Header language={language} onLanguageChange={setLanguage} />

      <main className="pt-20">
        <HeroSection language={language} />
        <FeaturesSection language={language} />
        <BenefitsSection language={language} />
        <TrackingDownloadSection language={language} />
        <CTASection language={language} />
      </main>

      <Footer language={language} />
    </div>
  )
}
