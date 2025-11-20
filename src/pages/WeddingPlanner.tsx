import { Link } from "react-router-dom";
import { ChevronLeft, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const WeddingPlanner = () => {
  const whatsIncluded = [
    "ניהול רשימת מוזמנים",
    "ניהול תקציב חתונה",
    "ניהול מקום האירוע + ניהול זמנים",
    "ניהול בקשות ושאלות (ספקים)",
    "השוואת הצעות מחיר (דף לכל ספק)",
    "דגשים לסגירת חוזה (אולם אירועים)",
    "עיצוב והדפסת הזמנות לחתונה",
    "ניהול מערך החתן (ניהול כללי)",
    "כל הדברים שאסור לך לשכוח רגע לפני החתונה",
    "נקודות ברזל ליום החתונה (הדף הכי חשוב)",
    "לוח שנה (טבלה) לניהול חתונה",
    "סיכום ליום שאחרי"
  ];

  const questionsToAsk = [
    "די ג'יי וסאונד",
    "צלם",
    "מאפרת",
    "עיצוב שיער",
    "עיצוב שמלת כלה",
    "שירותי בר ואלכוהול",
    "רבנות וכתובה",
    "עיצוב והדפסת הזמנות לחתונה"
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section with Prestige Image */}
        <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover"
              style={{
                backgroundImage: "url('/Uploads/brides/עדן Medium.png')",
                backgroundAttachment: "fixed",
                backgroundPosition: "center 20%",
                transform: "scale(1.05)"
              }}
            />
            {/* Prestige Overlay with Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up max-w-4xl mx-auto rtl py-12">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-[10px] text-white/60 mb-6 font-light tracking-[0.2em] uppercase">
                <Link to="/" className="hover:text-white transition-colors duration-500">דף הבית</Link>
                <ChevronLeft className="w-3 h-3 rotate-180" />
                <span className="text-white/80">יומן ארגון חתונה</span>
              </div>

              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
              <h1 className="text-3xl md:text-5xl font-extralight font-display mb-6 text-white tracking-[0.05em]">
                יומן ארגון חתונה
              </h1>

              <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto font-light">
                המדריך המושלם לארגון חתונת החלומות שלך
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto rtl">
            <div className="text-center mb-10">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
              <h2 className="text-xl md:text-2xl font-light font-display mb-4 tracking-wide">מאורסת? מזל טוב!</h2>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-muted-foreground text-right mb-6 font-light">
              את לא יודעת מאיפה להתחיל? בדיוק בגלל זה הכנתי עבורך מדריך מפורט שייעזור לך לארגן את חתונת החלומות שלך. היומן שחיסכון לך מפיקים ומארגנים וילווה אותך צעד אחר צעד בדרך ליום הגדול. בפנים תמצאי את כל המידע וכל הטיפים וההמלצות שאת צריכה כדי לארגן את החתונה שלך ולעקוב אחר הדברים מבלי לפספס דבר. מדריך ארגון החתונה שלנו ממתין לך.
            </p>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto rtl">
            <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 md:p-12 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-border/20">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
              <h2 className="text-xl md:text-2xl font-light font-display mb-10 text-center tracking-wide">במדריך מחכה לך מידע רב על הנושאים:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {whatsIncluded.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Questions to Ask Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-5xl mx-auto rtl">
            <div className="bg-gradient-to-br from-primary/5 via-background to-primary/5 p-8 md:p-12 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-border/20">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
              <h2 className="text-xl md:text-2xl font-light font-display mb-10 text-center tracking-wide">שאלות שחייב לשאול:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {questionsToAsk.map((question, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-relaxed font-light">{question}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-t border-border/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center rtl">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
              <h2 className="text-2xl md:text-3xl font-extralight font-display mb-4 tracking-wide">
                מוכנה להתחיל את המסע?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed font-light">
                צרי קשר עכשיו לקבלת המדריך המלא ולהתחיל לארגן את חתונת החלומות שלך!
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="px-10 py-6 text-xs font-light shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-500 hover:scale-[1.02]">
                    צרי קשר
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button size="lg" variant="outline" className="px-10 py-6 text-xs font-light hover:bg-background transition-all duration-500">
                    קביעת פגישה
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WeddingPlanner;
