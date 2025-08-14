import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight, Box, Recycle, PenToolIcon as Tool, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"

export default function ResidentialMovingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Residential Moving Services
              </h1>
              <p className="text-lg text-navy-100 md:text-xl">
                From apartments to houses, we make your residential move stress-free with careful handling and
                transparent pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                  Get a Free Quote
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14324558e9e66ae8682acc4c72f43886.jpg-AYGFyPMEiHMiePMM50yAOtPYQUe0n0.jpeg"
                alt="Professional movers working together to move mattress"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-6">Comprehensive Residential Moving</h2>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're moving to a new apartment across town or a house across the country, our experienced team
                provides comprehensive residential moving services tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that your belongings aren't just items – they're pieces of your life. That's why we treat
                everything with the utmost care and respect, ensuring a smooth transition to your new home.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Local and long-distance residential moves</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Apartment, condo, and house relocations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Furniture disassembly and reassembly</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Proper protection for your belongings and property</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Flexible scheduling to meet your timeline</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/c2311719f8e7cbb64472874e8ef48d06.jpg-ke0YCOE39RqIMOeaUQrhCXWFjZbz7U.jpeg"
                  alt="Mover placing protective padding"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/loading-moving-truck.png" alt="Loading Truck" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/movers-carrying-boxes.png" alt="Carrying Boxes" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/family-new-home.png" alt="New Home" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Our Moving Process</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              We've refined our residential moving process to ensure a seamless experience from start to finish.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
              <p className="text-gray-600">
                We start with a detailed consultation to understand your specific needs and provide an accurate quote.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning & Preparation</h3>
              <p className="text-gray-600">
                Our team creates a customized moving plan and helps you prepare for moving day.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Packing</h3>
              <p className="text-gray-600">
                We carefully pack and protect your belongings using industry-leading materials and techniques.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe Transport & Setup</h3>
              <p className="text-gray-600">
                We transport your items safely to your new home and help set up furniture in your preferred locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Service Options</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Choose the level of service that best fits your needs and budget.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 border-b bg-gray-50">
                <h3 className="text-xl font-semibold text-center">Basic Move</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Loading and unloading</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Transportation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Basic furniture protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Basic furniture assembly/disassembly</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-md transform md:-translate-y-4">
              <div className="p-6 border-b bg-orange-500 text-white">
                <h3 className="text-xl font-semibold text-center">Premium Move</h3>
                <p className="text-sm text-center mt-1 text-orange-100">Most Popular</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>All Basic Move services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Full packing and unpacking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Custom crating for fragile items</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Complete furniture assembly/disassembly</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Specialty item handling</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button className="bg-orange-500 hover:bg-orange-600">Get Quote</Button>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 border-b bg-gray-50">
                <h3 className="text-xl font-semibold text-center">Custom Move</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Tailored to your specific needs</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Mix and match services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Partial packing options</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Storage solutions available</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                    Get Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Related Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Explore our other services that complement your residential move.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Box className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Packing Services</h3>
              <p className="text-gray-600 mb-4">
                Professional packing and unpacking services to save you time and ensure your items are properly
                protected.
              </p>
              <Link
                href="/services/packing"
                className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Recycle className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Junk Removal</h3>
              <p className="text-gray-600 mb-4">
                Eco-friendly removal of unwanted items with responsible disposal and recycling options.
              </p>
              <Link
                href="/services/junk-removal"
                className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="mb-4">
                <Tool className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipment Rental</h3>
              <p className="text-gray-600 mb-4">
                Professional moving equipment available for rent to other movers and DIY relocations.
              </p>
              <Link
                href="/services/equipment-rental"
                className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">What Our Customers Say</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Read what our satisfied residential moving customers have to say about their experience.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white border rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-4 text-lg italic">
                "Imperial Movers made my move from DC to Maryland so smooth. The team was professional, careful with my
                belongings, and finished ahead of schedule!"
              </blockquote>
              <div>
                <p className="font-semibold">Sarah T.</p>
                <p className="text-gray-600 text-sm">Bethesda, MD</p>
              </div>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-4 text-lg italic">
                "I was dreading moving my 3-bedroom house, but Imperial Movers made it painless. They packed everything
                with care and set up my furniture exactly where I wanted it."
              </blockquote>
              <div>
                <p className="font-semibold">Michael R.</p>
                <p className="text-gray-600 text-sm">Arlington, VA</p>
              </div>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-4 text-lg italic">
                "This was my third time using Imperial Movers, and they continue to exceed my expectations. Their
                pricing is transparent and the service is exceptional."
              </blockquote>
              <div>
                <p className="font-semibold">Jennifer L.</p>
                <p className="text-gray-600 text-sm">Washington, DC</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
