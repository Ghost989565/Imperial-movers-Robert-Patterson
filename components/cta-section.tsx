import Link from "next/link"
import { Phone } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-12 bg-navy-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Ready for a Stress-Free Move?</h2>
            <p className="mt-2 text-navy-100">Contact us today to schedule your service or get a free quote.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </div>
    </section>
  )
}
