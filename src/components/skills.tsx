import { motion } from "framer-motion"
import { GlassCard } from "@/components/glass-card"

const skills = [
  { name: "React", level: 90, color: "primary-blue" },
  { name: "TypeScript", level: 85, color: "secondary-purple" },
  { name: "Node.js", level: 80, color: "accent-green" },
  { name: "GraphQL", level: 75, color: "accent-pink" },
  { name: "Python", level: 70, color: "accent-yellow" },
]

export function Skills() {
  return (
    <GlassCard className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-12">
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-secondary-purple">
          Skills
        </h2>
        <div className="space-y-6 sm:space-y-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between text-gray-700 text-base sm:text-lg md:text-xl">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <motion.div
                className="h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: index * 0.1 }}
              >
                <motion.div
                  className={`h-full rounded-full bg-${skill.color}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.section>
    </GlassCard>
  )
}

