"use client"

import Link from "next/link"
import { ArrowRight, Cookie, Shield, Settings } from "lucide-react"
import { motion } from "framer-motion"

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-600">
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        
        <div className="relative container px-4 md:px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Cookie className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-200">
              How we use cookies and similar technologies to enhance your experience on our platforms.
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4">What Are Cookies?</h2>
                <p className="text-slate-600 leading-relaxed">
                  Cookies are small text files that are stored on your device when you visit our website. 
                  They help us provide better services and enhance your user experience.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Essential Cookies</h3>
                    <p className="text-slate-600">Required for the website to function properly.</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Performance Cookies</h3>
                    <p className="text-slate-600">Help us understand how visitors interact with our website.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-slate-900 mb-2">Functional Cookies</h3>
                    <p className="text-slate-600">Enable enhanced functionality and personalization.</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Managing Your Preferences</h2>
                <p className="text-slate-600 leading-relaxed">
                  You can control and manage cookies through your browser settings. You can choose to 
                  accept or reject cookies, and you can delete existing cookies from your device.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Cookies</h2>
                <p className="text-slate-600 leading-relaxed">
                  We may use third-party services that place cookies on your device for analytics, 
                  advertising, and other purposes. These are governed by the respective privacy 
                  policies of those third parties.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Privacy Questions?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              If you have questions about our cookie policy, please contact our privacy team.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Contact Privacy Team
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
