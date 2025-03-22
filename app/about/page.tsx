"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Clock, Leaf, Users } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const section1Ref = useRef(null)
  const section2Ref = useRef(null)
  const section3Ref = useRef(null)

  const isSection1InView = useInView(section1Ref, { once: true, amount: 0.2 })
  const isSection2InView = useInView(section2Ref, { once: true, amount: 0.2 })
  const isSection3InView = useInView(section3Ref, { once: true, amount: 0.2 })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const timeline = [
    {
      year: "2010",
      title: "The Beginning",
      description:
        "Café Luxe was founded by Chef Maria Rossi with a vision to create a culinary haven that celebrates both traditional techniques and innovative flavors.",
    },
    {
      year: "2012",
      title: "First Recognition",
      description:
        "Earned our first culinary award for 'Best New Restaurant' and expanded our menu to include internationally inspired dishes.",
    },
    {
      year: "2015",
      title: "Expansion",
      description:
        "Renovated our space to include a private dining area and launched our catering services for special events and celebrations.",
    },
    {
      year: "2018",
      title: "Sustainability Focus",
      description:
        "Committed to sustainable practices by partnering with local farmers and implementing eco-friendly initiatives throughout our operations.",
    },
    {
      year: "2023",
      title: "Today",
      description:
        "Continuing our culinary journey with an ever-evolving menu and a dedication to creating memorable dining experiences for our guests.",
    },
  ]

  const chefs = [
    {
      name: "Maria Rossi",
      role: "Executive Chef & Founder",
      bio: "With over 20 years of culinary experience across Europe and Asia, Chef Maria brings her passion for innovative flavors and traditional techniques to every dish at Café Luxe.",
      image: "https://alahliakitchen.ae/wp-content/uploads/2024/03/How-to-Become-a-Professional-Chef-1270x800.webp",
    },
    {
      name: "James Chen",
      role: "Head Chef",
      bio: "Specializing in fusion cuisine, Chef James combines Eastern and Western culinary traditions to create unique and unforgettable flavor profiles.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sophia Martinez",
      role: "Pastry Chef",
      bio: "A graduate of Le Cordon Bleu, Chef Sophia creates artisanal desserts that are as beautiful as they are delicious, each a perfect end to the dining experience.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background z-0"></div>
        <div className="absolute inset-0 z-[-1]">
          <Image
            src="https://martech.org/wp-content/uploads/2018/08/Customer-Journey_s2fyil.png"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container mx-auto px-4 md:px-6 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Culinary <span className="text-primary">Journey</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Discover the story, philosophy, and passion behind Café Luxe and our commitment to creating exceptional
              dining experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-6" ref={section1Ref}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate={isSection1InView ? "visible" : "hidden"} variants={fadeIn}>
              <div className="inline-block bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                A Passion for <span className="text-primary">Culinary Excellence</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Café Luxe began with a simple vision: to create a space where food, art, and community converge. Founded
                by Chef Maria Rossi in 2010, our restaurant has evolved into a culinary landmark known for innovative
                dishes that respect traditional techniques while embracing modern flavors.
              </p>
              <p className="text-muted-foreground mb-6">
                Our philosophy centers on three core principles: using the finest seasonal ingredients, honoring
                culinary traditions, and creating an atmosphere where every guest feels welcome. Each dish tells a story
                and represents our ongoing journey of culinary exploration.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Sustainable</h3>
                  <p className="text-sm text-muted-foreground">Locally sourced ingredients</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Quality</h3>
                  <p className="text-sm text-muted-foreground">Premium ingredients</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">Community</h3>
                  <p className="text-sm text-muted-foreground">Building connections</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isSection1InView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="relative h-[400px] md:h-[500px]"
            >
              <div className="absolute top-0 left-0 w-2/3 h-2/3 z-10">
                <Image
                  src="https://alahliakitchen.ae/wp-content/uploads/2024/03/How-to-Become-a-Professional-Chef-1270x800.webp"
                  alt="Restaurant chef"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 border-8 border-background z-20">
                <Image
                  src="https://luciosnj.com/templates/rt_koleti/custom/images/rocketlauncher/pages/careers/careers-above-01.png"
                  alt="Restaurant food"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 md:px-6 bg-muted/30" ref={section2Ref}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div initial="hidden" animate={isSection2InView ? "visible" : "hidden"} variants={fadeIn}>
              <div className="inline-block bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4">
                Our Timeline
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The <span className="text-primary">Evolution</span> of Café Luxe
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From our humble beginnings to where we are today, discover the key moments that have shaped our culinary
                journey.
              </p>
            </motion.div>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border/70"></div>

            {/* Timeline Events */}
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isSection2InView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 ${index % 2 === 0 ? "lg:pr-1/2" : "lg:pl-1/2 lg:ml-auto"}`}
              >
                <div
                  className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}
                >
                  {/* Timeline Marker */}
                  <div
                    className="absolute left-1/2 lg:left-auto lg:top-6 transform -translate-x-1/2 lg:translate-x-0 
                    z-10 w-10 h-10 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center"
                  >
                    <Clock className="h-4 w-4 text-primary" />
                  </div>

                  {/* Timeline Content */}
                  <div
                    className={`relative z-10 bg-background p-6 rounded-lg shadow-sm border border-border/50 
                    w-full lg:w-[calc(100%-2rem)] ${index % 2 === 0 ? "lg:mr-6" : "lg:ml-6"}`}
                  >
                    <div
                      className="absolute top-6 lg:top-1/2 lg:transform lg:-translate-y-1/2 
                      w-3 h-3 rotate-45 bg-background border-t border-l border-border/50
                      ${index % 2 === 0 ? 'right-0 lg:-right-1.5' : 'left-0 lg:-left-1.5'}"
                    ></div>
                    <span className="inline-block text-sm font-medium text-primary mb-1">{event.year}</span>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Chefs Section */}
      <section className="py-20 px-4 md:px-6" ref={section3Ref}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <motion.div initial="hidden" animate={isSection3InView ? "visible" : "hidden"} variants={fadeIn}>
              <div className="inline-block bg-yellow-500/10 text-yellow-500 text-sm font-medium py-1 px-3 rounded-full mb-4">
                Culinary Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="text-yellow-500">Chefs</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The talented individuals behind our delicious creations, bringing passion and expertise to every dish.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isSection3InView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <Card className="overflow-hidden h-full border-border/50 hover:border-yellow-500/30 transition-colors">
                  <CardContent className="p-0">
                    <div className="relative h-[300px] overflow-hidden">
                      <Image
                        src={chef.image || "/placeholder.svg"}
                        alt={chef.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white">{chef.name}</h3>
                          <p className="text-yellow-500">{chef.role}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-1">{chef.name}</h3>
                      <p className="text-sm text-yellow-500 mb-3">{chef.role}</p>
                      <p className="text-muted-foreground text-sm">{chef.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <motion.div
              initial="hidden"
              animate={isSection3InView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.6 }}
            >
              <Link href="/contact">
                <Button size="lg" className="group">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}

