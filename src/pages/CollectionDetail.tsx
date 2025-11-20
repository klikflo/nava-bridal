import { Link, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getCollectionById } from "@/data/collections";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedText from "@/components/AnimatedText";
import OptimizedImage from "@/components/OptimizedImage";
import { motion } from "framer-motion";

const CollectionDetail = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const collection = collectionId ? getCollectionById(collectionId) : undefined;

  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-24 flex items-center justify-center">
          <div className="text-center rtl">
            <h1 className="text-4xl font-bold mb-4">קולקציה לא נמצאה</h1>
            <Link to="/">
              <Button>חזרה לדף הבית</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Banner */}
        <div className="relative min-h-[45vh] bg-gradient-to-br from-primary/5 via-background to-primary/5 flex items-center justify-center overflow-hidden border-b border-border/20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto py-12">
              {/* Breadcrumb */}
              <motion.div
                className="flex items-center justify-center gap-2 text-[10px] text-muted-foreground mb-6 rtl font-light tracking-[0.2em]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link to="/" className="hover:text-primary transition-colors duration-500">דף הבית</Link>
                <ChevronLeft className="w-3 h-3 rotate-180" />
                <span className="text-foreground">{collection.nameHe}</span>
              </motion.div>

              <AnimatedText delay={0.2} className="text-4xl md:text-6xl font-extralight font-serif italic mb-4 tracking-[0.05em]">
                {collection.name}
              </AnimatedText>

              <motion.div
                className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="container mx-auto px-4 py-12">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base text-muted-foreground rtl leading-relaxed font-light">
              {collection.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Dresses Grid */}
        {collection.dresses.length > 0 ? (
          <div className="container mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
              {collection.dresses.map((dress, index) => (
                <AnimatedSection
                  key={dress.name}
                  animation="scale"
                  delay={index * 0.1}
                >
                  <Link
                    to={`/collections/${collection.id}/${dress.name.toLowerCase()}`}
                    className="group cursor-pointer block"
                  >
                    <motion.div
                      className="aspect-[3/4.5] bg-muted overflow-hidden mb-8 shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-border/40 relative"
                      whileHover={{ scale: 1.005, boxShadow: "0 20px 60px rgba(0, 0, 0, 0.25)" }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {dress.images.length > 0 ? (
                        <>
                          {/* Dress Image */}
                          <motion.img
                            src={dress.images[0]}
                            alt={dress.nameHe}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            loading="lazy"
                          />
                          {/* Prestige overlay with vignette */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-0 group-hover:opacity-30 transition-opacity duration-700"></div>

                          {/* Dress name overlay */}
                          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <span className="text-3xl md:text-4xl font-extralight font-serif text-white relative z-10 mb-3 tracking-[0.05em]">
                              {dress.name}
                            </span>
                            <p className="text-sm text-white/90 rtl px-8 text-center relative z-10 font-light max-w-md">
                              {dress.description}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 via-primary/3 to-background group-hover:from-primary/10 group-hover:via-primary/5 group-hover:to-background transition-all duration-700">
                          {/* Overlay gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                          <span className="text-4xl md:text-5xl font-extralight font-serif text-muted-foreground group-hover:text-primary group-hover:scale-105 transition-all duration-700 relative z-10 mb-6 tracking-[0.05em]">
                            {dress.name}
                          </span>

                          {/* Description appears on hover */}
                          <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-700 relative z-10 rtl px-8 text-center font-light max-w-md">
                            {dress.description}
                          </p>
                        </div>
                      )}
                    </motion.div>

                    <div className="text-center space-y-3 rtl">
                      <h3 className="text-2xl md:text-3xl font-extralight font-serif group-hover:text-primary transition-colors duration-500 tracking-[0.05em]">
                        {dress.name}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {dress.description}
                      </p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        ) : (
          <div className="container mx-auto px-4 pb-20 text-center rtl">
            <p className="text-xl text-muted-foreground">בקרוב - שמלות מדהימות בקולקציה זו</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="container mx-auto px-4 pb-24">
          <AnimatedSection animation="scale" className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/5 via-background to-primary/5 p-16 rtl border border-border/30">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"></div>
            <h2 className="text-2xl md:text-3xl font-light font-display mb-6 tracking-wide">
              מצאת את השמלה המושלמת?
            </h2>
            <p className="text-base text-muted-foreground mb-10 leading-relaxed font-light">
              קבעי פגישה אישית לבחירה ומדידה של השמלה שבחרת
            </p>
            <Link to="/consultation">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="px-10 py-6 text-sm shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]">
                  קביעת פגישה
                </Button>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionDetail;

