import { Phone, Mail, Clock, CheckCircle, MapPin } from "lucide-react"

import { QuoteForm } from "@/components/quote-form"

export default function QuotePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Get Your Free Moving Quote
            </h1>
            <p className="mt-4 text-lg text-navy-100 md:text-xl max-w-2xl mx-auto">
              Fill out our simple form and receive a personalized quote within 24 hours. No hidden fees, no surprises -
              just honest, transparent pricing.
            </p>
            <div className="flex items-center justify-center gap-2 mt-6 text-navy-100">
              <CheckCircle className="h-5 w-5 text-lime-500" />
              <span>The Imperial Promise: No Hidden Fees, Ever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-6">Request Your Quote</h2>
              <p className="text-lg text-gray-600 mb-8">
                Complete the form with details about your move or service needs. Our team will review your request and
                provide a detailed, personalized quote within 24 hours.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">What to Expect:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">Detailed quote within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">No hidden fees or surprise charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">Free consultation and planning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                    <span className="text-gray-700">Customized service recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-navy-900">Contact Information</h3>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-lime-600" />
                  <span className="text-gray-900 font-medium">(240) 893-5931</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">robert@imperialmoversdmv.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700 font-medium">Mon-Sat: 8am-7pm</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                  <span className="text-gray-700 font-medium">Serving Washington DC, Maryland & Northern Virginia</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Your Quote */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 text-center mb-12">
              Why Get Your Quote from Imperial Movers?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Accurate Pricing</h3>
                <p className="text-gray-600">
                  Our detailed quotes are based on your specific needs, ensuring accurate pricing with no surprises.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-gray-600">
                  We respond to all quote requests within 24 hours, often much sooner during business hours.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Personal Service</h3>
                <p className="text-gray-600">
                  Every quote includes a personal consultation to understand your unique moving needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-navy-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Need an Immediate Quote?</h2>
            <p className="text-navy-100 mb-6">
              For urgent moving needs or same-day quotes, call us directly during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2408935931"
                className="inline-flex items-center justify-center px-6 py-3 bg-lime-500 hover:bg-lime-600 text-navy-900 font-medium rounded-md border-2 border-lime-600 transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" /> Call (240) 893-5931
              </a>
              <a
                href="mailto:robert@imperialmoversdmv.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
