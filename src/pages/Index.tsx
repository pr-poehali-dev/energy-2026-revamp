import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <header className="fixed top-0 w-full z-50 glass-effect">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-energy flex items-center justify-center">
                <Icon name="Zap" className="text-white" size={24} />
              </div>
              <div>
                <div className="text-xl font-bold">Энергосервис</div>
                <div className="text-xs text-muted-foreground">Группа компаний</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'О нас', 'Услуги', 'Проекты', 'Контакты'].map((item, idx) => (
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
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"></div>
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-gradient-energy text-white px-4 py-2">
                <Icon name="Award" size={16} className="mr-2" />
                С 2001 года в Рязани и области
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="text-gradient">Электромонтаж</span>
                <br />
                под ключ
              </h1>
              
              <p className="text-2xl font-semibold text-foreground">
                От проекта до сдачи в эксплуатацию
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Быстро, грамотно, профессионально. Полный цикл электромонтажных работ 
                с гарантией качества и соблюдением сроков
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-energy text-white text-lg px-8 hover:opacity-90">
                  Рассчитать стоимость
                  <Icon name="Calculator" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Наши работы
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {[
                  { value: 24, label: 'года опыта', suffix: '' },
                  { value: 700, label: 'км кабеля', suffix: '+' },
                  { value: 130, label: 'км дорог', suffix: '+' },
                  { value: 175, label: 'объектов', suffix: '+' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-black text-gradient">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-energy opacity-20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/ad646983-ec49-488b-b0c4-e9ed1b7d84a8/files/91be93b9-eb18-4c88-8412-eafed0cfd06b.jpg"
                alt="Электромонтажные работы"
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 bg-gradient-energy text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
            {[
              { icon: 'Building2', value: '38+', label: 'Офисные здания' },
              { icon: 'Home', value: '62+', label: 'ЖК' },
              { icon: 'ShoppingCart', value: '10+', label: 'ТЦ' },
              { icon: 'Factory', value: '22+', label: 'Завода' },
              { icon: 'Cross', value: '31+', label: 'Больница' },
              { icon: 'Hotel', value: '6+', label: 'Гостиниц' },
              { icon: 'Dumbbell', value: '3+', label: 'Спорткомплекса' },
              { icon: 'Library', value: '1+', label: 'Библиотека' }
            ].map((item, idx) => (
              <div key={idx} className="space-y-2">
                <Icon name={item.icon as any} className="mx-auto" size={32} />
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-sm text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="о-нас" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">О компании</Badge>
            <h2 className="text-5xl font-black mb-6">
              Лидер электромонтажа <span className="text-gradient">в регионе</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              24 года мы обеспечиваем энергией объекты любой сложности - от коттеджей до промышленных предприятий
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: 'Rocket',
                title: 'Быстро',
                description: 'Соблюдаем сроки благодаря отлаженным процессам и собственной материально-технической базе'
              },
              {
                icon: 'GraduationCap',
                title: 'Грамотно',
                description: 'Команда сертифицированных специалистов с опытом более 10 лет в электромонтаже'
              },
              {
                icon: 'ShieldCheck',
                title: 'Профессионально',
                description: 'Полное соответствие ГОСТам, СНиПам, пожарной и электробезопасности'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="p-8 glass-effect hover:shadow-xl transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-energy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/ad646983-ec49-488b-b0c4-e9ed1b7d84a8/files/ccdb1f2a-7063-4ef9-9c0c-c3bfcfff9aab.jpg"
              alt="Оборудование"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
              <div className="p-12">
                <h3 className="text-4xl font-bold text-white mb-4">Собственная база оборудования</h3>
                <p className="text-xl text-white/90">
                  Современная техника и инструменты для выполнения работ любой сложности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Направления</Badge>
            <h2 className="text-5xl font-black mb-6">
              Полный спектр <span className="text-gradient">электромонтажных услуг</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Cable',
                title: 'Поставки кабельно-проводниковой продукции',
                description: 'Полный ассортимент кабелей и проводов от ведущих производителей',
                features: ['Силовые кабели', 'Контрольные кабели', 'Провода АППВ, ПВС', 'Оптоволокно']
              },
              {
                icon: 'Cpu',
                title: 'Поставки электрооборудования',
                description: 'Комплектация объектов электротехническим оборудованием',
                features: ['Щитовое оборудование', 'Автоматика', 'Освещение', 'Трансформаторы']
              },
              {
                icon: 'HardHat',
                title: 'Электромонтажные работы',
                description: 'Монтаж электросетей и оборудования под ключ',
                features: ['Прокладка кабеля', 'Монтаж щитов', 'Освещение', 'Заземление']
              },
              {
                icon: 'Wrench',
                title: 'Оперативное обслуживание',
                description: 'Техническое обслуживание и аварийный ремонт',
                features: ['Плановое ТО', 'Аварийный ремонт 24/7', 'Замена оборудования', 'Диагностика']
              },
              {
                icon: 'Pencil',
                title: 'Проектирование',
                description: 'Разработка проектной документации электроснабжения',
                features: ['Проект электроснабжения', 'Расчёты нагрузок', 'Схемы подключения', 'Согласование']
              },
              {
                icon: 'PackageCheck',
                title: 'Работы под ключ',
                description: 'Полный цикл от проекта до сдачи объекта',
                features: ['Проектирование', 'Поставка материалов', 'Монтаж', 'Сдача в эксплуатацию']
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 glass-effect hover:shadow-2xl transition-all hover:-translate-y-2 group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-energy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="проекты" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent">Процесс работы</Badge>
            <h2 className="text-5xl font-black mb-6">
              От заявки до <span className="text-gradient">запуска объекта</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Заявка и выезд',
                description: 'Оставляете заявку, наш специалист выезжает на объект для оценки',
                icon: 'Phone'
              },
              {
                step: '02',
                title: 'Проект и смета',
                description: 'Разрабатываем проектную документацию и составляем точную смету',
                icon: 'FileText'
              },
              {
                step: '03',
                title: 'Монтаж под ключ',
                description: 'Поставляем материалы, выполняем весь комплекс электромонтажных работ',
                icon: 'HardHat'
              },
              {
                step: '04',
                title: 'Сдача объекта',
                description: 'Проводим испытания, оформляем документы, сдаём объект в эксплуатацию',
                icon: 'CheckCircle'
              }
            ].map((step, idx) => (
              <Card key={idx} className="p-8 glass-effect hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-4 right-4 text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.step}
                </div>
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-energy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon name={step.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 relative rounded-3xl overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/ad646983-ec49-488b-b0c4-e9ed1b7d84a8/files/f328875f-22d6-44a7-a8d5-5a8870b81945.jpg"
              alt="Освещённый город"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent flex items-center">
              <div className="p-12 max-w-2xl">
                <h3 className="text-4xl font-bold text-white mb-4">130+ км освещённых дорог</h3>
                <p className="text-xl text-white/90 mb-6">
                  Мы обеспечиваем безопасность и комфорт на дорогах Рязани и области
                </p>
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Посмотреть проекты
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary">Преимущества</Badge>
            <h2 className="text-5xl font-black mb-6">
              Почему выбирают <span className="text-gradient">нас</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: 'Clock',
                title: 'Соблюдение сроков',
                description: 'Выполняем работы точно в установленные сроки благодаря чёткому планированию'
              },
              {
                icon: 'BadgeCheck',
                title: 'Лицензии и допуски',
                description: 'Все необходимые разрешения СРО, Ростехнадзора и сертификаты ISO'
              },
              {
                icon: 'Truck',
                title: 'Собственный склад',
                description: 'Материалы и оборудование всегда в наличии, без задержек поставок'
              },
              {
                icon: 'Users',
                title: 'Опытная команда',
                description: 'Специалисты с опытом от 10 лет, регулярное повышение квалификации'
              },
              {
                icon: 'Shield',
                title: 'Гарантия качества',
                description: 'Гарантия на все виды работ и оборудование до 5 лет'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка 24/7',
                description: 'Круглосуточная диспетчерская служба для аварийных ситуаций'
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 glass-effect hover:shadow-xl transition-all group">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-energy flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={benefit.icon as any} className="text-white" size={28} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Контакты</Badge>
            <h2 className="text-5xl font-black mb-6">
              Готовы начать <span className="text-gradient">ваш проект?</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Свяжитесь с нами удобным способом - мы работаем по всей Рязани и области
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-8 glass-effect">
                <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
                <div className="space-y-6">
                  {[
                    { icon: 'MapPin', label: 'Регион работы', value: 'Рязань и Рязанская область' },
                    { icon: 'Phone', label: 'Телефон', value: '+7 (4912) 555-777' },
                    { icon: 'Mail', label: 'Email', value: 'info@energoservis-rzn.ru' },
                    { icon: 'Clock', label: 'Режим работы', value: 'Пн-Пт: 8:00 - 18:00, Сб: 9:00 - 15:00' }
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

              <Card className="p-8 glass-effect bg-gradient-energy text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                    <Icon name="Zap" size={28} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Аварийная служба</div>
                    <div className="text-white/80">Работаем круглосуточно</div>
                  </div>
                </div>
                <Button size="lg" variant="secondary" className="w-full bg-white text-primary hover:bg-white/90">
                  <Icon name="PhoneCall" size={20} className="mr-2" />
                  +7 (4912) 555-999
                </Button>
              </Card>
            </div>

            <Card className="p-8 glass-effect">
              <h3 className="text-2xl font-bold mb-6">Получить консультацию</h3>
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
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Тип объекта</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Жилой дом / Коттедж</option>
                    <option>Офисное здание</option>
                    <option>Торговый центр</option>
                    <option>Промышленный объект</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Комментарий</label>
                  <textarea
                    rows={4}
                    placeholder="Опишите ваш объект и задачи..."
                    className="w-full px-4 py-3 rounded-lg border border-input bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-gradient-energy text-white text-lg">
                  Отправить заявку
                  <Icon name="Send" size={20} className="ml-2" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
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
                <div className="w-10 h-10 rounded-lg bg-gradient-energy flex items-center justify-center">
                  <Icon name="Zap" className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold">Энергосервис</div>
                  <div className="text-xs text-white/70">Группа компаний</div>
                </div>
              </div>
              <p className="text-white/70 text-sm">
                Электромонтажные работы под ключ с 2001 года
              </p>
            </div>

            {[
              {
                title: 'Услуги',
                links: ['Поставки кабеля', 'Электрооборудование', 'Электромонтаж', 'Проектирование']
              },
              {
                title: 'Информация',
                links: ['О компании', 'Наши проекты', 'Лицензии', 'Вакансии']
              },
              {
                title: 'Контакты',
                links: ['Рязань и область', '+7 (4912) 555-777', 'info@energoservis.ru', 'Пн-Сб: 8:00-18:00']
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
              © 2001-2026 ГК "Энергосервис". Все права защищены.
            </p>
            <div className="flex gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Договор оферты</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
