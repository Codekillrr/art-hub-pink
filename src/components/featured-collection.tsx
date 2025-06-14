"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const artworks = [
  {
    id: 1,
    title: "Neon City Dreams",
    artist: "CyberVisions",
    description:
      "A futuristic cityscape bathed in neon lights and digital rain",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    title: "Digital Consciousness",
    artist: "PixelMind",
    description:
      "Exploring the boundaries between human and artificial intelligence",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    title: "Synthetic Emotions",
    artist: "NeuralArtist",
    description: "The paradox of programmed feelings in a world of binary code",
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    title: "Electric Dreams",
    artist: "VirtualVisions",
    description: "When androids dream of electric sheep in the neon rain",
    image: "/placeholder.svg?height=600&width=800",
  },
];

export function FeaturedCollection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % artworks.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + artworks.length) % artworks.length
    );
  };

  const currentArtwork = artworks[currentIndex];

  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-black/50 border-pink-500/50 hover:bg-pink-950/70 hover:border-pink-500/80 shadow-[0_0_10px_rgba(236,72,153,0.2)]"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </Button>
      </div>

      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-black/50 border-pink-500/50 hover:bg-pink-950/70 hover:border-pink-500/80 shadow-[0_0_10px_rgba(236,72,153,0.2)]"
          onClick={nextSlide}
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </Button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[16/9] md:aspect-[21/9]"
        >
          <Image
            src={currentArtwork.image || "/placeholder.svg"}
            alt={currentArtwork.title}
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-950/40 to-transparent mix-blend-overlay"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {currentArtwork.title}
              </h3>
              <p className="text-pink-400 mb-2">by {currentArtwork.artist}</p>
              <p className="text-gray-300 max-w-xl">
                {currentArtwork.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-2 mt-4">
        {artworks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-pink-500" : "w-2 bg-pink-500/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
