"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ArtworkCardProps {
  title: string
  artist: string
  imageSrc: string
  likes: number
  href: string
}

export function ArtworkCard({ title, artist, imageSrc, likes, href }: ArtworkCardProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(likes)
  const [isHovered, setIsHovered] = useState(false)

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (!liked) {
      setLikeCount((prev) => prev + 1)
    } else {
      setLikeCount((prev) => prev - 1)
    }

    setLiked(!liked)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={href}>
        <Card
          className="overflow-hidden bg-black border-pink-500/20 hover:border-pink-500/70 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-square overflow-hidden">
            <motion.div
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full"
            >
              <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </motion.div>
            <button
              onClick={handleLike}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-pink-950/70 transition-colors"
            >
              <Heart className={cn("h-5 w-5 transition-all", liked ? "fill-pink-500 text-pink-500" : "text-white")} />
            </button>
          </div>
          <CardContent className="p-4">
            <div className="space-y-1">
              <h3 className="font-medium text-lg text-white">{title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-400">by {artist}</p>
                <div className="flex items-center gap-1 text-sm text-gray-400">
                  <Heart className="h-3.5 w-3.5" />
                  <span>{likeCount}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}
