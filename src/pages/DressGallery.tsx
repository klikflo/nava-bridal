import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getDressById, getCollectionById } from "@/data/collections";
import { Button } from "@/components/ui/button";

const DressGallery = () => {
  const { collectionId, dressName } = useParams<{ collectionId: string; dressName: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const dress = collectionId && dressName ? getDressById(collectionId, dressName.toUpperCase()) : undefined;
  const collection = collectionId ? getCollectionById(collectionId) : undefined;

  if (!dress || !collection) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20 md:pt-24 flex items-center justify-center">
          <div className="text-center rtl">
            <h1 className="text-4xl font-bold mb-4">שמלה לא נמצאה</h1>
            <Link to="/">
              <Button>חזרה לדף הבית</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const hasImages = dress.images && dress.images.length > 0;

  const nextImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev + 1) % dress.images.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setCurrentImageIndex((prev) => (prev - 1 + dress.images.length) % dress.images.length);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-xs text-muted-foreground rtl font-light tracking-wide">
            <Link to="/" className="hover:text-primary transition-colors duration-500">דף הבית</Link>
            <ChevronLeft className="w-3 h-3 rotate-180" />
            <Link to={`/collections/${collectionId}`} className="hover:text-primary transition-colors duration-500">
              {collection.nameHe}
            </Link>
            <ChevronLeft className="w-3 h-3 rotate-180" />
            <span className="text-foreground">{dress.name}</span>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start max-w-7xl mx-auto">
            {/* Image Gallery */}
            <div className="space-y-8">
              <div className="relative aspect-[3/4.5] bg-muted overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.18)] border border-border/40">
                {hasImages ? (
                  <>
                    <img
                      src={dress.images[currentImageIndex]}
                      alt={`${dress.name} - תמונה ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Navigation Arrows */}
                    {dress.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-sm p-4 hover:bg-background transition-all duration-500 hover:scale-105 border border-border/40 shadow-lg"
                          aria-label="תמונה קודמת"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-6 top-1/2 -translate-y-1/2 bg-background/95 backdrop-blur-sm p-4 hover:bg-background transition-all duration-500 hover:scale-105 border border-border/40 shadow-lg"
                          aria-label="תמונה הבאה"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10">
                    <span className="text-6xl font-extralight font-serif text-muted-foreground mb-4">
                      {dress.name}
                    </span>
                    <p className="text-muted-foreground">תמונות בקרוב</p>
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {hasImages && dress.images.length > 1 && (
                <div className="grid grid-cols-4 gap-5">
                  {dress.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square overflow-hidden border transition-all duration-500 shadow-md ${
                        currentImageIndex === index
                          ? 'border-primary scale-105 shadow-lg'
                          : 'border-border/40 hover:border-primary/50 hover:shadow-lg'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${dress.name} - תמונה ממוזערת ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dress Details */}
            <div className="space-y-8 rtl lg:sticky lg:top-32">
              <div>
                <h1 className="text-4xl md:text-5xl font-extralight font-serif italic mb-6 tracking-[0.05em]">
                  {dress.name}
                </h1>
                <div className="w-20 h-px bg-gradient-to-r from-primary to-transparent mb-8"></div>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                  {dress.description}
                </p>
              </div>

              <div className="bg-muted/20 p-8 space-y-4 border border-border/30 shadow-sm">
                <h3 className="text-lg font-light font-display mb-4 tracking-wide">פרטי השמלה</h3>
                <p className="text-muted-foreground font-light text-base">
                  שמלה מקולקציית {collection.nameHe}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4 pt-4">
                <Link to="/consultation" className="block">
                  <Button size="lg" className="w-full py-7 text-sm font-light shadow-[0_12px_32px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.22)] transition-all duration-500 hover:scale-[1.02]">
                    קביעת פגישה למדידה
                  </Button>
                </Link>
                <Link to={`/collections/${collectionId}`}>
                  <Button size="lg" variant="outline" className="w-full py-7 text-sm font-light border-border/40 hover:border-primary/50 transition-all duration-500">
                    חזרה לקולקציה
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DressGallery;

