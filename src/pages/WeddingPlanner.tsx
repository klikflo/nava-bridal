import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WeddingPlanner = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-r from-muted to-background flex items-center justify-center">
          <div className="text-center animate-fade-in-up rtl">
            <h1 className="text-4xl md:text-6xl font-light mb-4">יומן ארגון חתונה</h1>
            <p className="text-lg text-muted-foreground">כלים וטיפים לארגון החתונה המושלמת</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto rtl text-right">
            <p className="text-lg leading-relaxed text-muted-foreground mb-12 animate-fade-in">
              ארגון חתונה יכול להיות מאתגר, אבל עם התכנון הנכון והכלים המתאימים, התהליך יכול להיות חוויה מהנה ומרגשת. כאן תמצאי מדריך שלב אחר שלב לארגון החתונה המושלמת שלך.
            </p>

            <div className="space-y-8">
              <div className="bg-muted rounded-3xl p-8 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl font-bold mb-4">12-10 חודשים לפני</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• קביעת תאריך החתונה</li>
                  <li>• הכנת רשימת אורחים ראשונית</li>
                  <li>• הזמנת אולם</li>
                  <li>• בחירת שמלת כלה</li>
                  <li>• הזמנת צלם ומצלמה</li>
                </ul>
              </div>

              <div className="bg-muted rounded-3xl p-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-bold mb-4">9-6 חודשים לפני</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• הזמנת DJ או תזמורת</li>
                  <li>• בחירת עיצוב פרחים</li>
                  <li>• הזמנת הזמנות</li>
                  <li>• תכנון ירח דבש</li>
                  <li>• רישום למתנות</li>
                </ul>
              </div>

              <div className="bg-muted rounded-3xl p-8 animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl font-bold mb-4">3 חודשים לפני</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• שליחת הזמנות</li>
                  <li>• מדידה סופית לשמלה</li>
                  <li>• הזמנת חליפה לחתן</li>
                  <li>• תיאום איפור ושיער לניסוי</li>
                  <li>• סגירת פרטים עם ספקים</li>
                </ul>
              </div>

              <div className="bg-muted rounded-3xl p-8 animate-scale-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-2xl font-bold mb-4">חודש לפני</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• אישור מספר אורחים סופי</li>
                  <li>• תשלומים סופיים לספקים</li>
                  <li>• הכנת סידור הושבה</li>
                  <li>• רכישת טבעות נישואין</li>
                  <li>• הכנת נאומים</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WeddingPlanner;
