"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Download, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { InterestForm } from "./interest-form"
import { useState } from "react"

interface HeroSectionProps {
  language: "fr" | "en"
}

const content = {
  fr: {
    title: "Une App, Possibilités Infinies",
    subtitle: "Connectez-vous, créez des opportunités et simplifiez votre vie quotidienne",
    description:
      "Marché Central réunit plusieurs services essentiels en un seul endroit pratique : marketplace en ligne, connexions sociales et embauche de services.",
    downloadButton: "Télécharger l'App",
    learnMore: "En Savoir Plus",
    primaryCta: "Rejoindre la Liste d'Attente",
  },
  en: {
    title: "One App, Infinite Possibilities",
    subtitle: "Connect people, create opportunities, and simplify everyday life",
    description:
      "Marché Central brings together multiple essential services in one convenient place: online marketplace, social connections, and service hiring.",
    downloadButton: "Download App",
    learnMore: "Learn More",
    primaryCta: "Join Waitlist",
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = content[language]
  const [isModalOpen, setIsModalOpen] = useState(false)

  const scrollToCTA = () => {
    const ctaSection = document.querySelector('[data-section="cta"]')
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-green-800">
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-green-700 to-green-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-white">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-white text-pretty font-light">{t.subtitle}</p>
            <p className="text-lg md:text-xl mb-10 text-white/90 text-pretty max-w-2xl">{t.description}</p>

            <div className="mb-8">
              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-400 text-black shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 px-12 py-8 text-xl font-bold rounded-full"
                  >
                    {t.primaryCta}
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="sr-only">
                      {language === "fr" ? "Formulaire de Liste d'Attente" : "Waitlist Form"}
                    </DialogTitle>
                  </DialogHeader>
                  <InterestForm language={language} />
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
              >
                <Download className="mr-3 h-6 w-6" />
                {t.downloadButton}
              </Button>
              <Link href="/learn-more">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-800 bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg font-semibold"
                >
                  {t.learnMore}
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-3xl scale-150" />
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
                <Smartphone className="h-80 w-48 text-white/90 drop-shadow-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/30 shadow-xl">
                      <Image src="/logo.png" alt="App Icon" width={80} height={48} className="drop-shadow-md" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  )
}
