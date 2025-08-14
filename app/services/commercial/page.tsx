import Image from "next/image"
import { CheckCircle, Package, Calendar, Clock, Shield, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"

export default function CommercialMovingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Commercial Moving Services
              </h1>
              <p className="text-lg text-navy-100 md:text-xl">
                Minimize downtime and maximize efficiency with our professional commercial moving services for
                businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                  Get a Business Quote
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/commercial-moving-hero.png" alt="Commercial Moving" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-6">Business Relocation Experts</h2>
              <p className="text-lg text-gray-600 mb-6">
                Moving a business requires specialized expertise to ensure minimal disruption to your operations. Our
                commercial moving team has extensive experience relocating offices, retail spaces, and industrial
                facilities throughout the DMV area.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that time is money for your business, which is why we develop efficient moving plans that
                minimize downtime and keep your business running smoothly during the transition.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Office and commercial relocations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">IT equipment and electronics moving</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Furniture disassembly and reassembly</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">After-hours and weekend moving options</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-700">Secure storage solutions during transitions</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/office-furniture-moving.png" alt="Office Furniture Moving" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/it-equipment-moving.png" alt="IT Equipment Moving" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/office-file-cabinet-moving.png" alt="File Cabinet Moving" fill className="object-cover" />
              </div>
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image src="/business-team-new-office.png" alt="New Office Setup" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commercial Moving Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Our Commercial Moving Process
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              We follow a structured approach to ensure your business relocation is executed with precision and
              efficiency.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
              <p className="text-gray-600">
                We assess your business needs, timeline, and specific requirements to develop a customized moving plan.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
              <p className="text-gray-600">
                We create a detailed relocation strategy that minimizes disruption to your business operations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Coordinated Execution</h3>
              <p className="text-gray-600">
                Our team efficiently packs, moves, and sets up your office according to your floor plan and
                requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Post-Move Support</h3>
              <p className="text-gray-600">
                We ensure everything is set up correctly and provide assistance with any adjustments needed after the
                move.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              Specialized Commercial Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              We offer specialized services tailored to the unique needs of different business types.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image src="/it-technology-relocation.png" alt="IT Equipment Moving" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">IT & Technology Relocation</h3>
                <p className="text-gray-600 mb-4">
                  Specialized handling of servers, computers, networking equipment, and other sensitive technology with
                  proper disconnection and reconnection services.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Server relocation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Workstation setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Cable management</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image src="/retail-store-moving.png" alt="Retail Moving" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Retail & Storefront Relocation</h3>
                <p className="text-gray-600 mb-4">
                  Efficient moving of retail fixtures, inventory, and displays with minimal business interruption and
                  after-hours service options.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Fixture disassembly/reassembly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Display setup</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image src="/industrial-equipment-moving.png" alt="Industrial Moving" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Industrial & Heavy Equipment</h3>
                <p className="text-gray-600 mb-4">
                  Safe transportation of heavy machinery, industrial equipment, and specialized tools with proper
                  rigging and handling.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Heavy equipment moving</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Specialized rigging</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span>Equipment reinstallation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/professional-commercial-moving-team.png"
                alt="Commercial Moving Team"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-6">
                Why Choose Imperial Movers for Your Business
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Calendar className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Minimal Downtime</h3>
                    <p className="text-gray-600">
                      We work around your schedule, including evenings and weekends, to minimize disruption to your
                      business operations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Efficient Project Management</h3>
                    <p className="text-gray-600">
                      Our dedicated project managers oversee every aspect of your move to ensure it stays on schedule
                      and within budget.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Shield className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Fully Insured</h3>
                    <p className="text-gray-600">
                      Your business assets are protected with our comprehensive insurance coverage throughout the moving
                      process.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Package className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Specialized Equipment</h3>
                    <p className="text-gray-600">
                      We utilize specialized moving equipment designed for safely transporting office furniture, IT
                      equipment, and other business assets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">Schedule a Consultation</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Client Success Stories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              See what our business clients have to say about their experience with Imperial Movers.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white border rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-4 text-lg italic">
                "Imperial Movers relocated our 50-person office over a weekend with zero disruption to our operations.
                Their team was professional, efficient, and careful with our equipment."
              </blockquote>
              <div>
                <p className="font-semibold">Robert Johnson</p>
                <p className="text-gray-600 text-sm">Operations Director, TechSolutions Inc.</p>
              </div>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-4 text-lg italic">
                "As a retail business, we were concerned about moving our inventory and displays. Imperial Movers
                handled everything with care and had us set up in our new location ahead of schedule."
              </blockquote>
              <div>
                <p className="font-semibold">Maria Garcia</p>
                <p className="text-gray-600 text-sm">Owner, Boutique Elegance</p>
              </div>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="mb-4 text-lg italic">
                "We've used Imperial Movers for three office relocations over the past five years. Their consistent
                quality, attention to detail, and fair pricing keep us coming back."
              </blockquote>
              <div>
                <p className="font-semibold">David Williams</p>
                <p className="text-gray-600 text-sm">Facilities Manager, Capital Law Group</p>
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
