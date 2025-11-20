import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] bg-gradient-to-br from-primary/5 via-background to-primary/5 flex items-center justify-center overflow-hidden border-b border-border/20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up max-w-4xl mx-auto py-16">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
              <h1 className="text-3xl md:text-5xl font-extralight font-display mb-6 rtl tracking-wide">מי אנחנו</h1>
              <p className="text-sm md:text-base text-muted-foreground font-light rtl leading-relaxed">
                סטודיו נאוה - בית אופנה לשמלות כלה יוקרתיות
              </p>
            </div>
          </div>
        </section>

        {/* Designer Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 animate-scale-in">
              <div className="aspect-[4/5] bg-muted overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-border/30">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/8 via-primary/4 to-background relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                  <span className="text-5xl font-extralight font-serif text-muted-foreground relative z-10 tracking-wider">נאוה</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="order-1 lg:order-2 rtl text-right animate-fade-in space-y-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-light font-display mb-4 tracking-wide">המעצבת</h2>
                <h3 className="text-xl md:text-2xl font-light font-display text-primary mb-6 tracking-wide">נאוה סומכינג</h3>
                <div className="w-16 h-px bg-primary mb-8"></div>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground font-light">
                נאוה סומכינג, מומחית לעיצוב אופנה ואמנות. היא נולדה בצפון מאחורי מותג האופנה המוביל הנושא את שמה. מאז הגיעה מהודו בשנת 2002, נאוה שייכת לשבט בני מנשה, קהילה יהודית ייחודית ונדירה בהודו.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground font-light">
                כבר בגיל צעיר, נאוה קיבלה השראה מאמא המוכשרת, והמשיכה לתחום העיצוב והתפירה. הקפיצה את כל מי שמכיר אותה ביכולתה הייחודית ליצור אומנות מכל פריט שנמצא בידה. כבר בגיל 10, קיבלה נאוה מהוריה את מכונת התפירה הראשונה שלה ומאז היא לא הפסיקה לתלוש, לגזור ולעצב בקסם הייחודי רק לה, בגדים ייחודיים לכל המשפחה וכל סביבתה.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground font-light">
                נאוה מגשימה מצוינות ויצירת דופן בתחום העיצוב, כשהיא משלבת בהרמוניה את השורשים הייחודיים שלה עם תשומת הלב לדקויות מודרניות. בתחום שהיה תחלום, נאוה למדה תדמיתנות ועיצוב אופנה וסיימה בהצטיינות. במהלך השנים היא רכשה ניסיון רב בעבודה לצד מעצבים מובילים בארץ ובחו״ל – דובאי, שיקגו, אוסטרליה, לונדון ועוד.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground font-light">
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
                <h2 className="text-2xl md:text-3xl font-light font-display mb-4 tracking-wide">הסטודיו</h2>
                <h3 className="text-xl md:text-2xl font-light font-display text-primary mb-6 tracking-wide">NAVA BRIDAL</h3>
                <div className="w-16 h-px bg-primary mb-8"></div>
              </div>

              <p className="text-base leading-relaxed text-muted-foreground font-light">
                סטודיו נאוה ממוקם בלב ישראל ומהווה מקום מפגש לאומנות ולאופנה. כאן, כל שמלה היא מסע אומנותי, וכל כלה היא אורחת כבוד במסע יצירתי זה. עם למעלה מעשור של ניסיון והצלחות, נאוה ממשיכה להבריק ולהשפיע על עולם האופנה, כשהיא מביאה חדשנות, תשוקה ויופי לכל פרט שהיא יוצרת. כשאת מגיעה לסטודיו את צריכה לזכור ולהבין שכלה צריכה להיות הכי יפה בחתונה שלה.
              </p>

              <p className="text-base leading-relaxed text-muted-foreground font-light">
                שילוב של שמלת כלה מושלמת לך, מתחיל מיופי המושל עם קסם ורומנטיקה וחוצה את הנוחות המרבית וממשיך דרך הבד הייחודי המותאם אישית לאופייה של הכלה. יחד, נעבור תהליך מדויק וייחודי, נבין מה נכון ונח לך, ונתאים את השמלה המושלמת עבורך.
              </p>
            </div>

            {/* Image */}
            <div className="animate-scale-in">
              <div className="aspect-[4/5] bg-muted overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-border/30">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/8 via-primary/4 to-background relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                  <span className="text-5xl font-extralight font-serif text-muted-foreground relative z-10 tracking-wider">Studio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-foreground/95 to-foreground overflow-hidden animate-scale-in shadow-[0_8px_24px_rgba(0,0,0,0.12)] border border-foreground/10 relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
              <div className="w-full h-full flex flex-col items-center justify-center relative z-10 p-8">
                <span className="text-4xl md:text-6xl font-extralight font-display text-background mb-4 tracking-wider">NAVA BRIDAL</span>
                <span className="text-lg md:text-xl font-light font-serif text-background/70 tracking-wide">House of Couture</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/5 via-background to-primary/5 p-16 rtl border border-border/30">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-10"></div>
              <h2 className="text-2xl md:text-3xl font-light font-display mb-6 tracking-wide">
                מוכנה להתחיל את המסע?
              </h2>
              <p className="text-base text-muted-foreground mb-10 leading-relaxed font-light">
                בואי לפגוש אותנו ולגלות את הקולקציות המדהימות שלנו
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/consultation">
                  <Button size="lg" className="px-10 py-6 text-sm shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]">
                    קביעת פגישה
                  </Button>
                </Link>
                <Link to="/collections/falling-in-love">
                  <Button size="lg" variant="outline" className="px-10 py-6 text-sm hover:bg-background/80">
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
