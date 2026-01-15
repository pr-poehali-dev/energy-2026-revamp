import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-accent text-white sticky top-0 z-50 border-b-2 border-primary">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-orange rounded flex items-center justify-center">
                <Icon name="Zap" className="text-accent" size={28} />
              </div>
              <div>
                <div className="text-2xl font-bold">ЭНЕРГОСЕРВИС</div>
                <div className="text-xs text-muted opacity-80">Группа компаний с 2001 года</div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
              <button onClick={() => scrollTo('about')} className="hover:text-primary transition-colors">О компании</button>
              <button onClick={() => scrollTo('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollTo('projects')} className="hover:text-primary transition-colors">Проекты</button>
              <button onClick={() => scrollTo('advantages')} className="hover:text-primary transition-colors">Преимущества</button>
              <button onClick={() => scrollTo('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>

            <Button className="bg-gradient-orange text-accent hover:opacity-90">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </nav>
      </header>

      <section className="relative bg-accent text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-orange text-accent px-4 py-2 text-sm font-semibold">
                <Icon name="Award" size={16} className="mr-2" />
                24 ГОДА НА РЫНКЕ РЯЗАНИ
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                ЭЛЕКТРОМОНТАЖ
                <br />
                <span className="text-gradient-orange">ПОД КЛЮЧ</span>
              </h1>

              <p className="text-2xl font-semibold text-primary">
                От проекта до сдачи в эксплуатацию
              </p>

              <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                Комплексные электромонтажные работы для промышленных, коммерческих
                и жилых объектов. Быстро. Грамотно. Профессионально.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-gradient-orange text-accent hover:opacity-90 text-lg px-8">
                  Получить расчёт
                  <Icon name="Calculator" size={22} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-accent text-lg px-8">
                  Наши объекты
                  <Icon name="Building2" size={22} className="ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div>
                  <div className="text-4xl font-black text-primary mb-2">700+</div>
                  <div className="text-sm text-white/80">км кабеля проложено</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-secondary mb-2">175+</div>
                  <div className="text-sm text-white/80">объектов запитано</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-2">24/7</div>
                  <div className="text-sm text-white/80">аварийная служба</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-orange opacity-20 blur-3xl rounded-full"></div>
              <img
                src="https://cdn.poehali.dev/projects/ad646983-ec49-488b-b0c4-e9ed1b7d84a8/files/9f39990e-7962-4ed2-9b7b-9127f779168d.jpg"
                alt="Электрооборудование"
                className="relative rounded-2xl shadow-2xl border-4 border-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-muted/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary px-4 py-2 mb-6">О компании</Badge>
              <h2 className="text-4xl font-black text-accent mb-6">
                Лидер энергомонтажа
                <br />
                <span className="text-gradient-orange">Рязанской области</span>
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-accent">Группа компаний «Энергосервис»</strong> —
                  это команда профессионалов с 24-летним опытом работы в сфере электромонтажа
                  и энергоснабжения.
                </p>
                <p>
                  Мы реализовали более <strong>175 крупных проектов</strong>, проложили
                  свыше <strong>700 километров кабеля</strong> и обеспечили энергией
                  десятки промышленных предприятий, жилых комплексов и коммерческих объектов.
                </p>
                <p>
                  Наша миссия — обеспечить надёжное и безопасное электроснабжение объектов
                  любой сложности с соблюдением всех норм и стандартов.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: 'Building2', value: '38+', label: 'Офисных зданий' },
                { icon: 'Home', value: '62+', label: 'Жилых комплексов' },
                { icon: 'ShoppingCart', value: '10+', label: 'Торговых центров' },
                { icon: 'Factory', value: '22+', label: 'Промышленных объектов' },
                { icon: 'Cross', value: '31+', label: 'Медучреждений' },
                { icon: 'Sun', value: '130+', label: 'Км освещённых дорог' }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 border-l-4 border-primary hover:shadow-lg transition-all group">
                  <Icon name={item.icon as any} className="text-primary mb-3 group-hover:scale-110 transition-transform" size={36} />
                  <div className="text-3xl font-black text-accent mb-1">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-secondary/10 text-secondary px-4 py-2 mb-6">Наши услуги</Badge>
            <h2 className="text-5xl font-black text-accent mb-4">
              Полный спектр <span className="text-gradient-orange">электромонтажных работ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              От проектирования до сдачи объекта в эксплуатацию — работаем под ключ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Cable',
                title: 'Поставки кабельно-проводниковой продукции',
                description: 'Силовые и контрольные кабели, провода АППВ, ПВС, оптоволокно от ведущих производителей',
                features: ['Силовые кабели', 'Контрольные кабели', 'Провода', 'Оптоволокно']
              },
              {
                icon: 'Cpu',
                title: 'Поставки электрооборудования',
                description: 'Комплектация объектов щитовым оборудованием, автоматикой, осветительными приборами',
                features: ['Щитовое оборудование', 'Автоматика', 'Освещение', 'Трансформаторы']
              },
              {
                icon: 'HardHat',
                title: 'Электромонтажные работы',
                description: 'Прокладка кабельных линий, монтаж электросетей, установка распределительных щитов',
                features: ['Прокладка кабеля', 'Монтаж щитов', 'Освещение объектов', 'Заземление']
              },
              {
                icon: 'Wrench',
                title: 'Оперативное обслуживание',
                description: 'Техническое обслуживание, плановые работы, аварийный ремонт оборудования 24/7',
                features: ['Плановое ТО', 'Аварийный ремонт', 'Замена оборудования', 'Диагностика']
              },
              {
                icon: 'Pencil',
                title: 'Проектирование',
                description: 'Разработка проектно-сметной документации систем электроснабжения любой сложности',
                features: ['Проекты', 'Расчёты нагрузок', 'Схемы', 'Согласование']
              },
              {
                icon: 'PackageCheck',
                title: 'Комплексные решения под ключ',
                description: 'Полный цикл работ: от разработки проекта до сдачи объекта заказчику',
                features: ['Проект', 'Поставка', 'Монтаж', 'Ввод в эксплуатацию']
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-8 hover:shadow-2xl transition-all group border-2 hover:border-primary">
                <div className="w-16 h-16 bg-gradient-orange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold text-accent mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-accent text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary px-4 py-2 mb-6">Процесс работы</Badge>
            <h2 className="text-5xl font-black mb-4">
              Как мы работаем: <span className="text-gradient-orange">4 простых шага</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                icon: 'Phone',
                title: 'Заявка',
                description: 'Вы оставляете заявку, наш инженер выезжает на объект для осмотра и оценки'
              },
              {
                number: '02',
                icon: 'FileText',
                title: 'Проект + Смета',
                description: 'Разрабатываем проект, составляем детальную смету с фиксированными ценами'
              },
              {
                number: '03',
                icon: 'HardHat',
                title: 'Монтаж',
                description: 'Поставляем оборудование, выполняем полный комплекс электромонтажных работ'
              },
              {
                number: '04',
                icon: 'CheckCircle',
                title: 'Сдача',
                description: 'Проводим испытания, оформляем документы, сдаём объект в эксплуатацию'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-8xl font-black text-primary/20 absolute -top-6 -left-2 select-none">
                  {step.number}
                </div>
                <Card className="p-6 relative bg-white/5 border-primary/20 hover:bg-white/10 transition-all">
                  <div className="w-14 h-14 bg-gradient-orange rounded-lg flex items-center justify-center mb-4">
                    <Icon name={step.icon as any} className="text-accent" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-sm text-white/80">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary px-4 py-2 mb-6">Преимущества</Badge>
            <h2 className="text-5xl font-black text-accent mb-4">
              Почему <span className="text-gradient-orange">выбирают нас</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Clock',
                title: 'Соблюдение сроков',
                description: 'Чёткое планирование и контроль выполнения работ на каждом этапе'
              },
              {
                icon: 'BadgeCheck',
                title: 'Все лицензии и допуски',
                description: 'СРО, допуски Ростехнадзора, сертификаты ISO 9001, ISO 14001'
              },
              {
                icon: 'Shield',
                title: 'Гарантия до 5 лет',
                description: 'Гарантийное и постгарантийное обслуживание всех объектов'
              },
              {
                icon: 'Truck',
                title: 'Собственный склад',
                description: 'Материалы и оборудование в наличии, без задержек поставок'
              },
              {
                icon: 'Users',
                title: 'Опытные специалисты',
                description: 'Команда с опытом от 10 лет, регулярное повышение квалификации'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка 24/7',
                description: 'Круглосуточная диспетчерская служба для аварийных ситуаций'
              }
            ].map((advantage, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-all border-l-4 border-primary">
                <Icon name={advantage.icon as any} className="text-primary mb-4" size={40} />
                <h3 className="text-xl font-bold text-accent mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-muted/10">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <Badge className="bg-secondary/10 text-secondary px-4 py-2 mb-6">Контакты</Badge>
            <h2 className="text-5xl font-black text-accent mb-4">
              Готовы начать <span className="text-gradient-orange">ваш проект?</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для бесплатной консультации
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-accent mb-6">Контактная информация</h3>
              <div className="space-y-4">
                {[
                  { icon: 'MapPin', label: 'Адрес', value: 'г. Рязань, ул. Энергетиков, д. 15' },
                  { icon: 'Phone', label: 'Телефон', value: '+7 (4912) 555-777' },
                  { icon: 'Mail', label: 'Email', value: 'info@energoservis-rzn.ru' },
                  { icon: 'Clock', label: 'Режим работы', value: 'Пн-Пт: 8:00-18:00, Сб: 9:00-15:00' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                      <div className="font-semibold text-accent">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-accent text-white border-2 border-primary">
              <h3 className="text-2xl font-bold mb-6">Аварийная служба 24/7</h3>
              <div className="space-y-4 mb-6">
                <p className="text-white/90">
                  Круглосуточная диспетчерская служба для экстренных ситуаций
                </p>
                <div className="flex items-center gap-3">
                  <Icon name="PhoneCall" className="text-primary" size={32} />
                  <div className="text-3xl font-black text-primary">+7 (4912) 555-999</div>
                </div>
              </div>
              <Button size="lg" className="w-full bg-gradient-orange text-accent hover:opacity-90">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить сейчас
              </Button>
            </Card>
          </div>

          <Card className="p-12 bg-gradient-orange text-center">
            <Icon name="Zap" className="mx-auto mb-4 text-accent" size={56} />
            <h3 className="text-3xl font-black text-accent mb-4">Запросите расчёт проекта</h3>
            <p className="text-lg text-accent/80 mb-6">
              Наши специалисты подготовят коммерческое предложение в течение 24 часов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white border-2 border-accent text-accent hover:bg-accent hover:text-white">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" className="bg-accent text-white hover:bg-accent/90">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать презентацию
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-accent text-white py-12 px-6 border-t-2 border-primary">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-orange rounded flex items-center justify-center">
                  <Icon name="Zap" className="text-accent" size={24} />
                </div>
                <div>
                  <div className="text-xl font-bold">ЭНЕРГОСЕРВИС</div>
                  <div className="text-xs text-white/60">Группа компаний</div>
                </div>
              </div>
              <p className="text-sm text-white/80">
                Электромонтажные работы под ключ с 2001 года
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Кабельная продукция</li>
                <li>Электрооборудование</li>
                <li>Электромонтаж</li>
                <li>Проектирование</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>О компании</li>
                <li>Наши проекты</li>
                <li>Лицензии и допуски</li>
                <li>Вакансии</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (4912) 555-777</li>
                <li>info@energoservis.ru</li>
                <li>г. Рязань и область</li>
                <li>Пн-Сб: 8:00-18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2001-2026 ГК «Энергосервис». Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
