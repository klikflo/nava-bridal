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

      <main className="flex-1 pt-24">
        {/* Hero Section with Parallax Image */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Parallax Background Image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover transition-transform duration-700 ease-out"
              style={{
                backgroundImage: "url('/Uploads/brides/עדן Medium.png')",
                backgroundAttachment: "fixed",
                backgroundPosition: "center 20%",
                transform: "scale(1.1)"
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up max-w-4xl mx-auto rtl">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-white/80 mb-6">
                <Link to="/" className="hover:text-white transition-colors">דף הבית</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white">יומן ארגון חתונה</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-white drop-shadow-2xl">
                יומן ארגון חתונה
              </h1>

              <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg max-w-2xl mx-auto">
                המדריך המושלם לארגון חתונת החלומות שלך
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto rtl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">מאורסת? מזל טוב!</h2>
            </div>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground text-right mb-8">
              את לא יודעת מאיפה להתחיל? בדיוק בגלל זה הכנתי עבורך מדריך מפורט שייעזור לך לארגן את חתונת החלומות שלך. היומן שחיסכון לך מפיקים ומארגנים וילווה אותך צעד אחר צעד בדרך ליום הגדול. בפנים תמצאי את כל המידע וכל הטיפים וההמלצות שאת צריכה כדי לארגן את החתונה שלך ולעקוב אחר הדברים מבלי לפספס דבר. מדריך ארגון החתונה שלנו ממתין לך.
            </p>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto rtl">
            <div className="bg-gradient-to-br from-primary/5 via-muted/30 to-accent/5 rounded-3xl p-10 md:p-16 shadow-xl border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">במדריך מחכה לך מידע רב על הנושאים:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whatsIncluded.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 backdrop-blur-sm hover:bg-background transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Questions to Ask Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="max-w-5xl mx-auto rtl">
            <div className="bg-gradient-to-br from-accent/5 via-muted/30 to-primary/5 rounded-3xl p-10 md:p-16 shadow-xl border border-border/50">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-8 text-center">שאלות שחייב לשאול:</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {questionsToAsk.map((question, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-background/50 backdrop-blur-sm hover:bg-background transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg text-foreground leading-relaxed">{question}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center rtl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                מוכנה להתחיל את המסע?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-serif">
                צרי קשר עכשיו לקבלת המדריך המלא ולהתחיל לארגן את חתונת החלומות שלך!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="rounded-full px-14 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    צרי קשר
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button size="lg" variant="outline" className="rounded-full px-14 py-7 text-lg hover:bg-background transition-all duration-300">
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
