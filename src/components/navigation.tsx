"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-pink-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative p-2 rounded-lg bg-gradient-to-br from-pink-900/30 to-pink-800/20 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300"
            >
              <Palette className="h-6 w-6 text-pink-400 group-hover:text-pink-300 transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent group-hover:from-pink-300 group-hover:to-pink-200 transition-all duration-300">
              ArtHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-pink-300 transition-colors duration-300 group"
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className="absolute inset-0 -z-10 rounded-md bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-pink-300 hover:bg-pink-500/10 transition-all duration-300"
            >
              Log In
            </Button>
            <Button className="bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)] hover:shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all duration-300">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-pink-300 hover:bg-pink-500/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-pink-500/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-pink-300 hover:bg-pink-500/10 rounded-md transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 px-4 pt-4 border-t border-pink-500/20">
              <Button variant="ghost" className="justify-start text-gray-300 hover:text-pink-300 hover:bg-pink-500/10">
                Log In
              </Button>
              <Button className="justify-start bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-700 hover:to-pink-600 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                Sign Up
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  )
}
