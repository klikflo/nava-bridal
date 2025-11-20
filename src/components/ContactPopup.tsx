import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "./ui/button";

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("contactPopupShown");
    
    if (!popupShown) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("contactPopupShown", "true");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/972546922630", "_blank");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-[100] animate-fade-in"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 animate-scale-in">
        <div className="relative bg-background shadow-[0_16px_48px_rgba(0,0,0,0.3)] max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto border border-border/20">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 left-4 z-10 bg-background/90 hover:bg-background p-2 transition-all duration-500 hover:scale-105 border border-border/30"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-foreground/60" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-64 md:h-auto">
              <img
                src="/Uploads/קולקציה Falling in love /FLORA/IMG_3864 Large.png"
                alt="NAVA BRIDAL"
                className="w-full h-full object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/40 md:via-black/10 md:to-background/30"></div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center rtl">
              <div className="text-center md:text-right space-y-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent md:mx-0 mx-auto mb-6"></div>
                <h2 className="text-xl sm:text-2xl font-light font-display text-foreground leading-tight tracking-wide">
                  מוכנה למצוא את השמלה המושלמת?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  צרי איתנו קשר עכשיו לפגישת ייעוץ אישית וגלי את הקולקציות המדהימות שלנו
                </p>

                <div className="pt-6 space-y-3">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="w-full px-6 py-5 text-sm font-light shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-500 hover:scale-[1.02] group"
                  >
                    <svg className="w-4 h-4 ml-2 group-hover:scale-105 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    שלחי הודעה ב-WhatsApp
                  </Button>

                  <button
                    onClick={handleClose}
                    className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors duration-500 font-light"
                  >
                    אולי מאוחר יותר
                  </button>
                </div>

                <div className="pt-6 border-t border-border/30">
                  <p className="text-xs text-muted-foreground text-center md:text-right leading-relaxed font-light">
                    <span dir="ltr">054-692-2630</span>
                    <span className="mx-2">|</span>
                    navabridal.studio@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPopup;

