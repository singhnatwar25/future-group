"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Globe, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center px-4 py-2 group">
          <span className="text-2xl font-bold text-slate-900 tracking-tight">FUTURE</span>
          <span className="text-2xl font-bold text-yellow-500 tracking-tight ml-2">GROUP</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link href="/about" className="text-slate-700 hover:text-yellow-500 font-medium transition-colors duration-300 relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/subsidiaries" className="text-slate-700 hover:text-yellow-500 font-medium transition-colors duration-300 relative group">
            Subsidiaries
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/investor" className="text-slate-700 hover:text-yellow-500 font-medium transition-colors duration-300 relative group">
            Investors
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/careers" className="text-slate-700 hover:text-yellow-500 font-medium transition-colors duration-300 relative group">
            Careers
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/news" className="text-slate-700 hover:text-yellow-500 font-medium transition-colors duration-300 relative group">
            News
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>
        
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-yellow-500" />
              <span className="hidden xl:inline">Contact Us</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-yellow-500" />
              <span className="hidden xl:inline">contact@futuregroup.com</span>
            </div>
          </div>
          <Link href="/contact">
            <Button className="px-6 py-2.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
              Get in Touch
            </Button>
          </Link>
        </div>
        
        <button 
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors lg:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <motion.div 
          className="lg:hidden border-t border-slate-200 bg-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container py-6 space-y-4">
            <Link
              href="/about"
              className="block text-lg font-medium text-slate-700 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/subsidiaries"
              className="block text-lg font-medium text-slate-700 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Subsidiaries
            </Link>
            <Link
              href="/investor"
              className="block text-lg font-medium text-slate-700 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Investors
            </Link>
            <Link
              href="/careers"
              className="block text-lg font-medium text-slate-700 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/news"
              className="block text-lg font-medium text-slate-700 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              News
            </Link>
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span>Contact Us</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span>contact@futuregroup.com</span>
              </div>
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}

