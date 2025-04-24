import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground fixed w-full z-10 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="OTVETKINO" className="h-10 md:h-12" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-secondary transition-colors">
            Главная
          </Link>
          <Link to="/oge" className="hover:text-secondary transition-colors">
            ОГЭ
          </Link>
          <Link to="/ege" className="hover:text-secondary transition-colors">
            ЕГЭ
          </Link>
          <Link to="/about" className="hover:text-secondary transition-colors">
            О нас
          </Link>
          <Button className="bg-accent hover:bg-accent/90">
            Купить сейчас
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Меню"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary text-primary-foreground py-2 absolute w-full shadow-lg">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/oge" 
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ОГЭ
            </Link>
            <Link 
              to="/ege" 
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ЕГЭ
            </Link>
            <Link 
              to="/about" 
              className="hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              О нас
            </Link>
            <Button 
              className="bg-accent hover:bg-accent/90 w-full my-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Купить сейчас
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
