"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

interface FooterProps {
  language: "fr" | "en"
}

const content = {
  fr: {
    address: "Avenue Kalambayi Nzevu No. 1, Quartier de la Poste, Commune de la Muya, Province de Mbuji-Mayi, RDC",
    phone: "+243 986 126 926",
    email: "marchecentral25@gmail.com",
    rights: "© 2025 TT Marché Central. Tous droits réservés.",
    mission: "Connecter les communautés à travers la République Démocratique du Congo",
    registration: "Enregistré sous TT MARCHE CENTRAL SPRL",
  },
  en: {
    address: "Avenue Kalambayi Nzevu No. 1, Quartier de la Poste, Commune de la Muya, Province de Mbuji-Mayi, DRC",
    phone: "+243 986 126 926",
    email: "marchecentral25@gmail.com",
    rights: "© 2025 TT Marché Central. All rights reserved.",
    mission: "Connecting communities across the Democratic Republic of Congo",
    registration: "Registered as TT MARCHE CENTRAL SPRL",
  },
}

export function Footer({ language }: FooterProps) {
  const t = content[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#F0F5F3] py-12 text-[#1B362F]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <button onClick={scrollToTop} className="inline-block hover:opacity-80 transition-opacity">
            <Image
              src="/marche-central-logo.png"
              alt="TT Marché Central Logo"
              width={350}
              height={210}
              className="h-26 w-auto drop-shadow-lg"
            />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#1B362F]">TT Marché Central</h3>
            <p className="text-[#1B362F]/80 mb-4 text-pretty">{t.mission}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#1B362F]/80">{t.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-secondary" />
                <p className="text-sm text-[#1B362F]/80">{t.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-secondary" />
                <a
                  href={`mailto:${t.email}`}
                  className="text-sm text-[#1B362F]/80 hover:text-secondary transition-colors"
                >
                  {t.email}
                </a>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-[#1B362F]/80">{t.rights}</p>
            <p className="text-xs text-[#1B362F]/60 mt-1">{t.registration}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
