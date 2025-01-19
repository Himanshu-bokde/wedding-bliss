import Image from "next/image"
import { Button } from "../components/ui/button"

export default function About() {
  return (
    <section id="about" className="py-16 bg-muted/50 dark:bg-muted/80">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video">
            <Image
              src="/placeholder.svg"
              alt="About us"
              fill
              className="object-cover rounded-lg" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Us</h2>
            <p className="text-muted-foreground mb-6 dark:text-muted-foreground">
              We are passionate about creating beautiful and functional websites
              that help businesses grow. Our team of experts combines creativity
              with technical expertise to deliver outstanding results.
            </p>
            <p className="text-muted-foreground mb-8 dark:text-muted-foreground">
              With years of experience in web development, we understand what it
              takes to build successful online presence.
            </p>
            <Button size="lg" className="bg-primary dark:bg-primary-foreground text-primary-foreground dark:text-primary dark:hover:bg-primary-foreground">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
