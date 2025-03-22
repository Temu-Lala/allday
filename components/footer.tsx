"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Send, MapPin, Phone, Mail, Clock, Mountain } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Menu", href: "/menu" },
    { label: "Reservations", href: "/reservations" },
    { label: "Contact", href: "/contact" },
  ]

  const contactInfo = [
    {
      icon: <MapPin className="h-4 w-4 text-primary" />,
      text: "123 Gourmet Avenue, Culinary District, City",
    },
    {
      icon: <Phone className="h-4 w-4 text-primary" />,
      text: "+1 (555) 123-4567",
    },
    {
      icon: <Mail className="h-4 w-4 text-primary" />,
      text: "info@cafeluxe.com",
    },
    {
      icon: <Clock className="h-4 w-4 text-primary" />,
      text: "Mon-Sun: 9:00 AM - 11:00 PM",
    },
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
  ]

  return (
    <footer className="bg-muted/50 pt-16 pb-8 px-4 md:px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* About */}
          <motion.div variants={item}>
            <div className="flex items-center gap-2 mb-4">
              <Mountain className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Café Luxe</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Elevating dining to an art form, Café Luxe brings you the finest culinary experiences with a perfect blend
              of tradition and innovation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="h-9 w-9 flex items-center justify-center rounded-full border border-border hover:bg-primary/10 hover:border-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1">{info.icon}</span>
                  <span className="text-sm text-muted-foreground">{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest offers, events, and culinary creations.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="h-10 bg-background" />
              <Button size="icon" className="h-10 w-10">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </motion.div>

        <Separator className="my-8 opacity-30" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Café Luxe. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/privacy" className="hover:text-primary transition-colors hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

