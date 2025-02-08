"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import emailjs from "@emailjs/browser"
import { GlassCard } from "@/components/glass-card"
import { Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_USER_ID",
      )

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
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
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <Input
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-white/80 border-gray-200 text-gray-800 placeholder:text-gray-400 text-base sm:text-lg focus:border-primary-blue focus:ring-primary-blue"
            required
          />
          <Input
            placeholder="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white/80 border-gray-200 text-gray-800 placeholder:text-gray-400 text-base sm:text-lg focus:border-primary-blue focus:ring-primary-blue"
            required
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white/80 border-gray-200 text-gray-800 placeholder:text-gray-400 text-base sm:text-lg focus:border-primary-blue focus:ring-primary-blue"
            required
          />
          <Button
            type="submit"
            className="w-full text-base sm:text-lg py-2 sm:py-3 bg-gradient-to-r from-primary-blue to-secondary-purple hover:from-primary-blue/80 hover:to-secondary-purple/80 transition-all duration-300"
            disabled={loading}
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </motion.section>
    </GlassCard>
  )
}

