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
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-fade-in"
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className="fixed inset-0 z-[101] flex items-center justify-center p-3 sm:p-4 animate-scale-in">
        <div className="relative bg-background rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
            aria-label="Close"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
          </button>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Side */}
            <div className="relative h-48 sm:h-64 md:h-auto">
              <img
                src="/Uploads/קולקציה Falling in love /FLORA/IMG_3864 Large.png"
                alt="NAVA BRIDAL"
                className="w-full h-full object-cover object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/20"></div>
            </div>

            {/* Content Side */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center rtl">
              <div className="text-center md:text-right space-y-3 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-primary leading-tight">
                  מוכנה למצוא את השמלה המושלמת?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  צרי איתנו קשר עכשיו לפגישת ייעוץ אישית וגלי את הקולקציות המדהימות שלנו
                </p>

                <div className="pt-3 sm:pt-4 space-y-3">
                  <Button
                    onClick={handleWhatsAppClick}
                    size="lg"
                    className="w-full rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 ml-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    שלחי הודעה ב-WhatsApp
                  </Button>

                  <button
                    onClick={handleClose}
                    className="w-full text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors underline"
                  >
                    אולי מאוחר יותר
                  </button>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-border/50">
                  <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-right leading-relaxed">
                    <span dir="ltr">054-692-2630</span>
                    <br className="sm:hidden" />
                    <span className="hidden sm:inline"> | </span>
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

