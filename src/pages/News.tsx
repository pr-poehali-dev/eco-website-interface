import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Посажено 10,000 деревьев в Подмосковье',
      date: '15 ноября 2024',
      category: 'Достижение',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800',
      excerpt: 'Благодаря 500 волонтёрам мы высадили рекордное количество саженцев за один день',
      icon: 'TreePine',
    },
    {
      id: 2,
      title: 'Запуск образовательной программы для школ',
      date: '10 ноября 2024',
      category: 'Образование',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800',
      excerpt: 'Стартовал курс экологической грамотности для учащихся 5-11 классов',
      icon: 'GraduationCap',
    },
    {
      id: 3,
      title: 'Очищено 50 км береговой линии',
      date: '5 ноября 2024',
      category: 'Акция',
      image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800',
      excerpt: 'Масштабная акция по очистке берегов рек и озёр собрала 1,200 участников',
      icon: 'Waves',
    },
    {
      id: 4,
      title: 'Партнёрство с крупнейшими корпорациями',
      date: '1 ноября 2024',
      category: 'Партнёрство',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800',
      excerpt: 'Пять крупных компаний присоединились к нашим инициативам по озеленению',
      icon: 'Handshake',
    },
    {
      id: 5,
      title: 'Создание заповедной зоны площадью 5,000 га',
      date: '25 октября 2024',
      category: 'Достижение',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800',
      excerpt: 'Утверждён статус особо охраняемой природной территории для нового заповедника',
      icon: 'Shield',
    },
    {
      id: 6,
      title: 'Итоги года: 50,000 деревьев и 12,000 волонтёров',
      date: '20 октября 2024',
      category: 'Отчёт',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800',
      excerpt: 'Подводим итоги успешного года работы проекта ЭкоПланета',
      icon: 'Award',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background mt-16 md:mt-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Новости проекта
            </h1>
            <p className="text-lg text-muted-foreground">
              Следите за нашими достижениями и важными событиями
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" className="h-4 w-4 mr-2" />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-3 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <div className="flex items-center text-primary font-medium text-sm hover:text-accent transition-colors">
                    Читать далее
                    <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Подпишитесь на рассылку
            </h2>
            
            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Будьте в курсе наших новостей
                  </h3>
                  <p className="text-muted-foreground">
                    Получайте еженедельную рассылку о наших проектах и достижениях
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-w-[250px]"
                  />
                  <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium whitespace-nowrap">
                    Подписаться
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Следите за нами в соцсетях
            </h2>
            <p className="text-muted-foreground mb-8">
              Ежедневные обновления и фотоотчёты с мест событий
            </p>
            
            <div className="flex justify-center gap-6">
              <a 
                href="#" 
                className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Icon name="Facebook" className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Icon name="Instagram" className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Icon name="Twitter" className="h-6 w-6" />
              </a>
              <a 
                href="#" 
                className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
              >
                <Icon name="Youtube" className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;