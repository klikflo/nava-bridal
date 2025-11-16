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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative h-[40vh] bg-gradient-to-r from-muted to-background flex items-center justify-center">
          <div className="text-center animate-fade-in-up rtl">
            <p className="text-sm text-muted-foreground mb-2">דף הבית &lt; יצירת קשר</p>
            <h1 className="text-4xl md:text-6xl font-light mb-4">יצירת קשר</h1>
            <p className="text-lg text-muted-foreground">השאירי פרטים ואחזור אליך בהקדם</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 rtl">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-right block">שם מלא</Label>
                <Input
                  id="name"
                  placeholder="שם מלא"
                  className="text-right"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-right block">טלאפון</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="טלאפון"
                  className="text-right"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-right block">מייל</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="מייל"
                  className="text-right"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-right block">תאריך החתונה</Label>
                <Input
                  id="date"
                  type="date"
                  className="text-right"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-right block">האם יש דגם ספציפי שלנו שאת מעוניינת למדוד?</Label>
                <Input
                  placeholder="האם יש דגם ספציפי שלנו שאת מעוניינת למדוד?"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-right block">בכמה שמלות את מעוניינת?</Label>
                <Input
                  placeholder="בכמה שמלות את מעוניינת?"
                  className="text-right"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-right block">האם זו פגישה ראשונה שלך למידית שמלות כלה?</Label>
                <Select>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="בחרי אפשרות" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">כן</SelectItem>
                    <SelectItem value="no">לא</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-right block">מתי תרצי שתחזור אליך?</Label>
                <Select>
                  <SelectTrigger className="text-right">
                    <SelectValue placeholder="בחרי אפשרות" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">בוקר</SelectItem>
                    <SelectItem value="afternoon">אחר הצהריים</SelectItem>
                    <SelectItem value="evening">ערב</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-right block">מה התקציב שלך?</Label>
                <Select>
                  <SelectTrigger className="text-right">
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

              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  מזהימה לכתוב לנו כל שאלה או בקשה שיש לך ונחזור אליך בקרוב
                </p>
                <p className="text-lg font-medium mb-6">
                  מוזמנת לכתוב לנו כל שאלה או בקשה שיש לך ונחזור אליך בהקדם
                </p>
                <Button
                  type="submit"
                  size="lg"
                  className="rounded-full px-12 py-6 text-lg bg-primary/80 hover:bg-primary"
                >
                  תתקשר אליי
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
