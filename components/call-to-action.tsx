"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 px-4 md:px-6 bg-primary/10 relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-primary/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-primary/50"></div>
        <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/50"></div>
        <div className="absolute right-0 top-0 bottom-0 w-px bg-primary/50"></div>

        {/* Diagonal lines */}
        <div
          className="absolute top-0 left-0 right-0 bottom-0 
          [background:repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(var(--primary)/0.1)_20px,rgba(var(--primary)/0.1)_40px)]"
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <Calendar className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Reserve Your Table Today</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether it's a special celebration or an intimate dining experience, we're ready to make your visit
              extraordinary. Book your table now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Make a Reservation
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

