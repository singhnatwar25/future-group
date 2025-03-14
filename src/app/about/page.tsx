import { Award, TrendingUp, Globe, Users } from "lucide-react"
import Image from "next/image"
export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-white-50 to-white-10 dark:from-gray-900 dark:to-gray-800 bg-[url(/img/background-dot.svg)] bg-cover bg-center bg-no-repeat ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Future Group <br />
                <span className=" text-4xl font-bold tracking-tighter bg-gradient-to-r from-orange-400 via-slate-400 to-green-600 inline-block text-transparent bg-clip-text">Of India</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Future Group is a global conglomerate with a diverse portfolio of businesses across multiple sectors.
                Founded with a vision to create sustainable value, we have grown into a billion-dollar enterprise with
                operations spanning across continents.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
              <Image
                src="/img/about-img.jpg?height=400&width=600"
                alt="Future Group Headquarters"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Future Group was founded with a vision to create businesses that would shape the future of various
                industries. What started as a small enterprise has now grown into a global conglomerate with interests
                in technology, finance, energy, real estate, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Over the years, we have established a reputation for excellence, innovation, and integrity. Our
                commitment to sustainable growth and value creation has enabled us to build strong relationships with
                our stakeholders and contribute positively to the communities we serve.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Today, Future Group stands as a testament to the power of vision, perseverance, and strategic thinking.
                We continue to expand our horizons, explore new opportunities, and set new benchmarks in every sector we
                operate in.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                  <TrendingUp className="h-10 w-10 text-green-600 mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">$1B+</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Annual Revenue</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                  <Globe className="h-10 w-10 text-blue-400 mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">20+</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Countries</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                  <Users className="h-10 w-10 text-purple-700 mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">10,000+</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Employees</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-primary/5 rounded-lg">
                  <Award className="h-10 w-10 text-yellow-500 mb-2" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold">50+</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Industry Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Leadership</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Meet the visionaries who lead Future Group towards excellence and innovation.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <Image
                src="/img/natwar.jpg?height=300&width=300"
                alt="Natwar Singh"
                className="rounded-full w-48 h-48 object-cover border-4 border-primary/10"
                width={300}
                height={300}
              />
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-bold">Natwar Singh</h3>
                <p className="text-primary font-medium">Founder & Chairman</p>
                <p className="text-gray-500 dark:text-gray-400 max-w-[600px]">
                  Natwar Singh is the visionary founder and chairman of Future Group. He has been instrumental in transforming Future Group into a global
                  conglomerate. His strategic vision, business acumen, and commitment to excellence have been the
                  driving forces behind the group"s success.
                </p>
                <p className="text-gray-500 dark:text-gray-400 max-w-[600px]">
                  Under his leadership, Future Group has expanded its footprint across multiple countries and
                  diversified into various sectors. His philosophy of sustainable growth, innovation, and social
                  responsibility continues to guide the group"s operations and strategic decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
              <p className="text-gray-500 dark:text-gray-400">
                To be a global leader in every sector we operate in, creating sustainable value for all our stakeholders
                while contributing positively to society and the environment.
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Pioneering innovative solutions that address global challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Setting new benchmarks for excellence and integrity</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Building businesses that stand the test of time</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
              <p className="text-gray-500 dark:text-gray-400">
                To create, build, and nurture businesses that deliver exceptional value to our customers, employees,
                partners, and shareholders, while upholding the highest standards of corporate governance and social
                responsibility.
              </p>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fostering a culture of innovation and excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Investing in our people and their growth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Building sustainable businesses that create long-term value</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Contributing positively to the communities we serve</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

