import Image from "next/image"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"

export default function EquipmentRentalPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-emerald-600 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Professional Moving Equipment Rental
              </h1>
              <p className="text-lg text-emerald-100 md:text-xl">
                Quality moving equipment available for rent to other moving companies and DIY movers. Get the right
                tools for your job.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-white text-emerald-800 hover:bg-emerald-100">
                  Get a Rental Quote
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=600&query=professional moving equipment dolly hand truck"
                alt="Moving Equipment"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment List Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Available Equipment</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              We offer a wide range of professional-grade moving equipment to help make your move efficient and safe.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&query=moving dolly"
                  alt="Dollies"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dollies & Hand Trucks</h3>
                <p className="text-gray-600 mb-4">
                  Various types of dollies including furniture dollies, appliance dollies, and utility hand trucks for
                  moving heavy items.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Furniture dollies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Appliance dollies</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Utility hand trucks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Piano dollies</span>
                  </li>
                </ul>
                <div className="text-emerald-700 font-semibold">Starting at $25/day</div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&query=moving blankets and pads"
                  alt="Moving Blankets"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Moving Blankets & Pads</h3>
                <p className="text-gray-600 mb-4">
                  Professional-grade moving blankets and furniture pads to protect your items during transport.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Heavy-duty moving blankets</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Furniture pads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Mattress covers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Door jamb protectors</span>
                  </li>
                </ul>
                <div className="text-emerald-700 font-semibold">Starting at $2/blanket per day</div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&query=moving straps and ropes"
                  alt="Moving Straps"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Straps & Securing Equipment</h3>
                <p className="text-gray-600 mb-4">
                  Lifting straps, ratchet straps, and rope to secure and safely move heavy or awkward items.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Forearm lifting straps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Ratchet straps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Moving rope</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Furniture sliders</span>
                  </li>
                </ul>
                <div className="text-emerald-700 font-semibold">Starting at $15/day</div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&query=moving truck"
                  alt="Moving Trucks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Moving Trucks</h3>
                <p className="text-gray-600 mb-4">
                  Various sized moving trucks available for daily rental to other moving companies or individuals.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>15ft box trucks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>20ft box trucks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>26ft box trucks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Cargo vans</span>
                  </li>
                </ul>
                <div className="text-emerald-700 font-semibold">Starting at $99/day</div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&query=moving boxes and supplies"
                  alt="Moving Supplies"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Moving Supplies</h3>
                <p className="text-gray-600 mb-4">
                  Professional packing supplies including boxes, tape, bubble wrap, and packing paper.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Moving boxes (various sizes)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Packing tape & dispensers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Bubble wrap & packing paper</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Specialty boxes (wardrobe, dish packs)</span>
                  </li>
                </ul>
                <div className="text-emerald-700 font-semibold">Prices vary by item</div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=200&width=400&query=moving ramps and lift gates"
                  alt="Ramps & Lift Gates"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ramps & Loading Equipment</h3>
                <p className="text-gray-600 mb-4">
                  Loading ramps and other equipment to help with loading and unloading heavy items.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Loading ramps</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Lift gates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Stair climbers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span>Pallet jacks</span>
                  </li>
                </ul>
                <div className="text-emerald-700 font-semibold">Starting at $35/day</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              How Our Rental Process Works
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              We make renting moving equipment simple and hassle-free.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-emerald-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
              <p className="text-gray-600">
                Call us or fill out our rental inquiry form to let us know what equipment you need and when.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-emerald-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Get a Quote</h3>
              <p className="text-gray-600">
                We'll provide you with a transparent quote based on your equipment needs and rental duration.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-emerald-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Pick Up Equipment</h3>
              <p className="text-gray-600">
                Visit our location to pick up your rental equipment. We'll provide instructions on proper use.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-emerald-700">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Return Equipment</h3>
              <p className="text-gray-600">
                Return the equipment in the same condition by the agreed-upon time to avoid additional charges.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800">
              Request Equipment Rental
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Common questions about our equipment rental services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What deposit is required for equipment rental?</h3>
              <p className="text-gray-600">
                We require a security deposit that varies based on the equipment being rented. The deposit is fully
                refundable upon return of the equipment in good condition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Do you offer delivery of rental equipment?</h3>
              <p className="text-gray-600">
                Yes, we offer delivery and pickup services for an additional fee, depending on your location within the
                DMV area.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">What happens if equipment is damaged during rental?</h3>
              <p className="text-gray-600">
                Renters are responsible for any damage beyond normal wear and tear. We recommend checking all equipment
                thoroughly before leaving our facility.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Can I extend my rental period?</h3>
              <p className="text-gray-600">
                Yes, extensions are possible based on availability. Please contact us as soon as possible if you need to
                extend your rental period to avoid late fees.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">Do you offer discounts for long-term rentals?</h3>
              <p className="text-gray-600">
                Yes, we offer discounted rates for weekly and monthly rentals. Contact us for a custom quote based on
                your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  )
}
