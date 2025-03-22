"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { BellRing, Clock, Sparkles } from "lucide-react"

export default function NoticeBoard() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])
  const y = useTransform(scrollYProgress, [0, 1], [-20, 20])

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
  })

  const specialItems = [
    {
      title: "Chef's Special Pasta",
      description: "Freshly made pasta with truffle cream sauce and wild mushrooms",
      time: "11:00 AM - 3:00 PM",
      icon: <Sparkles className="h-5 w-5 text-yellow-500" />,
    },
    {
      title: "Happy Hour",
      description: "25% off on all beverages and appetizers",
      time: "5:00 PM - 7:00 PM",
      icon: <Clock className="h-5 w-5 text-green-500" />,
    },
  ]

  // Rope effect styles
  const ropeStyle = {
    width: "2px",
    height: "80px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  }

  return (
    <div className="relative z-20 w-full max-w-lg mx-auto -mt-20" ref={ref}>
      {/* Left Rope */}
      <div className="absolute left-1/4 -top-[80px]" style={ropeStyle}></div>

      {/* Right Rope */}
      <div className="absolute right-1/4 -top-[80px]" style={ropeStyle}></div>

      <motion.div
        style={{
          rotateZ: rotate,
          y: y,
          transformOrigin: "top",
        }}
        className="px-4"
      >
        <Card className="border-2 border-primary/30 shadow-xl backdrop-blur-sm bg-background/80">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4 border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <BellRing className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">Today's Specials</h3>
              </div>
              <span className="text-sm text-muted-foreground">{currentDate}</span>
            </div>

            <div className="space-y-4">
              {specialItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <p className="text-xs font-medium text-primary mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

