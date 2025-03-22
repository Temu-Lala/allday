"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Utensils, Gift, Calendar, Truck } from "lucide-react"
import Link from "next/link"

export default function ServicesPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: "Fine Dining",
      description:
        "Experience exquisite cuisine in an elegant setting with impeccable service and attention to detail.",
    },
    {
      icon: <Gift className="h-8 w-8 text-green-500" />,
      title: "Private Events",
      description:
        "Host your special celebrations in our exclusive event spaces with customized menus and decorations.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-yellow-500" />,
      title: "Catering",
      description: "Bring our culinary excellence to your location with full-service catering for events of any size.",
    },
    {
      icon: <Truck className="h-8 w-8 text-primary" />,
      title: "Delivery",
      description: "Enjoy our gourmet meals in the comfort of your home with our premium delivery service.",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="py-20 px-4 md:px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-green-500/10 text-green-500 text-sm font-medium py-1 px-3 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Exceptional <span className="text-green-500">Experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond just dining, we offer a range of services to elevate your culinary journey
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-md transition-shadow border-border/50 hover:border-primary/30 group">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="mb-4 p-3 rounded-full bg-background shadow-sm group-hover:shadow-md transition-shadow">
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <Button variant="link" className="mt-auto text-primary group-hover:underline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Link href="/services">
            <Button variant="outline" size="lg" className="group">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

