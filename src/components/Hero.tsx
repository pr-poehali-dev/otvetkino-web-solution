import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/40 to-background pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
              Готовые ответы на ОГЭ и ЕГЭ 2025
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-muted-foreground animate-fade-in" style={{animationDelay: "0.1s"}}>
              Повысь свои шансы на успех с проверенными ответами от экспертов
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/oge">Ответы на ОГЭ</Link>
              </Button>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link to="/ege">Ответы на ЕГЭ</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <img 
              src="/logo.svg" 
              alt="OTVETKINO Logo" 
              className="w-full max-w-[250px] md:max-w-md" 
              loading="eager"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 md:w-32 h-24 md:h-32 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 md:w-40 h-32 md:h-40 rounded-full bg-accent/10 blur-3xl"></div>
    </div>
  );
};

export default Hero;
