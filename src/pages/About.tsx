import { Link } from "react-router-dom";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "תשוקה ואהבה",
      description: "כל שמלה נוצרת באהבה ותשוקה לאומנות ולפרטים"
    },
    {
      icon: Sparkles,
      title: "חדשנות ויצירתיות",
      description: "עיצובים ייחודיים המשלבים מסורת עם מודרניות"
    },
    {
      icon: Award,
      title: "איכות ומצוינות",
      description: "מחויבות לאיכות הגבוהה ביותר בכל שלב"
    },
    {
      icon: Users,
      title: "שירות אישי",
      description: "ליווי צמוד ואישי לכל כלה במסע שלה"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] bg-gradient-to-br from-primary/5 via-muted/30 to-accent/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6 rtl">מי אנחנו</h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-serif rtl leading-relaxed">
                סטודיו נאוה - בית אופנה לשמלות כלה יוקרתיות
              </p>
            </div>
          </div>
        </section>

        {/* Designer Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-scale-in">
              <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/15 via-primary/8 to-accent/10 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                  <span className="text-5xl font-light font-serif text-muted-foreground relative z-10">נאוה</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 rtl text-right animate-fade-in space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">המעצבת</h2>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-primary mb-6">נאוה סומכינג</h3>
                <div className="w-20 h-1 bg-primary mb-8"></div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                נאוה סומכינג, מומחית לעיצוב אופנה ואמנות. היא נולדה בצפון מאחורי מותג האופנה המוביל הנושא את שמה. מאז הגיעה מהודו בשנת 2002, נאוה שייכת לשבט בני מנשה, קהילה יהודית ייחודית ונדירה בהודו.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                כבר בגיל צעיר, נאוה קיבלה השראה מאמא המוכשרת, והמשיכה לתחום העיצוב והתפירה. הקפיצה את כל מי שמכיר אותה ביכולתה הייחודית ליצור אומנות מכל פריט שנמצא בידה. כבר בגיל 10, קיבלה נאוה מהוריה את מכונת התפירה הראשונה שלה ומאז היא לא הפסיקה לתלוש, לגזור ולעצב בקסם הייחודי רק לה, בגדים ייחודיים לכל המשפחה וכל סביבתה.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                נאוה מגשימה מצוינות ויצירת דופן בתחום העיצוב, כשהיא משלבת בהרמוניה את השורשים הייחודיים שלה עם תשומת הלב לדקויות מודרניות. בתחום שהיה תחלום, נאוה למדה תדמיתנות ועיצוב אופנה וסיימה בהצטיינות. במהלך השנים היא רכשה ניסיון רב בעבודה לצד מעצבים מובילים בארץ ובחו״ל – דובאי, שיקגו, אוסטרליה, לונדון ועוד.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                מוקד העיצוב של נאוה הוא בחירת חומרים איכותיים ודגש על תפירה מדויקת, שילוב בדים נדירים וטכניקות ייחודיות, כאשר כל יצירה מותאמת בגזרה מחמיאה ומעוצבת לשלב את יופי הגוף הנשי. נאוה משלימה את הייחודיות של כל אישה, וכשהיא שמלת כלה היא יוצרת אישיות וטיילור מותאמים לה.
              </p>
            </div>
          </div>
        </div>

        {/* Studio Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="rtl text-right animate-fade-in space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">הסטודיו</h2>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-primary mb-6">NAVA BRIDAL</h3>
                <div className="w-20 h-1 bg-primary mb-8"></div>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                סטודיו נאוה ממוקם בלב ישראל ומהווה מקום מפגש לאומנות ולאופנה. כאן, כל שמלה היא מסע אומנותי, וכל כלה היא אורחת כבוד במסע יצירתי זה. עם למעלה מעשור של ניסיון והצלחות, נאוה ממשיכה להבריק ולהשפיע על עולם האופנה, כשהיא מביאה חדשנות, תשוקה ויופי לכל פרט שהיא יוצרת. כשאת מגיעה לסטודיו את צריכה לזכור ולהבין שכלה צריכה להיות הכי יפה בחתונה שלה.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                שילוב של שמלת כלה מושלמת לך, מתחיל מיופי המושל עם קסם ורומנטיקה וחוצה את הנוחות המרבית וממשיך דרך הבד הייחודי המותאם אישית לאופייה של הכלה. יחד, נעבור תהליך מדויק וייחודי, נבין מה נכון ונח לך, ונתאים את השמלה המושלמת עבורך.
              </p>
            </div>

            {/* Image */}
            <div className="animate-scale-in">
              <div className="aspect-[4/5] bg-muted rounded-3xl overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/15 via-primary/8 to-accent/10 relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                  <span className="text-5xl font-light font-serif text-muted-foreground relative z-10">Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 rtl">
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">הערכים שלנו</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                העקרונות המנחים אותנו בכל יום ובכל שמלה שאנו יוצרים
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-3xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 animate-scale-in rtl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Banner Section */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-foreground/95 to-foreground rounded-3xl overflow-hidden animate-scale-in shadow-2xl relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
              <div className="w-full h-full flex flex-col items-center justify-center relative z-10 p-8">
                <span className="text-5xl md:text-7xl font-light font-display text-background mb-4">NAVA BRIDAL</span>
                <span className="text-xl md:text-2xl font-serif italic text-background/80">House of Couture</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 via-muted to-accent/10 rounded-3xl p-12 rtl">
              <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
                מוכנה להתחיל את המסע?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                בואי לפגוש אותנו ולגלות את הקולקציות המדהימות שלנו
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/consultation">
                  <Button size="lg" className="rounded-full px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    קביעת פגישה
                  </Button>
                </Link>
                <Link to="/collections/falling-in-love">
                  <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-lg hover:bg-background transition-all duration-300">
                    צפייה בקולקציות
                  </Button>
                </Link>
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
