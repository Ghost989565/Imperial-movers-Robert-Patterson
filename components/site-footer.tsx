import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-navy-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C0D5D8DE-3DC5-4704-A686-D1D4AC214DB5.PNG-DiNoxd48Hd2BeZakwjHHmfVP4aQkTz.png"
                alt="Imperial Movers Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-white">Imperial Movers</span>
            </Link>
            <p className="mb-4">
              Professional moving and junk removal services in the DMV area. With over 10 years of experience, we make
              your move stress-free.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-orange-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-orange-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/residential" className="hover:text-orange-500">
                  Residential Moving
                </Link>
              </li>
              <li>
                <Link href="/services/commercial" className="hover:text-orange-500">
                  Commercial Moving
                </Link>
              </li>
              <li>
                <Link href="/services/junk-removal" className="hover:text-orange-500">
                  Junk Removal
                </Link>
              </li>
              <li>
                <Link href="/services/donation" className="hover:text-orange-500">
                  Donation Pickup
                </Link>
              </li>
              <li>
                <Link href="/services/packing" className="hover:text-orange-500">
                  Packing Services
                </Link>
              </li>
              <li>
                <Link href="/services/equipment-rental" className="hover:text-orange-500">
                  Equipment Rental
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pricing" className="hover:text-orange-500">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="hover:text-orange-500">
                  Service Areas
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-orange-500">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-orange-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-orange-500" />
                <span>
                  1234 Moving Ave, Suite 100
                  <br />
                  Washington, DC 20001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-orange-500" />
                <span>(240) 893-5931</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-orange-500" />
                <span>robert@imperialmoversdmv.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="font-semibold text-white">Business Hours:</p>
              <p>Monday-Saturday: 8am-7pm</p>
              <p>Sunday: By appointment only</p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Owner: Robert Patterson</p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-navy-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 Imperial Movers & Services. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-orange-500">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-orange-500">
                Terms of Service
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <span>DOT License: </span>
              <span className="font-semibold text-white">USDOT #1234567</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
