import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Leaf" size={28} className="text-primary" />
              <span className="font-heading font-bold text-xl">ЭкоПроект</span>
            </div>
            <p className="text-muted-foreground">
              Вместе мы делаем мир чище и зеленее
            </p>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Главная</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">О проекте</Link></li>
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Как помочь</Link></li>
              <li><Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">Новости</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@ecoproject.ru
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, Россия
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Социальные сети</h3>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          © 2025 ЭкоПроект. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
