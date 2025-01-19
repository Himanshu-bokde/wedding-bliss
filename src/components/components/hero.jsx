"use client"

import { useState, useEffect } from "react"
import { Button } from "../components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const images = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0048.jpg-d3Fq55kvkywgXvT2Wu48Zgcfmm3CjA.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0040.jpg-g7RJ2H5YjcxIU597kPlPQHlwkPsTvV.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0046.jpg-qHLnPHedFQ0eX7N79tViQIP3IvFkAr.jpeg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0052.jpg-M0gkRXUASHPte851FlHrYRdDiY7spU.jpeg"
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer);
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-100 dark:bg-gray-900">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${images[currentImage]}')`,
            backgroundBlendMode: 'overlay',
          }}>
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
      </AnimatePresence>
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6">
          Elegant Wedding Decorations
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Transform your special day into a magical experience
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}>
          <Button size="lg" className="text-lg">
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
