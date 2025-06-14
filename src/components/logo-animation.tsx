"use client"

import { motion } from "framer-motion"
import { Palette } from "lucide-react"

export function LogoAnimation() {
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <div className="relative p-3 rounded-full bg-gradient-to-br from-pink-900/40 to-pink-800/30 border border-pink-500/30">
        <Palette className="h-8 w-8 text-pink-400" />
      </div>
    </motion.div>
  )
}
