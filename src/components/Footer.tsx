import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/10 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">OTVETKINO</h3>
            <p className="text-sm text-muted-foreground">
              Готовые ответы на экзамены ОГЭ и ЕГЭ 2025 года
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ссылки</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/oge" className="hover:text-primary transition-colors">
                  ОГЭ
                </Link>
              </li>
              <li>
                <Link to="/ege" className="hover:text-primary transition-colors">
                  ЕГЭ
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: info@otvetkino.ru</li>
              <li>Телефон: +7 (XXX) XXX-XX-XX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 text-sm text-center text-muted-foreground">
          © {currentYear} OTVETKINO. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
