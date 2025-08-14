"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C0D5D8DE-3DC5-4704-A686-D1D4AC214DB5.PNG-DiNoxd48Hd2BeZakwjHHmfVP4aQkTz.png"
              alt="Imperial Movers Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-navy-800">Imperial Movers</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-orange-600">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-orange-600">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/services/residential">Residential Moving</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/commercial">Commercial Moving</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/junk-removal">Junk Removal</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/donation">Donation Pickup</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/packing">Packing Services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/equipment-rental">Equipment Rental</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/pricing" className="text-sm font-medium hover:text-orange-600">
            Pricing
          </Link>
          <Link href="/service-areas" className="text-sm font-medium hover:text-orange-600">
            Service Areas
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-orange-600">
            About Us
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-orange-600">
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:2408935931"
            className="flex items-center gap-2 bg-lime-100 px-3 py-1.5 rounded-md hover:bg-lime-200 transition-colors"
          >
            <Phone className="h-4 w-4 text-lime-600" />
            <span className="text-sm font-medium text-gray-900">(240) 893-5931</span>
          </a>
          <Link href="/quote">
            <Button className="bg-navy-700 hover:bg-navy-800 text-white">Get a Quote</Button>
          </Link>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col gap-6 pt-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/C0D5D8DE-3DC5-4704-A686-D1D4AC214DB5.PNG-DiNoxd48Hd2BeZakwjHHmfVP4aQkTz.png"
                  alt="Imperial Movers Logo"
                  width={40}
                  height={40}
                />
                <span className="text-xl font-bold text-navy-800">Imperial Movers</span>
              </Link>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-lg font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-3">
                  <p className="text-lg font-medium">Services</p>
                  <div className="grid gap-2 pl-4">
                    <Link
                      href="/services/residential"
                      className="text-sm hover:text-orange-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Residential Moving
                    </Link>
                    <Link
                      href="/services/commercial"
                      className="text-sm hover:text-orange-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Commercial Moving
                    </Link>
                    <Link
                      href="/services/junk-removal"
                      className="text-sm hover:text-orange-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Junk Removal
                    </Link>
                    <Link
                      href="/services/donation"
                      className="text-sm hover:text-orange-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Donation Pickup
                    </Link>
                    <Link
                      href="/services/packing"
                      className="text-sm hover:text-orange-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Packing Services
                    </Link>
                    <Link
                      href="/services/equipment-rental"
                      className="text-sm hover:text-orange-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Equipment Rental
                    </Link>
                  </div>
                </div>
                <Link
                  href="/pricing"
                  className="text-lg font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/service-areas"
                  className="text-lg font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Service Areas
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium hover:text-orange-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
              <div className="flex flex-col gap-4 mt-auto">
                <a
                  href="tel:2408935931"
                  className="flex items-center gap-2 bg-lime-100 px-3 py-2 rounded-md hover:bg-lime-200 transition-colors"
                >
                  <Phone className="h-4 w-4 text-lime-600" />
                  <span className="text-sm font-medium text-gray-900">(240) 893-5931</span>
                </a>
                <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-navy-700 hover:bg-navy-800 text-white">Get a Quote</Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
