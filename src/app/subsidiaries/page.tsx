import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SubsidiariesPage() {
  const subsidiaries = [
    {
      name: "Future Tech",
      description:
        "A leading technology company specializing in software development, AI solutions, and digital transformation services. Future Tech helps businesses leverage cutting-edge technologies to drive growth and innovation.",
      image: "/img/tech1.webp?height=300&width=500",
      sectors: ["Technology", "AI", "Software Development"],
    },
    {
      name: "Future Finance",
      description:
        "A comprehensive financial services company offering banking, investment, and wealth management solutions. Future Finance is committed to helping individuals and businesses achieve their financial goals through innovative financial products and services.",
      image: "/img/fin1.webp?height=300&width=500",
      sectors: ["Banking", "Investment", "Wealth Management"],
    },
    {
      name: "Future Energy",
      description:
        "A pioneer in renewable energy solutions, Future Energy is dedicated to developing sustainable energy sources and technologies. The company invests in solar, wind, and other renewable energy projects to create a cleaner, greener future.",
      image: "/img/energy1.jpg?height=300&width=500",
      sectors: ["Renewable Energy", "Sustainability", "Clean Tech"],
    },
    {
      name: "Future Real Estate",
      description:
        "A premier real estate development and management company with a diverse portfolio of residential, commercial, and industrial properties. Future Real Estate is known for its innovative designs, sustainable building practices, and commitment to creating vibrant communities.",
      image: "/img/real1.jpg?height=300&width=500",
      sectors: ["Real Estate", "Property Development", "Asset Management"],
    },
    {
      name: "Future Healthcare",
      description:
        "A healthcare company focused on providing high-quality medical services and innovative healthcare solutions. Future Healthcare operates hospitals, clinics, and research facilities dedicated to improving patient outcomes and advancing medical science.",
      image: "/img/health1.webp?height=300&width=500",
      sectors: ["Healthcare", "Medical Research", "Pharmaceuticals"],
    },
    {
      name: "Future Retail",
      description:
        "A leading retail company with a network of stores and e-commerce platforms offering a wide range of products. Future Retail is committed to enhancing the shopping experience through innovative retail concepts and customer-centric approaches.",
      image: "/img/retail.jpg?height=300&width=500",
      sectors: ["Retail", "E-commerce", "Consumer Goods"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 bg-[url('/img/bg-business.png')] bg-cover bg-center bg-no-repea">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 ">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Companies</h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Future Group operates across diverse sectors through its subsidiary companies, each a leader in its
                respective industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries List */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {subsidiaries.map((subsidiary, index) => (
              <div key={index} className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h2 className="text-3xl font-bold tracking-tighter">{subsidiary.name}</h2>
                  <p className="text-gray-500 dark:text-gray-400">{subsidiary.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {subsidiary.sectors.map((sector, sIndex) => (
                      <span
                        key={sIndex}
                        className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" className="inline-flex items-center">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className={`mx-auto w-full max-w-[500px] lg:max-w-none ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={subsidiary.image || "/placeholder.svg"}
                    alt={subsidiary.name}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    width={500}
                    height={300}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

