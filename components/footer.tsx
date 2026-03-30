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
    disclaimerTitle: "Avertissement",
    disclaimer:
      "Les informations fournies sur ce site sont à titre informatif uniquement. TT Marché Central ne garantit pas l'exactitude, l'exhaustivité ou l'actualité des informations. L'utilisation de cette application est à vos propres risques. Nous ne sommes pas responsables des pertes ou dommages résultant de l'utilisation de nos services.",
    privacyTitle: "Politique de Confidentialité",
    privacy:
      "Nous respectons votre vie privée. Les données personnelles collectées sont utilisées uniquement pour améliorer nos services et faciliter les transactions. Nous ne partageons pas vos informations avec des tiers sans votre consentement, sauf si requis par la loi. En utilisant notre application, vous acceptez notre collecte et utilisation de données conformément à cette politique.",
  },
  en: {
    address: "Avenue Kalambayi Nzevu No. 1, Quartier de la Poste, Commune de la Muya, Province de Mbuji-Mayi, DRC",
    phone: "+243 986 126 926",
    email: "marchecentral25@gmail.com",
    rights: "© 2025 TT Marché Central. All rights reserved.",
    mission: "Connecting communities across the Democratic Republic of Congo",
    registration: "Registered as TT MARCHE CENTRAL SPRL",
    disclaimerTitle: "Disclaimer",
    disclaimer:
      "The information provided on this website is for general informational purposes only. TT Marché Central makes no guarantees regarding the accuracy, completeness, or timeliness of the information. Use of this application is at your own risk. We are not liable for any losses or damages arising from the use of our services.",
    privacyTitle: "Privacy Policy",
    privacy:
      "We respect your privacy. Personal data collected is used solely to improve our services and facilitate transactions. We do not share your information with third parties without your consent, unless required by law. By using our application, you agree to our collection and use of data in accordance with this policy.",
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

        {/* Disclaimer and Privacy Policy Section */}
        <div className="mt-12 pt-8 border-t border-[#1B362F]/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-2 text-[#1B362F]">{t.disclaimerTitle}</h4>
              <p className="text-xs text-[#1B362F]/60 leading-relaxed text-pretty">{t.disclaimer}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2 text-[#1B362F]">{t.privacyTitle}</h4>
              <p className="text-xs text-[#1B362F]/60 leading-relaxed text-pretty">{t.privacy}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
