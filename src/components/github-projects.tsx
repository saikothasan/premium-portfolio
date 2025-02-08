"use client"

import { useState, useEffect } from "react"
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
import { Skeleton } from "@/components/ui/skeleton"
import { ExternalLink, Star, GitFork } from "lucide-react"
import { GlassCard } from "@/components/glass-card"

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string
}

const colorMap: { [key: string]: string } = {
  JavaScript: "accent-yellow",
  TypeScript: "primary-blue",
  Python: "accent-green",
  Java: "accent-pink",
  "C#": "secondary-purple",
}

export function GitHubProjects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("https://api.github.com/users/saikothasan/repos?sort=updated&per_page=6")
        if (!response.ok) {
          throw new Error("Failed to fetch projects")
        }
        const data: GitHubRepo[] = await response.json()
        setProjects(data)
        setLoading(false)
      } catch (err) {
        setError("Failed to load projects. Please try again later.")
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return <ProjectsSkeleton />
  }

  if (error) {
    return <div className="text-gray-700 text-center">{error}</div>
  }

  return (
    <GlassCard className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-12">
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-secondary-purple">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.section>
    </GlassCard>
  )
}

function ProjectCard({ project, index }: { project: GitHubRepo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Dialog>
        <DialogTrigger asChild>
          <Card className="bg-white/80 border-gray-200 text-gray-800 cursor-pointer hover:bg-white/90 transition-colors h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl font-semibold text-primary-blue">{project.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">{project.description}</CardDescription>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="bg-white/90 backdrop-blur-lg border-gray-200">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-primary-blue">{project.name}</DialogTitle>
            <DialogDescription className="text-gray-600">{project.description}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-accent-yellow" />
              <span className="text-gray-700">{project.stargazers_count}</span>
            </div>
            <div className="flex items-center">
              <GitFork className="w-4 h-4 mr-1 text-accent-green" />
              <span className="text-gray-700">{project.forks_count}</span>
            </div>
            {project.language && (
              <span
                className={`px-2 py-1 rounded-full text-sm text-white ${
                  project.language in colorMap ? `bg-${colorMap[project.language]}` : "bg-gray-500"
                }`}
              >
                {project.language}
              </span>
            )}
          </div>
          <div className="mt-4">
            <Button asChild className="bg-primary-blue hover:bg-primary-blue/80">
              <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                View on GitHub
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </motion.div>
  )
}

function ProjectsSkeleton() {
  return (
    <GlassCard className="w-full max-w-4xl mx-auto p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="bg-white/80 border-gray-200">
            <CardHeader>
              <Skeleton className="h-6 w-2/3 bg-gray-200" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full bg-gray-200 mb-2" />
              <Skeleton className="h-4 w-4/5 bg-gray-200" />
            </CardContent>
          </Card>
        ))}
      </div>
    </GlassCard>
  )
}

