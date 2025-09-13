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
    registration: "Enregistré sous TSHITSHI MARCHE CENTRAL (TT MC SPRL)",
  },
  en: {
    address: "Avenue Kalambayi Nzevu No. 1, Quartier de la Poste, Commune de la Muya, Province de Mbuji-Mayi, DRC",
    phone: "+243 986 126 926",
    email: "marchecentral25@gmail.com",
    rights: "© 2025 TT Marché Central. All rights reserved.",
    mission: "Connecting communities across the Democratic Republic of Congo",
    registration: "Registered as TSHITSHI MARCHE CENTRAL (TT MC SPRL)",
  },
}

export function Footer({ language }: FooterProps) {
  const t = content[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <button onClick={scrollToTop} className="inline-block hover:opacity-80 transition-opacity">
            <Image
              src="/marche-central-logo.png"
              alt="TT Marché Central Logo"
              width={220}
              height={132}
              className="h-18 w-auto drop-shadow-lg"
            />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">TT Marché Central</h3>
            <p className="text-gray-300 mb-4 text-pretty">{t.mission}</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">{t.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-yellow-500" />
                <p className="text-sm text-gray-300">{t.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-yellow-500" />
                <a href={`mailto:${t.email}`} className="text-sm text-gray-300 hover:text-yellow-500 transition-colors">
                  {t.email}
                </a>
              </div>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">{t.rights}</p>
            <p className="text-xs text-gray-400 mt-1">{t.registration}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
