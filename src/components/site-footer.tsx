import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin, Globe, Award, TrendingUp, Users, Building } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Top CTA Section */}
      <div className="border-b border-slate-800">
        <div className="container px-4 md:px-6 py-8">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">Join Our Global Journey</h3>
            <p className="text-slate-300 max-w-2xl">
              Partner with Future Group as we continue to innovate and transform industries worldwide. 
              Discover investment opportunities, career paths, and business collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/investor">
                <button className="px-6 py-3 bg-yellow-500 text-slate-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors">
                  Investor Relations
                </button>
              </Link>
              <Link href="/careers">
                <button className="px-6 py-3 border border-yellow-500 text-yellow-400 font-semibold rounded-lg hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                  Explore Careers
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-white tracking-tight">FUTURE</span>
                  <span className="text-2xl font-bold text-yellow-400 tracking-tight ml-2">GROUP</span>
                </div>
              </Link>
              <p className="text-slate-300 leading-relaxed">
                A global conglomerate driving innovation across energy, technology, finance, and infrastructure. 
                Building sustainable futures through strategic investments and operational excellence.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link href="https://www.youtube.com/@Natwar_singh25" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:text-slate-900 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Global Headquarters: Mumbai, India</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Contact Us</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">investor@futuregroup.com</span>
              </div>
            </div>
          </div>

          {/* Business Units */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">Business Units</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/energy" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Energy & Utilities
                </Link>
              </li>
              <li>
                <Link href="/transportation" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Transportation & Logistics
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Future Technology
                </Link>
              </li>
              <li>
                <Link href="/finance" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/infrastructure" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/incubation" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Innovation & Incubation
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">Corporate</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  About Future Group
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/governance" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Corporate Governance
                </Link>
              </li>
              <li>
                <Link href="/diversity" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Sustainability */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/investor" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Sustainability Report
                </Link>
              </li>
              <li>
                <Link href="/annual-report" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Annual Report
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  News & Media
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Research & Insights
                </Link>
              </li>
              <li>
                <Link href="/suppliers" className="text-slate-300 hover:text-yellow-400 transition-colors text-sm">
                  Supplier Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col items-center space-y-6">
            <h4 className="text-lg font-semibold text-yellow-400">Awards & Recognition</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <Award className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="text-xs text-slate-300">Excellence in Innovation 2024</p>
              </div>
              <div className="space-y-2">
                <TrendingUp className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="text-xs text-slate-300">Fastest Growing Conglomerate</p>
              </div>
              <div className="space-y-2">
                <Users className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="text-xs text-slate-300">Best Workplace 2024</p>
              </div>
              <div className="space-y-2">
                <Globe className="h-8 w-8 text-yellow-500 mx-auto" />
                <p className="text-xs text-slate-300">Global Sustainability Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © {new Date().getFullYear()} Future Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-yellow-400 mx-1">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-yellow-400 mx-1">Terms of Service</Link> | 
              <Link href="/cookies" className="hover:text-yellow-400 mx-1">Cookie Policy</Link>
            </div>
            <div className="text-sm text-slate-400">
              <Link href="/global-locations" className="hover:text-yellow-400">
                <Globe className="inline h-4 w-4 mr-1" />
                Global Locations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

