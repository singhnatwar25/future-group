import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 bg-[url('/img/bg-business.png')] bg-cover bg-center bg-no-repeat">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get in touch with Future Group. We'd love to hear from you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Whether you have a question about our companies, investment opportunities, or anything else, our team is
                ready to answer all your questions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      <a href="mailto:singhnatwar20121@gmail.com" className="hover:text-primary">
                        singhnatwar20121@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">We'll respond as soon as possible</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">+91 9610598925</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Monday to Friday, 9AM to 6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Visit Us</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Future Group Headquarters
                      <br />
                      Future Business Avenue
                      <br />
                      Mumbai , IN 302001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Business Hours</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter">Global Offices</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-bold">New York</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    123 Business Avenue
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-bold">London</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    456 Corporate Street
                    <br />
                    London, EC2A 1AB
                    <br />
                    United Kingdom
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-bold">Singapore</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    789 Business Park
                    <br />
                    Singapore, 018956
                    <br />
                    Singapore
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6 shadow-sm">
                  <h3 className="font-bold">Dubai</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    321 Sheikh Zayed Road
                    <br />
                    Dubai, 123456
                    <br />
                    United Arab Emirates
                  </p>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden">
                <img
                  src="/img/map.jpg?height=400&width=600"
                  alt="Map of Future Group Global Offices"
                  className="w-full h-auto object-cover"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

