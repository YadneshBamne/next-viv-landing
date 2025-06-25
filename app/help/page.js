"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon, ChevronDown, ChevronUp, Search } from "lucide-react"

export default function HelpFAQ() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const footerSections = [
    {
      title: "TRY VIV ON",
      links: ["Web", "Android", "IOS"],
    },
    {
      title: "PRODUCTS",
      links: ["API", "PlayGround"],
    },
    {
      title: "COMPANY",
      links: ["Career", "News"],
    },
    {
      title: "RESOURCES",
      links: ["Documentation", "Privacy Policy", "Legal", "Security", "Status"],
    },
  ]

  const faqCategories = [
    {
      title: "Getting Started",
      questions: [
        {
          question: "What is ViV AI?",
          answer:
            "ViV AI is an advanced artificial intelligence platform designed to accelerate human understanding of the universe. Our AI models can process and analyze complex data, provide insights, and assist with various tasks across multiple domains.",
        },
        {
          question: "How do I create an account?",
          answer:
            "To create an account, click on the 'Try ViV AI' button in the top right corner of our website. You'll be directed to our sign-up page where you can create an account using your email or sign in with Google, Apple, or Facebook Social accounts.",
        },
        {
          question: "Is ViV AI free to use?",
          answer:
            "ViV AI offers both free and paid plans. The free plan provides basic access to our AI capabilities with limited API calls. For more advanced features, higher usage limits, and priority support, check out our Pro and Enterprise plans.",
        },
      ],
    },
    {
      title: "API Usage",
      questions: [
        {
          question: "How do I get an API key?",
          answer:
            "After creating an account, navigate to your dashboard and select 'API Keys' from the menu. Click on 'Generate New Key' and follow the instructions. Remember to keep your API key secure and never share it publicly.",
        },
        {
          question: "What are the API rate limits?",
          answer:
            "Rate limits vary by plan. Free accounts have 100 requests per day, Pro accounts have 10,000 requests per day, and Enterprise accounts have custom limits based on your specific needs. You can monitor your usage in the dashboard.",
        },
        {
          question: "Do you offer API documentation?",
          answer:
            "Yes, comprehensive API documentation is available at our documentation site. It includes guides, examples, and reference materials to help you integrate ViV AI into your applications. Visit docs from the Top Bar.",
        },
      ],
    },
    {
      title: "Billing & Support",
      questions: [
        {
          question: "How does billing work?",
          answer:
            "Pro plans are billed monthly or annually, with annual plans offering a discount. Enterprise plans are custom-priced based on your requirements. You can manage your subscription and payment methods in your account settings.",
        },
        {
          question: "Can I upgrade or downgrade my plan?",
          answer:
            "Yes, you can change your plan at any time from your account settings. When upgrading, the new features will be available immediately. When downgrading, the changes will take effect at the end of your current billing cycle.",
        },
        {
          question: "How do I get support?",
          answer:
            "For technical support, you can use our help center, submit a ticket through your dashboard, or email support@vivai.com. Pro and Enterprise customers have access to priority support with faster response times.",
        },
      ],
    },
  ]

  // Filter FAQs based on search query
  const filteredFAQs =
    searchQuery.trim() === ""
      ? faqCategories
      : faqCategories
          .map((category) => ({
            ...category,
            questions: category.questions.filter(
              (faq) =>
                faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
            ),
          }))
          .filter((category) => category.questions.length > 0)

  return (
    <div className="relative w-full overflow-x-hidden text-white bg-[#07080A]">
      
      <div
        className={`fixed right-0 top-0 z-40 bg-[#040403] w-[250px] h-full transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          {["VIV", "API", "NEWS", "CAREER"].map((item, i) => (
            <Link key={i} href={`/${item.toLowerCase()}`} className="text-white text-lg hover:text-gray-300">
              {item}
            </Link>
          ))}
          <a href="https://viv-test.vercel.app/" className="text-white text-lg hover:text-gray-300">
            DOCS
          </a>
          <Link href="https://chat.cosinv.com/">
            <button className="text-white px-4 py-2 rounded-full border hover:bg-amber-50 cursor-pointer hover:text-black font-extrabold">
              Try ViV AI
            </button>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <section className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-start items-center px-4 py-12">
        <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold font-mono mb-6">Help & FAQ</h1>
        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto text-center mb-10">
          Find answers to commonly asked questions about ViV AI and get the help you need to make the most of our
          platform.
        </p>

        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mb-12">
          <input
            type="text"
            placeholder="Search for answers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 pr-14 rounded-full text-white text-base sm:text-lg bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
        </div>

        {/* FAQ Sections */}
        <div className="max-w-4xl w-full space-y-8">
          {filteredFAQs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-neutral-900 rounded-lg p-6">
              <h2 className="text-white text-2xl font-bold mb-4">{category.title}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const index = `${categoryIndex}-${faqIndex}`
                  return (
                    <div key={faqIndex} className="border border-neutral-800 rounded-lg overflow-hidden">
                      <button
                        className="flex justify-between items-center w-full p-4 text-left bg-neutral-800 hover:bg-neutral-700 transition-colors"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="font-medium text-white">{faq.question}</span>
                        {openFAQ === index ? (
                          <ChevronUp className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 flex-shrink-0" />
                        )}
                      </button>
                      {openFAQ === index && (
                        <div className="p-4 bg-neutral-900 text-gray-300">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-10">
              <p className="text-gray-400 text-lg">No results found for "{searchQuery}"</p>
              <p className="text-gray-500 mt-2">Try a different search term or browse the categories</p>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <h2 className="text-white text-2xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-300 mb-6">Our support team is ready to assist you with any questions or issues.</p>
          <Link href="/contact">
            <button className="text-white px-6 py-3 rounded-full border hover:bg-amber-50 hover:text-black font-extrabold text-lg">
              Contact Support
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
    </div>
  )
}