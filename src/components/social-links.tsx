import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <motion.div
      className="fixed bottom-4 left-4 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2 z-40"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Button variant="ghost" size="icon" asChild className="bg-white/80 hover:bg-white/90 text-gray-700">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild className="bg-white/80 hover:bg-white/90 text-gray-700">
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild className="bg-white/80 hover:bg-white/90 text-gray-700">
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </a>
      </Button>
    </motion.div>
  )
}

