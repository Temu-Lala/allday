"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Utensils, Coffee, Cake, Beer, Pizza, Salad } from "lucide-react"

export default function MenuPage() {
  const [mainCategory, setMainCategory] = useState("food")
  const [subCategory, setSubCategory] = useState("main-courses")

  const mainCategories = [
    { id: "food", label: "Food Menu", icon: <Utensils className="h-4 w-4 mr-2" /> },
    { id: "drinks", label: "Drinks Menu", icon: <Coffee className="h-4 w-4 mr-2" /> },
  ]

  const subCategories = {
    food: [
      { id: "main-courses", label: "Main Courses", icon: <Utensils className="h-4 w-4" /> },
      { id: "starters", label: "Starters & Salads", icon: <Salad className="h-4 w-4" /> },
      { id: "fast-food", label: "Fast Food", icon: <Pizza className="h-4 w-4" /> },
      { id: "desserts", label: "Desserts", icon: <Cake className="h-4 w-4" /> },
    ],
    drinks: [
      { id: "hot-drinks", label: "Hot Drinks", icon: <Coffee className="h-4 w-4" /> },
      { id: "soft-drinks", label: "Soft Drinks", icon: <Beer className="h-4 w-4" /> },
      { id: "cocktails", label: "Cocktails", icon: <Beer className="h-4 w-4" /> },
    ],
  }

  // Define menu items for each category and subcategory
  const menuItems = {
    food: {
      "main-courses": [
        {
          id: 1,
          name: "Beyaynet",
          description: "Wild-caught salmon with herb crust, served with seasonal vegetables and lemon butter sauce",
          price: "",
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Beyaynetu.JPG/1200px-Beyaynetu.JPG",
        },
        {
          id: 2,
          name: "spagety / rice with meat ",
          description:
            "Slow-cooked beef short rib with red wine reduction, creamy polenta, and roasted root vegetables",
          price: "",
          image: "https://www.nestle-family.com/sites/site.prod1.nestle-family.com/files/2020-01/16870---Rice-Noodles-with-Lamb-Meat-Balls.jpg",
        },
        {
          id: 3,
          name: "Wild Mushroom Risotto",
          description: "Creamy arborio rice with assorted wild mushrooms, truffle oil, and aged parmesan",
          price: "$24",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 4,
          name: "Duck Confit",
          description: "Crispy duck leg confit, cherry gastrique, parsnip purée, sautéed greens",
          price: "$34",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 5,
          name: "Vegetable Wellington",
          description: "Roasted vegetables, mushroom duxelles, flaky pastry, red pepper coulis",
          price: "$26",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 6,
          name: "Grilled Prime Ribeye",
          description: "14oz grass-fed ribeye, compound butter, truffle fries, grilled asparagus",
          price: "$42",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      starters: [
        {
          id: 1,
          name: "Burrata Caprese",
          description: "Creamy burrata, heirloom tomatoes, basil, aged balsamic, olive oil",
          price: "$16",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          name: "Tuna Tartare",
          description: "Sushi-grade tuna, avocado, cucumber, citrus ponzu, wonton crisps",
          price: "$18",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          name: "Mediterranean Mezze",
          description: "Hummus, baba ganoush, tabbouleh, marinated olives, warm pita",
          price: "$15",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 4,
          name: "Caesar Salad",
          description: "Romaine hearts, house-made dressing, garlic croutons, shaved parmesan",
          price: "$14",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      "fast-food": [
        {
          id: 1,
          name: "Gourmet Burger",
          description: "Wagyu beef, aged cheddar, caramelized onions, truffle aioli, brioche bun",
          price: "$22",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          name: "Artisanal Pizza",
          description: "Hand-stretched dough, San Marzano tomatoes, fresh mozzarella, basil",
          price: "$18",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          name: "Lobster Roll",
          description: "Maine lobster, herb mayo, celery, butter-toasted brioche roll",
          price: "$24",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      desserts: [
        {
          id: 1,
          name: "Vanilla Bean Crème Brûlée",
          description: "Classic custard with Madagascar vanilla, caramelized sugar crust, fresh berries",
          price: "$12",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          name: "Dark Chocolate Soufflé",
          description: "Warm chocolate soufflé with molten center, served with house-made vanilla ice cream",
          price: "$14",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          name: "Seasonal Fruit Tart",
          description: "Butter pastry, vanilla custard, glazed seasonal fruits, mint",
          price: "$10",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 4,
          name: "Tiramisu",
          description: "Layers of coffee-soaked ladyfingers, mascarpone cream, cocoa, coffee beans",
          price: "$11",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
    drinks: {
      "hot-drinks": [
        {
          id: 1,
          name: "Single Origin Espresso",
          description: "Rotating selection of single-origin beans, expertly extracted",
          price: "$4",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          name: "Pour-Over Coffee",
          description: "Hand-poured coffee showcasing seasonal beans from artisanal roasters",
          price: "$5",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          name: "Matcha Latte",
          description: "Ceremonial grade matcha, steamed milk, light sweetener",
          price: "$6",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 4,
          name: "Specialty Hot Chocolate",
          description: "Single-origin dark chocolate, steamed milk, house-made marshmallow",
          price: "$7",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      "soft-drinks": [
        {
          id: 1,
          name: "House-Made Lemonade",
          description: "Fresh-squeezed lemons, organic cane sugar, sparkling water",
          price: "$5",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          name: "Kombucha on Tap",
          description: "Rotating small-batch kombucha, locally fermented",
          price: "$6",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          name: "Fresh Pressed Juice",
          description: "Seasonal fruits and vegetables, cold-pressed daily",
          price: "$8",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
      cocktails: [
        {
          id: 1,
          name: "Signature Espresso Martini",
          description: "Premium vodka, coffee liqueur, fresh espresso, vanilla",
          price: "$14",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 2,
          name: "Botanical Gin & Tonic",
          description: "Craft gin, house-made tonic, seasonal botanicals",
          price: "$12",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 3,
          name: "Smoky Old Fashioned",
          description: "Bourbon, maple syrup, aromatic bitters, applewood smoke",
          price: "$15",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          id: 4,
          name: "Berry Hibiscus Refresher",
          description: "Mixed berries, hibiscus tea, lime, mint, sparkling water",
          price: "$8",
          image: "/placeholder.svg?height=200&width=300",
        },
      ],
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // Handle category changes
  const handleMainCategoryChange = (value) => {
    setMainCategory(value)
    setSubCategory(subCategories[value][0].id) // Set to first sub-category when main category changes
  }

  return (
    <main className="min-h-screen pt-24 pb-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our thoughtfully crafted menu featuring seasonal ingredients and culinary inspirations from around
            the world.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* 3D Menu Card */}
          <motion.div
            initial={{ rotateY: 25, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="perspective mb-12"
          >
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-2xl">
              <Image src="https://culinaryclassroom.com/wp-content/uploads/2023/10/Unlocking-Culinary-Excellence-Chefs-Secrets-to-Elevate-Your-Cooking.jpg" alt="Menu background" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-2">Café Luxe</h2>
                  <p className="text-lg md:text-xl">Culinary Excellence</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Menu Navigation */}
          <div className="mb-8">
            <Tabs defaultValue="food" value={mainCategory} onValueChange={handleMainCategoryChange} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                {mainCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex items-center text-base data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.icon}
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="flex overflow-x-auto py-2 mb-6">
                {subCategories[mainCategory].map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSubCategory(category.id)}
                    className={`flex items-center whitespace-nowrap px-4 py-2 mr-3 rounded-full text-sm font-medium transition-colors
                      ${
                        subCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted/50 hover:bg-muted text-foreground/70"
                      }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Menu Items Grid */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${mainCategory}-${subCategory}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {menuItems[mainCategory][subCategory].map((item) => (
                    <motion.div key={item.id} variants={fadeIn} whileHover={{ scale: 1.02 }} className="group">
                      <Card className="overflow-hidden h-full border-border/50 hover:border-primary/30 transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="flex flex-col md:flex-row h-full">
                            <div className="relative w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div className="p-5 w-full md:w-3/5 flex flex-col justify-between">
                              <div>
                                <div className="flex justify-between items-start mb-2">
                                  <h3 className="font-semibold text-lg">{item.name}</h3>
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
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}

