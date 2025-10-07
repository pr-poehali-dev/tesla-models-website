import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface TeslaModel {
  id: string;
  name: string;
  tagline: string;
  range: string;
  topSpeed: string;
  acceleration: string;
  price: string;
  image: string;
}

const teslaModels: TeslaModel[] = [
  {
    id: 'model-s',
    name: 'Model S',
    tagline: 'Plaid',
    range: '637 км',
    topSpeed: '322 км/ч',
    acceleration: '2.1 сек',
    price: 'от $89,990',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.png'
  },
  {
    id: 'model-3',
    name: 'Model 3',
    tagline: 'Performance',
    range: '567 км',
    topSpeed: '261 км/ч',
    acceleration: '3.1 сек',
    price: 'от $40,240',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD.png'
  },
  {
    id: 'model-x',
    name: 'Model X',
    tagline: 'Plaid',
    range: '560 км',
    topSpeed: '262 км/ч',
    acceleration: '2.5 сек',
    price: 'от $99,990',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Main-Hero-Desktop-LHD.png'
  },
  {
    id: 'model-y',
    name: 'Model Y',
    tagline: 'Long Range',
    range: '525 км',
    topSpeed: '217 км/ч',
    acceleration: '3.5 сек',
    price: 'от $47,740',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Main-Hero-Desktop-LHD.png'
  },
  {
    id: 'cybertruck',
    name: 'Cybertruck',
    tagline: 'Tri Motor',
    range: '800+ км',
    topSpeed: '209 км/ч',
    acceleration: '2.9 сек',
    price: 'от $79,990',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybertruck-Main-Hero-Desktop-NA.png'
  },
  {
    id: 'roadster',
    name: 'Roadster',
    tagline: 'SpaceX Package',
    range: '1000 км',
    topSpeed: '400+ км/ч',
    acceleration: '1.9 сек',
    price: 'от $200,000',
    image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roadster-Social.png'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedModel, setSelectedModel] = useState<TeslaModel | null>(null);

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg className="w-28" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"/>
            </svg>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-gray-600 transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('models')} className="text-sm font-medium hover:text-gray-600 transition-colors">
              Модели
            </button>
            <button onClick={() => scrollToSection('compare')} className="text-sm font-medium hover:text-gray-600 transition-colors">
              Сравнение
            </button>
            <button onClick={() => scrollToSection('technology')} className="text-sm font-medium hover:text-gray-600 transition-colors">
              Технологии
            </button>
            <button onClick={() => scrollToSection('charging')} className="text-sm font-medium hover:text-gray-600 transition-colors">
              Зарядка
            </button>
          </div>

          <Button className="bg-black text-white hover:bg-gray-800">
            Заказать
          </Button>
        </div>
      </nav>

      <section id="home" className="h-screen relative flex items-center justify-center pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-bold mb-4 tracking-tight">
            Model S
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">
            Plaid
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
            <div>
              <div className="text-3xl font-bold">2.1s</div>
              <div className="text-sm text-gray-600">0-100 км/ч</div>
            </div>
            <div>
              <div className="text-3xl font-bold">637 км</div>
              <div className="text-sm text-gray-600">Запас хода</div>
            </div>
            <div>
              <div className="text-3xl font-bold">322 км/ч</div>
              <div className="text-sm text-gray-600">Макс. скорость</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12">
              Заказать сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black px-12">
              Тест-драйв
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-gray-400" />
        </div>
      </section>

      <section id="models" className="min-h-screen py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4">
            Наши модели
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Выберите автомобиль для вашего будущего
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teslaModels.map((model, index) => (
              <Card
                key={model.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gray-50"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedModel(model)}
              >
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/000000/FFFFFF?text=' + model.name;
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <h3 className="text-3xl font-bold">{model.name}</h3>
                    <span className="text-sm text-gray-600">{model.tagline}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4 mb-6">
                    <div>
                      <div className="text-lg font-bold">{model.range}</div>
                      <div className="text-xs text-gray-600">Запас хода</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{model.acceleration}</div>
                      <div className="text-xs text-gray-600">0-100 км/ч</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold">{model.topSpeed}</div>
                      <div className="text-xs text-gray-600">Макс</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">{model.price}</span>
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Узнать больше
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="min-h-screen py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            Сравнение моделей
          </h2>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold">Характеристика</th>
                    {teslaModels.slice(0, 4).map((model) => (
                      <th key={model.id} className="px-6 py-4 text-center text-sm font-bold">
                        {model.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Запас хода</td>
                    {teslaModels.slice(0, 4).map((model) => (
                      <td key={model.id} className="px-6 py-4 text-center">{model.range}</td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Разгон 0-100 км/ч</td>
                    {teslaModels.slice(0, 4).map((model) => (
                      <td key={model.id} className="px-6 py-4 text-center">{model.acceleration}</td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Макс. скорость</td>
                    {teslaModels.slice(0, 4).map((model) => (
                      <td key={model.id} className="px-6 py-4 text-center">{model.topSpeed}</td>
                    ))}
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">Цена</td>
                    {teslaModels.slice(0, 4).map((model) => (
                      <td key={model.id} className="px-6 py-4 text-center font-bold">{model.price}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section id="technology" className="min-h-screen py-24 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            Технологии будущего
          </h2>

          <Tabs defaultValue="autopilot" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-900">
              <TabsTrigger value="autopilot" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Autopilot
              </TabsTrigger>
              <TabsTrigger value="battery" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Батарея
              </TabsTrigger>
              <TabsTrigger value="performance" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Производительность
              </TabsTrigger>
            </TabsList>

            <TabsContent value="autopilot" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-6">Full Self-Driving</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Передовая система автопилота с возможностью полностью автономного вождения. 
                    8 камер, ультразвуковые датчики и мощный компьютер обрабатывают данные в реальном времени.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-green-500 mt-1" />
                      <div>
                        <div className="font-bold">Автоматическая парковка</div>
                        <div className="text-sm text-gray-400">Параллельная и перпендикулярная</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-green-500 mt-1" />
                      <div>
                        <div className="font-bold">Автопилот на трассе</div>
                        <div className="text-sm text-gray-400">Удержание полосы и адаптивный круиз-контроль</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Icon name="Check" className="text-green-500 mt-1" />
                      <div>
                        <div className="font-bold">Навигация на автопилоте</div>
                        <div className="text-sm text-gray-400">Автоматическая смена полос и съезды</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-8 h-96 flex items-center justify-center">
                  <Icon name="Wifi" size={120} className="text-gray-700" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="battery" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-6">4680 Battery</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Революционная батарея нового поколения с улучшенной плотностью энергии. 
                    Увеличенный запас хода и быстрая зарядка делают путешествия комфортнее.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-red-500 mb-2">+16%</div>
                      <div className="text-sm text-gray-400">Увеличение запаса хода</div>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg">
                      <div className="text-3xl font-bold text-red-500 mb-2">+20%</div>
                      <div className="text-sm text-gray-400">Больше мощности</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-8 h-96 flex items-center justify-center">
                  <Icon name="Battery" size={120} className="text-gray-700" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="performance" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-6">Tri Motor</h3>
                  <p className="text-lg text-gray-300 mb-6">
                    Три независимых электромотора обеспечивают невероятную производительность 
                    и полный контроль над автомобилем в любых условиях.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-500 mb-1">1,020</div>
                      <div className="text-xs text-gray-400">л.с.</div>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-500 mb-1">1.9s</div>
                      <div className="text-xs text-gray-400">0-100 км/ч</div>
                    </div>
                    <div className="bg-gray-900 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-500 mb-1">400+</div>
                      <div className="text-xs text-gray-400">км/ч</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 rounded-lg p-8 h-96 flex items-center justify-center">
                  <Icon name="Zap" size={120} className="text-gray-700" />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="charging" className="min-h-screen py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            Зарядная сеть
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 border-2 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold">Supercharger</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Самая быстрая зарядная сеть в мире. Зарядите автомобиль до 80% всего за 15 минут.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">45,000+</div>
                  <div className="text-sm text-gray-600">Станций по миру</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">250 кВт</div>
                  <div className="text-sm text-gray-600">Мощность зарядки</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 border-2 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <Icon name="Home" size={32} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold">Домашняя зарядка</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Заряжайте автомобиль дома с помощью Wall Connector. Просыпайтесь с полным зарядом каждое утро.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">71 км</div>
                  <div className="text-sm text-gray-600">За час зарядки</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">11.5 кВт</div>
                  <div className="text-sm text-gray-600">Мощность</div>
                </div>
              </div>
            </Card>
          </div>

          <div className="bg-gray-50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Готовы к электрическому будущему?</h3>
            <p className="text-xl text-gray-600 mb-8">
              Закажите тест-драйв и почувствуйте разницу
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-12">
                Записаться на тест-драйв
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-black px-12">
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Автомобили</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Model S</a></li>
                <li><a href="#" className="hover:text-white">Model 3</a></li>
                <li><a href="#" className="hover:text-white">Model X</a></li>
                <li><a href="#" className="hover:text-white">Model Y</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Энергия</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Солнечные панели</a></li>
                <li><a href="#" className="hover:text-white">Powerwall</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Зарядка</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Найти станцию</a></li>
                <li><a href="#" className="hover:text-white">Wall Connector</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">О компании</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">О Tesla</a></li>
                <li><a href="#" className="hover:text-white">Карьера</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>Tesla © 2025. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {selectedModel && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedModel(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedModel(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800"
            >
              <Icon name="X" size={20} />
            </button>
            
            <div className="text-center mb-8">
              <h3 className="text-5xl font-bold mb-2">{selectedModel.name}</h3>
              <p className="text-xl text-gray-600">{selectedModel.tagline}</p>
            </div>

            <div className="relative h-96 mb-8 bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={selectedModel.image}
                alt={selectedModel.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/800x600/000000/FFFFFF?text=' + selectedModel.name;
                }}
              />
            </div>

            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{selectedModel.range}</div>
                <div className="text-sm text-gray-600">Запас хода</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{selectedModel.acceleration}</div>
                <div className="text-sm text-gray-600">0-100 км/ч</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{selectedModel.topSpeed}</div>
                <div className="text-sm text-gray-600">Макс. скорость</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{selectedModel.price}</div>
                <div className="text-sm text-gray-600">Стоимость</div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1 bg-black text-white hover:bg-gray-800" size="lg">
                Заказать сейчас
              </Button>
              <Button variant="outline" className="flex-1 border-2 border-black" size="lg">
                Тест-драйв
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}