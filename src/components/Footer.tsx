import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">OTVETKINO</h3>
            <p className="text-primary-foreground/80">
              Помогаем сдать экзамены с 2023 года.
              Надежные ответы для ОГЭ и ЕГЭ.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/oge" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  ОГЭ
                </Link>
              </li>
              <li>
                <Link to="/ege" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  ЕГЭ
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  О нас
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Связаться</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">
                Телефон: +7 (XXX) XXX-XX-XX
              </li>
              <li className="text-primary-foreground/80">
                Email: info@otvetkino.ru
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© {currentYear} OTVETKINO. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
