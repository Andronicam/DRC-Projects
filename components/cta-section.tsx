"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Phone, Mail } from "lucide-react"
import { InterestForm } from "./interest-form"

interface CTASectionProps {
  language: "fr" | "en"
}

const content = {
  fr: {
    title: "Rejoignez la Révolution Numérique",
    subtitle:
      "Devenez partie du hub numérique leader du pays pour le commerce, les services et les connexions personnelles",
    description:
      "La mission de Marché Central est de devenir le hub numérique leader du pays pour le commerce, les services et les connexions personnelles, soutenant la croissance économique et l'unité sociale dans toutes les provinces.",
    downloadButton: "Télécharger Maintenant",
    contactButton: "Nous Contacter",
    interestButton: "Liste d'Attente",
    phone: "+243 986 126 926",
  },
  en: {
    title: "Join the Digital Revolution",
    subtitle: "Become part of the country's leading digital hub for trade, services, and personal connections",
    description:
      "Marché Central's mission is to become the country's leading digital hub for trade, services, and personal connections supporting economic growth and social unity across all provinces.",
    downloadButton: "Download Now",
    contactButton: "Contact Us",
    interestButton: "Waitlist",
    phone: "+243 986 126 926",
  },
}

export function CTASection({ language }: CTASectionProps) {
  const t = content[language]
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="py-20 bg-primary text-primary-foreground" data-section="cta">
      <div className="container mx-auto px-4">
        {!showForm ? (
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">{t.title}</h2>
            <p className="text-xl mb-4 text-primary-foreground/90 text-pretty">{t.subtitle}</p>
            <p className="text-lg mb-8 text-primary-foreground/80 max-w-3xl mx-auto text-pretty">{t.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Download className="mr-2 h-5 w-5" />
                {t.downloadButton}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                {t.contactButton}
              </Button>
              <Button
                size="lg"
                onClick={() => setShowForm(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                <Mail className="mr-2 h-5 w-5" />
                {t.interestButton}
              </Button>
            </div>
            <div className="mt-8 text-primary-foreground/80">
              <p className="text-lg">{t.phone}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Button
                variant="outline"
                onClick={() => setShowForm(false)}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                ← {language === "fr" ? "Retour" : "Back"}
              </Button>
            </div>
            <InterestForm language={language} />
          </div>
        )}
      </div>
    </section>
  )
}
