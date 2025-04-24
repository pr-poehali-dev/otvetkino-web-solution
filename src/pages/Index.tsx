import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExamSection from "@/components/ExamSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <ExamSection 
          title="Ответы на ОГЭ 2024" 
          description="Проверенные ответы на задания ОГЭ по всем основным предметам от экспертов"
          examType="oge"
        />
        
        <ExamSection 
          title="Ответы на ЕГЭ 2024" 
          description="Подробные решения и ответы для успешной сдачи ЕГЭ от преподавателей с опытом"
          examType="ege"
        />
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-secondary">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Мы предоставляем только проверенные материалы для успешной сдачи экзаменов
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Точность 99%</h3>
                <p className="text-muted-foreground">
                  Наши ответы составлены опытными преподавателями и проверены многократно
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Все предметы</h3>
                <p className="text-muted-foreground">
                  Ответы для всех основных предметов ОГЭ и ЕГЭ в одном месте
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Мгновенный доступ</h3>
                <p className="text-muted-foreground">
                  Получите ответы сразу после оплаты, без ожидания и задержек
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/20 to-accent/20">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Готовы к успешной сдаче экзаменов?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Присоединяйтесь к тысячам студентов, которые уже повысили свои результаты с помощью OTVETKINO
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Получить ответы сейчас
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
