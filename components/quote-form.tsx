"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export function QuoteForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [date, setDate] = useState<Date>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [serviceType, setServiceType] = useState("residential")
  const [moveSize, setMoveSize] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const formData = new FormData(e.currentTarget)

      // Add the date in ISO format if selected
      if (date) {
        formData.append("move-date", date.toISOString())
      }

      // Add service type and move size
      formData.set("service-type", serviceType)
      if (moveSize) {
        formData.set("move-size", moveSize)
      }

      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/mqabzzea", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormSubmitted(true)
      } else {
        const data = await response.json()
        setError(data.error || "Failed to submit form. Please try again.")
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error("Form submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (formSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8">
        <div className="h-12 w-12 rounded-full bg-lime-100 flex items-center justify-center mb-4">
          <CheckCircle className="h-6 w-6 text-lime-600" />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-center">Thank You!</h3>
        <p className="text-gray-600 text-center">
          We've received your request and will get back to you within 24 hours with a personalized quote.
        </p>
        <p className="text-gray-600 text-center mt-2">A confirmation has been sent to your email address.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="first-name">First name</Label>
          <Input id="first-name" name="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last name</Label>
          <Input id="last-name" name="last-name" required />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label>Service Type</Label>
        <RadioGroup
          defaultValue="residential"
          className="grid grid-cols-2 gap-4"
          value={serviceType}
          onValueChange={setServiceType}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="residential" id="residential" />
            <Label htmlFor="residential" className="font-normal">
              Residential Move
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="commercial" id="commercial" />
            <Label htmlFor="commercial" className="font-normal">
              Commercial Move
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="junk" id="junk" />
            <Label htmlFor="junk" className="font-normal">
              Junk Removal
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other" className="font-normal">
              Other Service
            </Label>
          </div>
        </RadioGroup>
      </div>
      <div className="space-y-2">
        <Label>Move Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select your preferred date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>
      <div className="space-y-2">
        <Label htmlFor="move-size">Move Size</Label>
        <Select value={moveSize} onValueChange={setMoveSize}>
          <SelectTrigger>
            <SelectValue placeholder="Select size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="studio">Studio Apartment</SelectItem>
            <SelectItem value="1br">1 Bedroom</SelectItem>
            <SelectItem value="2br">2 Bedrooms</SelectItem>
            <SelectItem value="3br">3 Bedrooms</SelectItem>
            <SelectItem value="4br">4+ Bedrooms</SelectItem>
            <SelectItem value="office">Office Space</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Additional Details</Label>
        <Textarea id="message" name="message" placeholder="Tell us more about your move or service needs" />
      </div>
      {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}
      <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Quote"}
      </Button>
      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to be contacted about our services. Your information will be sent to
        joellloyd25@gmail.com.
      </p>
    </form>
  )
}
