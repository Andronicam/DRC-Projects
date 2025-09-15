"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { LanguageToggle } from "@/components/language-toggle"
import { Menu } from "lucide-react"

interface HeaderProps {
  language: "fr" | "en"
  onLanguageChange: (language: "fr" | "en") => void
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
      setIsScrolled(position > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const isOverDarkSection = isMounted ? scrollPosition < window.innerHeight * 0.8 : true
  const headerStyle = isOverDarkSection
    ? "bg-transparent text-white"
    : "bg-white/95 backdrop-blur-md shadow-lg text-gray-900"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerStyle}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-start justify-between h-32 pt-1">
          <button
            onClick={scrollToTop}
            className="flex items-center justify-center hover:opacity-80 transition-opacity -mt-2"
          >
            <Image
              src="/marche-central-logo.png"
              alt="TT Marché Central Logo"
              width={280}
              height={168}
              className={`h-20 w-auto drop-shadow-sm transition-all duration-300 object-contain ${
                isOverDarkSection ? "" : "filter brightness-0 contrast-150"
              }`}
            />
          </button>

          <div className="flex items-center gap-4">
            <LanguageToggle
              currentLanguage={language}
              onLanguageChange={onLanguageChange}
              isDarkMode={isOverDarkSection}
            />
            <button className="p-2 hover:opacity-80 transition-opacity">
              <Menu className={`h-8 w-8 ${isOverDarkSection ? "text-white" : "text-gray-900"}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
