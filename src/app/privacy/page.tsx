
export default function PrivacyPolicyPage() {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 bg-[url(/img/bg-privacy.png)] bg-cover bg-center bg-no-repeat">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
                </p>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We are committed to safeguarding your privacy. This Privacy Policy outlines the type of information we collect, how it is utilized, and the measures we take to protect it. We ensure that your personal data is collected only when necessary, and we use it to enhance your experience with us. Whether you are browsing our site, signing up for our services, or contacting us, you can be assured that your information is treated with the utmost care and confidentiality.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Privacy Policy Content */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold tracking-tighter">Information We Collect</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We collect information you provide directly, such as when you create an account, contact us, or use our services. This may include your name, email, phone number, and other relevant details.
              </p>
  
              <h2 className="text-3xl font-bold tracking-tighter">How We Use Your Information</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We use the collected information to improve our services, respond to inquiries, send updates, and ensure security. Your data is handled responsibly and not shared with third parties without your consent.
              </p>
  
              <h2 className="text-3xl font-bold tracking-tighter">Data Security</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We take appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no online system is entirely secure, and we encourage users to take precautions.
              </p>
  
              <h2 className="text-3xl font-bold tracking-tighter">Your Rights</h2>
              <p className="text-gray-500 dark:text-gray-400">
                You have the right to access, update, or delete your personal data. If you have concerns about your information, please contact us for assistance.
              </p>
  
              <h2 className="text-3xl font-bold tracking-tighter">Changes to This Policy</h2>
              <p className="text-gray-500 dark:text-gray-400">
                We may update this Privacy Policy periodically. Any changes will be posted on this page with an updated effective date.
              </p>
  
              <h2 className="text-3xl font-bold tracking-tighter">Contact Us</h2>
              <p className="text-gray-500 dark:text-gray-400">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Email: <a href="mailto:singhnatwar20121@gmail.com" className="hover:text-primary">singhnatwar20121@gmail.com</a>
                <br /> Contact: Available upon request
              </p>
  
              <p className="text-gray-500 dark:text-gray-400">
                We are committed to transparency and fairness in our data processing practices. If you have any questions or concerns about how we handle your personal data, please do not hesitate to reach out to us.
              </p>
  
              <p className="text-gray-500 dark:text-gray-400">
                By using our website or services, you consent to the collection, use, and disclosure of your personal information in accordance with this Privacy Policy.
              </p>
  
              <p className="text-gray-500 dark:text-gray-400">
                This Privacy Policy was last updated on August 15, 2022.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
