import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ваше сообщение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Leaf" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary font-heading">ЭкоМир</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
                О проекте
              </button>
              <button onClick={() => scrollToSection('help')} className="text-foreground hover:text-primary transition-colors">
                Как помочь
              </button>
              <button onClick={() => scrollToSection('news')} className="text-foreground hover:text-primary transition-colors">
                Новости
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
              <Button onClick={() => scrollToSection('help')} className="bg-primary hover:bg-primary/90">
                Поддержать
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden h-[600px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200')] bg-cover bg-center opacity-40"></div>
            <div className="relative z-10 text-center max-w-4xl px-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 font-heading">
                Сохраним природу вместе
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                Присоединяйтесь к экологическому движению и помогите сделать нашу планету чище и зеленее
              </p>
              <Button onClick={() => scrollToSection('help')} size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                Поддержать проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading animate-slide-up">О проекте</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="animate-fade-in">
                <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Icon name="Target" className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 font-heading">Наша миссия</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Мы стремимся к сохранению природных ресурсов и созданию устойчивой экосистемы для будущих поколений. 
                      Наша цель - объединить людей вокруг идеи защиты окружающей среды.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Card className="h-full border-2 border-primary/20 hover:border-primary/40 transition-colors">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <Icon name="Users" className="text-primary" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 font-heading">Что мы делаем</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Организуем экологические акции, проводим образовательные программы, высаживаем деревья 
                      и очищаем природные территории от мусора вместе с волонтерами.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2 font-heading">15,000+</div>
                <p className="text-muted-foreground">Посаженных деревьев</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2 font-heading">2,500+</div>
                <p className="text-muted-foreground">Активных участников</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2 font-heading">50+</div>
                <p className="text-muted-foreground">Проведенных акций</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="help" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading">Как помочь</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Heart" className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-heading">Разовая поддержка</h3>
                  <p className="text-muted-foreground mb-6">
                    Сделайте единовременное пожертвование и помогите реализовать наши экологические проекты
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">Поддержать</Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="CalendarDays" className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-heading">Стать волонтером</h3>
                  <p className="text-muted-foreground mb-6">
                    Присоединяйтесь к нашим экологическим акциям и мероприятиям по озеленению
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">Присоединиться</Button>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Share2" className="text-primary" size={40} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-heading">Расскажите о нас</h3>
                  <p className="text-muted-foreground mb-6">
                    Поделитесь информацией о проекте с друзьями и в социальных сетях
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90">Поделиться</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading">Новости</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                  <Icon name="Sprout" className="text-primary" size={64} />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">15 ноября 2024</div>
                  <h3 className="text-xl font-semibold mb-3 font-heading">Посадили 1000 деревьев</h3>
                  <p className="text-muted-foreground">
                    В минувшие выходные наши волонтеры высадили более тысячи саженцев в городском парке
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-accent/30 to-secondary/30 flex items-center justify-center">
                  <Icon name="Award" className="text-primary" size={64} />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">10 ноября 2024</div>
                  <h3 className="text-xl font-semibold mb-3 font-heading">Награда за экологию</h3>
                  <p className="text-muted-foreground">
                    Наш проект получил региональную награду за вклад в сохранение окружающей среды
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                <div className="h-48 bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={64} />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-muted-foreground mb-2">5 ноября 2024</div>
                  <h3 className="text-xl font-semibold mb-3 font-heading">Новые участники</h3>
                  <p className="text-muted-foreground">
                    За последний месяц к проекту присоединилось более 300 новых волонтеров
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading">Наши проекты</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600', title: 'Озеленение города' },
                { image: 'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=600', title: 'Очистка рек' },
                { image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600', title: 'Лесные тропы' },
                { image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=600', title: 'Защита природы' },
              ].map((item, idx) => (
                <div key={idx} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white font-heading">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading">Свяжитесь с нами</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <Card className="border-2 border-primary/20">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Ваше имя</label>
                        <Input
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="border-primary/30 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Сообщение</label>
                        <Textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={5}
                          className="border-primary/30 focus:border-primary resize-none"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Отправить сообщение
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-heading">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Экологическая, д. 12</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-heading">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 font-heading">Email</h3>
                    <p className="text-muted-foreground">info@ecomir.ru</p>
                  </div>
                </div>
                <div className="pt-6">
                  <h3 className="font-semibold mb-4 font-heading">Мы в социальных сетях</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:bg-primary hover:text-white">
                      <Icon name="Share2" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:bg-primary hover:text-white">
                      <Icon name="MessageCircle" size={20} />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full border-primary/30 hover:bg-primary hover:text-white">
                      <Icon name="Instagram" size={20} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Icon name="Leaf" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary font-heading">ЭкоМир</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Вместе мы создаем чистое и зеленое будущее для следующих поколений
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 ЭкоМир. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
