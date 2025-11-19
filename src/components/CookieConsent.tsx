import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    
    if (!cookieConsent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6 animate-fade-in">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-background/95 backdrop-blur-lg border-2 border-border rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Content */}
            <div className="flex-1 rtl">
              <div className="mb-3">
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  אנחנו משתמשים בעוגיות
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  אתר זה משתמש בעוגיות (Cookies) כדי לשפר את חוויית הגלישה שלך, לנתח תנועה באתר ולספק תוכן מותאם אישית.
                  על ידי המשך הגלישה באתר, את מסכימה לשימוש בעוגיות בהתאם ל
                  <Link to="/privacy-policy" className="text-primary hover:underline mx-1 font-medium">
                    מדיניות הפרטיות
                  </Link>
                  שלנו.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Button
                onClick={handleAccept}
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto"
              >
                אני מסכימה
              </Button>
              <Button
                onClick={handleDecline}
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-medium w-full sm:w-auto"
              >
                לא תודה
              </Button>
            </div>

            {/* Close button for mobile */}
            <button
              onClick={handleDecline}
              className="absolute top-4 left-4 md:hidden text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

