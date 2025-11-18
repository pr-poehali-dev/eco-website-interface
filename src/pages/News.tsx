import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Высадили 5000 деревьев в Подмосковье",
      date: "15 ноября 2024",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
      excerpt: "В минувшие выходные наша команда волонтёров провела масштабную акцию по высадке деревьев в Подмосковье. Более 200 участников помогли восстановить лесной массив.",
      category: "Акции"
    },
    {
      id: 2,
      title: "Запуск образовательной программы для школ",
      date: "10 ноября 2024",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80",
      excerpt: "Мы рады объявить о запуске новой образовательной программы по экологии для школьников. Программа охватит более 50 школ в разных регионах.",
      category: "Образование"
    },
    {
      id: 3,
      title: "Очистка прибрежной зоны реки Волга",
      date: "5 ноября 2024",
      image: "https://images.unsplash.com/photo-1618477371303-b2a56f422d9e?w=600&q=80",
      excerpt: "Совместно с местными властями мы провели масштабную очистку прибрежной зоны реки Волга. Собрано более 3 тонн мусора.",
      category: "Очистка"
    },
    {
      id: 4,
      title: "Партнёрство с крупной корпорацией",
      date: "1 ноября 2024",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
      excerpt: "Мы заключили партнёрское соглашение с крупной российской корпорацией, что позволит значительно расширить масштаб наших проектов.",
      category: "Партнёрство"
    },
    {
      id: 5,
      title: "Открытие экологического центра в Казани",
      date: "28 октября 2024",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
      excerpt: "В Казани открылся наш новый экологический центр, где будут проводиться образовательные мероприятия и встречи волонтёров.",
      category: "События"
    },
    {
      id: 6,
      title: "Итоги акции 'Чистый город'",
      date: "20 октября 2024",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&q=80",
      excerpt: "Подводим итоги осенней акции 'Чистый город'. В ней приняли участие более 1000 волонтёров из 15 городов России.",
      category: "Итоги"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Icon name="Leaf" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">ЭкоМир</span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">Главная</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">О проекте</Link>
              <Link to="/help" className="text-foreground hover:text-primary transition-colors">Как помочь</Link>
              <Link to="/news" className="text-primary font-semibold">Новости</Link>
              <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">Контакты</Link>
            </div>
            
            <Button>
              <Icon name="Heart" size={18} className="mr-2" />
              Поддержать
            </Button>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Новости проекта</h1>
              <p className="text-xl text-muted-foreground">
                Следите за нашими достижениями и актуальными событиями
              </p>
            </div>

            <div className="mb-12">
              <Card className="border-2 border-primary/20 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div 
                    className="h-64 md:h-full"
                    style={{
                      backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80')",
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 w-fit">
                      Главная новость
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Высадили 5000 деревьев в Подмосковье</h2>
                    <p className="text-muted-foreground mb-4">15 ноября 2024</p>
                    <p className="text-lg text-muted-foreground mb-6">
                      В минувшие выходные наша команда волонтёров провела масштабную акцию по высадке деревьев в Подмосковье. 
                      Более 200 участников помогли восстановить лесной массив и внести вклад в будущее нашей планеты.
                    </p>
                    <Button className="w-fit">
                      Читать далее
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div 
                    className="h-48"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  ></div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Calendar" size={14} />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Button variant="outline" className="w-full">
                      Читать далее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button size="lg" variant="outline">
                Загрузить ещё новости
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Icon name="Mail" className="text-primary mx-auto mb-6" size={48} />
            <h2 className="text-4xl font-bold mb-6">Подпишитесь на рассылку</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Получайте свежие новости о наших проектах и акциях прямо на почту
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-1 px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">Подписаться</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Leaf" size={28} />
                <span className="text-xl font-bold">ЭкоМир</span>
              </div>
              <p className="text-white/70">
                Вместе создаём устойчивое будущее
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/" className="hover:text-white">Главная</Link></li>
                <li><Link to="/about" className="hover:text-white">О проекте</Link></li>
                <li><Link to="/help" className="hover:text-white">Как помочь</Link></li>
                <li><Link to="/news" className="hover:text-white">Новости</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@ecomir.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20">
                  <Icon name="Twitter" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2024 ЭкоМир. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
