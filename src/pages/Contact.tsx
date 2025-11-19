import { Link } from "react-router-dom";
import { ChevronLeft, Mail, Phone, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "כתובת",
      content: "לוחז 17, ראשון לציון"
    },
    {
      icon: Phone,
      title: "טלפון",
      content: "054-692-2630",
      link: "tel:054-692-2630"
    },
    {
      icon: Mail,
      title: "אימייל",
      content: "navabridal.studio@gmail.com",
      link: "mailto:navabridal.studio@gmail.com"
    },
    {
      icon: Clock,
      title: "שעות פעילות",
      content: "ימים א' - ה' | 09:00-18:00"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] bg-gradient-to-br from-primary/5 via-muted/30 to-accent/5 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center animate-fade-in-up max-w-4xl mx-auto rtl">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary transition-colors">דף הבית</Link>
                <ChevronLeft className="w-4 h-4 rotate-180" />
                <span className="text-foreground">יצירת קשר</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">יצירת קשר</h1>
              <p className="text-xl text-muted-foreground font-serif">
                נשמח לשמוע ממך ולענות על כל שאלה
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-3xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in rtl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <info.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-muted-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-base font-medium hover:text-primary transition-colors"
                      dir={info.icon === Phone ? "ltr" : undefined}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-base font-medium">{info.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-3xl p-8 md:p-12 shadow-xl border border-border/50">
              <div className="text-center mb-10 rtl">
                <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">השאירי פרטים</h2>
                <p className="text-lg text-muted-foreground">
                  מלאי את הטופס ונחזור אליך בהקדם האפשרי
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 rtl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-right block font-medium">שם מלא *</Label>
                    <Input
                      id="name"
                      placeholder="הכניסי את שמך המלא"
                      className="text-right h-12 rounded-xl border-border/50 focus:border-primary"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-right block font-medium">טלפון *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="05X-XXX-XXXX"
                      className="text-right h-12 rounded-xl border-border/50 focus:border-primary ltr"
                      dir="ltr"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-right block font-medium">אימייל *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="text-right h-12 rounded-xl border-border/50 focus:border-primary ltr"
                      dir="ltr"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date" className="text-right block font-medium">תאריך החתונה *</Label>
                    <Input
                      id="date"
                      type="date"
                      className="text-right h-12 rounded-xl border-border/50 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-right block font-medium">האם יש דגם ספציפי שאת מעוניינת למדוד?</Label>
                  <Input
                    placeholder="שם הדגם (אופציונלי)"
                    className="text-right h-12 rounded-xl border-border/50 focus:border-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-right block font-medium">בכמה שמלות את מעוניינת?</Label>
                    <Select>
                      <SelectTrigger className="text-right h-12 rounded-xl border-border/50">
                        <SelectValue placeholder="בחרי מספר" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">שמלה אחת</SelectItem>
                        <SelectItem value="2-3">2-3 שמלות</SelectItem>
                        <SelectItem value="4+">4 שמלות ומעלה</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-right block font-medium">האם זו פגישה ראשונה למדידת שמלות?</Label>
                    <Select>
                      <SelectTrigger className="text-right h-12 rounded-xl border-border/50">
                        <SelectValue placeholder="בחרי אפשרות" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">כן, פגישה ראשונה</SelectItem>
                        <SelectItem value="no">לא, כבר מדדתי במקומות אחרים</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-right block font-medium">מתי נוח לך שנחזור אליך?</Label>
                    <Select>
                      <SelectTrigger className="text-right h-12 rounded-xl border-border/50">
                        <SelectValue placeholder="בחרי זמן" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">בוקר (09:00-12:00)</SelectItem>
                        <SelectItem value="afternoon">אחר הצהריים (12:00-16:00)</SelectItem>
                        <SelectItem value="evening">ערב (16:00-18:00)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-right block font-medium">מה התקציב שלך?</Label>
                    <Select>
                      <SelectTrigger className="text-right h-12 rounded-xl border-border/50">
                        <SelectValue placeholder="בחרי טווח" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="range1">עד 10,000 ₪</SelectItem>
                        <SelectItem value="range2">10,000-15,000 ₪</SelectItem>
                        <SelectItem value="range3">15,000-20,000 ₪</SelectItem>
                        <SelectItem value="range4">20,000+ ₪</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-right block font-medium">הערות נוספות</Label>
                  <Textarea
                    id="message"
                    placeholder="ספרי לנו עוד על מה שאת מחפשת..."
                    className="text-right min-h-[120px] rounded-xl border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <div className="text-center pt-6 space-y-4">
                  <p className="text-base text-muted-foreground">
                    מוזמנת לכתוב לנו כל שאלה או בקשה ונחזור אליך בהקדם האפשרי
                  </p>
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full px-14 py-7 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    שליחת הפרטים
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
