"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Globe, BarChart3, Users, TrendingUp, Award, Target, Zap } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url(/img/dot2.jpg)] bg-cover bg-center opacity-10"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        
        <div className="relative container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-400 text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Global Leader in Business Innovation
                </motion.div>
                
                <motion.h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <span className="block">Building</span>
                  <span className="block text-yellow-400">Tomorrow</span>
                  <span className="block">Today</span>
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Future Group is a billion-dollar multinational conglomerate driving innovation across 
                  energy, technology, finance, and infrastructure. Transforming industries worldwide.
                </motion.p>
              </div>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link href="/about">
                  <Button className="px-8 py-3 bg-yellow-500 text-slate-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
                    Discover Our Vision
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/subsidiaries">
                  <Button
                    variant="outline"
                    className="px-8 py-3 border-2 border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-slate-900 transition-all duration-300"
                  >
                    Explore Companies
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-600 rounded-2xl blur-3xl opacity-30"></div>
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&auto=format"
                  alt="Future Group Global Headquarters"
                  className="relative w-full h-auto object-cover rounded-2xl shadow-2xl"
                  width={800}
                  height={600}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>




      {/* Story Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
              <Image 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=500&fit=crop&auto=format"
                alt="Future Group Innovation Journey"
                width={500}
                height={500}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-600 text-sm font-medium mb-4">
                  <Target className="w-4 h-4 mr-2" />
                  Our Journey to Excellence
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Building the <span className="text-yellow-500">Future</span> Through Innovation
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mb-6"></div>
              </motion.div>
              
              <motion.p 
                className="text-lg text-slate-600 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                As we reflect on our journey, we take pride in being a driving force behind progress, 
                shaping industries, and fostering innovation. The year 2024 was a testament to our relentless 
                pursuit of excellence and impactful milestones.
              </motion.p>
              
              <motion.p 
                className="text-lg text-slate-600 leading-relaxed"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                At Future Group, we remain committed to innovation, sustainability, and creating meaningful change. 
                Here's a glimpse of the defining moments that strengthened our vision and deepened our commitment 
                to building a brighter future.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Business Units Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-600 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Our Business Verticals
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Diverse Business <span className="text-yellow-500">Portfolio</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Growth is incomplete without goodness. From building assets of national relevance to transforming lives 
              through self-reliance and sustainability, our vision is balancing growth with goodness.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Energy & Utilities */}
            <motion.div 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Image src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=40&h=40&fit=crop&auto=format" alt="Energy & Utilities" width={40} height={40} className="rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Energy & Utilities</h3>
                <p className="text-slate-600 leading-relaxed">
                  Powering sustainable futures through renewable energy and innovative utility solutions.
                </p>
              </div>
            </motion.div>
            
            {/* Transportation & Logistics */}
            <motion.div 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=40&h=40&fit=crop&auto=format" alt="Transportation & Logistics" width={40} height={40} className="rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Transportation & Logistics</h3>
                <p className="text-slate-600 leading-relaxed">
                  Connecting global markets through advanced logistics and transportation networks.
                </p>
              </div>
            </motion.div>
            
            {/* Innovation & Incubation */}
            <motion.div 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=40&h=40&fit=crop&auto=format" alt="Innovation & Incubation" width={40} height={40} className="rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Innovation & Incubation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nurturing disruptive ideas and transforming them into successful ventures.
                </p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/subsidiaries">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                Explore All Business Units
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>


      {/* Core Strengths Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-600 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Competitive Edge
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Core <span className="text-yellow-500">Strengths</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Future Group leverages its expertise across multiple sectors to drive innovation and sustainable growth.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Corporate Excellence */}
            <motion.div 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Corporate Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Our corporate governance and management practices set industry standards for excellence and integrity.
              </p>
            </motion.div>
            
            {/* Global Presence */}
            <motion.div 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Presence</h3>
              <p className="text-slate-600 leading-relaxed">
                With operations across multiple continents, we bring global expertise to local markets.
              </p>
            </motion.div>
            
            {/* Sustainable Growth */}
            <motion.div 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Sustainable Growth</h3>
              <p className="text-slate-600 leading-relaxed">
                Our business strategies focus on long-term sustainable growth and value creation for all stakeholders.
              </p>
            </motion.div>
            
            {/* People-Centric Approach */}
            <motion.div 
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">People-Centric</h3>
              <p className="text-slate-600 leading-relaxed">
                We believe our people are our greatest asset, and we invest in their growth and development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>




      {/* Subsidiaries Preview Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-white to-slate-50">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-yellow-600 text-sm font-medium mb-6">
              <Building2 className="w-4 h-4 mr-2" />
              Our Portfolio Companies
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Leading <span className="text-yellow-500">Subsidiaries</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Future Group operates across diverse sectors through its world-class subsidiary companies.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                name: "Future Tech",
                description: "Innovative technology solutions for the digital age.",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&auto=format",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                name: "Future Finance",
                description: "Financial services and investment solutions for businesses and individuals.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop&auto=format",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                name: "Future Energy",
                description: "Sustainable energy solutions for a greener tomorrow.",
                image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=250&fit=crop&auto=format",
                gradient: "from-yellow-500 to-orange-500"
              },
            ].map((company, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                whileHover={{ y: -10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={company.image}
                      alt={company.name}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${company.gradient} opacity-20`}></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{company.name}</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">{company.description}</p>
                    <div className="flex items-center text-yellow-500 font-medium group-hover:text-yellow-600 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/subsidiaries">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300">
                View All Companies
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

