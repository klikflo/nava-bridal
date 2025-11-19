import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted py-16 border-t border-border/50" dir="rtl">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description - First (Right in RTL) */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img
              src="/Uploads/nava logo.png"
              alt="NAVA BRIDAL"
              className="h-20 w-auto object-contain mb-2 hover:opacity-80 transition-opacity"
            />
            <h3 className="text-xl font-bold font-display text-center md:text-right">NAVA BRIDAL</h3>
            <p className="text-sm text-muted-foreground font-serif tracking-wide text-center md:text-right">House of Couture</p>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed text-center md:text-right">
              סטודיו נאוה - בית אופנה לשמלות כלה יוקרתיות המשלב אומנות, תשוקה וחדשנות
            </p>
          </div>

          {/* Contact Information - Second (Center) */}
          <div className="flex flex-col items-center md:items-end rtl">
            <h4 className="font-bold text-lg mb-6 text-center md:text-right w-full">צרו קשר</h4>
            <div className="space-y-4 text-sm w-full">
              <div className="flex items-center justify-center md:justify-end gap-3 group">
                <span className="group-hover:text-primary transition-colors">לוחז 17, ראשון לציון</span>
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3 group">
                <span className="group-hover:text-primary transition-colors">09:00-18:00 | ימים א' - ה'</span>
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3 group">
                <a
                  href="mailto:navabridal.studio@gmail.com"
                  className="hover:text-primary transition-colors"
                  dir="ltr"
                >
                  navabridal.studio@gmail.com
                </a>
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
              <div className="flex items-center justify-center md:justify-end gap-3 group">
                <a
                  href="tel:054-692-2630"
                  className="hover:text-primary transition-colors"
                  dir="ltr"
                >
                  054-692-2630
                </a>
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              </div>
            </div>
          </div>

          {/* Social Media - Third (Left in RTL) */}
          <div className="space-y-5">
            <h4 className="font-bold text-lg mb-6 text-center md:text-right">עקבו אחרינו ברשתות</h4>
            <div className="flex justify-center md:justify-start gap-6">
              <a
                href="https://www.tiktok.com/@nava.bridal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-200"
                aria-label="TikTok"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/navabridalstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-200"
                aria-label="Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="http://instagram.com/nava.bridal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary hover:scale-110 transition-all duration-200"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-muted-foreground">
              <p dir="ltr">
                © {new Date().getFullYear()} NAVA BRIDAL. All rights reserved.
              </p>
              <span className="hidden sm:inline">•</span>
              <Link
                to="/privacy-policy"
                className="hover:text-primary transition-colors underline"
              >
                מדיניות פרטיות
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
