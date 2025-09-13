"use server"

interface FormData {
  name: string
  email: string
  phone: string
  type: string
  businessName?: string
  businessAddress?: string
  contactPerson?: string
  contactPhone?: string
  service: string
  message?: string
}

export async function submitInterestForm(formData: FormData, language: "fr" | "en") {
  try {
    // Create email content
    const isBusinessType = formData.type === "business"
    const typeLabel =
      language === "fr" ? (isBusinessType ? "Entreprise" : "Particulier") : isBusinessType ? "Business" : "Individual"

    const serviceLabels = {
      fr: {
        marketplace: "Marché en Ligne",
        social: "Connexions Sociales",
        services: "Embauche de Services",
        all: "Tous les Services",
      },
      en: {
        marketplace: "Online Marketplace",
        social: "Social Connections",
        services: "Service Hiring",
        all: "All Services",
      },
    }

    const subject =
      language === "fr"
        ? "Nouvelle Manifestation d'Intérêt - Marché Central"
        : "New Interest Submission - Marché Central"

    let emailBody = `
${language === "fr" ? "Nouvelle manifestation d'intérêt reçue" : "New interest submission received"}:

${language === "fr" ? "Informations de base" : "Basic Information"}:
- ${language === "fr" ? "Nom" : "Name"}: ${formData.name}
- Email: ${formData.email}
- ${language === "fr" ? "Téléphone" : "Phone"}: ${formData.phone}
- ${language === "fr" ? "Type" : "Type"}: ${typeLabel}
- ${language === "fr" ? "Service d'intérêt" : "Service of Interest"}: ${serviceLabels[language][formData.service as keyof typeof serviceLabels.en] || formData.service}
`

    if (isBusinessType && formData.businessName) {
      emailBody += `
${language === "fr" ? "Informations de l'entreprise" : "Business Information"}:
- ${language === "fr" ? "Nom de l'entreprise" : "Business Name"}: ${formData.businessName}
- ${language === "fr" ? "Adresse" : "Address"}: ${formData.businessAddress}
- ${language === "fr" ? "Personne de contact" : "Contact Person"}: ${formData.contactPerson}
- ${language === "fr" ? "Téléphone de contact" : "Contact Phone"}: ${formData.contactPhone}
`
    }

    if (formData.message) {
      emailBody += `
${language === "fr" ? "Message" : "Message"}:
${formData.message}
`
    }

    emailBody += `
${language === "fr" ? "Soumis le" : "Submitted on"}: ${new Date().toLocaleString()}
`

    // In a real application, you would use a service like Resend, SendGrid, or Nodemailer
    // For now, we'll simulate the email sending
    console.log("[v0] Email would be sent to: marchecentral25@gmail.com")
    console.log("[v0] Subject:", subject)
    console.log("[v0] Body:", emailBody)

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // In production, replace this with actual email sending logic:
    /*
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: 'marchecentral25@gmail.com',
        subject,
        body: emailBody
      })
    })

    if (!response.ok) {
      throw new Error('Failed to send email')
    }
    */

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting form:", error)
    throw new Error("Failed to submit form")
  }
}
