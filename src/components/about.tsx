import { motion } from "framer-motion"
import Image from "next/image"
import { GlassCard } from "@/components/glass-card"
import { Badge } from "@/components/ui/badge"

export function About() {
  const interests = ["Web Development", "UI/UX Design", "Cloud Technologies", "Hiking", "Cooking"]

  return (
    <GlassCard className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-12">
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-secondary-purple">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary-blue/30"
            whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/placeholder.svg" alt="John Doe" width={224} height={224} className="object-cover" />
          </motion.div>
          <div className="flex-1">
            <motion.p
              className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              I'm a passionate full-stack developer with 5 years of experience in creating beautiful and functional web
              applications. I specialize in React, Node.js, and cloud technologies. When I'm not coding, you can find me
              exploring new hiking trails or experimenting with new recipes in the kitchen.
            </motion.p>
            <div className="flex flex-wrap justify-center gap-2">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Badge variant="outline" className="bg-white/50 text-gray-700 border-primary-blue/30">
                    {interest}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </GlassCard>
  )
}

