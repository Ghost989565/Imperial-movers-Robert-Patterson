"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Mark S.",
    location: "Washington DC",
    quote:
      "Imperial Movers made it an actual enjoyable experience. The team was professional, kind, and completed everything in a timely manner.",
    rating: 5,
    image: "/customer-mark-s.png",
  },
  {
    id: 2,
    name: "Hilary R.",
    location: "Bethesda, MD",
    quote:
      "I've used Imperial for two moves and junk removal. Their pricing is transparent with no surprises, and the crew is always careful with my belongings.",
    rating: 5,
    image: "/customer-hilary-r.png",
  },
  {
    id: 3,
    name: "Ayonna T.",
    location: "Alexandria, VA",
    quote:
      "The donation service was perfect for my downsizing needs. They handled everything professionally and even provided tax receipts for the donated items.",
    rating: 5,
    image: "/customer-ayonna-t.png",
  },
  {
    id: 4,
    name: "James L.",
    location: "Silver Spring, MD",
    quote:
      "As a small business owner, I appreciated how quickly and efficiently Imperial moved our office. Minimal downtime and great care with our equipment.",
    rating: 5,
    image: "/customer-james-l.png",
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrevious = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <section className="py-16 bg-navy-800 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-navy-100 max-w-3xl">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with
            Imperial Movers.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-navy-700 rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="rounded-full border-2 border-orange-500"
                        />
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <blockquote className="mb-4 text-lg italic">"{testimonial.quote}"</blockquote>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-navy-200 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-white hover:bg-navy-700/50"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:bg-navy-700/50"
            onClick={handleNext}
          >
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next testimonial</span>
          </Button>
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "h-2 w-2 rounded-full transition-colors",
                  index === activeIndex ? "bg-white" : "bg-navy-500 hover:bg-navy-400",
                )}
                onClick={() => {
                  setAutoplay(false)
                  setActiveIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
