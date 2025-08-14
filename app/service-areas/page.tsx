import Image from "next/image"
import { MapPin, CheckCircle, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ServiceAreasPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                Service Areas in the DMV Region
              </h1>
              <p className="text-lg text-navy-100 md:text-xl">
                Imperial Movers proudly serves Washington DC, Maryland, and Northern Virginia with our full range of
                moving and junk removal services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                  Check Your Location
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aae275008ac5216f571a9e3f9903d8ad.jpg-OmDRtYaWi3C9g1v4mZt1Q8qgBUWDHw.jpeg"
                alt="DMV Area Map showing service coverage"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Areas We Serve</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              We provide our comprehensive moving, junk removal, and donation pickup services throughout these areas in
              the DMV region.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Washington DC */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image src="/washington-dc-skyline.png" alt="Washington DC" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <h3 className="text-xl font-semibold">Washington DC</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Serving all neighborhoods in the District of Columbia with our full range of services.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Georgetown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Dupont Circle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Capitol Hill</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Adams Morgan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Navy Yard</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Columbia Heights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Shaw</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Foggy Bottom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Maryland */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image src="/maryland-suburban-homes.png" alt="Maryland" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <h3 className="text-xl font-semibold">Maryland</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Serving Montgomery County, Prince George's County, and surrounding areas in Maryland.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Bethesda</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Silver Spring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Rockville</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">College Park</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Gaithersburg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Hyattsville</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Takoma Park</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Chevy Chase</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Northern Virginia */}
            <div className="bg-white border rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image src="/northern-virginia-cityscape.png" alt="Northern Virginia" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-orange-500" />
                  <h3 className="text-xl font-semibold">Northern Virginia</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Serving Arlington, Alexandria, Fairfax, and surrounding areas in Northern Virginia.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Arlington</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Alexandria</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Fairfax</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">McLean</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Reston</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Vienna</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Falls Church</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-lime-500" />
                    <span className="text-sm">Tysons</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Radius Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-6">Our Service Radius</h2>
              <p className="text-lg text-gray-600 mb-6">
                While we primarily serve the DMV area, we also offer extended service for long-distance moves to and
                from the region. Our service radius includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5" />
                  <div>
                    <span className="font-semibold text-navy-900">Local Moves:</span>
                    <p className="text-gray-600">
                      Anywhere within Washington DC, Montgomery County, Prince George's County, Arlington County,
                      Alexandria, and Fairfax County.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5" />
                  <div>
                    <span className="font-semibold text-navy-900">Long-Distance Moves:</span>
                    <p className="text-gray-600">
                      To and from the DMV area to anywhere on the East Coast, including New York, Philadelphia, Boston,
                      and Atlanta.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 mt-0.5" />
                  <div>
                    <span className="font-semibold text-navy-900">Junk Removal & Donation Pickup:</span>
                    <p className="text-gray-600">
                      Available throughout the entire DMV area with same-day service often available.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <Button className="bg-navy-700 hover:bg-navy-800 text-white">Check Availability</Button>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-lime-600" />
                  <span className="font-medium text-gray-900">(240) 893-5931</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aae275008ac5216f571a9e3f9903d8ad.jpg-OmDRtYaWi3C9g1v4mZt1Q8qgBUWDHw.jpeg"
                alt="Detailed DMV Service Area Map"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Not in our service area? */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Not in Our Service Area?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mb-8">
              If you're outside our primary service area, contact us anyway! We may be able to accommodate your move or
              refer you to one of our trusted partners.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Contact Us for Options
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-navy-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Ready for a Stress-Free Move?</h2>
              <p className="mt-2 text-navy-100">Contact us today to schedule your service or get a free quote.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                Get a Free Quote
              </Button>
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
