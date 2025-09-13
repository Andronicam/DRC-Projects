import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Smartphone,
  Users,
  ShoppingBag,
  Briefcase,
  TrendingUp,
  Heart,
  Globe,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LearnMorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft className="h-6 w-6" />
              <span className="text-lg font-semibold">Back to Home</span>
            </Link>
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="TT Marché Central" width={120} height={72} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Discover Marché Central</h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto text-pretty">
            The revolutionary mobile application transforming how people connect, trade, and thrive across the
            Democratic Republic of Congo
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-green-800 mb-6">What is Marché Central?</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Marché Central is a groundbreaking mobile application designed to connect people, create
                  opportunities, and simplify everyday life in the Democratic Republic of the Congo. Our platform brings
                  together multiple essential services in one convenient place.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From our headquarters at Avenue Kalambayi Nzevu No. 1, Quartier de la Poste, Commune de la Muya,
                  Province de Mbuji-Mayi, we're building the country's leading digital hub for trade, services, and
                  personal connections.
                </p>
              </div>
              <div className="bg-green-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-green-800">Connect</h3>
                    <p className="text-sm text-gray-600">Build meaningful relationships</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-green-800">Trade</h3>
                    <p className="text-sm text-gray-600">Buy and sell with ease</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-green-800">Work</h3>
                    <p className="text-sm text-gray-600">Find trusted professionals</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-green-800">Grow</h3>
                    <p className="text-sm text-gray-600">Expand your opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-16">Four Powerful Services in One App</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mb-6">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Online Marketplace</h3>
                <p className="text-gray-700 leading-relaxed">
                  Buy, sell, or exchange goods and services within your local community. Connect with buyers and sellers
                  across all provinces of the DRC.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Social Connections</h3>
                <p className="text-gray-700 leading-relaxed">
                  Meet new people, build meaningful relationships, and expand your network. Foster community development
                  and cooperation across regions.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Service Hiring</h3>
                <p className="text-gray-700 leading-relaxed">
                  Find and hire trusted professionals or skilled workers for tasks of any size. Access direct work
                  opportunities for skilled and unskilled workers.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">Motorbike Tracking</h3>
                <p className="text-gray-700 leading-relaxed">
                  Real-time GPS tracking for motorbikes with future expansion to other vehicles. Enhance security and
                  monitor your assets across the DRC.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20 bg-green-50 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-16">
              Empowering Businesses, Connecting People and Building Community
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Driving economic opportunities and building connections across all provinces
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Boosting Local Economies</h3>
                <p className="text-gray-700">
                  Helping small businesses, entrepreneurs, and individuals reach a wider audience without large
                  marketing costs.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Job Creation</h3>
                <p className="text-gray-700">
                  Providing skilled and unskilled workers with direct access to work opportunities across the country.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Community Development</h3>
                <p className="text-gray-700">
                  Encouraging interaction and cooperation between people across different regions and communities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-4">Ease of Access</h3>
                <p className="text-gray-700">
                  Designed for mobile use, making it available to users in both cities and rural areas across the DRC.
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-20 text-center">
            <div className="bg-gradient-to-r from-green-800 to-green-700 text-white rounded-3xl p-12">
              <Globe className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Marché Central's mission is to become the country's leading digital hub for trade, services, and
                personal connections, supporting economic growth and social unity across all provinces of the Democratic
                Republic of Congo.
              </p>
            </div>
          </section>

          {/* Motorbike Tracking Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-700 text-white rounded-3xl p-12">
              <div className="text-center mb-12">
                <MapPin className="h-16 w-16 mx-auto mb-6 text-yellow-400" />
                <h2 className="text-4xl font-bold mb-6">Motorbike Tracking Solution</h2>
                <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
                  Advanced GPS tracking technology designed specifically for motorbikes, with plans to expand to all
                  vehicle types
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-emerald-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Real-Time Location</h3>
                  <p className="text-emerald-100">
                    Track your motorbike's exact location in real-time with precise GPS coordinates and live updates.
                  </p>
                </div>
                <div className="bg-emerald-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Security Alerts</h3>
                  <p className="text-emerald-100">
                    Receive instant notifications for unauthorized movement, theft attempts, or when your vehicle leaves
                    designated areas.
                  </p>
                </div>
                <div className="bg-emerald-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Route History</h3>
                  <p className="text-emerald-100">
                    Access detailed travel history, route optimization, and usage analytics to better manage your
                    vehicle.
                  </p>
                </div>
                <div className="bg-emerald-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Multi-Device Access</h3>
                  <p className="text-emerald-100">
                    Monitor your motorbike from any smartphone, tablet, or computer with our cross-platform application.
                  </p>
                </div>
                <div className="bg-emerald-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Future Expansion</h3>
                  <p className="text-emerald-100">
                    Starting with motorbikes, we plan to expand tracking capabilities to cars, trucks, and commercial
                    vehicles.
                  </p>
                </div>
                <div className="bg-emerald-900/50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-yellow-400 mb-4">Local Support</h3>
                  <p className="text-emerald-100">
                    Dedicated customer support and installation services available across all major cities in the DRC.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-3xl p-12 shadow-lg border border-green-100">
            <h2 className="text-4xl font-bold text-center text-green-800 mb-12">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Email Us</h3>
                <a
                  href="mailto:marchecentral25@gmail.com"
                  className="text-green-600 hover:text-green-800 transition-colors"
                >
                  marchecentral25@gmail.com
                </a>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Call Us</h3>
                <a href="tel:+243986126926" className="text-green-600 hover:text-green-800 transition-colors">
                  +243 986 126 926
                </a>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Visit Us</h3>
                <p className="text-gray-700">
                  Avenue Kalambayi Nzevu No. 1<br />
                  Quartier de la Poste, Commune de la Muya
                  <br />
                  Province de Mbuji-Mayi, DRC
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of users already transforming their lives with Marché Central
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-6 text-lg font-semibold">
              <Smartphone className="mr-3 h-6 w-6" />
              Download App
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-6 text-lg font-semibold bg-transparent"
            >
              <Mail className="mr-3 h-6 w-6" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
