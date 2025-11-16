import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Collections = () => {
  const collections = [
    {
      name: "Falling In Love Collection",
      description: "קולקציית Falling In Love של נאוה היא קולקציית שמלות כלה המאופיינת בתפירה עדינה עם עיטורים מדהימים עובר הכלה המשודרת קלאסיות, רומנטיקה, ואלגנטיות עם מראה שמשאיר את כולם פעור פה.",
      dresses: [
        { name: "BIANCA" },
        { name: "FLORA" },
        { name: "AURORA" },
        { name: "BELLE" },
        { name: "LYNN" },
        { name: "GRACE" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {collections.map((collection, idx) => (
          <section key={idx} className="mb-20">
            {/* Hero Banner */}
            <div className="relative h-[50vh] bg-gradient-to-r from-muted to-background flex items-center justify-center">
              <div className="text-center animate-fade-in-up">
                <p className="text-sm text-muted-foreground mb-2 rtl">דף הבית &lt; קולקציות &lt; {collection.name}</p>
                <h1 className="text-4xl md:text-6xl font-light italic mb-4">{collection.name}</h1>
              </div>
            </div>

            {/* Description */}
            <div className="container mx-auto px-4 py-12">
              <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto rtl leading-relaxed">
                {collection.description}
              </p>
            </div>

            {/* Dresses Grid */}
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collection.dresses.map((dress, index) => (
                  <div
                    key={dress.name}
                    className="group cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden mb-4">
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-500">
                        <span className="text-3xl font-light text-muted-foreground group-hover:text-primary transition-colors">
                          {dress.name}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-center text-xl font-light italic">{dress.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Collections;
