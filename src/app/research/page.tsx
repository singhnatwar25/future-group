"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Search, TrendingUp, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function ResearchPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        
        <div className="relative container px-4 md:px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Search className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Research & Insights</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-200">
              Cutting-edge research and thought leadership shaping the future of industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Latest Research</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our latest research papers and industry insights.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Future of Energy",
                description: "Innovations in renewable energy and sustainable power solutions",
                icon: Lightbulb
              },
              {
                title: "Digital Transformation",
                description: "How AI and IoT are reshaping business operations",
                icon: TrendingUp
              },
              {
                title: "Global Market Trends",
                description: "Analysis of emerging markets and investment opportunities",
                icon: Search
              }
            ].map((research, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <research.icon className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{research.title}</h3>
                <p className="text-slate-600 mb-4">{research.description}</p>
                <button className="text-purple-500 font-medium hover:text-purple-600 transition-colors">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 inline" />
                </button>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Access Our Research</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Download our latest research papers and industry reports.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
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
