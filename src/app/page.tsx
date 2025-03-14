import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Globe, BarChart3, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" >
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-yellow-50 to-white-100 dark:from-gray-900 dark:to-gray-800 bg-[url(/img/dot2.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="container px-4 md:px-6">
          <div className="grid gap-2 lg:grid-cols-2 lg:gap-2 items-center">
            <div className="space-y-4 ">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="text-yellow-600">Future</span> Group
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A global conglomerate with diverse business interests spanning multiple industries. Building tomorrow
                solutions today.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/about">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/subsidiaries">
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border text-yellow-600 border-yellow-600 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Our Companies
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-[800px] lg:max-w-none">
              <Image
                src="/hero-slider-1.webp?height=600&width=800"
                alt="Future Group Headquarters"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                width={800}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>




      {/* Story */}
      <section className="w-full py-12 md:py-24 lg:py-20 bg-[url(/img/bg-business.png)] bg-no-repeat bg-auto bg-center " >
        <div className="container">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ml-8">
            <div className="col justify-items-center"><Image src="/img/abouts.png" alt="" width={450} height={450} /></div>
            <div className="col">
              <h3 className="text-xl font-mono font-bold tracking-tighter">Our Story to INNOVATION</h3>
              <hr className="w-40 h-1 my-4 bg-yellow-500" />
              <p className="max-w-[600px]  font-mono  text-gray-800 md:text-xl/relaxed lg:text-sm/relaxed xl:text-xl/relaxed dark:text-gray-400">
                As we reflect on our journey, we take pride in being a driving force behind progress, shaping industries, and fostering innovation. The year 2024 was a testament to our relentless pursuit of excellence and impactful milestones.

                At Future-Groups of Company, we remain committed to innovation, sustainability, and creating meaningful change. Here’s a glimpse of the defining moments that strengthened our vision and deepened our commitment to building a brighter future.


              </p>
            </div>

          </div>

        </div>
      </section>



      <section className="text-center w-full py-12 md:py-24 lg:py-20 bg-white relative bg-[url(/img/bg-business.png)] bg-no-repeat bg-auto bg-center " >
      <div className="absolute inset-0 bg-[url(/your-background-image.svg)] bg-cover opacity-10"></div>
      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-gray-900">Businesses</h1>
        <div className="w-30 h-1  bg-green-500 mx-auto my-5"></div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Growth is incomplete without goodness. From building assets of national relevance to transforming lives
          through self-reliance and sustainability, <br /> our vision is balancing growth with goodness.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 my-12">
          {/* Energy & Utilities */}
          <div className="flex flex-col items-center hover:scale-110">
            <Image src="/img/future-group-green-energy.jpg" alt="Energy & Utilities" width={100} height={100} className="h-25 w-25 text-blue-500 rounded" />
            <h3 className="mt-2 font-medium text-gray-900">Energy & Utilities</h3>
          </div>
          {/* Transportation & Logistics */}
          <div className="flex flex-col items-center hover:scale-110">
            <Image src="/img/port.jpg" alt="Transportation & Logistics" width={100} height={100} className="h-25 w-25 text-blue-500 rounded" />
            <h3 className="mt-2 font-medium text-gray-900">Transportation & Logistics</h3>
          </div>
          {/* Incubation */}
          <div className="flex flex-col items-center hover:scale-110 ">
            <Image src="/img/future-group-transmission.jpg" width={100} height={100} alt="Incubation" className="h-25 w-25 text-blue-500 rounded " />
            <h3 className="mt-2 font-medium text-gray-900">Incubation</h3>
          </div>
        </div>
        <Link href="/subsidiaries">
        <button className="mt-6 px-6 py-2 border-2 border-yellow-600 text-yellow-600  hover:bg-yellow-600 hover:text-white transition">
          Explore More
        </button>
        </Link>
      </div>
    </section>


      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32   " >
        <div className="container px-4 md:px-6 ">
          <div className="flex flex-col items-center justify-center space-y-4 ">
            <div className="space-y-2">
              <h2 className="text-base font-normal tracking-tighter sm:text-4xl md:text-5xl">Our Core Strengths</h2>
              <hr className=" w-40 h-1 my-4 bg-emerald-500" />
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Future Group leverages its expertise across multiple sectors to drive innovation and growth.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-6">
              <div className="flex flex-col gap-2 ">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Building2 className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Corporate Excellence</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our corporate governance and management practices set industry standards for excellence and integrity.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Globe className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Global Presence</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  With operations across multiple continents, we bring global expertise to local markets.
                </p>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <BarChart3 className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">Sustainable Growth</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Our business strategies focus on long-term sustainable growth and value creation for all stakeholders.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Users className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold">People-Centric Approach</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We believe our people are our greatest asset, and we invest in their growth and development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Subsidiaries Preview */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900  ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-sm text-start font-medium tracking-tighter sm:text-lg md:text-4xl font-mono">Our Sub Companies</h2>
              <hr className=" w-40 h-1 my-4 bg-emerald-500" />
              <p className="max-w-[900px]  text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Future Group operates across diverse sectors through its subsidiary companies.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Future Tech",
                description: "Innovative technology solutions for the digital age.",
                image: "/img/tech.jpg",
              },
              {
                name: "Future Finance",
                description: "Financial services and investment solutions for businesses and individuals.",
                image: "/img/finace.jpg",
              },
              {
                name: "Future Energy",
                description: "Sustainable energy solutions for a greener tomorrow.",
                image: "/img/energy.jpeg",
              },
            ].map((company, index) => (
              <div key={index} className="flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm">
                <Image
                  src={company.image || "/placeholder.svg"}
                  alt={company.name}
                  width={350}
                  height={200}
                  className="aspect-video object-cover"
                />
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="text-xl font-semibold">{company.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{company.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/subsidiaries">
              <Button
                variant="outline"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View All Companies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

