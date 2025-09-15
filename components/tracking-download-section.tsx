import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Smartphone } from "lucide-react"

interface TrackingDownloadSectionProps {
  language: "fr" | "en"
}

const content = {
  fr: {
    title: "Application de Suivi de Motos",
    subtitle: "Téléchargez notre application dédiée au suivi GPS",
    description:
      "Suivez vos motos et véhicules en temps réel avec notre solution de suivi GPS avancée. Sécurité, localisation et tranquillité d'esprit à portée de main.",
    features: [
      "Suivi GPS en temps réel",
      "Alertes de sécurité instantanées",
      "Historique des trajets",
      "Interface utilisateur intuitive",
    ],
    downloadButton: "Télécharger l'App de Suivi de Motos",
    comingSoon: "Bientôt Disponible",
  },
  en: {
    title: "Motorbike Tracking App",
    subtitle: "Download our dedicated GPS tracking application",
    description:
      "Track your motorbikes and vehicles in real-time with our advanced GPS tracking solution. Security, location, and peace of mind at your fingertips.",
    features: ["Real-time GPS tracking", "Instant security alerts", "Trip history", "Intuitive user interface"],
    downloadButton: "Download Motorbike Tracking App",
    comingSoon: "Coming Soon",
  },
}

export function TrackingDownloadSection({ language }: TrackingDownloadSectionProps) {
  const t = content[language]

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-primary border-primary/70">
            <CardHeader className="text-center">
              <div className="mx-auto w-20 h-20 bg-secondary rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-10 w-10 text-secondary-foreground" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t.title}</CardTitle>
              <p className="text-xl text-primary-foreground/90 text-pretty">{t.subtitle}</p>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-primary-foreground/80 mb-8 text-pretty max-w-2xl mx-auto">{t.description}</p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {t.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-primary-foreground/90">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold px-8 py-3"
                  disabled
                >
                  <Smartphone className="h-5 w-5 mr-2" />
                  {t.downloadButton}
                </Button>
                <span className="text-primary-foreground/70 text-sm">{t.comingSoon}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
