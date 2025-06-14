"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

interface NavItemProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavItem({ href, children, className = "" }: NavItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href} className={`relative group ${className}`}>
      <motion.span
        className={`relative z-10 transition-colors duration-300 ${
          isActive ? "text-pink-400" : "text-gray-300 group-hover:text-pink-300"
        }`}
      >
        {children}
      </motion.span>

      {/* Hover background */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-md bg-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      />

      {/* Active/Hover underline */}
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-400 transition-all duration-300 ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 -z-20 rounded-md bg-pink-500/5 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"
        whileHover={{ scale: 1.1 }}
      />
    </Link>
  )
}
