import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <section className="relative py-20 bg-gradient-to-b from-secondary to-background mt-16 md:mt-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Как помочь проекту
            </h1>
            <p className="text-lg text-muted-foreground">
              Каждый вклад важен — выберите удобный способ поддержки
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="HandHeart" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Волонтёрство
              </h3>
              <p className="text-muted-foreground mb-6">
                Примите участие в наших экологических акциях, посадке деревьев и очистке территорий
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Регулярные акции по выходным</span>
                </li>
                <li className="flex items-start text-sm">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Обучение и сопровождение</span>
                </li>
                <li className="flex items-start text-sm">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Удобное расписание</span>
                </li>
              </ul>
              <Button className="w-full">Стать волонтёром</Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-primary border-2">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Coins" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Пожертвование
              </h3>
              <p className="text-muted-foreground mb-6">
                Финансовая поддержка помогает нам расширять масштабы проектов и достигать больших целей
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center p-3 bg-secondary rounded">
                  <span className="font-medium">500 ₽</span>
                  <span className="text-sm text-muted-foreground">1 дерево</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary rounded">
                  <span className="font-medium">2,000 ₽</span>
                  <span className="text-sm text-muted-foreground">5 деревьев</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-secondary rounded">
                  <span className="font-medium">5,000 ₽</span>
                  <span className="text-sm text-muted-foreground">15 деревьев</span>
                </div>
              </div>
              <Button className="w-full">Сделать взнос</Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Icon name="Share2" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
                Распространение
              </h3>
              <p className="text-muted-foreground mb-6">
                Расскажите о проекте друзьям и в социальных сетях — это тоже важная поддержка
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-sm">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Делитесь нашими материалами</span>
                </li>
                <li className="flex items-start text-sm">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Приглашайте друзей</span>
                </li>
                <li className="flex items-start text-sm">
                  <Icon name="Check" className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Рассказывайте о нас</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full">Поделиться</Button>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
              Другие способы помощи
            </h2>

            <div className="space-y-6">
              <div className="flex items-start p-6 bg-secondary rounded-lg">
                <Icon name="Building" className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Корпоративное партнёрство
                  </h3>
                  <p className="text-muted-foreground">
                    Компании могут поддержать проект через спонсорство, организацию корпоративных волонтёрских дней или экологические инициативы для сотрудников
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-secondary rounded-lg">
                <Icon name="Megaphone" className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Информационная поддержка
                  </h3>
                  <p className="text-muted-foreground">
                    Если у вас есть блог, канал или СМИ — расскажите о нашей деятельности вашей аудитории
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-secondary rounded-lg">
                <Icon name="Lightbulb" className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Экспертиза и консультации
                  </h3>
                  <p className="text-muted-foreground">
                    Специалисты в области экологии, юриспруденции, маркетинга и других сфер могут помочь своими знаниями
                  </p>
                </div>
              </div>

              <div className="flex items-start p-6 bg-secondary rounded-lg">
                <Icon name="Package" className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    Материальная помощь
                  </h3>
                  <p className="text-muted-foreground">
                    Мы принимаем оборудование, инструменты, саженцы и другие материалы для реализации проектов
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Куда идут средства?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <p className="text-muted-foreground">Прямые экологические проекты и акции</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <p className="text-muted-foreground">Образовательные программы</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">10%</div>
                <p className="text-muted-foreground">Административные расходы</p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">5%</div>
                <p className="text-muted-foreground">Развитие инфраструктуры</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Начните помогать сегодня
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Каждое действие приближает нас к зелёному будущему
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Icon name="Heart" className="mr-2 h-5 w-5" />
              Поддержать сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;