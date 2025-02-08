import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type React from "react"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "backdrop-blur-lg bg-white/70 rounded-2xl shadow-lg p-6",
        "border border-white/50",
        "hover:shadow-xl transition-shadow duration-300",
        "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/50 before:to-transparent before:rounded-2xl",
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

