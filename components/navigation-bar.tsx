"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // New state to track if component has mounted
  const pathname = usePathname();
  const isMobile = useMobile();
  const { theme, setTheme } = useTheme();

  // Detect scrolling to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure the component has mounted before rendering theme-dependent elements
  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/menu", label: "Menu" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-3" // Scrolled state
          : "bg-transparent py-5" // Default state
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://alldaycafeandrestaurant.com/assets/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors relative group font-medium",
                  pathname === link.href && "text-primary font-semibold"
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                    pathname === link.href && "w-full"
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Right Section (Theme + Book Table) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2"
              aria-label="Toggle Theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )
              ) : null}
            </Button>
            {/* Book a Table Button */}
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Book A Table
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && (
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 transition-transform duration-300 md:hidden pt-20",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8 pb-20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors text-xl font-medium",
                  pathname === link.href && "text-primary font-semibold"
                )}
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {link.label}
              </Link>
            ))}

            {/* Book a Table Mobile Button */}
            <Button
              variant="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book A Table
            </Button>

            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2"
              aria-label="Toggle Theme"
            >
              {mounted ? (
                theme === "dark" ? (
                  <Sun className="w-6 h-6" />
                ) : (
                  <Moon className="w-6 h-6" />
                )
              ) : null}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}