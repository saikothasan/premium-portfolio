import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { GlassCard } from "@/components/glass-card"
import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  content: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    content: "Working with this developer was an absolute pleasure. Their attention to detail and problem-solving skills are unmatched.",
    color: "primary-blue",
  },
  {
    name: "Bob Smith",
    role: "CTO, StartupX",
    content: "The quality of work delivered exceeded our expectations. I highly recommend this developer for any complex project.",
    color: "secondary-purple",
  },
  {
    name: "Carol Williams",
    role: "Product Manager, InnovateCo",
    content: "Not only did they deliver on time, but the code quality and documentation were exceptional. A true professional.",
    color: "accent-pink",
  },
]

export function Testimonials() {
  return (
    <GlassCard className="w-full max-w-4xl mx-auto p-6 sm:p-8 md:p-12">
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary-blue to-secondary-purple">Testimonials</h2>
        <Carousel className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className={`bg-${testimonial.color}/10 border-${testimonial.color}/30`}>
                  <CardContent className="p-6">
                    <Quote className={`w-8 h-8 mb-4 text-${testimonial.color}`} />
                    <p className="text-gray-700 mb-4 text-base sm:text-lg md:text-xl">&quot;{testimonial.content}&quot;</p>
                    <div className={`text-${testimonial.color}`}>
                      <p className="font-semibold text-sm sm:text-base">{testimonial.name}</p>
                      <p className="text-xs sm:text-sm">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </motion.section>
    </GlassCard>
  )
}
