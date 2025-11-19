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
        {/* Hero Section with Parallax Image */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Parallax Background Image */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover transition-transform duration-700 ease-out"
              style={{
                backgroundImage: "url('/Uploads/קולקציה Moonlight /1/IMG_0128 Large.png')",
                backgroundAttachment: "fixed",
                backgroundPosition: "center 20%",
                transform: "scale(1.1)"
              }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up max-w-4xl mx-auto rtl">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-white/80 mb-6">
                <Link to="/" className="hover:text-white transition-colors">דף הבית</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-white">פגישת ייעוץ</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 text-white drop-shadow-2xl">
                פגישת ייעוץ אישית
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-serif leading-relaxed drop-shadow-lg">
                היו הייתה פעם נסיכה… והייתה לה את השמלה הכי יפה!
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto rtl">
            <div className="space-y-6 text-xl md:text-2xl leading-relaxed text-muted-foreground text-right">
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
        <section className="py-16 bg-gradient-to-b from-muted/20 to-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-3xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-scale-in rtl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-3xl p-10 md:p-16 shadow-xl border border-border/50 animate-fade-in">
              <div className="text-center mb-12 rtl">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">מה כולל?</h2>
                <p className="text-lg text-muted-foreground">
                  הפגישה שלנו מעניקה לך את כל מה שצריך למצוא את השמלה המושלמת
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 rtl">
                {includes.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-muted/30 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center rtl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                לחצי כאן, ותקבעי לך פגישת ייעוץ ללא עלות
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-serif">
                ואת תביני שהרמלה שלנו הכי נכונה להגשים את פנטזיות שלך
              </p>

              <Button
                size="lg"
                className="rounded-full px-14 py-7 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
                asChild
              >
                <a href="https://wa.me/972546922630" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <svg className="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>WhatsApp - קביעת תור</span>
                </a>
              </Button>

              <p className="text-sm text-muted-foreground mt-6">
                או התקשרי אלינו: <a href="tel:054-692-2630" className="hover:text-primary transition-colors font-medium" dir="ltr">054-692-2630</a>
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
