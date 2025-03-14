import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Head from "next/head"; // For adding meta tags (if using Next.js)

export default function NewsPage() {
  const newsArticles = [
    {
      title: "Tech Revolution: AI Reshaping Industries",
      description:
        "Artificial Intelligence is transforming businesses across sectors, driving innovation and efficiency. Learn how Future Group leverages AI for growth.",
      image: "/img/health1.webp?height=300&width=500",
      category: "Technology",
    },
    {
      title: "Finance Market Hits New Highs",
      description:
        "Stock markets see record growth as investors embrace new financial opportunities. Discover expert insights from Natwar Singh, web developer & tech strategist.",
      image: "/img/fin1.webp?height=300&width=500",
      category: "Finance",
    },
    {
      title: "Green Energy Takes Center Stage",
      description:
        "Renewable energy sources are gaining momentum, leading the way toward a sustainable future. Future Group invests in eco-friendly solutions for a greener planet.",
      image: "/img/energy.jpeg?height=300&width=500",
      category: "Energy",
    },
    {
      title: "Real Estate Boom in Urban Areas",
      description:
        "City infrastructure developments are driving a surge in property investments. Explore Future Group's latest ventures in the real estate sector.",
      image: "/img/real1.jpg?height=300&width=500",
      category: "Real Estate",
    },
    {
      title: "Breakthroughs in Healthcare Innovation",
      description:
        "Medical research and new healthcare solutions are improving patient outcomes worldwide. Future Group is at the forefront of these healthcare advancements.",
      image: "/img/tech1.webp?height=300&width=500",
      category: "Healthcare",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Meta Tags for SEO */}
      <Head>
        <title>Latest News | Future Group & Natwar Singh, Web Developer</title>
        <meta
          name="description"
          content="Stay updated with the latest industry trends, technology, finance, energy, and more. Future Group and Natwar Singh bring expert insights on web development and innovation."
        />
        <meta name="keywords" content="Future Group, Natwar Singh, web developer, tech news, finance, AI, innovation" />
      </Head>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 bg-[url('/img/bg-business.png')] bg-cover bg-center bg-no-repeat">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Future Group News & Industry Insights
              </h1>
              <hr className="mx-auto w-100 h-1 my-4 bg-emerald-500" />
              <p className="max-w-[900px] text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
                Get the latest updates from Future Group, curated by <strong>Natwar Singh, Chairman and Founder</strong>. Explore insights in technology, finance, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles List */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12">
            {newsArticles.map((article, index) => (
              <article key={index} className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <h2 className="text-3xl font-bold tracking-tighter">{article.title}</h2>
                  <p className="text-gray-500 dark:text-gray-400">{article.description}</p>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {article.category}
                  </span>
                  <Button variant="outline" className="inline-flex items-center">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className={`mx-auto w-full max-w-[500px] lg:max-w-none ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={`${article.title} - ${article.category} by Future Group`}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                    width={500}
                    height={300}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
