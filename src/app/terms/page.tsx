"use client"

import Link from "next/link"
import { ArrowRight, FileText, Shield, Scale } from "lucide-react"
import { motion } from "framer-motion"

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 to-slate-800">
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        
        <div className="relative container px-4 md:px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-16 h-16 mx-auto mb-6 text-slate-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-200">
              Our terms and conditions governing the use of Future Group services and platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <motion.div 
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-slate-600 leading-relaxed">
                  By accessing and using Future Group's services, you accept and agree to be bound by the terms 
                  and conditions outlined in this agreement.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Service Description</h2>
                <p className="text-slate-600 leading-relaxed">
                  Future Group provides comprehensive business services including energy, transportation, 
                  technology, finance, and infrastructure solutions.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">3. User Responsibilities</h2>
                <p className="text-slate-600 leading-relaxed">
                  Users agree to use our services responsibly and in accordance with applicable laws and regulations.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Privacy and Data Protection</h2>
                <p className="text-slate-600 leading-relaxed">
                  We are committed to protecting your privacy and handling your data in accordance with 
                  our Privacy Policy and applicable data protection laws.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Intellectual Property</h2>
                <p className="text-slate-600 leading-relaxed">
                  All content and materials on our platforms are protected by intellectual property laws 
                  and belong to Future Group or our partners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-slate-50">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Questions?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              If you have questions about our terms of service, please contact our legal team.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-slate-600 to-slate-800 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Contact Legal Team
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
