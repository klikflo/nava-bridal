import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "יומן ארגון חתונה", path: "/wedding-planner" },
    { name: "פגישת ייעוץ בהזמנה", path: "/consultation" },
    { name: "סיפורי כלות", path: "/our-brides" },
    { name: "מי אנחנו", path: "/about" },
    { name: "יצירת קשר", path: "/contact" },
  ];

  const collections = [
    {
      name: "Falling In Love",
      nameHe: "Falling In Love",
      path: "/collections/falling-in-love",
      image: "/Uploads/קולקציה Falling in love /FLORA/IMG_3864 Large.png",
      description: "קולקציה רומנטית בהשראת עונת הסתיו"
    },
    {
      name: "Moonlight",
      nameHe: "Moonlight",
      path: "/collections/moonlight",
      image: "/Uploads/קולקציה Moonlight /1/391F4C16-8778-4BEC-B660-EA2BE55C4456 Large.png",
      description: "אלגנטיות קלאסית עם נגיעות מודרניות"
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-xl z-50 border-b border-border/30 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20 md:h-24 rtl">
          {/* Logo - Far Right */}
          <Link to="/" className="group flex-shrink-0">
            <img
              src="/Uploads/nava logo.png"
              alt="NAVA BRIDAL"
              className="h-14 md:h-20 w-auto object-contain group-hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Menu - Center */}
          <nav className="hidden lg:block order-2 flex-1">
            <ul className="flex items-center justify-center gap-7">
              {/* Collections Dropdown - Modern & Stylish */}
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-xs font-light tracking-wider uppercase text-foreground/70 hover:text-primary transition-colors duration-500 flex items-center gap-1 outline-none group">
                    קולקציות
                    <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="center"
                    className="rtl w-[500px] p-3 bg-background/95 backdrop-blur-xl border border-border/30 shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-sm"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {collections.map((collection) => (
                        <Link
                          key={collection.path}
                          to={collection.path}
                          className="group relative overflow-hidden border border-border/30 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]"
                        >
                          {/* Image */}
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={collection.image}
                              alt={collection.nameHe}
                              className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                              <h3 className="text-base font-light font-display mb-1 drop-shadow-lg tracking-wide">
                                {collection.nameHe}
                              </h3>
                              <p className="text-xs text-white/80 line-clamp-2 drop-shadow font-light">
                                {collection.description}
                              </p>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>

              {/* Other Menu Items */}
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`text-xs font-light tracking-wider uppercase relative group transition-colors duration-500 ${
                      isActive(item.path) ? 'text-primary' : 'text-foreground/70 hover:text-primary'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 right-0 h-px bg-primary transition-all duration-500 ${
                      isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons - Far Left */}
          <div className="hidden lg:flex items-center gap-5 order-3">
            <a
              href="https://www.tiktok.com/@nava.bridal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary hover:scale-105 transition-all duration-500"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a
              href="http://instagram.com/nava.bridal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary hover:scale-105 transition-all duration-500"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/navabridalstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary hover:scale-105 transition-all duration-500"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden flex-shrink-0">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10 h-10 w-10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">תפריט</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] max-w-[380px] rtl bg-white overflow-y-auto">
              <div className="flex flex-col gap-6 py-4">
                <div className="flex flex-col items-center justify-center pb-4 border-b border-border">
                  <img
                    src="/Uploads/nava logo.png"
                    alt="NAVA BRIDAL"
                    className="h-16 w-auto object-contain mb-2"
                  />
                  <p className="text-xs text-muted-foreground font-serif tracking-wide">House of Couture</p>
                </div>

                <nav>
                  <ul className="flex flex-col gap-3">
                    {/* Collections Section - Modern Mobile */}
                    <li>
                      <div className="text-center py-2 px-4 text-sm font-bold text-primary mb-1">
                        קולקציות
                      </div>
                      <div className="flex flex-col gap-2 px-2">
                        {collections.map((collection) => (
                          <Link
                            key={collection.path}
                            to={collection.path}
                            onClick={() => setIsOpen(false)}
                            className="group relative overflow-hidden rounded-lg border border-border/30 active:border-primary/50 transition-all duration-300"
                          >
                            {/* Image */}
                            <div className="relative h-28 overflow-hidden">
                              <img
                                src={collection.image}
                                alt={collection.nameHe}
                                className="w-full h-full object-cover object-[center_30%]"
                                loading="lazy"
                              />
                              {/* Gradient Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                              {/* Content */}
                              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                                <h3 className="text-sm font-bold font-display mb-0.5 drop-shadow-lg text-center">
                                  {collection.nameHe}
                                </h3>
                                <p className="text-xs text-white/90 line-clamp-1 drop-shadow text-center">
                                  {collection.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </li>

                    {/* Other Menu Items */}
                    {menuItems.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`block text-center py-2.5 px-4 text-sm font-medium rounded-lg transition-all active:scale-95 ${
                            isActive(item.path)
                              ? 'bg-primary/10 text-primary'
                              : 'active:bg-muted text-foreground/80'
                          }`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-border">
                  <a
                    href="https://www.tiktok.com/@nava.bridal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 active:text-primary active:scale-95 transition-all p-2"
                    aria-label="TikTok"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a
                    href="http://instagram.com/nava.bridal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 active:text-primary active:scale-95 transition-all p-2"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                      <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/navabridalstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 active:text-primary active:scale-95 transition-all p-2"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
