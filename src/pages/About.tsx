import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background mt-16 md:mt-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              О нашем проекте
            </h1>
            <p className="text-lg text-muted-foreground">
              Мы создаём будущее, где природа и человек живут в гармонии
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Наша миссия
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ЭкоПланета — это комплексная программа по восстановлению и сохранению природных экосистем. Мы верим, что каждый человек может внести свой вклад в защиту окружающей среды, и наша задача — предоставить инструменты и возможности для этого.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                С 2020 года мы реализуем проекты по лесовосстановлению, защите биоразнообразия и экологическому просвещению. Наша команда состоит из профессиональных экологов, волонтёров и всех, кому небезразлична судьба планеты.
              </p>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200" 
                alt="Миссия" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200" 
                alt="Цели" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="order-1 md:order-2 animate-slide-up">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Наши цели
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Icon name="TreePine" className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Восстановить 100,000 гектаров леса к 2030 году</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Leaf" className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Сократить выбросы CO₂ на 500,000 тонн ежегодно</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Users" className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Привлечь 100,000 волонтёров к экологическим акциям</span>
                </li>
                <li className="flex items-start">
                  <Icon name="GraduationCap" className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Обучить 50,000 детей и подростков экологической грамотности</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Наши ценности
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Забота</h3>
              <p className="text-muted-foreground">
                Мы заботимся о природе так же, как о самых близких людях
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="HandshakeIcon" className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Сотрудничество</h3>
              <p className="text-muted-foreground">
                Вместе мы сильнее и можем достичь большего
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Результат</h3>
              <p className="text-muted-foreground">
                Каждое действие должно приносить конкретную пользу природе
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Наша команда
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Профессионалы, объединённые общей целью — защитой природы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { name: 'Анна Петрова', role: 'Руководитель проекта', icon: 'User' },
              { name: 'Михаил Сидоров', role: 'Главный эколог', icon: 'User' },
              { name: 'Елена Иванова', role: 'Координатор волонтёров', icon: 'User' },
              { name: 'Дмитрий Козлов', role: 'Специалист по PR', icon: 'User' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={member.icon as any} className="h-16 w-16 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Станьте частью движения
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Присоединяйтесь к нам и помогите сохранить планету для будущих поколений
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            <Icon name="Heart" className="mr-2 h-5 w-5" />
            Поддержать проект
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
