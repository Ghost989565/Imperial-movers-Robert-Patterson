import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Users, Clock, Shield, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-700 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                About Imperial Movers & Services
              </h1>
              <p className="text-lg text-navy-100 md:text-xl">
                For over 10 years, we've been helping families and businesses in the DMV area move with confidence,
                care, and complete transparency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
                    Get Your Free Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl bg-navy-100">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2023%2C%202025%20at%2009_21_36%20AM-CvLWqmE1q0I6fZKFZndFfYfJk2oQsh.png"
                alt="Imperial Movers Logo"
                fill
                className="object-scale-down"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Imperial Movers & Services was founded with a simple mission: to make moving stress-free and affordable
                for everyone in the DMV area. What started as a small family business has grown into one of the most
                trusted moving companies in Washington DC, Maryland, and Northern Virginia.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We understand that moving is more than just transporting belongings from one place to another. It's
                about helping people transition to new chapters in their lives, whether that's a family moving to their
                dream home or a business expanding to a new location.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to transparency, reliability, and exceptional customer service has earned us the trust of
                thousands of satisfied customers throughout the region.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image src="/about-us-story-image.png" alt="Imperial Movers History" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Robert Patterson Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-md">
              <Image
                src="/robert-patterson-owner-portrait.png"
                alt="Robert Patterson - Owner"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-navy-900 mb-6">Meet Robert Patterson</h2>
              <p className="text-lg text-gray-600 mb-6">
                As the owner and founder of Imperial Movers & Services, Robert Patterson brings over 15 years of
                experience in the moving and logistics industry to every job. His hands-on approach and commitment to
                customer satisfaction have been the driving force behind the company's success.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                "I started this company because I saw too many people getting taken advantage of by moving companies
                with hidden fees and poor service," says Robert. "Our Imperial Promise of transparent pricing and
                exceptional service isn't just a slogan – it's how we do business every single day."
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Robert is actively involved in the local community and believes in giving back through charitable
                donations and community service projects.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">15+ years industry experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Licensed and insured professional</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500" />
                  <span className="text-gray-700">Active community member</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              These values guide everything we do and shape how we serve our customers every day.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-gray-600">
                We believe in honest, upfront pricing with no hidden fees or surprises. What we quote is what you pay.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Care</h3>
              <p className="text-gray-600">
                We treat your belongings as if they were our own, handling everything with the utmost care and respect.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We show up on time, work efficiently, and deliver on our promises. You can count on us.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We're proud to be part of the DMV community and committed to giving back through service and support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, from the initial quote to the final box
                placement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We do the right thing, even when no one is watching. Our reputation is built on trust and honesty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Our Professional Team</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Our experienced, trained, and background-checked team members are the heart of our operation.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2023%2C%202025%20at%2009_21_36%20AM-CvLWqmE1q0I6fZKFZndFfYfJk2oQsh.png"
                  alt="Team Member"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Marcus Johnson</h3>
              <p className="text-orange-600 font-medium mb-2">Lead Moving Specialist</p>
              <p className="text-gray-600">
                5+ years with Imperial Movers. Specializes in furniture assembly and fragile item handling.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/team-member-sarah.png" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Williams</h3>
              <p className="text-orange-600 font-medium mb-2">Customer Service Manager</p>
              <p className="text-gray-600">
                Ensures every customer has an exceptional experience from quote to completion.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src="/team-member-david.png" alt="Team Member" fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">David Rodriguez</h3>
              <p className="text-orange-600 font-medium mb-2">Commercial Moving Coordinator</p>
              <p className="text-gray-600">
                Expert in office relocations and minimizing business downtime during moves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl">Why Customers Choose Us</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl">
              Here's what sets Imperial Movers apart from other moving companies in the DMV area.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
              <p className="text-gray-700 font-medium">Years of Experience</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">5000+</div>
              <p className="text-gray-700 font-medium">Successful Moves</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
              <p className="text-gray-700 font-medium">Customer Satisfaction</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">0</div>
              <p className="text-gray-700 font-medium">Hidden Fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Insurance */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Licensed, Insured & Certified</h2>
            <p className="text-lg text-navy-100 mb-8">
              We maintain all necessary licenses and insurance to protect our customers and provide peace of mind.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Fully Licensed</h3>
                <p className="text-navy-200 text-sm">DOT License #1234567</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Fully Insured</h3>
                <p className="text-navy-200 text-sm">Comprehensive liability coverage</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 rounded-full bg-orange-500 flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Certified Team</h3>
                <p className="text-navy-200 text-sm">Background checked professionals</p>
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
