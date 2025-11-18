import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
  const stats = [
    { icon: 'Trees', value: '50,000+', label: 'Посаженных деревьев' },
    { icon: 'Droplets', value: '15', label: 'Очищенных водоёмов' },
    { icon: 'Users', value: '10,000+', label: 'Волонтёров' },
    { icon: 'Heart', value: '500+', label: 'Партнёров' },
  ];

  const projects = [
    {
      title: 'Лесовосстановление',
      description: 'Высаживаем новые леса и восстанавливаем пострадавшие территории',
      icon: 'Trees',
    },
    {
      title: 'Очистка водоёмов',
      description: 'Защищаем реки и озёра от загрязнений для сохранения экосистемы',
      icon: 'Waves',
    },
    {
      title: 'Экообразование',
      description: 'Обучаем детей и взрослых бережному отношению к природе',
      icon: 'BookOpen',
    },
    {
      title: 'Защита животных',
      description: 'Сохраняем среду обитания редких видов животных',
      icon: 'Bird',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary to-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80')] bg-cover bg-center opacity-20" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
              Вместе сохраним<br />нашу планету
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к экологическому движению и помогите защитить природу для будущих поколений
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Heart" className="mr-2" size={20} />
                Поддержать проект
              </Button>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full">
                  Узнать больше
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Icon name={stat.icon as any} className="text-primary mx-auto mb-4" size={48} />
                  <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Наши проекты
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Мы работаем над различными направлениями для защиты окружающей среды
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon name={project.icon as any} className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-primary text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Станьте частью изменений
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Ваша поддержка помогает реализовывать проекты по защите окружающей среды
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/help">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 w-full">
                  Как помочь
                </Button>
              </Link>
              <Link to="/contacts">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-primary w-full">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
