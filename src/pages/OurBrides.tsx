import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const OurBrides = () => {
  const testimonials = [
    {
      name: "תאיר",
      text: "הגרבש הראשון שקתתעשי לכתוב זשו של וואו זדעתי ששפאי זקיתי זאת זמלתי זאלילת ואמנם! בזכנו כמו שלמתי ולא הפסקתי לקבל מחמאות על עליהן, התחם שקובלתי היה מדהים וכאמאת שזה כל כך חשוב שהרוירה הקשיבה למה שאת רוצה זזה בדיוק מה שתקבלי עם נאוה. ממליצה לסמוך איתה כי היא באמת מדהימה!"
    },
    {
      name: "נעם",
      text: "נואה פשוט מדהימה! היא שתקה הכל כך נשמעת תכבות עצור שמלת כלה בקטעודיו! אנו מאמינים כשתשו לדעת לקראת מה את הולכת, מבחינת הבחירה, היחס, התקטברה ושאר הפרמטרים החשובים להתחיל בחורת שמלת הכלה החלומית שלך!"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[50vh] bg-gradient-to-r from-muted to-background flex items-center justify-center">
          <div className="text-center animate-fade-in-up">
            <p className="text-sm text-muted-foreground mb-2 rtl">דף הבית &lt; סיפורי כלות</p>
            <h1 className="text-4xl md:text-6xl font-light mb-4">Our Brides</h1>
            <p className="text-lg text-muted-foreground rtl">לשתות את כתב פוגש לכתב מחובר כמו שיש בשאר הכותרות</p>
          </div>
        </section>

        {/* Description */}
        <div className="container mx-auto px-4 py-12">
          <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto rtl leading-relaxed">
            באו לשמוע על חוויה של הכלות שבאות לחסור שמלת כלה בקטעודיו של נאוה טוטמרינו. לפני שמגיעים לסטודיו! אנו מאמינים כשתשו לדעת לקראת מה את הולכת, מבחינת הבחירה, היחס, התקטברה ושאר הפרמטרים החשובים להתחיל בחורת שמלת הכלה החלומית שלך!
          </p>
        </div>

        {/* Testimonials */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={testimonial.name} className="border-2 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-center rtl">{testimonial.name}</h3>
                  <p className="text-muted-foreground rtl leading-relaxed text-right">{testimonial.text}</p>
                  <div className="mt-6 aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <span className="text-2xl font-light text-muted-foreground">{testimonial.name}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OurBrides;
