import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/40 to-background pt-32 pb-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Готовые ответы на ОГЭ и ЕГЭ 2024
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in" style={{animationDelay: "0.1s"}}>
            Повысь свои шансы на успех с проверенными ответами от экспертов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: "0.2s"}}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/oge">Ответы на ОГЭ</Link>
            </Button>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link to="/ege">Ответы на ЕГЭ</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-accent/10 blur-3xl"></div>
    </div>
  );
};

export default Hero;
