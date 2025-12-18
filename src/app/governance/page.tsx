"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Scale, FileText, Users } from "lucide-react"
import { motion } from "framer-motion"

export default function GovernancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-slate-700">
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        
        <div className="relative container px-4 md:px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Scale className="w-16 h-16 mx-auto mb-6 text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Corporate Governance</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-200">
              Upholding the highest standards of integrity, transparency, and accountability in all our operations.
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
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Commitment to Excellence</h2>
              <p className="text-lg text-slate-600 mb-8">
                Future Group is committed to maintaining the highest standards of corporate governance 
                to protect stakeholder interests and ensure sustainable long-term growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Board Independence</h3>
                    <p className="text-slate-600">Independent board members ensuring objective oversight and strategic guidance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Transparency</h3>
                    <p className="text-slate-600">Regular reporting and disclosure of material information to stakeholders.</p>
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
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop&auto=format"
                alt="Corporate Governance"
                className="rounded-2xl shadow-2xl"
                width={600}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Governance Principles</h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scale,
                title: "Accountability",
                description: "Clear responsibility structures and performance metrics"
              },
              {
                icon: Shield,
                title: "Risk Management",
                description: "Comprehensive risk assessment and mitigation strategies"
              },
              {
                icon: FileText,
                title: "Compliance",
                description: "Adherence to regulatory requirements and ethical standards"
              },
              {
                icon: Users,
                title: "Stakeholder Focus",
                description: "Balancing interests of all stakeholders for long-term value"
              }
            ].map((principle, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <principle.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{principle.title}</h3>
                <p className="text-slate-600">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Learn More</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Access our governance reports and compliance documentation.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-slate-700 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
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
