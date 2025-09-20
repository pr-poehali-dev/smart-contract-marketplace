import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

interface SmartContract {
  id: number
  amount: number
  roi: number
  duration: string
  color: string
}

const smartContracts: SmartContract[] = [
  { id: 1, amount: 1000, roi: 35, duration: '12 месяцев', color: 'bg-gradient-to-br from-blue-500 to-blue-700' },
  { id: 2, amount: 2500, roi: 35, duration: '12 месяцев', color: 'bg-gradient-to-br from-emerald-500 to-emerald-700' },
  { id: 3, amount: 5000, roi: 55, duration: '12 месяцев', color: 'bg-gradient-to-br from-amber-500 to-amber-700' },
  { id: 4, amount: 10000, roi: 55, duration: '12 месяцев', color: 'bg-gradient-to-br from-purple-500 to-purple-700' }
]

export default function Index() {
  const [activeTab, setActiveTab] = useState('home')
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string; balance: number } | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuthenticated(true)
    setUser({ name: 'Иван Петров', balance: 15750 })
    setIsLoginOpen(false)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuthenticated(true)
    setUser({ name: 'Новый пользователь', balance: 0 })
    setIsRegisterOpen(false)
  }

  const handlePurchase = (contractId: number) => {
    if (!isAuthenticated) {
      setIsLoginOpen(true)
      return
    }
    alert(`Покупка смарт-контракта ${contractId} успешно оформлена!`)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-blue via-dark-blue to-black overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjMiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4K')] opacity-10"></div>
              
              <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <div className="mb-8">
                  <Badge className="bg-crypto-green/20 text-crypto-green border-crypto-green/30 text-lg px-6 py-2 mb-6">
                    🚀 Запуск платформы
                  </Badge>
                  <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                    Майнинг<br />
                    <span className="bg-gradient-to-r from-crypto-green to-crypto-gold bg-clip-text text-transparent">
                      Будущего
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
                    Безопасные смарт-контракты с фиксированной доходностью от 35% до 55% годовых
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-crypto-green hover:bg-crypto-green/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => setActiveTab('contracts')}
                  >
                    <Icon name="Coins" className="mr-2" size={24} />
                    Купить контракт
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
                    onClick={() => setActiveTab('datacenter')}
                  >
                    <Icon name="Shield" className="mr-2" size={24} />
                    О дата-центре
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="text-3xl font-bold text-crypto-green mb-2">99.9%</div>
                    <div className="text-gray-300">Время работы</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="text-3xl font-bold text-crypto-gold mb-2">10,000+</div>
                    <div className="text-gray-300">Активных контрактов</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                    <div className="text-gray-300">Поддержка</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Почему выбирают нас?
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Современные технологии и максимальная безопасность для вашего дохода
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-blue-50 to-white">
                    <CardHeader className="text-center pb-6">
                      <div className="w-16 h-16 bg-deep-blue rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon name="Shield" size={32} className="text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">Безопасность</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-600 text-lg">
                        Военный уровень шифрования и мульти-подпись защищают ваши активы
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-white">
                    <CardHeader className="text-center pb-6">
                      <div className="w-16 h-16 bg-crypto-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon name="TrendingUp" size={32} className="text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">Высокая доходность</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-600 text-lg">
                        От 35% до 55% годовых с гарантированными выплатами каждый месяц
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-white">
                    <CardHeader className="text-center pb-6">
                      <div className="w-16 h-16 bg-crypto-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon name="Zap" size={32} className="text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-900">Простота</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-600 text-lg">
                        Покупка контракта за 2 клика, мгновенная активация и автовыплаты
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </div>
        )

      case 'contracts':
        return (
          <div className="min-h-screen py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Смарт-контракты
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Выберите контракт с подходящей доходностью и начните зарабатывать уже сегодня
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {smartContracts.map((contract) => (
                  <Card key={contract.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-0">
                    <div className={`${contract.color} p-6 text-white`}>
                      <div className="text-center">
                        <div className="text-3xl font-bold mb-2">${contract.amount.toLocaleString()}</div>
                        <div className="text-white/80">USDT</div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Доходность:</span>
                          <Badge className="bg-crypto-green/10 text-crypto-green border-crypto-green/20">
                            {contract.roi}% годовых
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Срок:</span>
                          <span className="font-semibold">{contract.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Выплаты:</span>
                          <span className="font-semibold">Ежемесячно</span>
                        </div>
                        <Button 
                          className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white font-semibold py-3 rounded-xl"
                          onClick={() => handlePurchase(contract.id)}
                        >
                          <Icon name="ShoppingCart" className="mr-2" size={20} />
                          Купить контракт
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )

      case 'datacenter':
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Наш дата-центр
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Современная инфраструктура для максимальной надежности и производительности
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-deep-blue to-crypto-green rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">Технические характеристики</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Icon name="CheckCircle" className="mr-3 text-crypto-green" size={20} />
                        Температурный контроль 24/7
                      </li>
                      <li className="flex items-center">
                        <Icon name="CheckCircle" className="mr-3 text-crypto-green" size={20} />
                        Резервное электропитание
                      </li>
                      <li className="flex items-center">
                        <Icon name="CheckCircle" className="mr-3 text-crypto-green" size={20} />
                        Физическая охрана
                      </li>
                      <li className="flex items-center">
                        <Icon name="CheckCircle" className="mr-3 text-crypto-green" size={20} />
                        Огнезащитная система
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-200 rounded-2xl h-80 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <Icon name="Server" size={64} className="mx-auto mb-4" />
                    <p>Фото дата-центра</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Thermometer" size={24} className="text-deep-blue" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Климат-контроль</h4>
                  <p className="text-gray-600">Постоянная температура 18-22°C</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Zap" size={24} className="text-crypto-green" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Электропитание</h4>
                  <p className="text-gray-600">Бесперебойное питание UPS</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Wifi" size={24} className="text-crypto-gold" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Интернет</h4>
                  <p className="text-gray-600">Каналы 1Gbps с резервированием</p>
                </Card>

                <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Lock" size={24} className="text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">Безопасность</h4>
                  <p className="text-gray-600">Многоуровневая система защиты</p>
                </Card>
              </div>
            </div>
          </div>
        )

      case 'support':
        return (
          <div className="min-h-screen py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Поддержка и FAQ
                </h2>
                <p className="text-xl text-gray-600">
                  Ответы на часто задаваемые вопросы
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Как работают смарт-контракты?</h3>
                  <p className="text-gray-600">
                    Смарт-контракты автоматически выполняют условия соглашения. После покупки контракта ваши средства поступают в майнинг-пул, а прибыль начисляется ежемесячно согласно условиям.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Когда происходят выплаты?</h3>
                  <p className="text-gray-600">
                    Выплаты производятся ежемесячно в первых числах месяца. Прибыль поступает на ваш баланс в личном кабинете и может быть выведена в любое время.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Какие гарантии предоставляются?</h3>
                  <p className="text-gray-600">
                    Мы гарантируем возврат вложенных средств по окончании срока контракта и выплату заявленной доходности. Все контракты застрахованы.
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Как связаться с поддержкой?</h3>
                  <p className="text-gray-600 mb-4">
                    Наша служба поддержки работает 24/7. Вы можете связаться с нами любым удобным способом:
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button variant="outline" className="flex items-center">
                      <Icon name="MessageCircle" className="mr-2" size={20} />
                      Онлайн-чат
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Icon name="Mail" className="mr-2" size={20} />
                      support@mining.com
                    </Button>
                    <Button variant="outline" className="flex items-center">
                      <Icon name="Phone" className="mr-2" size={20} />
                      +7 (800) 123-45-67
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        )

      case 'dashboard':
        if (!isAuthenticated) {
          return (
            <div className="min-h-screen flex items-center justify-center">
              <Card className="p-8 max-w-md w-full mx-4">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Войти в личный кабинет</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => setIsLoginOpen(true)}
                    className="w-full"
                  >
                    Войти
                  </Button>
                </CardContent>
              </Card>
            </div>
          )
        }

        return (
          <div className="min-h-screen py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Личный кабинет</h2>
                <p className="text-gray-600">Добро пожаловать, {user?.name}!</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Общий баланс</p>
                      <p className="text-2xl font-bold text-gray-900">${user?.balance.toLocaleString()}</p>
                    </div>
                    <div className="w-12 h-12 bg-crypto-green/10 rounded-xl flex items-center justify-center">
                      <Icon name="DollarSign" size={24} className="text-crypto-green" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Активные контракты</p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Icon name="FileText" size={24} className="text-deep-blue" />
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Прибыль за месяц</p>
                      <p className="text-2xl font-bold text-crypto-green">+$1,247</p>
                    </div>
                    <div className="w-12 h-12 bg-crypto-green/10 rounded-xl flex items-center justify-center">
                      <Icon name="TrendingUp" size={24} className="text-crypto-green" />
                    </div>
                  </div>
                </Card>
              </div>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Мои контракты</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold">Контракт #1001</p>
                        <p className="text-sm text-gray-600">$5,000 USDT • 55% годовых</p>
                      </div>
                      <Badge className="bg-crypto-green/10 text-crypto-green">Активен</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold">Контракт #1002</p>
                        <p className="text-sm text-gray-600">$2,500 USDT • 35% годовых</p>
                      </div>
                      <Badge className="bg-crypto-green/10 text-crypto-green">Активен</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-semibold">Контракт #1003</p>
                        <p className="text-sm text-gray-600">$10,000 USDT • 55% годовых</p>
                      </div>
                      <Badge className="bg-crypto-green/10 text-crypto-green">Активен</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-deep-blue to-crypto-green rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">CryptoMining</span>
              </div>
              
              <div className="hidden md:flex space-x-6">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'home' ? 'text-deep-blue' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Главная
                </button>
                <button
                  onClick={() => setActiveTab('contracts')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'contracts' ? 'text-deep-blue' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Контракты
                </button>
                <button
                  onClick={() => setActiveTab('datacenter')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'datacenter' ? 'text-deep-blue' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Дата-центр
                </button>
                <button
                  onClick={() => setActiveTab('support')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    activeTab === 'support' ? 'text-deep-blue' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Поддержка
                </button>
                {isAuthenticated && (
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeTab === 'dashboard' ? 'text-deep-blue' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Личный кабинет
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {!isAuthenticated ? (
                <>
                  <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="sm">Войти</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Вход в аккаунт</DialogTitle>
                        <DialogDescription>
                          Введите ваши данные для входа в личный кабинет
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                        <div>
                          <Label htmlFor="password">Пароль</Label>
                          <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                          Войти
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" className="bg-deep-blue hover:bg-deep-blue/90">
                        Регистрация
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Регистрация</DialogTitle>
                        <DialogDescription>
                          Создайте аккаунт для покупки смарт-контрактов
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Имя</Label>
                          <Input id="name" placeholder="Ваше имя" required />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="your@email.com" required />
                        </div>
                        <div>
                          <Label htmlFor="password">Пароль</Label>
                          <Input id="password" type="password" required />
                        </div>
                        <Button type="submit" className="w-full">
                          Зарегистрироваться
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </>
              ) : (
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                    <p className="text-xs text-gray-600">${user?.balance.toLocaleString()}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => {
                      setIsAuthenticated(false)
                      setUser(null)
                      setActiveTab('home')
                    }}
                  >
                    Выйти
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-dark-blue text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-crypto-green to-crypto-gold rounded-lg"></div>
                <span className="text-xl font-bold">CryptoMining</span>
              </div>
              <p className="text-gray-300">
                Безопасная платформа для майнинг-инвестиций с гарантированной доходностью
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Платформа</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контракты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дата-центр</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p>support@cryptomining.com</p>
                <p>+7 (800) 123-45-67</p>
                <p>24/7 онлайн-поддержка</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 CryptoMining. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}