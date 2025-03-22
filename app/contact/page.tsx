"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formState)
    alert("Thanks for your message! We will get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  const mapRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  const isMapInView = useInView(mapRef, { once: true, amount: 0.2 })
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 })
  const isInfoInView = useInView(infoRef, { once: true, amount: 0.2 })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Address",
      details: "123 Gourmet Avenue, Culinary District, City, Country",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      details: "info@cafeluxe.com",
    },
    {
      icon: <Clock className="h-5 w-5 text-primary" />,
      title: "Opening Hours",
      details: "Monday - Sunday: 9:00 AM - 11:00 PM",
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  ]

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We'd love to hear from you! Whether you have a question about our menu, want to make a reservation, or are
            interested in our catering services, we're here to help.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 md:px-6 bg-muted/30" ref={mapRef}>
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate={isMapInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="h-[400px] w-full rounded-xl overflow-hidden shadow-md"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sca!4v1667852498192!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div ref={formRef}>
              <motion.div initial="hidden" animate={isFormInView ? "visible" : "hidden"} variants={fadeIn}>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center">
                      <Send className="h-5 w-5 mr-2 text-primary" />
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Your Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formState.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Your Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formState.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Your Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us more about your inquiry..."
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div ref={infoRef}>
              <motion.div
                initial="hidden"
                animate={isInfoInView ? "visible" : "hidden"}
                variants={fadeIn}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="rounded-full p-3 bg-primary/10 h-12 w-12 flex items-center justify-center shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{info.title}</h3>
                          <p className="text-muted-foreground">{info.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
                  <p className="text-muted-foreground mb-4">
                    Follow us on social media for the latest updates, special offers, and culinary inspiration.
                  </p>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="h-12 w-12 flex items-center justify-center rounded-full bg-muted hover:bg-primary/10 transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Live Chat</h2>
                  <p className="text-muted-foreground mb-4">
                    Need immediate assistance? Chat with our team now for real-time support.
                  </p>
                  <Button variant="outline" className="w-full">
                    Start Chat
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

