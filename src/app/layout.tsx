import type React from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

export const metadata = {
  title: "Future Group - Global Leader in Business & Innovation | Natwar Singh",
  description: "Future Group, led by Natwar Singh, is a billion-dollar multinational conglomerate with expertise in retail, finance, real estate, and technology. A pioneer in global business expansion and market innovation.",
  keywords: "Future Group, Natwar Singh, global business, multinational conglomerate, billion-dollar company, retail, finance, real estate, technology, business expansion, innovation",
  author: "Natwar Singh",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

