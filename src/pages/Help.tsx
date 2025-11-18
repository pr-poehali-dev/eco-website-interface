import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Help = () => {
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
              <Link to="/help" className="text-primary font-semibold">Как помочь</Link>
              <Link to="/news" className="text-foreground hover:text-primary transition-colors">Новости</Link>
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
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Как вы можете помочь</h1>
            <p className="text-xl text-muted-foreground">
              Каждое действие имеет значение. Выберите способ, который подходит именно вам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Финансовая поддержка</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Ваши пожертвования помогают реализовывать экологические проекты и расширять нашу деятельность
                </p>
                <Button className="w-full" size="lg">
                  Сделать взнос
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Users" className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Волонтёрство</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Присоединяйтесь к акциям по очистке территорий, высадке деревьев и экологическим мероприятиям
                </p>
                <Button className="w-full" size="lg">
                  Стать волонтёром
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Share2" className="text-primary" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Расскажите друзьям</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  Распространяйте информацию о проекте в социальных сетях и привлекайте новых участников
                </p>
                <Button variant="outline" className="w-full" size="lg">
                  Поделиться
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Варианты пожертвований</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-primary mb-2">1000₽</div>
                    <div className="text-muted-foreground">Базовая поддержка</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">10 саженцев деревьев</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">Благодарственное письмо</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">Электронный сертификат</span>
                    </li>
                  </ul>
                  <Button className="w-full">Поддержать</Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover:shadow-xl transition-all transform md:scale-105">
                <CardContent className="p-8">
                  <div className="text-center mb-2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-primary mb-2">5000₽</div>
                    <div className="text-muted-foreground">Активная поддержка</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">50 саженцев деревьев</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">Именной сертификат</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">Фото посаженных деревьев</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">Упоминание на сайте</span>
                    </li>
                  </ul>
                  <Button className="w-full">Поддержать</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-primary mb-2">10000₽</div>
                    <div className="text-muted-foreground">Максимум</div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">100 саженцев деревьев</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">VIP сертификат</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">Видеоотчёт о проекте</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-sm">Личная встреча с командой</span>
                    </li>
                  </ul>
                  <Button className="w-full">Поддержать</Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Или выберите свою сумму</p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input 
                  type="number" 
                  placeholder="Введите сумму" 
                  className="flex-1 px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="lg">Пожертвовать</Button>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Как стать волонтёром</h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Регистрация</h3>
                <p className="text-sm text-muted-foreground">Заполните простую форму на сайте</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Выбор акции</h3>
                <p className="text-sm text-muted-foreground">Найдите подходящее мероприятие в календаре</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Участие</h3>
                <p className="text-sm text-muted-foreground">Приходите и помогайте природе вместе с нами</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-semibold mb-2">Награды</h3>
                <p className="text-sm text-muted-foreground">Получите сертификаты и новых друзей</p>
              </div>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-6">Остались вопросы?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом, и мы с радостью ответим на все ваши вопросы
            </p>
            <Link to="/contacts">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Написать нам
              </Button>
            </Link>
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

export default Help;
