import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Users, Briefcase, MapPin } from "lucide-react"

interface FeaturesSectionProps {
  language: "fr" | "en"
}

const content = {
  fr: {
    title: "Nos Services Principaux",
    subtitle: "Tout ce dont vous avez besoin en une seule application",
    features: [
      {
        icon: ShoppingCart,
        title: "Marketplace en Ligne",
        description: "Achetez, vendez ou échangez des biens et services au sein de votre communauté locale.",
      },
      {
        icon: Users,
        title: "Connexions Sociales",
        description:
          "Rencontrez de nouvelles personnes, créez des relations significatives et élargissez votre réseau.",
      },
      {
        icon: Briefcase,
        title: "Embauche de Services",
        description:
          "Trouvez et embauchez des professionnels de confiance ou des travailleurs qualifiés pour des tâches de toute taille.",
      },
      {
        icon: MapPin,
        title: "Suivi de Véhicules",
        description:
          "Suivi GPS en temps réel des motos (phase initiale) et autres véhicules avec expansion future prévue.",
      },
    ],
  },
  en: {
    title: "Our Core Services",
    subtitle: "Everything you need in one application",
    features: [
      {
        icon: ShoppingCart,
        title: "Online Marketplace",
        description: "Buy, sell, or exchange goods and services within your local community.",
      },
      {
        icon: Users,
        title: "Social Connections",
        description: "Meet new people, build meaningful relationships, and expand your network.",
      },
      {
        icon: Briefcase,
        title: "Service Hiring",
        description: "Find and hire trusted professionals or skilled workers for tasks of any size.",
      },
      {
        icon: MapPin,
        title: "Vehicle Tracking",
        description:
          "Real-time GPS tracking of motorbikes (initial phase) and other vehicles with future expansion planned.",
      },
    ],
  },
}

export function FeaturesSection({ language }: FeaturesSectionProps) {
  const t = content[language]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
