"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, User, Building, MapPin, Phone } from "lucide-react"
import { submitInterestForm } from "@/app/actions/submit-form"

interface InterestFormProps {
  language: "fr" | "en"
}

const content = {
  fr: {
    title: "Manifestez Votre Intérêt",
    subtitle: "Rejoignez la révolution numérique du commerce en RDC",
    name: "Nom Complet",
    email: "Adresse Email",
    phone: "Numéro de Téléphone",
    businessName: "Nom de l'Entreprise",
    businessAddress: "Adresse de l'Entreprise",
    contactPerson: "Personne de Contact Principal",
    contactPhone: "Téléphone de Contact",
    message: "Message (Optionnel)",
    submit: "Soumettre",
    submitting: "Envoi en cours...",
    success: "Merci! Votre demande a été envoyée avec succès.",
    error: "Erreur lors de l'envoi. Veuillez réessayer.",
  },
  en: {
    title: "Express Your Interest",
    subtitle: "Join the digital commerce revolution in DRC",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    businessName: "Business Name",
    businessAddress: "Business Address",
    contactPerson: "Main Contact Person",
    contactPhone: "Contact Phone",
    message: "Message (Optional)",
    submit: "Submit",
    submitting: "Submitting...",
    success: "Thank you! Your interest has been submitted successfully.",
    error: "Error submitting form. Please try again.",
  },
}

export function InterestForm({ language }: InterestFormProps) {
  const t = content[language]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    businessAddress: "",
    contactPerson: "",
    contactPhone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await submitInterestForm(formData, language)
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessName: "",
        businessAddress: "",
        contactPerson: "",
        contactPhone: "",
        message: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-primary flex items-center justify-center gap-2">
          <Mail className="h-6 w-6" />
          {t.title}
        </CardTitle>
        <p className="text-muted-foreground">{t.subtitle}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {t.name}
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {t.email}
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {t.phone}
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>

          {/* Business Information - Always visible now */}
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="businessName" className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                {t.businessName}
              </Label>
              <Input
                id="businessName"
                value={formData.businessName}
                onChange={(e) => handleInputChange("businessName", e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="businessAddress" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {t.businessAddress}
              </Label>
              <Textarea
                id="businessAddress"
                value={formData.businessAddress}
                onChange={(e) => handleInputChange("businessAddress", e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="contactPerson" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {t.contactPerson}
                </Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPhone" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  {t.contactPhone}
                </Label>
                <Input
                  id="contactPhone"
                  value={formData.contactPhone}
                  onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Optional Message */}
          <div className="space-y-2">
            <Label htmlFor="message">{t.message}</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={3}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting || !formData.name || !formData.email || !formData.phone}
          >
            {isSubmitting ? t.submitting : t.submit}
          </Button>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">{t.success}</div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">{t.error}</div>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
