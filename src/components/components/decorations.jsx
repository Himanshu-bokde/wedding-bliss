import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Flower, Sparkles, Heart, Music } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { motion } from "framer-motion";

const decorations = [
  {
    title: "Floral Arrangements",
    description: "Stunning floral designs to complement your wedding theme",
    icon: Flower,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0047.jpg-1vVGduxAlyovmAvor9p2NoR5PuEJIM.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0032%20-%20Copy.jpg-BfBHDs0VKwjt15JNv6hwSgOBXJo51F.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0031%20-%20Copy.jpg-f2RtTuBGmOIfppl4AyQLVrBbd2fqAm.jpeg",
    ],
  },
  {
    title: "Lighting Effects",
    description: "Create the perfect ambiance with our lighting solutions",
    icon: Sparkles,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0040.jpg-g7RJ2H5YjcxIU597kPlPQHlwkPsTvV.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0052.jpg-M0gkRXUASHPte851FlHrYRdDiY7spU.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0051.jpg-qyswOfHfMXEu0UvRBkKOenYYq4Fz3W.jpeg",
    ],
  },
  {
    title: "Romantic Setups",
    description: "Beautifully crafted romantic settings for your special moments",
    icon: Heart,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0048.jpg-d3Fq55kvkywgXvT2Wu48Zgcfmm3CjA.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0046.jpg-qHLnPHedFQ0eX7N79tViQIP3IvFkAr.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0031%20-%20Copy.jpg-f2RtTuBGmOIfppl4AyQLVrBbd2fqAm.jpeg",
    ],
  },
  {
    title: "Entertainment Areas",
    description: "Designed spaces for music, dancing, and celebration",
    icon: Music,
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0052.jpg-M0gkRXUASHPte851FlHrYRdDiY7spU.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0051.jpg-qyswOfHfMXEu0UvRBkKOenYYq4Fz3W.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0040.jpg-g7RJ2H5YjcxIU597kPlPQHlwkPsTvV.jpeg",
    ],
  },
];

function DecorationModal({ decoration }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">View Gallery</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{decoration.title}</DialogTitle>
          <DialogDescription>{decoration.description}</DialogDescription>
        </DialogHeader>
        <div className="relative aspect-video mt-4">
          <img
            src={decoration.images[currentImage] || "/placeholder.svg"}
            alt={decoration.title}
            className="object-cover rounded-md w-full h-full"
          />
        </div>
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={() =>
              setCurrentImage((prev) => (prev - 1 + decoration.images.length) % decoration.images.length)
            }
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              setCurrentImage((prev) => (prev + 1) % decoration.images.length)
            }
          >
            Next
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Decorations() {
  return (
    <section id="decorations" className="py-16 bg-muted/20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
          Our Decoration Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {decorations.map((decoration, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="dark:bg-gray-800">
                <CardHeader>
                  <decoration.icon className="w-10 h-10 mb-4 text-primary dark:text-primary-dark" />
                  <CardTitle className="text-black dark:text-white">{decoration.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-muted-foreground-dark mb-4">{decoration.description}</p>
                  <DecorationModal decoration={decoration} />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
