import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center rtl">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
                מדיניות פרטיות
              </h1>
              <p className="text-lg text-muted-foreground">
                עודכן לאחרונה: {new Date().toLocaleDateString('he-IL')}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto rtl prose prose-lg">
              <div className="bg-muted/30 rounded-2xl p-8 md:p-12 space-y-8">
                
                {/* Introduction */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">1. כללי</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    ברוכה הבאה לאתר NAVA BRIDAL ("האתר"). מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים ומגנים על המידע האישי שלך בהתאם לחוק הגנת הפרטיות, התשמ"א-1981 ותקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    השימוש באתר מהווה הסכמה למדיניות פרטיות זו. אם אינך מסכימה למדיניות זו, אנא הימנעי משימוש באתר.
                  </p>
                </div>

                {/* Information Collection */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">2. איסוף מידע</h2>
                  <h3 className="text-xl font-semibold mb-3">2.1 מידע שאת מספקת</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    אנו עשויים לאסוף את המידע הבא כאשר את משתמשת באתר:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-6 mt-3">
                    <li>שם מלא</li>
                    <li>מספר טלפון</li>
                    <li>כתובת דואר אלקטרוני</li>
                    <li>תאריך אירוע מתוכנן</li>
                    <li>העדפות אישיות לגבי שמלות כלה</li>
                    <li>כל מידע נוסף שתבחרי לשתף איתנו בטפסי יצירת קשר</li>
                  </ul>

                  <h3 className="text-xl font-semibold mb-3 mt-6">2.2 מידע שנאסף אוטומטית</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    בעת ביקור באתר, אנו עשויים לאסוף באופן אוטומטי:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-6 mt-3">
                    <li>כתובת IP</li>
                    <li>סוג דפדפן ומערכת הפעלה</li>
                    <li>דפים שצפית בהם באתר</li>
                    <li>זמן ותאריך הביקור</li>
                    <li>מידע על התקן הגישה</li>
                  </ul>
                </div>

                {/* Use of Information */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">3. שימוש במידע</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    אנו משתמשים במידע שנאסף למטרות הבאות:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-6 mt-3">
                    <li>לספק ולשפר את השירותים שלנו</li>
                    <li>ליצור קשר בנוגע לפגישות ייעוץ</li>
                    <li>לשלוח מידע שיווקי (רק בהסכמתך)</li>
                    <li>לנתח ולשפר את חוויית המשתמש באתר</li>
                    <li>לעמוד בדרישות חוקיות</li>
                    <li>למנוע הונאות ולשמור על אבטחת האתר</li>
                  </ul>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">4. עוגיות (Cookies)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    האתר משתמש בעוגיות לשיפור חוויית הגלישה. עוגיות הן קבצי טקסט קטנים המאוחסנים במכשיר שלך. אנו משתמשים בעוגיות עבור:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-6 mt-3">
                    <li>שמירת העדפות משתמש</li>
                    <li>ניתוח תנועה באתר</li>
                    <li>שיפור ביצועי האתר</li>
                    <li>התאמה אישית של תוכן</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    את יכולה לנהל או למחוק עוגיות דרך הגדרות הדפדפן שלך. שימי לב שחסימת עוגיות עלולה להשפיע על תפקוד האתר.
                  </p>
                </div>

                {/* Information Sharing */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">5. שיתוף מידע</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    אנו לא נמכור, נשכיר או נשתף את המידע האישי שלך עם צדדים שלישיים, למעט במקרים הבאים:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-6 mt-3">
                    <li>בהסכמתך המפורשת</li>
                    <li>עם ספקי שירות המסייעים לנו בהפעלת האתר (כגון אחסון, ניתוח נתונים)</li>
                    <li>כאשר נדרש על פי חוק או צו שיפוטי</li>
                    <li>להגנה על זכויותינו, רכושנו או בטחוננו</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">6. אבטחת מידע</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע האישי שלך, כולל:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-6 mt-3">
                    <li>הצפנת מידע רגיש</li>
                    <li>הגבלת גישה למידע אישי לעובדים מורשים בלבד</li>
                    <li>שימוש בפרוטוקולי אבטחה מתקדמים</li>
                    <li>עדכון שוטף של מערכות האבטחה</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    עם זאת, אף שיטת העברה או אחסון אינה בטוחה ב-100%, ואיננו יכולים להבטיח אבטחה מוחלטת.
                  </p>
                </div>

                {/* User Rights */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">7. זכויותייך</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    בהתאם לחוק הגנת הפרטיות, יש לך את הזכויות הבאות:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-6 mt-3">
                    <li><strong>זכות עיון:</strong> לעיין במידע האישי המוחזק עלייך</li>
                    <li><strong>זכות תיקון:</strong> לבקש תיקון מידע שגוי או לא מדויק</li>
                    <li><strong>זכות מחיקה:</strong> לבקש מחיקת המידע האישי שלך</li>
                    <li><strong>זכות התנגדות:</strong> להתנגד לשימוש במידע למטרות שיווק</li>
                    <li><strong>זכות להסרה מרשימת תפוצה:</strong> להפסיק קבלת דיוור שיווקי בכל עת</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    לממש את זכויותייך, אנא פני אלינו בפרטי הקשר המפורטים להלן.
                  </p>
                </div>

                {/* Children's Privacy */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">8. פרטיות קטינים</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    האתר אינו מיועד לשימוש על ידי קטינים מתחת לגיל 18. איננו אוספים במודע מידע אישי מקטינים. אם הנך הורה או אפוטרופוס וגילית שילדך סיפק לנו מידע אישי, אנא צרי קשר ונמחק את המידע.
                  </p>
                </div>

                {/* Third-Party Links */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">9. קישורים לאתרים חיצוניים</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    האתר עשוי להכיל קישורים לאתרים חיצוניים. איננו אחראים למדיניות הפרטיות או לתוכן של אתרים אלה. אנו ממליצים לקרוא את מדיניות הפרטיות של כל אתר שאת מבקרת בו.
                  </p>
                </div>

                {/* Changes to Policy */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">10. שינויים במדיניות</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. שינויים מהותיים יפורסמו באתר עם תאריך העדכון. המשך השימוש באתר לאחר פרסום שינויים מהווה הסכמה למדיניות המעודכנת.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="bg-primary/5 rounded-xl p-6 md:p-8 border-2 border-primary/20">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">11. יצירת קשר</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    לשאלות, בקשות או תלונות בנוגע למדיניות פרטיות זו או לטיפול במידע האישי שלך, ניתן ליצור קשר:
                  </p>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center gap-3">
                      <strong className="text-foreground">שם העסק:</strong>
                      NAVA BRIDAL STUDIO
                    </p>
                    <p className="flex items-center gap-3">
                      <strong className="text-foreground">כתובת:</strong>
                      ישראל
                    </p>
                    <p className="flex items-center gap-3">
                      <strong className="text-foreground">טלפון:</strong>
                      <span dir="ltr">054-692-2630</span>
                    </p>
                    <p className="flex items-center gap-3">
                      <strong className="text-foreground">דוא"ל:</strong>
                      navabridal.studio@gmail.com
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mt-6">
                    נשתדל להגיב לפנייתך תוך 30 יום.
                  </p>
                </div>

                {/* Legal Compliance */}
                <div className="border-t-2 border-border pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    מדיניות פרטיות זו נכתבה בהתאם לחוק הגנת הפרטיות, התשמ"א-1981, תקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017, וחוק התקשורת (בזק ושידורים), התשמ"ב-1982. במקרה של סתירה בין הוראות מדיניות זו לבין הוראות החוק, יגברו הוראות החוק.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

