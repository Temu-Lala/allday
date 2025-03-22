"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Flame } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FeaturedSpecials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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

  const featuredItems = [
    {
      id: 1,
      name: "Truffle Risotto",
      description: "Creamy arborio rice, wild mushrooms, truffle oil, parmesan",
      price: "$24",
      image: "https://www.fabbox.in/cdn/shop/files/chef_reco.jpg?v=1653455410",
      category: "Main Course",
    },
    {
      id: 2,
      name: "Mango Tango Tart",
      description: "Fresh mangoes, passion fruit, coconut cream, almond crust",
      price: "$12",
      image: "/placeholder.svg?height=300&width=400",
      category: "Dessert",
    },
    {
      id: 3,
      name: "Spiced Lamb Rack",
      description: "Herb-crusted lamb, mint jus, roasted vegetables",
      price: "$32",
      image: "/placeholder.svg?height=300&width=400",
      category: "Main Course",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6" ref={ref}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            <span className="text-primary">Chef's</span> Recommendations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our most popular dishes, crafted with seasonal ingredients and exceptional flavors
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredItems.map((item) => (
            <motion.div key={item.id} variants={item}>
              <Card className="overflow-hidden group h-full border-2 border-border/50 hover:border-primary/50 transition-colors">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={item.image || "http://accounts.google.com/v3/signin/identifier?TL=ADgdZ7SJTEQxp_kjE4j9-h5z8zXLalwcHSZN8UNjc_8BNi9vJQavs_S-J82MS-H7&checkConnection=youtube%3A1610&checkedDomains=youtube&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dchrome-profile-chooser&ddm=1&dsh=S875327284%3A1740678483842894&flowEntry=ServiceLogin&flowName=GlifWebSignIn&ifkv=ASSHykpetPH4udAXLs9qiOAQsfia8ieMzZD8_hwc5xtaLS7UiZyY3y9GsSh4ZDyKfH986Yond8C13A&pstMsg=1&authuser=0"}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-xs font-medium py-1 px-2 rounded flex items-center gap-1">
                    <Flame className="h-3 w-3" />
                    {item.category}
                  </div>
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-foreground">{item.name}</h3>
                    <span className="font-medium text-primary">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  <Button variant="outline" size="sm" className="w-full mt-auto group">
                    <span className="group-hover:text-primary transition-colors">Add to Order</span>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            View Full Menu
            <svg
              className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  )
}

