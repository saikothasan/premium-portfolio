import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Your Name - Portfolio",
  description: "Professional portfolio showcasing my projects and skills",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-gradient-to-br from-primary-blue/10 via-white to-secondary-purple/10 text-base sm:text-lg`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'