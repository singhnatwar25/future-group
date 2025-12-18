"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, FileText, Download, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function AnnualReportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600">
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        
        <div className="relative container px-4 md:px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-16 h-16 mx-auto mb-6 text-indigo-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Annual Report</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-200">
              Comprehensive insights into our performance, strategy, and financial results.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">2024 Annual Report</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Explore our comprehensive annual report detailing our achievements and strategic direction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Financial Highlights",
                description: "Key financial metrics and performance indicators",
                icon: TrendingUp
              },
              {
                title: "Strategic Overview",
                description: "Our business strategy and market positioning",
                icon: FileText
              },
              {
                title: "Sustainability Report",
                description: "Environmental and social impact initiatives",
                icon: Download
              }
            ].map((section, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <section.icon className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                <p className="text-slate-600 mb-4">{section.description}</p>
                <button className="text-blue-500 font-medium hover:text-blue-600 transition-colors">
                  Download Section
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Download Full Report</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Access the complete 2024 Annual Report in PDF format.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Download PDF
                <Download className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
