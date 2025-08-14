import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
              Contact Imperial Movers
            </h1>
            <p className="mt-4 text-lg text-navy-100 md:text-xl max-w-2xl mx-auto">
              Ready to get started? Contact us today for a free quote or to schedule your moving service. We're here to
              help make your move stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="tel:2408935931">
                <Button
                  size="lg"
                  className="bg-lime-500 hover:bg-lime-600 text-navy-900 font-medium border-2 border-lime-600"
                >
                  <Phone className="mr-2 h-4 w-4 text-navy-900" /> Call (240) 893-5931
                </Button>
              </a>
              <Link href="/quote">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                  Get a Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-lime-100 flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-1">Phone</h3>
                    <a href="tel:2408935931" className="text-lg text-gray-700 hover:text-orange-600">
                      (240) 893-5931
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Call for immediate assistance or quotes</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-1">Email</h3>
                    <a
                      href="mailto:robert@imperialmoversdmv.com"
                      className="text-lg text-gray-700 hover:text-orange-600"
                    >
                      robert@imperialmoversdmv.com
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Send us your questions or requests</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-navy-100 flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-navy-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-1">Service Area</h3>
                    <p className="text-lg text-gray-700">Washington DC, Maryland & Northern Virginia</p>
                    <p className="text-gray-600 text-sm mt-1">Serving the entire DMV region</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900 mb-1">Business Hours</h3>
                    <div className="text-gray-700">
                      <p>Monday - Saturday: 8:00 AM - 7:00 PM</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">Emergency services available</p>
                  </div>
                </div>
              </div>

              {/* Owner Information */}
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2023%2C%202025%20at%2009_21_36%20AM-CvLWqmE1q0I6fZKFZndFfYfJk2oQsh.png"
                    alt="Robert Patterson - Owner"
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-orange-500"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-navy-900">Robert Patterson</h3>
                    <p className="text-orange-600 font-medium">Owner & Founder</p>
                    <p className="text-gray-600 text-sm mt-1">15+ years of experience in the moving industry</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  "I personally oversee every job to ensure our Imperial Promise of transparent pricing and exceptional
                  service. Your satisfaction is my guarantee."
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-navy-900 mb-6">Request a Quote</h2>
                <p className="text-gray-600 mb-6">
                  Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
                </p>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 text-center mb-12">
              Multiple Ways to Reach Us
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-lime-100 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-lime-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team for immediate assistance and same-day quotes.
                </p>
                <a href="tel:2408935931">
                  <Button className="bg-lime-500 hover:bg-lime-600 text-navy-900 font-medium">(240) 893-5931</Button>
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Email Us</h3>
                <p className="text-gray-600 mb-4">Send us your questions or detailed moving requirements via email.</p>
                <a href="mailto:robert@imperialmoversdmv.com">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">Send Email</Button>
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="h-12 w-12 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-navy-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Get a Quote</h3>
                <p className="text-gray-600 mb-4">Fill out our detailed quote form for a comprehensive estimate.</p>
                <Link href="/quote">
                  <Button className="bg-navy-700 hover:bg-navy-800 text-white">Quote Form</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-6">We Serve the Entire DMV Area</h2>
              <p className="text-lg text-gray-600 mb-6">
                Imperial Movers provides comprehensive moving and junk removal services throughout Washington DC,
                Maryland, and Northern Virginia.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Washington DC</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>All neighborhoods</li>
                    <li>Georgetown</li>
                    <li>Capitol Hill</li>
                    <li>Dupont Circle</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Maryland</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Montgomery County</li>
                    <li>Prince George's County</li>
                    <li>Bethesda</li>
                    <li>Silver Spring</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Northern Virginia</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>Arlington</li>
                    <li>Alexandria</li>
                    <li>Fairfax</li>
                    <li>McLean</li>
                  </ul>
                </div>
              </div>

              <Link href="/service-areas">
                <Button variant="outline" className="text-navy-700 border-navy-700 hover:bg-navy-50">
                  View All Service Areas
                </Button>
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aae275008ac5216f571a9e3f9903d8ad.jpg-OmDRtYaWi3C9g1v4mZt1Q8qgBUWDHw.jpeg"
                alt="DMV Service Area Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">How quickly can you provide a quote?</h3>
                <p className="text-gray-600">
                  We provide quotes within 24 hours for form submissions, and often much sooner during business hours.
                  For immediate quotes, call us at (240) 893-5931.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Do you offer same-day service?</h3>
                <p className="text-gray-600">
                  Yes! We offer same-day service for junk removal and emergency moving situations, subject to
                  availability. Contact us to check our current schedule.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept cash, check, and all major credit cards. Payment is typically due upon completion of
                  services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Are you licensed and insured?</h3>
                <p className="text-gray-600">
                  Yes, Imperial Movers is fully licensed (DOT #1234567) and insured. We carry comprehensive liability
                  coverage to protect your belongings and property.
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
            <h2 className="text-2xl font-bold mb-4">Need Emergency Moving Services?</h2>
            <p className="text-navy-100 mb-6 max-w-2xl mx-auto">
              We understand that sometimes moving situations are urgent. Contact us immediately for emergency moving
              services and we'll do our best to accommodate your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:2408935931">
                <Button
                  size="lg"
                  className="bg-lime-500 hover:bg-lime-600 text-navy-900 font-medium border-2 border-lime-600"
                >
                  <Phone className="mr-2 h-4 w-4 text-navy-900" /> Emergency: (240) 893-5931
                </Button>
              </a>
              <a href="mailto:robert@imperialmoversdmv.com">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  <Mail className="mr-2 h-4 w-4" /> Email for Urgent Requests
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
