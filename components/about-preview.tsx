"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Stars, Utensils, Users } from "lucide-react"
import Link from "next/link"

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const features = [
    {
      icon: <Utensils className="h-5 w-5 text-primary" />,
      title: "Culinary Excellence",
      description: "Our award-winning chefs craft dishes that blend tradition with innovation.",
    },
    {
      icon: <Users className="h-5 w-5 text-yellow-500" />,
      title: "Welcoming Atmosphere",
      description: "A warm, inviting space where every guest feels like family.",
    },
    {
      icon: <Stars className="h-5 w-5 text-green-500" />,
      title: "Premium Ingredients",
      description: "We source only the freshest, highest-quality ingredients from local suppliers.",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeIn} initial="hidden" animate={isInView ? "visible" : "hidden"} className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary z-0"></div>
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://www.fabbox.in/cdn/shop/files/chef_reco.jpg?v=1653455410"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary z-0"></div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Culinary Journey Since <span className="text-primary">2010</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              Café Luxe began with a simple vision: to create a space where food, art, and community converge. Founded
              by Chef Maria Rossi, our restaurant has evolved into a culinary landmark known for innovative dishes that
              respect traditional techniques while embracing modern flavors.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="mb-3 p-2 bg-background rounded-md shadow-sm">{feature.icon}</div>
                  <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            <Link href="/about">
              <Button className="group">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

