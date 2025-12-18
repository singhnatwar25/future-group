"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Cpu, Globe, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

export default function TechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500">
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        
        <div className="relative container px-4 md:px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Cpu className="w-16 h-16 mx-auto mb-6 text-purple-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Future Technology</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-200">
              Innovating tomorrow's solutions through cutting-edge technology and digital transformation.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Digital Innovation Leader</h2>
              <p className="text-lg text-slate-600 mb-8">
                Future Technology drives digital transformation across industries, developing innovative 
                solutions that leverage AI, IoT, and emerging technologies.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Globe className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Global Impact</h3>
                    <p className="text-slate-600">Transforming businesses worldwide with technology solutions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <TrendingUp className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Innovation Focus</h3>
                    <p className="text-slate-600">Investing in R&D to pioneer next-generation technologies.</p>
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format"
                alt="Technology Innovation"
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Shape the Future</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our technology team and innovate solutions for tomorrow.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
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
