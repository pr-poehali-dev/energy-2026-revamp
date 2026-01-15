import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <header className="fixed top-0 w-full z-50 glass-effect">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-gradient">Energo62</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'О компании', 'Услуги', 'Проекты', 'Документы', 'Контакты'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToSection(item === 'Главная' ? 'hero' : item.toLowerCase().replace(/\s/g, '-'))}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <Button className="bg-gradient-energy text-white">
              <Icon name="Phone" size={18} className="mr-2" />
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-gradient-energy text-white px-4 py-2">
                <Icon name="Award" size={16} className="mr-2" />
                Лидер энергетической отрасли
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-gradient">Энергия</span>
                <br />
                будущего
                <br />
                уже сегодня
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Проектирование, строительство и обслуживание энергетических объектов 
                с применением передовых технологий и соблюдением мировых стандартов качества
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-energy text-white text-lg px-8 hover:opacity-90">
                  Наши проекты
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Play" size={20} className="mr-2" />
                  О компании
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { value: '25+', label: 'Лет опыта' },
                  { value: '500+', label: 'Проектов' },
                  { value: '150+', label: 'Специалистов' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-black text-gradient">{stat.value}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-energy opacity-20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/ad646983-ec49-488b-b0c4-e9ed1b7d84a8/files/bd0cdc31-8f00-43a8-8646-81310b618ab6.jpg"
                alt="Энергетическая инфраструктура"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о-компании" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-secondary/10 text-secondary">О компании</Badge>
            <h2 className="text-5xl font-black mb-6">
              Надёжный партнёр в <span className="text-gradient">энергетике</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              С 1999 года компания Energo62 специализируется на комплексных решениях 
              в области энергоснабжения, электромонтажа и автоматизации промышленных объектов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 glass-effect hover:shadow-xl transition-all animate-slide-in-left">
              <Icon name="Target" className="text-primary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Наша миссия</h3>
              <p className="text-muted-foreground leading-relaxed">
                Обеспечение бесперебойного энергоснабжения промышленных и коммерческих объектов 
                с максимальной эффективностью и минимальным воздействием на окружающую среду
              </p>
            </Card>

            <Card className="p-8 glass-effect hover:shadow-xl transition-all animate-slide-in-right">
              <Icon name="Eye" className="text-secondary mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">Наше видение</h3>
              <p className="text-muted-foreground leading-relaxed">
                Стать ведущей энергетической компанией региона, устанавливающей стандарты 
                качества, инновационности и экологической ответственности в отрасли
              </p>
            </Card>
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/ad646983-ec49-488b-b0c4-e9ed1b7d84a8/files/443d8ff9-145c-44e1-b0fb-1fcfb6ce0b9e.jpg"
              alt="Команда Energo62"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-12">
                <h3 className="text-4xl font-bold text-white mb-4">Профессиональная команда</h3>
                <p className="text-xl text-white/90">
                  Более 150 специалистов с высшим техническим образованием и многолетним опытом
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Услуги</Badge>
            <h2 className="text-5xl font-black mb-6">
              Полный цикл <span className="text-gradient">энергетических решений</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: 'Lightbulb',
                title: 'Проектирование',
                description: 'Разработка проектной документации для энергообъектов любой сложности',
                color: 'primary'
              },
              {
                icon: 'HardHat',
                title: 'Строительство',
                description: 'Строительство и монтаж электрических сетей и подстанций',
                color: 'secondary'
              },
              {
                icon: 'Cpu',
                title: 'Автоматизация',
                description: 'Внедрение систем автоматического управления и диспетчеризации',
                color: 'accent'
              },
              {
                icon: 'Wrench',
                title: 'Обслуживание',
                description: 'Техническое обслуживание и ремонт энергетического оборудования',
                color: 'primary'
              },
              {
                icon: 'LineChart',
                title: 'Энергоаудит',
                description: 'Анализ и оптимизация энергопотребления предприятий',
                color: 'secondary'
              },
              {
                icon: 'Shield',
                title: 'Безопасность',
                description: 'Обеспечение электробезопасности и соответствие нормам',
                color: 'accent'
              }
            ].map((service, idx) => (
              <Card
                key={idx}
                className="p-8 glass-effect hover:shadow-2xl transition-all hover:-translate-y-2 group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${service.color} to-${service.color}/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="проекты" className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Проекты</Badge>
            <h2 className="text-5xl font-black mb-6">
              Реализованные <span className="text-gradient">проекты</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Модернизация подстанции 110кВ',
                client: 'ПАО "Энергосеть"',
                year: '2024',
                scope: '45 млн ₽'
              },
              {
                title: 'Строительство ТЭЦ "Восток"',
                client: 'Газпром Энергохолдинг',
                year: '2023',
                scope: '250 млн ₽'
              },
              {
                title: 'Солнечная электростанция 5МВт',
                client: 'ООО "ЭкоЭнерго"',
                year: '2023',
                scope: '180 млн ₽'
              },
              {
                title: 'Система диспетчеризации ЛЭП',
                client: 'МРСК Центра',
                year: '2024',
                scope: '32 млн ₽'
              },
              {
                title: 'Реконструкция РТП "Север"',
                client: 'Администрация региона',
                year: '2023',
                scope: '67 млн ₽'
              },
              {
                title: 'Электроснабжение ТЦ "Гранд"',
                client: 'ООО "РосРитейл"',
                year: '2024',
                scope: '28 млн ₽'
              }
            ].map((project, idx) => (
              <Card
                key={idx}
                className="overflow-hidden glass-effect hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className="h-48 bg-gradient-energy relative overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/projects/ad646983-ec49-488b-b0c4-e9ed1b7d84a8/files/21b98456-0644-465f-abfa-6a7ccd3d7b21.jpg"
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white text-primary">{project.year}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.client}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gradient">{project.scope}</span>
                    <Icon name="ArrowRight" className="text-primary group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="документы" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Документы</Badge>
            <h2 className="text-5xl font-black mb-6">
              <span className="text-gradient">Лицензии</span> и сертификаты
            </h2>
            <p className="text-lg text-muted-foreground">
              Все необходимые разрешения и подтверждения соответствия государственным стандартам
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'FileCheck',
                title: 'Лицензия СРО',
                description: 'Строительство объектов электроэнергетики',
                number: '№ ГС-2-99-02-25-0-7706015523-012345-1',
                date: 'до 15.08.2027'
              },
              {
                icon: 'Award',
                title: 'ISO 9001:2015',
                description: 'Система менеджмента качества',
                number: '№ РОСС RU.31469.04ИЭФ0',
                date: 'до 20.12.2026'
              },
              {
                icon: 'ShieldCheck',
                title: 'ISO 14001:2015',
                description: 'Экологический менеджмент',
                number: '№ РОСС RU.31469.04ИЭЭ0',
                date: 'до 20.12.2026'
              },
              {
                icon: 'FileText',
                title: 'ISO 45001:2018',
                description: 'Охрана труда и безопасность',
                number: '№ РОСС RU.31469.04ИЭБ0',
                date: 'до 20.12.2026'
              },
              {
                icon: 'CheckCircle',
                title: 'Допуск Ростехнадзора',
                description: 'Эксплуатация электроустановок',
                number: '№ РТН-Э-012345',
                date: 'до 10.03.2028'
              },
              {
                icon: 'Star',
                title: 'Лауреат премии',
                description: '"Энергоэффективность года 2023"',
                number: 'Минэнерго РФ',
                date: '18.10.2023'
              }
            ].map((doc, idx) => (
              <Card
                key={idx}
                className="p-6 glass-effect hover:shadow-xl transition-all hover:border-primary/50 cursor-pointer group"
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-energy flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={doc.icon as any} className="text-white" size={28} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                    <p className="text-xs text-muted-foreground font-mono mb-1">{doc.number}</p>
                    <Badge variant="outline" className="text-xs">{doc.date}</Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-8 bg-gradient-energy text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Скачать все документы</h3>
                <p className="text-white/90">Полный пакет лицензий и сертификатов в формате PDF</p>
              </div>
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Icon name="Download" size={20} className="mr-2" />
                Скачать
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="контакты" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Контакты</Badge>
            <h2 className="text-5xl font-black mb-6">
              Свяжитесь <span className="text-gradient">с нами</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-8 glass-effect">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  {[
                    { icon: 'MapPin', label: 'Адрес', value: 'г. Рязань, ул. Энергетиков, д. 15' },
                    { icon: 'Phone', label: 'Телефон', value: '+7 (4912) 555-123' },
                    { icon: 'Mail', label: 'Email', value: 'info@energo62.ru' },
                    { icon: 'Clock', label: 'Режим работы', value: 'Пн-Пт: 8:00 - 18:00' }
                  ].map((contact, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} className="text-primary" size={24} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{contact.label}</div>
                        <div className="font-semibold">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 glass-effect">
                <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
                <div className="flex gap-4">
                  {['Facebook', 'Twitter', 'Linkedin', 'Instagram'].map((social, idx) => (
                    <Button
                      key={idx}
                      size="icon"
                      variant="outline"
                      className="w-12 h-12 rounded-full hover:bg-gradient-energy hover:text-white hover:border-transparent"
                    >
                      <Icon name={social as any} size={20} />
                    </Button>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="p-8 glass-effect">
              <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Петров"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input
                    type="email"
                    placeholder="ivan@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-energy text-white text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-primary" size={32} />
                <span className="text-2xl font-bold">Energo62</span>
              </div>
              <p className="text-white/70 text-sm">
                Профессиональные решения в области энергетики с 1999 года
              </p>
            </div>

            {[
              {
                title: 'Компания',
                links: ['О нас', 'Команда', 'Карьера', 'Новости']
              },
              {
                title: 'Услуги',
                links: ['Проектирование', 'Строительство', 'Обслуживание', 'Энергоаудит']
              },
              {
                title: 'Поддержка',
                links: ['Контакты', 'Документы', 'FAQ', 'Партнёрам']
              }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              © 2024 Energo62. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
