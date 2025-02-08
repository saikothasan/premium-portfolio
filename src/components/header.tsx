import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"

export function Header() {
  return (
    <GlassCard className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-12">
      <header className="text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-secondary-purple">
            John Doe
          </span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full-Stack Developer & UI/UX Enthusiast
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            asChild
            className="text-lg px-8 py-4 sm:px-10 sm:py-6 bg-gradient-to-r from-primary-blue to-secondary-purple hover:from-primary-blue/80 hover:to-secondary-purple/80 transition-all duration-300"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </header>
    </GlassCard>
  )
}

