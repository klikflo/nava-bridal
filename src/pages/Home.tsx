import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { collections } from "@/data/collections";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/Uploads/קולקציה Falling in love /FLORA/IMG_3864 Large.png"
              alt="NAVA BRIDAL"
              className="w-full h-full object-cover object-[center_20%] scale-105"
            />
            {/* Prestige overlay with vignette effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                className="mb-6 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-[10px] font-light tracking-[0.4em] text-white/70 uppercase">Welcome to</span>
              </motion.div>

              <AnimatedText delay={0.4} className="text-6xl md:text-8xl lg:text-9xl font-extralight font-display mb-6 text-white tracking-[0.05em]">
                NAVA BRIDAL
              </AnimatedText>

              <motion.div
                className="w-20 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mb-6"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />

              <AnimatedText delay={0.7} className="text-sm md:text-base text-white/80 font-light tracking-[0.3em] mb-4 uppercase">
                House of Couture
              </AnimatedText>

              <AnimatedText delay={0.9} className="text-sm md:text-base text-white/60 mb-12 max-w-2xl mx-auto rtl leading-relaxed font-light">
                בית אופנה לשמלות כלה יוקרתיות המשלב אומנות, תשוקה וחדשנות
              </AnimatedText>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <Link to="/collections/falling-in-love">
                  <Button size="lg" className="px-8 py-6 text-xs shadow-[0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
                    גלי את האוסף שלנו
                  </Button>
                </Link>
                <Link to="/consultation">
                  <Button size="lg" variant="outline" className="px-8 py-6 text-xs bg-white/5 backdrop-blur-md border border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                    קביעת פגישה
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="container mx-auto px-4 py-24">
          <AnimatedSection animation="fade-up" className="text-center mb-16 rtl">
            <motion.div
              className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
            <h2 className="text-3xl md:text-4xl font-extralight font-display mb-4 tracking-wide">הקולקציות שלנו</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              גלי את הקולקציות המיוחדות שלנו, כל אחת עם אופי ייחודי משלה
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                      className="relative aspect-[3/4] bg-muted overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.1)] border border-border/20"
                      whileHover={{ scale: 1.005, boxShadow: "0 12px 32px rgba(0, 0, 0, 0.15)" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {coverImage ? (
                        <>
                          {/* Collection Cover Image */}
                          <motion.img
                            src={coverImage}
                            alt={collection.nameHe}
                            className="absolute inset-0 w-full h-full object-cover scale-105"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.8 }}
                            loading="lazy"
                          />
                          {/* Prestige overlay with vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/40 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-black/30 transition-all duration-700"></div>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-30 group-hover:opacity-20 transition-opacity duration-700"></div>
                        </>
                      ) : (
                        <>
                          {/* Background gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 group-hover:from-primary/15 group-hover:via-primary/8 group-hover:to-primary/15 transition-all duration-700"></div>
                        </>
                      )}

                      {/* Content */}
                      <div className="relative h-full flex flex-col items-center justify-center p-8 rtl">
                        <h3 className={`text-3xl md:text-4xl font-extralight font-serif tracking-[0.05em] mb-6 transition-colors duration-500 ${coverImage ? 'text-white' : 'text-foreground group-hover:text-primary'}`}>
                          {collection.name}
                        </h3>
                        <div className={`w-12 h-px bg-gradient-to-r from-transparent to-transparent mb-6 transition-all duration-500 ${coverImage ? 'via-white/50' : 'via-primary/50'}`}></div>
                        <p className={`text-center text-xs leading-relaxed max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-light ${coverImage ? 'text-white/80' : 'text-muted-foreground'}`}>
                          {collection.description.substring(0, 100)}...
                        </p>
                        <div className={`flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0 text-[10px] tracking-[0.2em] uppercase ${coverImage ? 'text-white/90' : 'text-primary'}`}>
                          <span className="font-light">צפייה בקולקציה</span>
                          <ArrowLeft className="w-3 h-3 rotate-180" />
                        </div>
                      </div>
                    </motion.div>

                    {/* Collection info below */}
                    <div className="mt-8 text-center rtl">
                      <h4 className="text-xl font-light font-display mb-2 group-hover:text-primary transition-colors duration-500 tracking-wide">
                        {collection.nameHe}
                      </h4>
                      <p className="text-xs text-muted-foreground font-light tracking-wide uppercase">
                        {collection.dresses.length} שמלות בקולקציה
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="relative py-24 overflow-hidden bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Image */}
              <AnimatedSection animation="fade-up" className="order-2 lg:order-1">
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-white/10"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/Uploads/קולקציה Falling in love /GRACE/IMG_3888 Large.png"
                    alt="NAVA BRIDAL"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatedSection>

              {/* Content */}
              <AnimatedSection animation="fade-up" delay={0.2} className="order-1 lg:order-2 rtl">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-extralight font-serif italic mb-8 text-white tracking-[0.05em]">
                      פגישת ייעוץ
                    </h2>
                    <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed font-light">
                      <p>
                        בפגישה אצור לך על המידע עיצוב שמלת הכלה החלומית שלך. התהליך מורכב ממספר שלבים בהם אני מלווה אותך בדרך לעיצוב המדויק עבורך. בכל יחד האם אתה משפחות הקולקציות שלי מתאימה לך או שנתחיל בתהליך עיצוב אישי של שמלה הכלה שלך.
                      </p>
                      <p className="font-normal text-white">
                        השאירי פרטים ואחזור אליך לתאום פגישה
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <a
                      href="https://wa.me/972546922630"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="lg"
                          className="w-full py-7 text-sm font-light bg-[#d4a59a] hover:bg-[#c89585] text-white shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-500"
                        >
                          שליחה
                        </Button>
                      </motion.div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Second Contact Section - Reversed */}
        <section className="relative py-24 overflow-hidden bg-[#1a1a1a]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
              {/* Content */}
              <AnimatedSection animation="fade-up" className="rtl">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-extralight font-serif italic mb-8 text-white tracking-[0.05em]">
                      מדריך לארגון חתונה
                    </h2>
                    <div className="space-y-6 text-white/80 text-base md:text-lg leading-relaxed font-light">
                      <p>
                        אז הגיע היום הגדול לך חתונה ואת לא יודעת מאיפה להתחיל? הכנתי עבורך מדריך מפורט שיעזור לך לארגן את החתונה החלומות שלך. כל המידע על הספקים שאת צריכה כדי לארגן את החתונה שלך ועקוב אחר הדברים מבלי לפספס דבר.
                      </p>
                      <p className="font-normal text-white">
                        להיכי בכלל למדריך נוסף
                      </p>
                      <p className="text-sm">
                        רשמי שם ומייל וקבלי עוד היום גישה בחינם למדריך המלא לארגון חתונה.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <a
                      href="https://wa.me/972546922630"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          size="lg"
                          className="w-full py-7 text-sm font-light bg-[#d4a59a] hover:bg-[#c89585] text-white shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.4)] transition-all duration-500"
                        >
                          אני רוצה את המדריך
                        </Button>
                      </motion.div>
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Image */}
              <AnimatedSection animation="fade-up" delay={0.2}>
                <motion.div
                  className="relative aspect-[3/4] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-white/10"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="/Uploads/קולקציה Falling in love /AURORA/IMG_3862 Large.png"
                    alt="NAVA BRIDAL"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(183,148,128,0.05),transparent)]"></div>

          <div className="container mx-auto px-4 text-center rtl relative z-10">
            <AnimatedSection animation="fade-up" className="max-w-3xl mx-auto">
              <motion.div
                className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <h2 className="text-3xl md:text-4xl font-light font-display mb-8 tracking-wide">
                מוכנה למצוא את שמלת החלומות שלך?
              </h2>
              <AnimatedText delay={0.2} className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed font-light">
                בואי לחוות את חוויית הכלה המושלמת. הצוות המקצועי שלנו ילווה אותך בכל שלב במסע למציאת השמלה המושלמת עבורך
              </AnimatedText>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link to="/consultation">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" className="px-12 py-7 text-sm shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]">
                      קביעת תור לפגישת ייעוץ
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/contact">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button size="lg" variant="outline" className="px-12 py-7 text-sm bg-background/50 backdrop-blur-sm hover:bg-background/80">
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
