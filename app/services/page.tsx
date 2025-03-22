"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Gift, Utensils, Truck, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const detailsRef = useRef(null)
  const testimonialsRef = useRef(null)

  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })
  const isServicesInView = useInView(servicesRef, { once: true, amount: 0.2 })
  const isDetailsInView = useInView(detailsRef, { once: true, amount: 0.2 })
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 })

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const services = [
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Fine Dining",
      description:
        "Experience exquisite cuisine in an elegant setting with impeccable service and attention to detail.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/reservations",
    },
    {
      icon: <Gift className="h-10 w-10 text-green-500" />,
      title: "Private Events",
      description:
        "Host your special celebrations in our exclusive event spaces with customized menus and decorations.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/contact",
    },
    {
      icon: <Calendar className="h-10 w-10 text-yellow-500" />,
      title: "Catering",
      description: "Bring our culinary excellence to your location with full-service catering for events of any size.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/contact",
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Delivery",
      description: "Enjoy our gourmet meals in the comfort of your home with our premium delivery service.",
      image: "/placeholder.svg?height=400&width=600",
      link: "/menu",
    },
  ]

  const serviceFeatures = [
    "Personalized service from start to finish",
    "Customizable menus to suit your preferences",
    "Professional staff dedicated to excellence",
    "Attention to every detail for a perfect experience",
  ]

  const testimonials = [
    {
      text: "The catering service was exceptional. Every detail was perfect, and our guests couldn't stop talking about the food.",
      author: "Sarah Johnson",
      role: "Corporate Event Planner",
    },
    {
      text: "Our anniversary dinner at Café Luxe was unforgettable. The private dining room created the perfect ambiance for our special day.",
      author: "Michael & Lisa Brown",
      role: "Loyal Customers",
    },
    {
      text: "The delivery service is prompt and the food arrives perfectly presented, just as if we were dining in the restaurant.",
      author: "David Chen",
      role: "Regular Customer",
    },
  ]

  return (
    <main className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-6" ref={heroRef}>
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              From intimate fine dining to grand catered events, we provide exceptional culinary experiences tailored to
              your needs and preferences.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isHeroInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-xl mb-12"
          >
            <Image src="https://assets.iprofesional.com/assets/jpg/2019/09/483794.jpg?5.7.0" alt="Our services" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-background/30 flex items-center">
              <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-lg">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Exceptional Experiences for Every Occasion
                  </h2>
                  <p className="text-white/90 mb-6">
                    Beyond just dining, we offer a range of services to elevate your culinary journey.
                  </p>
                  <Button className="bg-white text-primary hover:bg-white/90">Get Started</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30" ref={servicesRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isServicesInView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="rounded-full p-3 bg-background shadow-sm">{service.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-muted-foreground mt-2">{service.description}</p>
                      </div>
                    </div>
                    <Link href={service.link}>
                      <Button className="w-full group mt-4">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 px-4 md:px-6" ref={detailsRef}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" animate={isDetailsInView ? "visible" : "hidden"} variants={fadeIn}>
              <div className="inline-block bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Elevating Your <span className="text-primary">Experience</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                At Café Luxe, we believe that every dining experience should be memorable. Whether you're joining us for
                an intimate dinner, hosting a grand event, or ordering delivery, we approach each service with the same
                dedication to excellence.
              </p>

              <ul className="space-y-3 mb-8">
                {serviceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-muted/50 p-5 rounded-lg border border-border/50 mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Availability & Booking</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Our services are available 7 days a week. We recommend booking in advance, especially for private
                  events and catering services.
                </p>
                <Button variant="outline" className="w-full">
                  Check Availability
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={isDetailsInView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Service detail 1"
                    width={400}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Service detail 2"
                    width={400}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Service detail 3"
                    width={400}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=400"
                    alt="Service detail 4"
                    width={400}
                    height={400}
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-6 bg-muted/30" ref={testimonialsRef}>
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <div className="inline-block bg-yellow-500/10 text-yellow-500 text-sm font-medium py-1 px-3 rounded-full mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold mb-4">
              What Our <span className="text-yellow-500">Clients Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients about their experiences with our
              services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isTestimonialsInView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:border-yellow-500/30 transition-colors">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="inline-block mr-1">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.text}"</p>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            animate={isTestimonialsInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/contact">
              <Button size="lg" className="group">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

