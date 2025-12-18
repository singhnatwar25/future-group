"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, DollarSign, Globe, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function FinancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500">
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative container px-4 md:px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <DollarSign className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Financial Services</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-200">
              Comprehensive financial solutions and investment services for businesses and individuals worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Trusted Financial Partner</h2>
              <p className="text-lg text-slate-600 mb-8">
                Future Finance provides comprehensive banking, investment, and financial advisory services 
                to clients across the globe, backed by decades of expertise and innovation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Global Reach</h3>
                    <p className="text-slate-600">Serving clients in over 50 countries with localized expertise.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Sustainable Growth</h3>
                    <p className="text-slate-600">Committed to responsible investing and sustainable finance.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://images.unsplash.com/photo-1563986768494-4dee0bb2f7ec?w=600&h=400&fit=crop&auto=format"
                alt="Financial Services"
                className="rounded-2xl shadow-2xl"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Grow With Us</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Explore investment opportunities and financial partnership programs.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
