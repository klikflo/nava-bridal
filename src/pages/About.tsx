import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-r from-muted to-background flex items-center justify-center">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-light mb-4 rtl">מי אנחנו</h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 animate-scale-in">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                  <span className="text-3xl font-light text-muted-foreground">Studio</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2 rtl text-right animate-fade-in">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                סטודיו נאוה ממוקם בלב ישראל ונחווח ממקום מפנט לאומנות ולאופנה. כאן, כל שמלה היא מסע אומנותי, וכל כלה היא אורחת כבוד במסע יצירתי זה. עם למעלה משור של ניסון והצלחות, נאוה ממשיכה להוריק ולהשפיע על עולם האופנה, כשתיא מביאה חדשנות, תשוקה וויוניו לכל פרויז שהיא יוצרת. כשאת מגיעה לסטודיו את יכולה להבין שכלה יכולה להיות תכיפה בתחונה שלה.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                שיחווק של שמלת כלה מושלמת לך, מתהליל מינופי המשולב עם קסם ורומנטיקה וחוצה את הנוחות המרבית וממשיך דרך רגב היחודי המוחדי הישה לאופייה של הכלה. יחד, נבנו מה נכון ונה לך, ונהיים את השמלה המושלמת עבור.
              </p>
            </div>
          </div>
        </div>

        {/* Black and White Image Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-foreground/90 to-foreground rounded-2xl overflow-hidden animate-scale-in">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-4xl font-light text-background">NAVA BRIDAL</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
