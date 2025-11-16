import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  // Placeholder images - you can replace with actual dress images
  const dresses = [
    { id: 1, name: "FLORA" },
    { id: 2, name: "AURORA" },
    { id: 3, name: "BELLE" },
    { id: 4, name: "LYNN" },
    { id: 5, name: "GRACE" },
    { id: 6, name: "BIANCA" },
    { id: 7, name: "LAURA" },
    { id: 8, name: "SIREN" },
    { id: 9, name: "BLANCA" },
    { id: 10, name: "ODETTE" },
    { id: 11, name: "SWAN" },
    { id: 12, name: "ROSE" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-gradient-to-b from-muted to-background flex items-center justify-center">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">NAVA BRIDAL</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">House of Couture</p>
            <Link to="/collections">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg">
                גלי את האוסף שלנו
              </Button>
            </Link>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dresses.map((dress, index) => (
              <div
                key={dress.id}
                className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                  <span className="text-2xl font-light text-muted-foreground group-hover:text-primary transition-colors">
                    {dress.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 text-center rtl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">מוכנה למצוא את שמלת החלומות שלך?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              בואי לפגוש על חוויה של הכלה המושלמת שתביא לחיי מנועים ממקום אחד והצוות המקצועי שלנו ילווה אותך בכל שלב
            </p>
            <Link to="/consultation">
              <Button size="lg" className="rounded-full px-8 py-6 text-lg">
                קביעת תור לפגישת ייעוץ
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
