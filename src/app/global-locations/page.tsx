"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Globe, MapPin, Phone, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function GlobalLocationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        
        <div className="relative container px-4 md:px-6">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Globe className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Locations</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed text-slate-200">
              Our worldwide presence connecting markets and serving clients across continents.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Offices Worldwide</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Find our offices and contact information in major cities around the world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: "Mumbai",
                country: "India",
                address: "Global Headquarters",
                phone: "Contact Available",
                email: "mumbai@futuregroup.com",
                type: "Headquarters"
              },
              {
                city: "New York",
                country: "USA",
                address: "Financial District",
                phone: "Contact Available",
                email: "newyork@futuregroup.com",
                type: "Regional Office"
              },
              {
                city: "London",
                country: "UK",
                address: "Canary Wharf",
                phone: "Contact Available",
                email: "london@futuregroup.com",
                type: "European HQ"
              },
              {
                city: "Singapore",
                country: "Singapore",
                address: "Marina Bay",
                phone: "Contact Available",
                email: "singapore@futuregroup.com",
                type: "Asia Pacific HQ"
              },
              {
                city: "Dubai",
                country: "UAE",
                address: "Dubai International Financial Centre",
                phone: "Contact Available",
                email: "dubai@futuregroup.com",
                type: "Middle East HQ"
              },
              {
                city: "Tokyo",
                country: "Japan",
                address: "Shibuya District",
                phone: "Contact Available",
                email: "tokyo@futuregroup.com",
                type: "Regional Office"
              }
            ].map((location, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{location.city}</h3>
                  <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {location.type}
                  </span>
                </div>
                <p className="text-slate-600 mb-2">{location.country}</p>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <span>{location.email}</span>
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Connect With Us</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Find the office nearest to you or get in touch with our global team.
            </p>
            <Link href="/contact">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
