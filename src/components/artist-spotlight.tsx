"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

interface ArtistSpotlightProps {
  name: string
  bio: string
  avatarSrc: string
  artworks: string[]
}

export function ArtistSpotlight({ name, bio, avatarSrc, artworks }: ArtistSpotlightProps) {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4">
          <div className="relative h-20 w-20 rounded-full overflow-hidden border-2 border-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.4)]">
            <Image src={avatarSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white pink-text-glow">{name}</h3>
            <p className="text-pink-400">Featured Artist</p>
          </div>
        </div>

        <p className="text-gray-300">{bio}</p>

        <div className="flex gap-4">
          <Link href={`/artists/${name.toLowerCase().replace(/\s+/g, "-")}`}>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white shadow-[0_0_10px_rgba(236,72,153,0.3)] hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
              View Profile
            </Button>
          </Link>
          <Link href={`/gallery?artist=${name.toLowerCase().replace(/\s+/g, "-")}`}>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-500 hover:bg-pink-950/70 shadow-[0_0_10px_rgba(236,72,153,0.2)] hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
            >
              View All Works
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-4"
      >
        {artworks.map((artwork, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-lg ${
              index === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"
            }`}
          >
            <Image
              src={artwork || "/placeholder.svg"}
              alt={`Artwork by ${name}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
