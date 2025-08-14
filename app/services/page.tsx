import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Truck, Package, Recycle, PenToolIcon as Tool, Box, Gift, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-navy-800 to-navy-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Our Comprehensive Services
              </h1>
              <p className="text-lg text-navy-100 md:text-xl">
                From residential and commercial moves to junk removal and equipment rental, we offer end-to-end
                solutions for all your moving needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                  Get a Free Quote
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3f55fcc57878aaa024e37210e31f0617.jpg-ATatbRWLdDA60kk2ahprOPZDYPJFpJ.jpeg"
                alt="Professional mover with furniture dolly"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Moving & Related Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              We offer a complete range of moving and related services to make your relocation experience seamless and
              stress-free.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Residential Moving */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image src="/residential-moving-action.png" alt="Residential Moving" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Truck className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Residential Moving</h3>
                <p className="text-gray-600 mb-4">
                  Local and long-distance moves for homes and apartments with careful handling of your belongings.
                </p>
                <Link
                  href="/services/residential"
                  className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Commercial Moving */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image src="/commercial-office-move.png" alt="Commercial Moving" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Package className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Commercial Moving</h3>
                <p className="text-gray-600 mb-4">
                  Office relocations with minimal downtime, including IT equipment and furniture assembly.
                </p>
                <Link
                  href="/services/commercial"
                  className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Junk Removal */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image src="/junk-removal-team.png" alt="Junk Removal" fill className="object-cover" />
              </div>
              <div className="p-6">
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
            </div>

            {/* Donation Pickup */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image src="/donation-pickup-service.png" alt="Donation Pickup" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <Gift className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Donation Pickup</h3>
                <p className="text-gray-600 mb-4">
                  Convenient pickup of items you wish to donate to local charities, with tax receipts provided.
                </p>
                <Link
                  href="/services/donation"
                  className="text-orange-600 font-medium inline-flex items-center hover:text-orange-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Packing Services */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image src="/professional-packing-service.png" alt="Packing Services" fill className="object-cover" />
              </div>
              <div className="p-6">
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
            </div>

            {/* Equipment Rental */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm transition-all hover:shadow-md">
              <div className="relative h-48">
                <Image src="/moving-equipment-rental.png" alt="Equipment Rental" fill className="object-cover" />
              </div>
              <div className="p-6">
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
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Additional Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Beyond our core moving services, we offer these additional solutions to meet your specific needs.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Storage Solutions</h3>
              <p className="text-gray-600">
                Short and long-term storage options in our secure, climate-controlled facilities for when you need extra
                space.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Specialty Item Moving</h3>
              <p className="text-gray-600">
                Expert handling of pianos, artwork, antiques, and other high-value or delicate items requiring special
                care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Senior Moving Assistance</h3>
              <p className="text-gray-600">
                Compassionate and comprehensive moving services tailored to the unique needs of seniors and their
                families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image src="/professional-movers-team.png" alt="Imperial Movers Team" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-6">Why Choose Imperial Movers</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Licensed & Insured</h3>
                    <p className="text-gray-600">
                      We're fully licensed and insured, giving you peace of mind that your belongings are protected.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Experienced Professionals</h3>
                    <p className="text-gray-600">
                      Our team consists of trained professionals with years of experience in the moving industry.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Transparent Pricing</h3>
                    <p className="text-gray-600">
                      No hidden fees or surprises. We provide clear, upfront pricing for all our services.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Eco-Friendly Practices</h3>
                    <p className="text-gray-600">
                      We're committed to environmentally responsible practices in all our services.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get a Free Quote</Button>
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
