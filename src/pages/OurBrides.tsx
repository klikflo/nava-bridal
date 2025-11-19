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
        <section className="relative min-h-[60vh] bg-gradient-to-br from-primary/5 via-muted/30 to-accent/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up max-w-4xl mx-auto rtl">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary transition-colors">דף הבית</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-foreground">סיפורי כלות</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">הכלות שלנו</h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif leading-relaxed">
                סיפורים אמיתיים מכלות מאושרות
              </p>
            </div>
          </div>
        </section>

        {/* Description */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-muted-foreground rtl leading-relaxed text-right">
              בואי לשמוע על החוויה של הכלות שבאות לתפור שמלת כלה בסטודיו נאוה.
              לפני שמגיעים לסטודיו אנו מאמינים שחשוב לדעת לקראת מה את הולכת,
              מבחינת המבחן, היחס, ההקשבה ושאר הפרמטרים החשובים לתהליך בחירת שמלת הכלה החלומית שלך!
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brides.map((bride, index) => (
              <Card
                key={bride.name}
                className="border-2 border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 rtl">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Quote className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Name and Rating */}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">{bride.name}</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[...Array(bride.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground font-serif italic">
                      שמלה: {bride.dress}
                    </p>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed text-right mb-6">
                    "{bride.testimonial}"
                  </p>

                  {/* Image Placeholder */}
                  <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden shadow-lg">
                    {bride.images.length > 0 ? (
                      <img
                        src={bride.images[0]}
                        alt={bride.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/15 via-primary/8 to-accent/10 relative group-hover:from-primary/20 group-hover:via-primary/12 group-hover:to-accent/15 transition-all duration-500">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                        <span className="text-3xl font-light font-serif text-muted-foreground relative z-10">{bride.name}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-muted/30 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center rtl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                רוצה להיות הכלה הבאה שלנו?
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed font-serif">
                קבעי פגישה עכשיו ותתחילי את המסע לשמלת החלומות שלך
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="lg" className="rounded-full px-14 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    קביעת פגישה
                  </Button>
                </Link>
                <Link to="/collections/falling-in-love">
                  <Button size="lg" variant="outline" className="rounded-full px-14 py-7 text-lg hover:bg-background transition-all duration-300">
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
