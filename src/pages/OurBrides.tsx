import { Link } from "react-router-dom";
import { ChevronLeft, Quote, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { brides } from "@/data/brides";

const OurBrides = () => {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[45vh] bg-gradient-to-br from-primary/5 via-background to-primary/5 flex items-center justify-center overflow-hidden border-b border-border/20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up max-w-4xl mx-auto rtl py-12">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground mb-6 font-light tracking-[0.2em]">
                <Link to="/" className="hover:text-primary transition-colors duration-500">דף הבית</Link>
                <ChevronLeft className="w-3 h-3 rotate-180" />
                <span className="text-foreground">סיפורי כלות</span>
              </div>

              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"></div>
              <h1 className="text-3xl md:text-5xl font-extralight font-display mb-4 tracking-wide">הכלות שלנו</h1>
              <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                סיפורים אמיתיים מכלות מאושרות
              </p>
            </div>
          </div>
        </section>

        {/* Description */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm md:text-base text-muted-foreground rtl leading-relaxed text-right font-light">
              בואי לשמוע על החוויה של הכלות שבאות לתפור שמלת כלה בסטודיו נאוה.
              לפני שמגיעים לסטודיו אנו מאמינים שחשוב לדעת לקראת מה את הולכת,
              מבחינת המבחן, היחס, ההקשבה ושאר הפרמטרים החשובים לתהליך בחירת שמלת הכלה החלומית שלך!
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {brides.map((bride, index) => (
              <Card
                key={bride.name}
                className="border-none shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.16)] transition-all duration-700 animate-fade-in overflow-hidden group bg-gradient-to-br from-background via-background to-primary/5"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-0 rtl">
                  {/* Image - Now larger and first */}
                  <div className="aspect-[3/4] bg-muted overflow-hidden relative">
                    {bride.images.length > 0 ? (
                      <img
                        src={bride.images[0]}
                        alt={bride.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-primary/8 relative group-hover:from-primary/15 group-hover:via-primary/8 group-hover:to-primary/12 transition-all duration-700">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                        <span className="text-4xl font-extralight font-serif text-muted-foreground relative z-10 tracking-wider">{bride.name}</span>
                      </div>
                    )}
                    {/* Elegant overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Content */}
                  <div className="p-10">
                    {/* Name and Rating */}
                    <div className="text-center mb-8 border-b border-border/20 pb-6">
                      <h3 className="text-2xl md:text-3xl font-extralight font-display mb-4 tracking-wider">{bride.name}</h3>
                      <div className="flex items-center justify-center gap-1.5 mb-3">
                        {[...Array(bride.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground/60 font-light tracking-[0.2em] uppercase">
                        {bride.dress}
                      </p>
                    </div>

                    {/* Testimonial Text */}
                    <div className="relative">
                      <div className="absolute -top-2 right-0 text-6xl text-primary/10 font-serif leading-none">"</div>
                      <p className="text-muted-foreground/80 leading-relaxed text-right text-base font-light relative z-10 italic">
                        {bride.testimonial}
                      </p>
                      <div className="absolute -bottom-6 left-0 text-6xl text-primary/10 font-serif leading-none rotate-180">"</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5 border-t border-border/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center rtl">
              <h2 className="text-2xl md:text-3xl font-extralight font-display mb-4 tracking-wide">
                רוצה להיות הכלה הבאה שלנו?
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mb-8 leading-relaxed font-light">
                קבעי פגישה עכשיו ותתחילי את המסע לשמלת החלומות שלך
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/consultation">
                  <Button size="lg" className="px-10 py-6 text-xs font-light shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-500 hover:scale-[1.02]">
                    קביעת פגישה
                  </Button>
                </Link>
                <Link to="/collections/falling-in-love">
                  <Button size="lg" variant="outline" className="px-10 py-6 text-xs font-light hover:bg-background transition-all duration-500">
                    צפייה בקולקציות
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

export default OurBrides;
