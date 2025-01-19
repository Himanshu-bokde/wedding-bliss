import Navbar from "../components/components/navbar"
import Hero from '../components/components/hero'
import Gallery from '../components/components/gallery'
import Decorations from '../components/components/decorations'
import Contact from '../components/components/contact'
import Footer from '../components/components/footer'
import { ThemeProvider } from '../components/components/theme-provider'

export default function Page() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="wedding-theme">
      <main className="min-h-screen bg-background text-foreground">

        <Navbar />
        <Hero />
        <Gallery />
        <Decorations />
        <Contact />
        <Footer />
      
      </main>
    </ThemeProvider>
  );
}

