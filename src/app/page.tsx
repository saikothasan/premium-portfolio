"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { GitHubProjects } from "@/components/github-projects"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { FloatingNav } from "@/components/floating-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import { SocialLinks } from "@/components/social-links"

export default function Home() {
  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
      <FloatingNav />
      <ThemeToggle />
      <SocialLinks />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto space-y-24 sm:space-y-32 md:space-y-40 lg:space-y-48 py-12 sm:py-16 md:py-20 lg:py-24"
      >
        <section id="home" className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
          <Header />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center">
          <Skills />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <GitHubProjects />
        </section>
        <section id="testimonials" className="min-h-screen flex items-center justify-center">
          <Testimonials />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </motion.div>
    </div>
  )
}

