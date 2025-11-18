import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background mt-16 md:mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560')] bg-cover bg-center" />
        </div>
        
        <div className="container relative z-10 text-center px-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
            Сохраним природу вместе
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к нашему экологическому проекту и помогите сделать планету чище и зеленее для будущих поколений
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Heart" className="mr-2 h-5 w-5" />
              Поддержать проект
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
              <Link to="/about">
                Узнать больше
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Наши достижения
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              За последние годы мы достигли значительных результатов в области охраны окружающей среды
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-secondary hover:shadow-lg transition-shadow">
              <Icon name="TreePine" className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-heading font-bold text-primary mb-2">50,000+</h3>
              <p className="text-muted-foreground">Посаженных деревьев</p>
            </div>

            <div className="text-center p-8 rounded-lg bg-secondary hover:shadow-lg transition-shadow">
              <Icon name="Users" className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-heading font-bold text-primary mb-2">12,000+</h3>
              <p className="text-muted-foreground">Активных участников</p>
            </div>

            <div className="text-center p-8 rounded-lg bg-secondary hover:shadow-lg transition-shadow">
              <Icon name="Recycle" className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-4xl font-heading font-bold text-primary mb-2">200+</h3>
              <p className="text-muted-foreground">Тонн переработанных отходов</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Почему это важно?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Изменение климата, загрязнение окружающей среды и утрата биоразнообразия — это глобальные вызовы, требующие немедленных действий. Наш проект направлен на восстановление экосистем и создание устойчивого будущего.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="Check" className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span className="text-foreground">Восстановление лесов и природных территорий</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span className="text-foreground">Сокращение углеродного следа</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Check" className="h-6 w-6 text-primary mr-3 mt-0.5" />
                  <span className="text-foreground">Образовательные программы для молодёжи</span>
                </li>
              </ul>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200" 
                alt="Природа" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Как вы можете помочь
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый вклад имеет значение. Выберите способ поддержки проекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Icon name="HandHeart" className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Волонтёрство</h3>
              <p className="text-muted-foreground mb-6">
                Примите участие в наших акциях по посадке деревьев и очистке территорий
              </p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/help">Стать волонтёром</Link>
              </Button>
            </div>

            <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Icon name="Coins" className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Пожертвование</h3>
              <p className="text-muted-foreground mb-6">
                Поддержите проект финансово — каждый рубль идёт на защиту природы
              </p>
              <Button className="w-full">Сделать взнос</Button>
            </div>

            <div className="border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <Icon name="Share2" className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Распространение</h3>
              <p className="text-muted-foreground mb-6">
                Расскажите друзьям о проекте и помогите нам охватить больше людей
              </p>
              <Button variant="outline" className="w-full">Поделиться</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 animate-fade-in">
            Готовы изменить мир к лучшему?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к тысячам единомышленников, которые уже начали действовать
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Heart" className="mr-2 h-5 w-5" />
            Поддержать сейчас
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
