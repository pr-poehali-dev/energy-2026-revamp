import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Icon name="Zap" className="text-accent" size={24} />
              </div>
              <div>
                <div className="text-xl font-semibold text-accent">Энергосервис</div>
                <div className="text-xs text-muted-foreground">Группа компаний</div>
              </div>
            </div>

            <Button className="bg-accent hover:bg-accent/90 text-white">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (4912) 555-777
            </Button>
          </div>
        </nav>
      </header>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-accent text-sm font-medium">
                <Icon name="Award" size={16} />
                <span>С 2001 года в Рязани и области</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-accent leading-tight">
                Электромонтаж
                <br />
                <span className="text-gradient">под ключ</span>
              </h1>

              <p className="text-xl text-muted-foreground">
                От проекта до сдачи в эксплуатацию
              </p>

              <p className="text-lg text-foreground/80">
                Быстро, грамотно, профессионально. Полный цикл электромонтажных работ
                по Рязани и Рязанской области.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-accent">
                  Рассчитать проект
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/5">
                  Наши работы
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/ad646983-ec49-488b-b0c4-e9ed1b7d84a8/files/91be93b9-eb18-4c88-8412-eafed0cfd06b.jpg"
                alt="Электромонтажные работы"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold text-accent">24</div>
                <div className="text-sm text-muted-foreground">года опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-accent">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">700+</div>
              <div className="text-white/80">километров кабеля</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">130+</div>
              <div className="text-white/80">км освещённых дорог</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">175+</div>
              <div className="text-white/80">реализованных объектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">аварийная служба</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">Наши объекты</h2>
            <p className="text-lg text-muted-foreground">Мы обеспечиваем энергией объекты любой сложности</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {[
              { icon: 'Building2', value: '38+', label: 'Офисные здания' },
              { icon: 'Home', value: '62+', label: 'ЖК' },
              { icon: 'ShoppingCart', value: '10+', label: 'ТЦ' },
              { icon: 'Factory', value: '22+', label: 'Завода' },
              { icon: 'Cross', value: '31+', label: 'Больница' },
              { icon: 'Hotel', value: '6+', label: 'Гостиниц' },
              { icon: 'Dumbbell', value: '3+', label: 'Спорткомплекса' },
              { icon: 'HomeIcon', value: '3+', label: 'Коттеджных поселка' },
              { icon: 'Library', value: '1+', label: 'Библиотека' },
              { icon: 'Sun', value: '130+', label: 'км дорог' }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                <Icon name={item.icon as any} className="mx-auto mb-3 text-primary" size={32} />
                <div className="text-2xl font-bold text-accent mb-1">{item.value}</div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Полный спектр электромонтажных работ под ключ</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Cable',
                title: 'Кабельно-проводниковая продукция',
                description: 'Поставки силовых и контрольных кабелей, проводов от ведущих производителей'
              },
              {
                icon: 'Cpu',
                title: 'Электрооборудование',
                description: 'Комплектация объектов щитовым оборудованием, автоматикой, освещением'
              },
              {
                icon: 'HardHat',
                title: 'Электромонтажные работы',
                description: 'Прокладка кабелей, монтаж электросетей, установка оборудования под ключ'
              },
              {
                icon: 'Wrench',
                title: 'Оперативное обслуживание',
                description: 'Техническое обслуживание, аварийный ремонт, диагностика 24/7'
              },
              {
                icon: 'Pencil',
                title: 'Проектирование',
                description: 'Разработка проектной документации, расчёты нагрузок, согласование'
              },
              {
                icon: 'PackageCheck',
                title: 'Под ключ',
                description: 'Полный цикл: проект → поставка → монтаж → сдача в эксплуатацию'
              }
            ].map((service, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all group border-2 hover:border-primary">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <Icon name={service.icon as any} className="text-accent group-hover:text-accent" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">Как мы работаем</h2>
            <p className="text-lg text-muted-foreground">Прозрачный процесс от заявки до запуска</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: '01',
                icon: 'Phone',
                title: 'Заявка',
                description: 'Оставляете заявку, выезжаем на объект для оценки объёма работ'
              },
              {
                number: '02',
                icon: 'FileText',
                title: 'Проект',
                description: 'Разрабатываем проект и составляем точную смету с учётом всех требований'
              },
              {
                number: '03',
                icon: 'HardHat',
                title: 'Монтаж',
                description: 'Поставляем материалы и выполняем электромонтажные работы'
              },
              {
                number: '04',
                icon: 'CheckCircle',
                title: 'Сдача',
                description: 'Проводим испытания и сдаём объект в эксплуатацию с документами'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="text-7xl font-bold text-primary/10 absolute -top-4 -left-2">{step.number}</div>
                <Card className="p-6 relative">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4">
                    <Icon name={step.icon as any} className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-accent mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent mb-4">Почему выбирают нас</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Clock',
                title: 'Соблюдение сроков',
                description: 'Работы выполняются точно в срок благодаря чёткому планированию'
              },
              {
                icon: 'BadgeCheck',
                title: 'Все лицензии',
                description: 'Разрешения СРО, Ростехнадзора, сертификаты ISO'
              },
              {
                icon: 'Truck',
                title: 'Свой склад',
                description: 'Материалы в наличии, без задержек поставок'
              },
              {
                icon: 'Users',
                title: 'Опытная команда',
                description: 'Специалисты с опытом от 10 лет'
              },
              {
                icon: 'Shield',
                title: 'Гарантия до 5 лет',
                description: 'На все виды работ и оборудование'
              },
              {
                icon: 'Headphones',
                title: 'Поддержка 24/7',
                description: 'Круглосуточная аварийная служба'
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <Icon name={benefit.icon as any} className="text-secondary mb-4" size={32} />
                <h3 className="text-lg font-semibold text-accent mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-accent to-accent/90">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <Icon name="Zap" className="mx-auto mb-6" size={48} />
          <h2 className="text-4xl font-bold mb-4">Готовы начать ваш проект?</h2>
          <p className="text-xl mb-8 text-white/90">
            Свяжитесь с нами для бесплатной консультации и расчёта стоимости
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-accent">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (4912) 555-777
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
              <Icon name="Mail" size={20} className="mr-2" />
              info@energoservis-rzn.ru
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-8">
            Рязань и Рязанская область • Пн-Пт: 8:00-18:00, Сб: 9:00-15:00
          </p>
        </div>
      </section>

      <footer className="py-12 px-6 bg-[#404044] text-white/80">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                  <Icon name="Zap" className="text-accent" size={20} />
                </div>
                <div>
                  <div className="font-semibold text-white">Энергосервис</div>
                  <div className="text-xs text-white/60">Группа компаний</div>
                </div>
              </div>
              <p className="text-sm">
                Электромонтаж под ключ с 2001 года
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm">
                <li>Кабельная продукция</li>
                <li>Электрооборудование</li>
                <li>Электромонтаж</li>
                <li>Проектирование</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Информация</h4>
              <ul className="space-y-2 text-sm">
                <li>О компании</li>
                <li>Наши проекты</li>
                <li>Лицензии</li>
                <li>Контакты</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm">
                <li>+7 (4912) 555-777</li>
                <li>info@energoservis.ru</li>
                <li>Рязань и область</li>
                <li>Пн-Сб: 8:00-18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm">
            <p>© 2001-2026 ГК "Энергосервис". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
