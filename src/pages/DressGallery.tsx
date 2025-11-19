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
        <main className="flex-1 pt-24 flex items-center justify-center">
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

      <main className="flex-1 pt-24">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground rtl">
            <Link to="/" className="hover:text-primary transition-colors">דף הבית</Link>
            <ChevronLeft className="w-4 h-4 rotate-180" />
            <Link to={`/collections/${collectionId}`} className="hover:text-primary transition-colors">
              {collection.nameHe}
            </Link>
            <ChevronLeft className="w-4 h-4 rotate-180" />
            <span className="text-foreground">{dress.name}</span>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-6">
              <div className="relative aspect-[3/4] bg-muted rounded-3xl overflow-hidden shadow-2xl">
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
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-background transition-all hover:scale-110"
                          aria-label="תמונה קודמת"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-full hover:bg-background transition-all hover:scale-110"
                          aria-label="תמונה הבאה"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary/15 via-primary/8 to-accent/10">
                    <span className="text-6xl font-light font-serif text-muted-foreground mb-4">
                      {dress.name}
                    </span>
                    <p className="text-muted-foreground">תמונות בקרוב</p>
                  </div>
                )}
              </div>

              {/* Thumbnail Navigation */}
              {hasImages && dress.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {dress.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-primary scale-105'
                          : 'border-transparent hover:border-primary/50'
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
            <div className="space-y-8 rtl">
              <div>
                <h1 className="text-5xl md:text-6xl font-light font-serif italic mb-4">
                  {dress.name}
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mb-6"></div>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {dress.description}
                </p>
              </div>

              <div className="bg-muted/50 rounded-3xl p-8 space-y-4">
                <h3 className="text-2xl font-bold font-display mb-4">פרטי השמלה</h3>
                <p className="text-muted-foreground">
                  שמלה מקולקציית {collection.nameHe}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link to="/consultation" className="block">
                  <Button size="lg" className="w-full rounded-full py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    קביעת פגישה למדידה
                  </Button>
                </Link>
                <Link to={`/collections/${collectionId}`}>
                  <Button size="lg" variant="outline" className="w-full rounded-full py-7 text-lg">
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

