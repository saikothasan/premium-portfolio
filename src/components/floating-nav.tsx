"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"
import { Menu } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navItems = ["Home", "About", "Skills", "Projects", "Testimonials", "Contact"]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("Home")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.toLowerCase()))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.toLowerCase())
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-11/12 sm:w-auto"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <GlassCard className="py-2 px-4">
        {isMobile ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-lg border-gray-200">
              {navItems.map((item) => (
                <DropdownMenuItem
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:bg-gray-100"
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <ul className="flex space-x-1 sm:space-x-2">
            {navItems.map((item) => (
              <li key={item}>
                <Button
                  variant={activeSection === item ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-gray-900 text-sm sm:text-base"
                >
                  {item}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </GlassCard>
    </motion.nav>
  )
}

