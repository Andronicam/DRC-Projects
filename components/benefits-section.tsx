import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, Smartphone } from "lucide-react"

interface BenefitsSectionProps {
  language: "fr" | "en"
}

const content = {
  fr: {
    title: "Avantages pour la RDC",
    subtitle: "Stimuler les opportunités économiques et créer des connexions dans toutes les provinces",
    benefits: [
      {
        icon: TrendingUp,
        title: "Stimuler les Économies Locales",
        description:
          "Aider les petites entreprises, entrepreneurs et particuliers à atteindre un public plus large sans coûts marketing importants.",
      },
      {
        icon: Users,
        title: "Création d'Emplois",
        description: "Fournir aux travailleurs qualifiés et non qualifiés un accès direct aux opportunités de travail.",
      },
      {
        icon: MapPin,
        title: "Développement Communautaire",
        description: "Encourager l'interaction et la coopération entre les personnes de différentes régions.",
      },
      {
        icon: Smartphone,
        title: "Facilité d'Accès",
        description:
          "Conçu pour une utilisation mobile, le rendant disponible aux utilisateurs des villes et des zones rurales.",
      },
    ],
  },
  en: {
    title: "Empowering Businesses, Connecting People and Building Community",
    subtitle: "Driving economic opportunities and building connections across all provinces",
    benefits: [
      {
        icon: TrendingUp,
        title: "Boosting Local Economies",
        description:
          "Helping small businesses, entrepreneurs, and individuals reach a wider audience without large marketing costs.",
      },
      {
        icon: Users,
        title: "Job Creation",
        description: "Providing skilled and unskilled workers with direct access to work opportunities.",
      },
      {
        icon: MapPin,
        title: "Community Development",
        description: "Encouraging interaction and cooperation between people across different regions.",
      },
      {
        icon: Smartphone,
        title: "Ease of Access",
        description: "Designed for mobile use, making it available to users in both cities and rural areas.",
      },
    ],
  },
}

export function BenefitsSection({ language }: BenefitsSectionProps) {
  const t = content[language]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{t.title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{t.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-pretty">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
