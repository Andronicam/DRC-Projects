"use server"

interface FormData {
  name: string
  email: string
  phone: string
  message?: string
}

export async function submitInterestForm(formData: FormData, language: "fr" | "en") {
  try {
    console.log("[v0] Form submission received:", {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      language,
      timestamp: new Date().toISOString(),
    })

    console.log("[v0] Email would be sent to: marchecentral25@gmail.com")
    console.log(
      "[v0] Subject:",
      language === "fr"
        ? "Nouvelle Manifestation d'Intérêt - Marché Central"
        : "New Interest Submission - Marché Central",
    )

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting form:", error)
    throw new Error("Failed to submit form")
  }
}
