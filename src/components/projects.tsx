import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Project A",
    description: "A React-based dashboard for data visualization",
    longDescription:
      "This project showcases advanced data visualization techniques using React and D3.js. It features real-time updates, interactive charts, and a responsive design.",
    image: "/placeholder.svg",
    technologies: ["React", "D3.js", "Node.js", "Express"],
    link: "https://example.com/projectA",
  },
  {
    title: "Project B",
    description: "An e-commerce platform built with Next.js and Stripe",
    longDescription:
      "A full-featured e-commerce solution with product management, user authentication, shopping cart functionality, and secure payments via Stripe integration.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    link: "https://example.com/projectB",
  },
  {
    title: "Project C",
    description: "A real-time chat application using Socket.io",
    longDescription:
      "This chat application allows users to create rooms, send messages, and share files in real-time. It features end-to-end encryption and supports both text and voice messages.",
    image: "/placeholder.svg",
    technologies: ["Socket.io", "React", "Node.js", "MongoDB"],
    link: "https://example.com/projectC",
  },
]

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </motion.section>
  )
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card className="bg-white/5 border-white/10 text-white cursor-pointer hover:bg-white/10 transition-colors">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/70">{project.description}</CardDescription>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="bg-white/10 backdrop-blur-lg border-white/20">
          <DialogHeader>
            <DialogTitle className="text-white">{project.title}</DialogTitle>
            <DialogDescription className="text-white/70">{project.longDescription}</DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="mt-4">
            <h4 className="text-white font-semibold mb-2">Technologies used:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-white/20 text-white px-2 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <Button asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

