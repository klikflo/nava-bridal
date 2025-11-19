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
        <div className="relative min-h-[60vh] bg-gradient-to-br from-primary/5 via-muted/30 to-accent/5 flex items-center justify-center overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <motion.div
                className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6 rtl"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Link to="/" className="hover:text-primary transition-colors">דף הבית</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-foreground">{collection.nameHe}</span>
              </motion.div>

              <AnimatedText delay={0.2} className="text-5xl md:text-7xl font-light font-serif italic mb-6 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
                {collection.name}
              </AnimatedText>

              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="container mx-auto px-4 py-16">
          <AnimatedSection animation="fade-up" className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-muted-foreground rtl leading-relaxed font-serif">
              {collection.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Dresses Grid */}
        {collection.dresses.length > 0 ? (
          <div className="container mx-auto px-4 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                      className="aspect-[3/4] bg-muted rounded-3xl overflow-hidden mb-6 shadow-lg relative"
                      whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {dress.images.length > 0 ? (
                        <>
                          {/* Dress Image */}
                          <motion.img
                            src={dress.images[0]}
                            alt={dress.nameHe}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.7 }}
                            loading="lazy"
                          />
                          {/* Overlay gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          {/* Dress name overlay */}
                          <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-3xl font-light font-serif text-white relative z-10 mb-2">
                              {dress.name}
                            </span>
                            <p className="text-sm text-white/90 rtl px-6 text-center relative z-10">
                              {dress.description}
                            </p>
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 group-hover:from-primary/20 group-hover:via-primary/10 group-hover:to-accent/10 transition-all duration-500">
                          {/* Overlay gradient on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                          <span className="text-4xl font-light font-serif text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500 relative z-10 mb-4">
                            {dress.name}
                          </span>

                          {/* Description appears on hover */}
                          <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 relative z-10 rtl px-6 text-center">
                            {dress.description}
                          </p>
                        </div>
                      )}
                    </motion.div>

                    <div className="text-center space-y-2 rtl">
                      <h3 className="text-2xl font-light font-serif italic group-hover:text-primary transition-colors">
                        {dress.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
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
        <div className="container mx-auto px-4 pb-20">
          <AnimatedSection animation="scale" className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 via-muted to-accent/10 rounded-3xl p-12 rtl">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
              מצאת את השמלה המושלמת?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              קבעי פגישה אישית לבחירה ומדידה של השמלה שבחרת
            </p>
            <Link to="/consultation">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="rounded-full px-10 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
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

