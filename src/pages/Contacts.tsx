import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contacts() {
  const contactInfo = [
    {
      icon: 'Mail',
      title: 'Email',
      value: 'info@ecoplanet.org',
      link: 'mailto:info@ecoplanet.org',
    },
    {
      icon: 'Phone',
      title: 'Телефон',
      value: '+7 (495) 123-45-67',
      link: 'tel:+74951234567',
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      value: 'Москва, ул. Экологическая, 10',
      link: null,
    },
    {
      icon: 'Clock',
      title: 'Время работы',
      value: 'Пн-Пт: 9:00 - 18:00',
      link: null,
    },
  ];

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Экологическая, 10',
      coords: { lat: 55.751244, lng: 37.618423 },
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский проспект, 28',
      coords: { lat: 59.934280, lng: 30.335098 },
    },
    {
      city: 'Казань',
      address: 'ул. Баумана, 15',
      coords: { lat: 55.788926, lng: 49.122707 },
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary to-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80')] bg-cover bg-center opacity-20" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Контакты
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon as any} className="text-primary" size={28} />
                    </div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Напишите нам
                </h2>
                <p className="text-muted-foreground mb-8">
                  Заполните форму, и мы свяжемся с вами в ближайшее время
                </p>

                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="name">Ваше имя *</Label>
                        <Input id="name" placeholder="Иван Иванов" required />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>

                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                      </div>

                      <div>
                        <Label htmlFor="subject">Тема обращения *</Label>
                        <Input id="subject" placeholder="О чём хотите рассказать?" required />
                      </div>

                      <div>
                        <Label htmlFor="message">Сообщение *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Расскажите подробнее..." 
                          rows={5}
                          required 
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Icon name="Send" className="mr-2" size={20} />
                        Отправить сообщение
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Нажимая кнопку, вы соглашаетесь с условиями обработки персональных данных
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Наши офисы
                </h2>
                <p className="text-muted-foreground mb-8">
                  Приходите к нам в гости или присоединяйтесь к волонтёрским акциям
                </p>

                <div className="space-y-4 mb-8">
                  {offices.map((office, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon name="MapPin" className="text-primary" size={24} />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-foreground mb-1">
                              {office.city}
                            </h3>
                            <p className="text-muted-foreground">
                              {office.address}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                    <div className="text-center">
                      <Icon name="Map" className="text-primary mx-auto mb-4" size={48} />
                      <p className="text-muted-foreground">Интерактивная карта</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Мы в социальных сетях
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Следите за новостями и участвуйте в обсуждениях
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <a 
                href="#" 
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Icon name="Facebook" size={28} />
              </a>
              <a 
                href="#" 
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={28} />
              </a>
              <a 
                href="#" 
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Icon name="Twitter" size={28} />
              </a>
              <a 
                href="#" 
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Icon name="Youtube" size={28} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
