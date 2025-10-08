import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Instagram, Youtube, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiTiktok, SiSpotify } from "react-icons/si";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Team", href: "#team" },
    { name: "Articles", href: "#articles" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/the.buzz_sandton" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <SiTiktok className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              <SiSpotify className="w-5 h-5" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#contact">Book Studio</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" className="w-full" asChild>
                <a href="#contact">Book Studio</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
