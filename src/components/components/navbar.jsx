import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold">
            Wedding Bliss
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" href="#home">
              Home
            </Button>
            <Button variant="ghost" href="#gallery">
              Gallery
            </Button>
            <Button variant="ghost" href="#contact">
              Contact
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Button variant="ghost" onClick={() => setIsOpen(false)} href="#home">
                Home
              </Button>
              <Button variant="ghost" onClick={() => setIsOpen(false)} href="#gallery">
                Gallery
              </Button>
              <Button variant="ghost" onClick={() => setIsOpen(false)} href="#contact">
                Contact
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setIsOpen(false);
                }}
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
