import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-in">
          Сохраним природу вместе
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
          Присоединяйтесь к нашему экологическому проекту и помогите создать чистое будущее для следующих поколений
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button size="lg" className="text-lg px-8">
            <Icon name="Heart" size={20} className="mr-2" />
            Поддержать проект
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 bg-white/90 hover:bg-white">
            Узнать больше
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
