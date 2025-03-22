"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function MenuPreview() {
  const [activeCategory, setActiveCategory] = useState("main")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const categories = [
    { id: "main", label: "Main Courses" },
    { id: "drinks", label: "Beverages" },
    { id: "desserts", label: "Desserts" },
  ]

  const menuItems = {
    main: [
      {
        id: 1,
        name: "Beyaynet",
        description: "Wild-caught salmon with herb crust, served with seasonal vegetables and lemon butter sauce",
        price: "",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Beyaynetu.JPG/1200px-Beyaynetu.JPG",
      },
      {
        id: 2,
        name: "Pasta/ruz besga",
        description: "Slow-cooked beef short rib with red wine reduction, creamy polenta, and roasted root vegetables",
        price: "100",
        image: "https://www.nestle-family.com/sites/site.prod1.nestle-family.com/files/2020-01/16870---Rice-Noodles-with-Lamb-Meat-Balls.jpg",
      },
      {
        id: 3,
        name: "Burger",
        description: "Creamy arborio rice with assorted wild mushrooms, truffle oil, and aged parmesan",
        price: "567",
        image: "https://www.honestburgers.co.uk/wp-content/uploads/2021/09/Spitalfields-2025-Web-and-Social-RGB.jpg",
      },
      {
        id: 4,
        name: "pizza ",
        description: "Selection of seasonal vegetables, marinated and grilled, with house-made hummus and pita",
        price: "$18",
        image: "https://assets.iprofesional.com/assets/jpg/2019/09/483794.jpg?5.7.0",
      },
    ],
    drinks: [
      {
        id: 1,
        name: "Juce",
        description: "Premium vodka, coffee liqueur, fresh espresso, vanilla",
        price: "212",
        image: "https://cdn.create.vista.com/api/media/small/63680673/stock-photo-glasses-with-fresh-organic-vegetable-and-fruit-juices-on-white",
      },
      {
        id: 2,
        name: "Botteld Water",
        description: "Mixed berries, hibiscus tea, lime, mint, sparkling water",
        price: "80",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSF4GQH7iVHOEt7SPnEzG1yIehBBDVyqXSpI9eoLwqCcdGPT_YM2V34o8T4OhO0IraKPQ&usqp=CAU",
      },
      {
        id: 3,
        name: "Soft dr",
        description: "Single-origin coffees prepared using your method of choice",
        price: "50-80",
        image: "https://i.ebayimg.com/images/g/tSQAAOSwGBNiuxEO/s-l1200.jpg",
      },
      {
        id: 4,
        name: "Coffee ",
        description: "Curated selection of regional and international wines",
        price: "$10/glass",
        image: "https://4.imimg.com/data4/LK/CE/MY-29564203/hot-beverages.jpg",
      },
    ],
    desserts: [
      {
        id: 1,
        name: "Vanilla Bean Crème Brûlée",
        description: "Classic custard with Madagascar vanilla, caramelized sugar crust, fresh berries",
        price: "$12",
        image: "/placeholder.svg?height=150&width=200",
      },
      {
        id: 2,
        name: "Dark Chocolate Soufflé",
        description: "Warm chocolate soufflé with molten center, served with house-made vanilla ice cream",
        price: "$14",
        image: "/placeholder.svg?height=150&width=200",
      },
      {
        id: 3,
        name: "Seasonal Fruit Tart",
        description: "Butter pastry, vanilla custard, glazed seasonal fruits, mint",
        price: "$10",
        image: "/placeholder.svg?height=150&width=200",
      },
      {
        id: 4,
        name: "Tiramisu",
        description: "Layers of coffee-soaked ladyfingers, mascarpone cream, cocoa, coffee beans",
        price: "$11",
        image: "/placeholder.svg?height=150&width=200",
      },
    ],
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  }

  return (
    <section className="py-20 px-4 md:px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-yellow-500/10 text-yellow-500 text-sm font-medium py-1 px-3 rounded-full mb-4">
            Culinary Delights
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Explore Our <span className="text-yellow-500">Menu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A thoughtfully curated selection of dishes featuring the finest seasonal ingredients
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Tabs defaultValue="main" value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-3">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {menuItems[category.id].map((item) => (
                      <motion.div
                        key={item.id}
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: item.id * 0.1 }}
                      >
                        <Card className="overflow-hidden h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                          <CardContent className="p-0">
                            <div className="flex flex-col md:flex-row h-full">
                              <div className="relative w-full md:w-1/3 h-32 md:h-auto">
                                <Image
                                  src={item.image || "/placeholder.svg"}
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="p-4 md:p-5 w-full md:w-2/3 flex flex-col justify-between">
                                <div>
                                  <div className="flex justify-between items-start mb-2">
                                    <h3 className="font-semibold text-foreground">{item.name}</h3>
                                    <span className="font-medium text-primary">{item.price}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/menu">
            <Button size="lg" className="group">
              View Complete Menu
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

