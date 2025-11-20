import { Link } from "react-router-dom";
import { ChevronLeft, Check, Calendar, Clock, Sparkles, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Consultation = () => {
  const benefits = [
    {
      icon: Heart,
      title: "פגישה אישית ואינטימית",
      description: "פגישה פרטית עם מעצבת השמלות במקום שקט ונעים"
    },
    {
      icon: Sparkles,
      title: "מדידת שמלות מהקולקציה",
      description: "אפשרות למדוד מגוון שמלות מהקולקציות החדשות ביותר"
    },
    {
      icon: Calendar,
      title: "ייעוץ סגנון מקצועי",
      description: "המלצות מותאמות אישית לסגנון, מבנה גוף ותקציב"
    },
    {
      icon: Clock,
      title: "זמן ללא לחץ",
      description: "פגישה ממושכת ללא לחץ זמן, כדי למצוא את השמלה המושלמת"
    }
  ];

  const includes = [
    "פגישה אישית עם מעצבת השמלות נאוה",
    "מדידת שמלות ללא הגבלה מהקולקציה",
    "ייעוץ סגנון מקצועי ומותאם אישית",
    "המלצות לאביזרים והשלמת המראה",
    "אווירה נעימה ואינטימית",
    "צילום תמונות לזיכרון (אופציונלי)"
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
                backgroundImage: "url('/Uploads/קולקציה Moonlight /1/IMG_0128 Large.png')",
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
                <span className="text-white/80">פגישת ייעוץ</span>
              </div>

              <div className="w-12 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-8"></div>
              <h1 className="text-3xl md:text-5xl font-extralight font-display mb-6 text-white tracking-[0.05em]">
                פגישת ייעוץ אישית
              </h1>
              <p className="text-sm md:text-base text-white/70 font-light leading-relaxed">
                היו הייתה פעם נסיכה… והייתה לה את השמלה הכי יפה!
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto rtl">
            <div className="space-y-5 text-sm md:text-base leading-relaxed text-muted-foreground text-right font-light">
              <p>
                היי את, גדלנו על הסיפורים, הסרטים, קומדיות רומנטיות וחלומות.
                והנה הגיעה הרגע המרגש שלך. עכשיו את במרכז, את בוחרת, את זו שחולמת ומגשימה.
              </p>
              <p>
                אנו מזמינים אותך לפגישה אישית אצלנו בסטודיו, בפגישה נבנה תצטרף לדמיון שלך,
                תפיג איתך בחלומות, ויחד נפרוט את החלום למציאות.
              </p>
              <p>
                הצטרפי אלינו לחוויה בלתי נשכחת, שמטרתה — היא לעשות אותך יפה ומיוחדת.
                השמלה שניצור, תתאים עבורך עד לפרט הכי קטן. תכבשי כלכך הרבה מחמאות ביום המיוחד
                שהוא אך ורק שלך.
              </p>
              <p>
                אנחנו כאן ללוות אותך ולהיות איתך ולצידך לאורך כל הדרך,
                עד לפיסת בד האחרונה של השמלה שלך.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <section className="py-16 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-background/80 backdrop-blur-sm border border-border/20 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-500 animate-scale-in rtl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/5 mb-6">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-sm font-light mb-3 tracking-wide">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-xs font-light">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-background to-muted/20 p-8 md:p-12 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-border/20 animate-fade-in">
              <div className="text-center mb-12 rtl">
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
                <h2 className="text-xl md:text-2xl font-light font-display mb-3 tracking-wide">מה כולל?</h2>
                <p className="text-sm text-muted-foreground font-light">
                  הפגישה שלנו מעניקה לך את כל מה שצריך למצוא את השמלה המושלמת
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 rtl">
                {includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 hover:bg-muted/20 transition-colors duration-500"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-primary/5 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-sm leading-relaxed font-light">{item}</span>
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
              <h2 className="text-2xl md:text-3xl font-extralight font-display mb-4 tracking-wide">
                לחצי כאן, ותקבעי לך פגישת ייעוץ ללא עלות
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed font-light">
                ואת תביני שהרמלה שלנו הכי נכונה להגשים את פנטזיות שלך
              </p>

              <Button
                size="lg"
                className="px-10 py-6 text-xs font-light shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-500 hover:scale-[1.02] group"
                asChild
              >
                <a href="https://wa.me/972546922630" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp - קביעת תור</span>
                </a>
              </Button>

              <p className="text-xs text-muted-foreground mt-5 font-light">
                או התקשרי אלינו: <a href="tel:054-692-2630" className="hover:text-primary transition-colors" dir="ltr">054-692-2630</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Consultation;
