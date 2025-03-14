"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full  bg-background/15 shadow-sm  backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold pl-2">
          <h1 className="bg-gradient-to-r from-blue-600 via-violet-500 to-rose-400 inline-block text-transparent bg-clip-text">Future Group</h1>
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 ">
          <Link href="/about" className="text-lg font-light  font-serif transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/subsidiaries" className="text-lg font-light  font-serif  transition-colors hover:text-primary">
            Subsidiaries
          </Link>
          <Link href="/contact" className="text-lg font-light font-serif transition-colors hover:text-primary">
            Contact
          </Link>
          <Link href="/news" className="text-lg font-light font-serif  transition-colors hover:text-primary">
            News
          </Link>
        </nav>
        <div className="hidden md:flex gap-4">
          <Link href="/contact">
            <Button className="h-10 border-1 border-amber-950 bg-gradient-to-r from-blue-600 via-violet-500 to-rose-400 inline-block text-transparent bg-clip-text">Get in Touch</Button>
          </Link>
        </div>
        <button className="flex items-center space-x-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 py-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/subsidiaries"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Subsidiaries
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Get in Touch</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

