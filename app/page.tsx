import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, CheckCircle, Truck, Package, Recycle, PenToolIcon as Tool } from "lucide-react"

import { Button } from "@/components/ui/button"
import { QuoteForm } from "@/components/quote-form"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ServiceCard } from "@/components/service-card"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-800 to-navy-700 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Professional Moving & Junk Removal in the DMV Area
              </h1>
              <p className="text-lg text-navy-100 md:text-xl">
                With over 10 years of experience, we make your move stress-free with transparent pricing and exceptional
                service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                    Get a Free Quote
                  </Button>
                </Link>
                <a href="tel:2408935931">
                  <Button
                    size="lg"
                    className="bg-lime-500 hover:bg-lime-600 text-navy-900 font-medium border-2 border-lime-600"
                  >
                    <Phone className="mr-2 h-4 w-4 text-navy-900" /> (240) 893-5931
                  </Button>
                </a>
              </div>
              <div className="flex items-center gap-2 mt-4 text-navy-100">
                <CheckCircle className="h-5 w-5 text-lime-500" />
                <span>The Imperial Promise: No Hidden Fees, Ever</span>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0c80PggYXEMRfEtlXgNPE9B5wPmGvg.png"
                alt="Imperial Movers professional team member Ryan with company truck"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-800 mb-6">Saving You Time, Energy, and Money</h2>
            <p className="text-lg text-gray-700">
              Imperial Movers and Services knows the headache and financial strain that comes with relocating. That's
              why we're committed to providing customized service that fits your needs and your wallet. With our clear,
              up-front pricing and guaranteed Imperial Promise, there are no surprises.
            </p>
            <div className="mt-8 inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
              FREE ESTIMATES - CALL (240) 893-5931
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              From residential and commercial moves to junk removal and equipment rental, we offer comprehensive
              solutions for all your moving needs.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<Truck className="h-10 w-10 text-orange-500" />}
              title="Residential Moving"
              description="Local and long-distance moves for homes and apartments with careful handling of your belongings."
              link="/services/residential"
            />
            <ServiceCard
              icon={<Package className="h-10 w-10 text-orange-500" />}
              title="Commercial Moving"
              description="Office relocations with minimal downtime, including IT equipment and furniture assembly."
              link="/services/commercial"
            />
            <ServiceCard
              icon={<Recycle className="h-10 w-10 text-orange-500" />}
              title="Junk Removal & Donation"
              description="Eco-friendly removal of unwanted items with donation options for suitable goods."
              link="/services/junk-removal"
            />
            <ServiceCard
              icon={<Tool className="h-10 w-10 text-orange-500" />}
              title="Equipment Rental"
              description="Professional moving equipment available for rent to other movers and DIY relocations."
              link="/services/equipment-rental"
            />
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" className="text-navy-700 border-navy-700 hover:bg-navy-50">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Why Choose Imperial Movers</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              We've built our reputation on reliability, transparency, and exceptional customer service.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">The Imperial Promise</h3>
              <p className="text-gray-600">
                We guarantee upfront pricing with no hidden fees or surprises. The quote we provide is the price you'll
                pay.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local DMV Experts</h3>
              <p className="text-gray-600">
                With over 10 years serving DC, Maryland, and Virginia, we know the area inside and out.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable & Timely</h3>
              <p className="text-gray-600">
                We respect your schedule with on-time service and efficient completion of every job.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/quote">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get a Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* Service Area Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-4">Proudly Serving the DMV Area</h2>
              <p className="text-lg text-gray-600 mb-6">
                We provide our full range of services throughout Washington DC, Maryland, and Northern Virginia.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Washington DC</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Georgetown</li>
                    <li>Dupont Circle</li>
                    <li>Capitol Hill</li>
                    <li>Adams Morgan</li>
                    <li>Navy Yard</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Maryland</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Bethesda</li>
                    <li>Silver Spring</li>
                    <li>Rockville</li>
                    <li>College Park</li>
                    <li>Gaithersburg</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Northern Virginia</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>Arlington</li>
                    <li>Alexandria</li>
                    <li>Fairfax</li>
                    <li>McLean</li>
                    <li>Reston</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/service-areas">
                  <Button variant="link" className="text-orange-500 p-0">
                    View all service areas →
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aae275008ac5216f571a9e3f9903d8ad.jpg-OmDRtYaWi3C9g1v4mZt1Q8qgBUWDHw.jpeg"
                alt="DMV Service Area Map showing Washington DC, Maryland, and Virginia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-navy-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-4">Get Your Free Quote</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fill out the form and we'll get back to you within 24 hours with a personalized quote for your move or
                service. All quote requests are sent directly to our team at joellloyd25@gmail.com.
              </p>
              <div className="space-y-4">
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
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Excellence Banner */}
      <section className="py-10 bg-orange-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Imperial Movers Strives for Excellence in the DMV!</h2>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
