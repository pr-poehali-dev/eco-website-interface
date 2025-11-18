import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background mt-16 md:mt-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады ответить на ваши вопросы и предложения
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Адрес
              </h3>
              <p className="text-muted-foreground">
                Москва, ул. Зелёная, д. 1<br />
                офис 301
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Телефон
              </h3>
              <p className="text-muted-foreground">
                +7 (495) 123-45-67<br />
                Пн-Пт: 9:00 - 18:00
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                Email
              </h3>
              <p className="text-muted-foreground">
                info@ecoplanet.org<br />
                support@ecoplanet.org
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Форма обратной связи
              </h2>
              <p className="text-muted-foreground mb-8">
                Заполните форму, и мы свяжемся с вами в ближайшее время
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Введите ваш email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Напишите ваше сообщение"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить сообщение
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                Где нас найти
              </h2>
              
              <div className="h-[400px] bg-secondary rounded-lg mb-8 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2858717205!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sen!2sru!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Карта местоположения"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    График работы
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Понедельник - Пятница</span>
                      <span className="font-medium">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Суббота</span>
                      <span className="font-medium">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Воскресенье</span>
                      <span className="font-medium">Выходной</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Следите за нами
                  </h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                      <Icon name="Facebook" className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                      <Icon name="Instagram" className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                      <Icon name="Twitter" className="h-5 w-5" />
                    </a>
                    <a href="#" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                      <Icon name="Youtube" className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Часто задаваемые вопросы
            </h2>
            <p className="text-muted-foreground mb-8">
              Возможно, ответ на ваш вопрос уже есть здесь
            </p>

            <div className="space-y-4 text-left">
              <Card className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Как я могу стать волонтёром?
                </h3>
                <p className="text-muted-foreground">
                  Заполните форму на странице "Как помочь" или напишите нам на support@ecoplanet.org. Мы свяжемся с вами и расскажем о ближайших акциях.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Куда идут пожертвования?
                </h3>
                <p className="text-muted-foreground">
                  60% средств направляется на прямые экологические проекты, 25% на образование, 10% на административные расходы и 5% на развитие инфраструктуры.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                  Можно ли посетить ваш офис?
                </h3>
                <p className="text-muted-foreground">
                  Да, мы работаем по адресу: Москва, ул. Зелёная, д. 1, офис 301. Рекомендуем предварительно записаться по телефону.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;