import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-sky-700">Future Group</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Building tomorrows solutions today. A global conglomerate with diverse business interests.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-sky-700">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/subsidiaries" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Our Companies
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-sky-700">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/investor" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Press Releases
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-sky-700">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                  Global Locations
                </Link>
              </li>
              <li>
                <div className="flex space-x-4">
                  <Link href="#" className="text-sky-700 hover:text-primary dark:text-gray-400">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link href="#" className="text-sky-700 hover:text-primary dark:text-gray-400">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link href="#" className="text-sky-700 hover:text-primary dark:text-gray-400">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#" className="text-sky-700 hover:text-primary dark:text-gray-400">
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link href="https://www.youtube.com/@Natwar_singh25" className="text-sky-700 hover:text-primary dark:text-gray-400">
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Future Group. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-gray-500 hover:text-primary dark:text-gray-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

