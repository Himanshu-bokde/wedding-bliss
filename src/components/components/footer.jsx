import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    (<footer className="py-6 border-t border-border  dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Wedding Bliss. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>)
  );
}

