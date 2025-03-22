"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Coffee } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const parallaxRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!parallaxRef.current) return

      const x = (window.innerWidth - e.pageX * 4) / 100
      const y = (window.innerHeight - e.pageY * 4) / 100

      parallaxRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden flex items-center" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          ref={parallaxRef}
          className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/maxi-hamburger-double-cheeseburger-with-flying-ingredients-isolated-wooden_158023-172.jpg')] bg-cover bg-center brightness-[0.7] transition-transform duration-75 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 pt-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <Coffee className="text-yellow-500 h-5 w-5" />
            <span className="text-sm font-medium uppercase tracking-wider text-yellow-500">
              Luxury Dining Experience
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6"
          >
            <span className="text-primary text-green-700">Exquisite Flavors</span> in Every Bite
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl"
          >
            Indulge in a culinary journey that combines tradition with innovation. Our chefs craft each dish with
            passion and the finest ingredients.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="group">
              Explore Our Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Link href="/reservations">
              <Button size="lg" variant="outline">
                Book a Table
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-foreground/60 mb-2">Scroll to discover</span>
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 1.5,
              }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
