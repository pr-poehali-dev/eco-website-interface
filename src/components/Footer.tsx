import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Sprout" className="text-primary" size={32} />
              <span className="text-xl font-heading font-bold text-primary">ЭкоПланета</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Вместе мы создаём будущее, где природа и человек живут в гармонии. 
              Каждый вклад помогает сохранить нашу планету для будущих поколений.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  О проекте
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Как помочь
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  Новости
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold text-foreground mb-4">Контакты</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>info@ecoplanet.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, Россия</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ЭкоПланета. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
