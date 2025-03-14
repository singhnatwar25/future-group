import { Briefcase, DollarSign, BarChart, Shield } from "lucide-react";

export default function InvestorRelations() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Investor Relations
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Stay informed about our financial performance, corporate governance, and investment opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Information */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter">Why Invest in Us?</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Future Group is a global conglomerate with diversified business interests. We provide sustainable and profitable investment opportunities.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <Briefcase className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Strong Portfolio</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      We operate in multiple industries, ensuring steady growth and stability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <DollarSign className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Financial Strength</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Our strong balance sheet ensures financial sustainability and growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter">Financial Reports & Governance</h2>
              <p className="text-gray-500 dark:text-gray-400">
                Access our latest financial statements, reports, and governance policies.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-start space-x-4">
                  <BarChart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Annual Reports</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Review our annual financial statements and performance insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium">Corporate Governance</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Learn about our commitment to transparency, ethics, and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* investor relations */}

    </div>
  );
}

