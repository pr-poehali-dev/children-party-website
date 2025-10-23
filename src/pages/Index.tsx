import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎉",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', date: '', message: '' });
  };

  const services = [
    {
      title: "Аниматоры",
      description: "Профессиональные аниматоры в костюмах любимых персонажей",
      icon: "PartyPopper",
      price: "от 3000₽/час"
    },
    {
      title: "Ведущие",
      description: "Опытные ведущие для проведения детских праздников",
      icon: "Mic2",
      price: "от 5000₽/час"
    },
    {
      title: "Шоу-программы",
      description: "Увлекательные шоу: научные опыты, фокусы, квесты",
      icon: "Sparkles",
      price: "от 4000₽/час"
    },
    {
      title: "Оформление",
      description: "Яркое оформление шарами и декорациями",
      icon: "Gift",
      price: "от 2500₽"
    }
  ];

  const gallery = [
    "https://cdn.poehali.dev/projects/89abf3ae-5a6b-4e87-98c6-8447e9efd565/files/ad9c2e09-738b-43e8-8b61-ba1c9e23483c.jpg",
    "https://cdn.poehali.dev/projects/89abf3ae-5a6b-4e87-98c6-8447e9efd565/files/728e5cf9-3674-4c55-965c-a017d0474357.jpg",
    "https://cdn.poehali.dev/projects/89abf3ae-5a6b-4e87-98c6-8447e9efd565/files/9494cf64-9d7a-4761-aaed-f32598633ecb.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-blue-50 to-yellow-50">
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/files/4f4dc899-e973-4440-ab21-94b3407cdd1d.jpg')] bg-cover bg-center opacity-10"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center gap-4 animate-bounce-slow">
            <span className="text-6xl animate-float">🎈</span>
            <span className="text-6xl animate-float" style={{ animationDelay: '0.3s' }}>🎉</span>
            <span className="text-6xl animate-float" style={{ animationDelay: '0.6s' }}>🎊</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            СЮРПРИЗ
          </h1>
          
          <p className="text-3xl md:text-4xl mb-4 text-foreground font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Детские праздники
          </p>
          
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Превращаем обычные дни в волшебные приключения! ✨
          </p>
          
          <Button 
            size="lg" 
            className="text-xl px-10 py-7 rounded-full shadow-2xl hover:scale-110 transition-transform animate-fade-in bg-primary text-primary-foreground"
            style={{ animationDelay: '0.6s' }}
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать праздник 🎁
          </Button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground">
            Наши услуги
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Выберите то, что сделает праздник незабываемым
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:scale-105 transition-transform hover:shadow-2xl cursor-pointer border-2 border-primary/20 bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 mx-auto">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-center text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-center text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-foreground">
            Галерея наших праздников
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Посмотрите, как весело было на наших мероприятиях! 📸
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform cursor-pointer"
              >
                <img 
                  src={image} 
                  alt={`Праздник ${index + 1}`} 
                  className="w-full h-80 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🎂</div>
            <h2 className="text-5xl font-bold mb-4 text-foreground">
              Забронировать праздник
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами в течение часа!
            </p>
          </div>
          
          <Card className="border-2 border-primary/20 shadow-2xl bg-white">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg">Ваше имя</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Как к вам обращаться?"
                    required
                    className="mt-2 text-lg h-12 border-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-lg">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="mt-2 text-lg h-12 border-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="date" className="text-lg">Дата праздника</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                    className="mt-2 text-lg h-12 border-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-lg">Комментарий</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем празднике: возраст именинника, количество гостей, пожелания..."
                    rows={5}
                    className="mt-2 text-lg border-2"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-xl py-6 rounded-full shadow-lg hover:scale-105 transition-transform bg-primary text-primary-foreground"
                >
                  Отправить заявку 🚀
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-4">СЮРПРИЗ</h3>
          <p className="text-xl mb-6">Детские праздники, которые запомнятся навсегда!</p>
          <div className="flex justify-center gap-8 text-2xl mb-6">
            <a href="tel:+79110529886" className="hover:scale-110 transition-transform">📞 +7 (911) 052-98-86</a>
          </div>
          <p className="text-lg opacity-90">© 2024 Сюрприз. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;