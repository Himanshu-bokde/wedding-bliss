import { Card, CardContent } from "../components/ui/card";

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0047.jpg-1vVGduxAlyovmAvor9p2NoR5PuEJIM.jpeg",
    alt: "Green backdrop with illuminated decorations",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0048.jpg-d3Fq55kvkywgXvT2Wu48Zgcfmm3CjA.jpeg",
    alt: "Pink-lit wedding stage",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0032%20-%20Copy.jpg-BfBHDs0VKwjt15JNv6hwSgOBXJo51F.jpeg",
    alt: "Traditional wedding decoration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0040.jpg-g7RJ2H5YjcxIU597kPlPQHlwkPsTvV.jpeg",
    alt: "Blue-lit entrance",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0031%20-%20Copy.jpg-f2RtTuBGmOIfppl4AyQLVrBbd2fqAm.jpeg",
    alt: "Entrance decoration",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0046.jpg-qHLnPHedFQ0eX7N79tViQIP3IvFkAr.jpeg",
    alt: "Blue-lit stage setup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250119-WA0052.jpg-M0gkRXUASHPte851FlHrYRdDiY7spU.jpeg",
    alt: "Venue with blue and green lighting",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 px-4 bg-background  dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Decorations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  {/* Replacing next/image with a standard <img> */}
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
