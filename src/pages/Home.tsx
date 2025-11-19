import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Star, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "@/data/collections";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: "עיצוב ייחודי",
      description: "כל שמלה מעוצבת בקפידה עם תשומת לב לפרטים הקטנים ביותר"
    },
    {
      icon: Heart,
      title: "שירות אישי",
      description: "ליווי מקצועי ואישי לאורך כל התהליך עד למציאת השמלה המושלמת"
    },
    {
      icon: Star,
      title: "איכות פרימיום",
      description: "בדים איכותיים ותפירה מעולה המבטיחים מראה מושלם"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/Uploads/קולקציה Falling in love /FLORA/IMG_3864.jpg"
              alt="NAVA BRIDAL"
              className="w-full h-full object-cover object-[center_20%]"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="mb-6 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-sm font-serif tracking-widest text-white/90 uppercase">Welcome to</span>
              </motion.div>

              <AnimatedText delay={0.4} className="text-6xl md:text-8xl lg:text-9xl font-bold font-display mb-6 text-white drop-shadow-2xl">
                NAVA BRIDAL
              </AnimatedText>

              <AnimatedText delay={0.6} className="text-2xl md:text-3xl text-white/90 font-serif italic mb-4 drop-shadow-lg">
                House of Couture
              </AnimatedText>

              <AnimatedText delay={0.8} className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto rtl leading-relaxed drop-shadow-lg">
                בית אופנה לשמלות כלה יוקרתיות המשלב אומנות, תשוקה וחדשנות
              </AnimatedText>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Link to="/collections/falling-in-love">
                  <Button size="lg" className="rounded-full px-10 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    גלי את האוסף שלנו
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button size="lg" variant="outline" className="rounded-full px-10 py-7 text-lg font-medium bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300">
                    קביעת פגישה
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rtl">
              {features.map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 0.15}
                  className="text-center p-8 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="container mx-auto px-4 py-20">
          <AnimatedSection animation="fade-up" className="text-center mb-16 rtl">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">הקולקציות שלנו</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              גלי את הקולקציות המיוחדות שלנו, כל אחת עם אופי ייחודי משלה
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {collections.map((collection, index) => {
              // Get the first image from the first dress that has images
              const coverImage = collection.dresses.find(dress => dress.images.length > 0)?.images[0];

              return (
                <AnimatedSection
                  key={collection.id}
                  animation="scale"
                  delay={index * 0.2}
                >
                  <Link
                    to={`/collections/${collection.id}`}
                    className="group block"
                  >
                    <motion.div
                      className="relative aspect-[4/5] bg-muted rounded-3xl overflow-hidden shadow-lg"
                      whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {coverImage ? (
                        <>
                          {/* Collection Cover Image */}
                          <motion.img
                            src={coverImage}
                            alt={collection.nameHe}
                            className="absolute inset-0 w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.7 }}
                            loading="lazy"
                          />
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20 group-hover:from-foreground/70 group-hover:via-foreground/30 group-hover:to-transparent transition-all duration-500"></div>
                        </>
                      ) : (
                        <>
                          {/* Background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/8 to-accent/10 group-hover:from-primary/25 group-hover:via-primary/15 group-hover:to-accent/20 transition-all duration-500"></div>

                          {/* Decorative elements */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-all duration-500"></div>
                          </div>
                        </>
                      )}

                      {/* Content */}
                      <div className="relative h-full flex flex-col items-center justify-center p-8 rtl">
                        <h3 className={`text-5xl md:text-6xl font-light font-serif italic mb-6 transition-colors duration-300 ${coverImage ? 'text-white group-hover:text-primary/90' : 'text-foreground group-hover:text-primary'}`}>
                          {collection.name}
                        </h3>
                        <div className={`w-24 h-1 bg-gradient-to-r from-transparent to-transparent mb-6 ${coverImage ? 'via-white' : 'via-primary'}`}></div>
                        <p className={`text-center leading-relaxed max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${coverImage ? 'text-white' : 'text-muted-foreground'}`}>
                          {collection.description.substring(0, 120)}...
                        </p>
                        <div className={`flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 ${coverImage ? 'text-white' : 'text-primary'}`}>
                          <span className="font-medium">צפייה בקולקציה</span>
                          <ArrowLeft className="w-5 h-5 rotate-180" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Collection info below */}
                    <div className="mt-6 text-center rtl">
                      <h4 className="text-2xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                        {collection.nameHe}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {collection.dresses.length} שמלות בקולקציה
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-muted to-accent/10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>

          <div className="container mx-auto px-4 text-center rtl relative z-10">
            <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                מוכנה למצוא את שמלת החלומות שלך?
              </h2>
              <AnimatedText delay={0.2} className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
                בואי לחוות את חוויית הכלה המושלמת. הצוות המקצועי שלנו ילווה אותך בכל שלב במסע למציאת השמלה המושלמת עבורך
              </AnimatedText>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link to="/consultation">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="rounded-full px-12 py-7 text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300">
                      קביעת תור לפגישת ייעוץ
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="rounded-full px-12 py-7 text-lg font-medium bg-background/50 backdrop-blur-sm hover:bg-background transition-all duration-300">
                      יצירת קשר
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
