import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import buzzLogo from "@/assets/buzz-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <img src={buzzLogo} alt="THE BUZZ Logo" className="h-16 mb-4 brightness-0 invert" />
            <p className="text-sm opacity-80 max-w-md">
              A creative hub by BEEZGLAM STUDIOS. Where every detail is crafted with you in mind.
              Specializing in photography, videography, and creative media production.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
              <li><a href="#team" className="opacity-80 hover:opacity-100 transition-opacity">Team</a></li>
              <li><a href="#articles" className="opacity-80 hover:opacity-100 transition-opacity">Articles</a></li>
              <li><a href="#events" className="opacity-80 hover:opacity-100 transition-opacity">Events</a></li>
              <li><a href="#gallery" className="opacity-80 hover:opacity-100 transition-opacity">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-80">
                <MapPin className="w-4 h-4" />
                Sandton, South Africa
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Phone className="w-4 h-4" />
                +27 (0) 123 456 789
              </li>
              <li className="flex items-center gap-2 opacity-80">
                <Mail className="w-4 h-4" />
                hello@thebuzz.studio
              </li>
              <li>
                <a
                  href="https://www.instagram.com/the.buzz_sandton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  @the.buzz_sandton
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} THE BUZZ by BEEZGLAM STUDIOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
