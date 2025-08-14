"use server"

export async function submitQuoteForm(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("first-name")
    const lastName = formData.get("last-name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const serviceType = formData.get("service-type")
    const moveDate = formData.get("move-date")
    const moveSize = formData.get("move-size")
    const message = formData.get("message")

    // In a real implementation, you would send this data to an email service
    // For now, we'll log it and simulate a successful submission
    console.log("Form submitted with data:", {
      firstName,
      lastName,
      email,
      phone,
      serviceType,
      moveDate,
      moveSize,
      message,
      recipientEmail: "joellloyd25@gmail.com",
    })

    // In a production environment, you would use an email service like SendGrid, AWS SES, etc.
    // Example with EmailJS or similar service would go here

    // Return success status
    return { success: true }
  } catch (error) {
    console.error("Error submitting form:", error)
    return { success: false, error: "Failed to submit form. Please try again." }
  }
}
