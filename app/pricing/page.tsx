import { CheckCircle, X, Phone } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl max-w-3xl">
              Transparent Pricing for All Your Moving Needs
            </h1>
            <p className="mt-4 text-lg text-navy-100 md:text-xl max-w-2xl">
              We believe in upfront, honest pricing with no hidden fees or surprises. Choose the service that fits your
              needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/quote">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                  Get a Custom Quote
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-lime-500 hover:bg-lime-600 text-navy-900 font-medium border-2 border-lime-600"
              >
                <Phone className="mr-2 h-4 w-4 text-navy-900" /> (240) 893-5931
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Moving Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Residential Moving Pricing</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Our residential moving services are priced based on the size of your move and the services you need.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 border-b bg-gray-50">
                <h3 className="text-xl font-semibold text-center">Small Move</h3>
                <p className="text-center text-gray-600 mt-1">Studio or 1 Bedroom</p>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-navy-900">$399</span>
                  <span className="text-gray-600 ml-1">starting at</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>2 professional movers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>16ft moving truck</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Basic furniture protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Loading & unloading</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">Packing services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <X className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-500">Packing materials</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/quote">
                    <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-md transform md:-translate-y-4">
              <div className="p-6 border-b bg-orange-500 text-white">
                <h3 className="text-xl font-semibold text-center">Medium Move</h3>
                <p className="text-center text-orange-100 mt-1">2-3 Bedrooms</p>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold">$699</span>
                  <span className="text-orange-100 ml-1">starting at</span>
                </div>
                <p className="text-center text-orange-100 mt-2 text-sm">Most Popular</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>3 professional movers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>20ft moving truck</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Premium furniture protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Loading & unloading</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Basic packing services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Furniture assembly/disassembly</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/quote">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white">Get Quote</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="p-6 border-b bg-gray-50">
                <h3 className="text-xl font-semibold text-center">Large Move</h3>
                <p className="text-center text-gray-600 mt-1">4+ Bedrooms</p>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-navy-900">$999</span>
                  <span className="text-gray-600 ml-1">starting at</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>4+ professional movers</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>26ft moving truck</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Premium furniture protection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Loading & unloading</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Full packing services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-lime-500" />
                    <span>Complete furniture assembly</span>
                  </li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/quote">
                    <Button variant="outline" className="text-orange-600 border-orange-600 hover:bg-orange-50">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Moving Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Commercial Moving Pricing</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Business relocations are priced based on office size, equipment, and specific requirements.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Small Office (1-10 employees)</h3>
              <div className="text-3xl font-bold text-navy-900 mb-4">
                $899 <span className="text-lg font-normal text-gray-600">starting at</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>Workstation disassembly/reassembly</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>IT equipment handling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>After-hours service available</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>Minimal downtime guarantee</span>
                </li>
              </ul>
              <Link href="/quote">
                <Button variant="outline" className="w-full text-navy-700 border-navy-700 hover:bg-navy-50">
                  Get Business Quote
                </Button>
              </Link>
            </div>
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Large Office (10+ employees)</h3>
              <div className="text-3xl font-bold text-navy-900 mb-4">
                Custom <span className="text-lg font-normal text-gray-600">pricing</span>
              </div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>Dedicated project manager</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>Phased moving options</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>Specialized equipment handling</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-lime-500" />
                  <span>Weekend/evening service</span>
                </li>
              </ul>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Pricing */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Additional Services</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Enhance your move with our additional services, all priced transparently with no hidden fees.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Junk Removal</h3>
              <div className="text-2xl font-bold text-orange-500 mb-2">$149</div>
              <p className="text-gray-600 text-sm">per truckload</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Packing Services</h3>
              <div className="text-2xl font-bold text-orange-500 mb-2">$45</div>
              <p className="text-gray-600 text-sm">per hour per packer</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Storage</h3>
              <div className="text-2xl font-bold text-orange-500 mb-2">$89</div>
              <p className="text-gray-600 text-sm">per month (5x5 unit)</p>
            </div>
            <div className="bg-white border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Equipment Rental</h3>
              <div className="text-2xl font-bold text-orange-500 mb-2">$25</div>
              <p className="text-gray-600 text-sm">per day (dollies)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">
              What Affects Your Moving Cost?
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Several factors influence the final cost of your move. We consider all of these to provide you with an
              accurate quote.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Distance</h3>
              <p className="text-gray-600">
                Local moves (under 50 miles) are charged hourly, while long-distance moves are priced by weight and
                distance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Size of Move</h3>
              <p className="text-gray-600">
                The number of rooms and amount of belongings directly impacts the time and crew size needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Services Requested</h3>
              <p className="text-gray-600">
                Additional services like packing, storage, or specialty item handling will affect the total cost.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Time of Year</h3>
              <p className="text-gray-600">
                Peak moving season (summer months) may have higher rates due to increased demand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Access Challenges</h3>
              <p className="text-gray-600">
                Stairs, elevators, long carries, or difficult parking can impact the time and effort required.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3">Special Items</h3>
              <p className="text-gray-600">
                Pianos, artwork, antiques, or other valuable items may require special handling and equipment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Imperial Promise */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">The Imperial Promise</h2>
            <p className="text-lg text-navy-100 mb-8">
              We guarantee transparent, upfront pricing with no hidden fees or surprise charges. The quote we provide is
              the price you'll pay - that's our promise to you.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">No Hidden Fees</h3>
                <p className="text-navy-200 text-sm">What we quote is what you pay</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Free Estimates</h3>
                <p className="text-navy-200 text-sm">No charge for detailed quotes</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Price Protection</h3>
                <p className="text-navy-200 text-sm">Your quote is locked in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-navy-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Ready for Your Free Quote?</h2>
              <p className="mt-2 text-navy-100">Contact us today for transparent pricing with no hidden fees.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                  Get a Free Quote
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-lime-500 hover:bg-lime-600 text-navy-900 font-medium border-2 border-lime-600"
              >
                <Phone className="mr-2 h-4 w-4 text-navy-900" /> (240) 893-5931
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
