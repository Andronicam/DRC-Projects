"use client"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface LanguageToggleProps {
  onLanguageChange: (lang: "fr" | "en") => void
  currentLanguage: "fr" | "en"
  isDarkMode?: boolean
}

export function LanguageToggle({ onLanguageChange, currentLanguage, isDarkMode = false }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => onLanguageChange(currentLanguage === "fr" ? "en" : "fr")}
      className={`flex items-center gap-2 transition-all duration-300 ${
        isDarkMode
          ? "!border-white/50 !text-white !bg-black/30 hover:!bg-black/40 hover:!text-white backdrop-blur-sm"
          : "!border-gray-400 !text-gray-900 !bg-white hover:!bg-gray-50 hover:!text-gray-900"
      }`}
    >
      <Globe className="h-4 w-4" />
      {currentLanguage === "fr" ? "English" : "Français"}
    </Button>
  )
}
