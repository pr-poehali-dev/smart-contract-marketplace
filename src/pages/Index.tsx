import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import Icon from '@/components/ui/icon'

interface SmartContract {
  id: number
  amount: number
  roi: number
  duration: string
  color: string
  monthlyReturn: number
}

const smartContracts: SmartContract[] = [
  { id: 1, amount: 1000, roi: 35, duration: '12 месяцев', color: 'bg-gradient-to-br from-royal-blue to-blue-700', monthlyReturn: 29.17 },
  { id: 2, amount: 2500, roi: 35, duration: '12 месяцев', color: 'bg-gradient-to-br from-emerald-500 to-emerald-700', monthlyReturn: 72.92 },
  { id: 3, amount: 5000, roi: 55, duration: '12 месяцев', color: 'bg-gradient-to-br from-crypto-gold to-amber-700', monthlyReturn: 229.17 },
  { id: 4, amount: 10000, roi: 55, duration: '12 месяцев', color: 'bg-gradient-to-br from-purple-gradient to-purple-700', monthlyReturn: 458.33 }
]

const paymentHistory = [
  { date: '2024-09-01', amount: 458.33, contract: '#1003', status: 'Выплачено' },
  { date: '2024-08-01', amount: 458.33, contract: '#1003', status: 'Выплачено' },
  { date: '2024-09-01', amount: 229.17, contract: '#1001', status: 'Выплачено' },
  { date: '2024-08-01', amount: 229.17, contract: '#1001', status: 'Выплачено' }
]

export default function Index() {
  const [activeTab, setActiveTab] = useState('home')
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string; balance: number; totalEarned: number } | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuthenticated(true)
    setUser({ name: 'Иван Петров', balance: 15750, totalEarned: 2847.33 })
    setIsLoginOpen(false)
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    setIsAuthenticated(true)
    setUser({ name: 'Новый пользователь', balance: 0, totalEarned: 0 })
    setIsRegisterOpen(false)
  }

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Ссылка для восстановления пароля отправлена на вашу электронную почту')
    setIsForgotPasswordOpen(false)
  }

  const handlePurchase = (contractId: number) => {
    if (!isAuthenticated) {
      setIsLoginOpen(true)
      return
    }
    alert(`Покупка смарт-контракта ${contractId} успешно оформлена! Переход к оплате...`)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-20">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-blue via-royal-blue to-black overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjMiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPgo8L3N2Zz4K')] opacity-10"></div>
              
              <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                <div className="mb-8">
                  <Badge className="bg-crypto-green/20 text-crypto-green border-crypto-green/30 text-lg px-6 py-3 mb-8 animate-pulse">
                    🚀 Новая эра майнинга
                  </Badge>
                  <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                    Майнинг<br />
                    <span className="bg-gradient-to-r from-crypto-green via-neon-blue to-crypto-gold bg-clip-text text-transparent">
                      Будущего
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Профессиональные смарт-контракты с гарантированной доходностью от 35% до 55% годовых в собственном дата-центре
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                  <Button 
                    size="lg" 
                    className="bg-crypto-green hover:bg-crypto-green/90 text-white px-10 py-5 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                    onClick={() => setActiveTab('contracts')}
                  >
                    <Icon name="Coins" className="mr-3" size={28} />
                    Начать майнинг
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/30 text-white hover:bg-white/10 px-10 py-5 text-xl font-semibold rounded-2xl backdrop-blur-sm"
                    onClick={() => setActiveTab('datacenter')}
                  >
                    <Icon name="Shield" className="mr-3" size={28} />
                    Наш дата-центр
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                  <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl font-bold text-crypto-green mb-3">99.9%</div>
                    <div className="text-gray-300 text-lg">Время работы</div>
                  </div>
                  <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl font-bold text-crypto-gold mb-3">25,000+</div>
                    <div className="text-gray-300 text-lg">Активных контрактов</div>
                  </div>
                  <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl font-bold text-neon-blue mb-3">24/7</div>
                    <div className="text-gray-300 text-lg">Техподдержка</div>
                  </div>
                  <div className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="text-4xl font-bold text-mining-orange mb-3">55%</div>
                    <div className="text-gray-300 text-lg">Максимальная доходность</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                    Почему выбирают нас?
                  </h2>
                  <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                    Передовые технологии и максимальная безопасность для стабильного дохода
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <Card className="p-10 hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-white transform hover:scale-105">
                    <CardHeader className="text-center pb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-royal-blue to-deep-blue rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Icon name="Shield" size={40} className="text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-900">Максимальная безопасность</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-600 text-xl leading-relaxed">
                        Военный уровень шифрования, мульти-подпись кошельков и страхование активов на $10M
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="p-10 hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-emerald-50 to-white transform hover:scale-105">
                    <CardHeader className="text-center pb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-crypto-green to-emerald-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Icon name="TrendingUp" size={40} className="text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-900">Гарантированная прибыль</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-600 text-xl leading-relaxed">
                        От 35% до 55% годовых с ежемесячными выплатами и полной прозрачностью процесса
                      </CardDescription>
                    </CardContent>
                  </Card>

                  <Card className="p-10 hover:shadow-3xl transition-all duration-500 border-0 bg-gradient-to-br from-amber-50 to-white transform hover:scale-105">
                    <CardHeader className="text-center pb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-crypto-gold to-amber-700 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Icon name="Zap" size={40} className="text-white" />
                      </div>
                      <CardTitle className="text-3xl font-bold text-gray-900">Простота использования</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-gray-600 text-xl leading-relaxed">
                        Покупка за 2 клика, мгновенная активация и автоматические выплаты без комиссий
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
          <div className="min-h-screen py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                  Смарт-контракты майнинга
                </h2>
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                  Выберите оптимальный тариф и начните получать стабильный доход уже сегодня
                </p>
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Тарифная сетка</h3>
                  <div className="space-y-2 text-lg">
                    <p><span className="font-semibold">До $5,000 USDT:</span> 35% годовых</p>
                    <p><span className="font-semibold">От $5,000 USDT:</span> 55% годовых</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {smartContracts.map((contract) => (
                  <Card key={contract.id} className="overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105 border-0 bg-white">
                    <div className={`${contract.color} p-8 text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative z-10 text-center">
                        <div className="text-4xl font-bold mb-3">${contract.amount.toLocaleString()}</div>
                        <div className="text-white/80 text-lg">USDT</div>
                        {contract.amount >= 5000 && (
                          <Badge className="bg-white/20 text-white border-white/30 mt-3">
                            Премиум тариф
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-lg">Доходность:</span>
                          <Badge className="bg-crypto-green/10 text-crypto-green border-crypto-green/20 text-lg px-3 py-1">
                            {contract.roi}% годовых
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-lg">Ежемесячно:</span>
                          <span className="font-bold text-xl text-crypto-green">${contract.monthlyReturn}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-lg">Срок:</span>
                          <span className="font-semibold text-lg">{contract.duration}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 text-lg">Выплаты:</span>
                          <span className="font-semibold text-lg">Автоматически</span>
                        </div>
                        <Button 
                          className="w-full bg-deep-blue hover:bg-royal-blue text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                          onClick={() => handlePurchase(contract.id)}
                        >
                          <Icon name="ShoppingCart" className="mr-3" size={24} />
                          Купить контракт
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Payment Methods */}
              <Card className="p-8 bg-gradient-to-r from-deep-blue to-royal-blue text-white">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-bold mb-4">Способы оплаты</CardTitle>
                  <CardDescription className="text-blue-100 text-xl">
                    Поддерживаем все популярные криптовалюты и платежные системы
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-2xl mb-2">₿</div>
                      <div className="text-sm">Bitcoin</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-2xl mb-2">Ξ</div>
                      <div className="text-sm">Ethereum</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-2xl mb-2">₮</div>
                      <div className="text-sm">USDT</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-xl">
                      <div className="text-2xl mb-2">💳</div>
                      <div className="text-sm">Банк. карта</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case 'datacenter':
        return (
          <div className="min-h-screen py-24 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                  Наш дата-центр
                </h2>
                <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
                  Современная инфраструктура мирового класса для максимальной надежности и производительности
                </p>
              </div>

              {/* Main Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                <div className="space-y-8">
                  <div className="bg-gradient-to-r from-deep-blue to-royal-blue rounded-3xl p-10 text-white">
                    <h3 className="text-3xl font-bold mb-6">Технические характеристики</h3>
                    <ul className="space-y-4">
                      <li className="flex items-center text-lg">
                        <Icon name="CheckCircle" className="mr-4 text-crypto-green" size={24} />
                        Температурный контроль 24/7 (18-22°C)
                      </li>
                      <li className="flex items-center text-lg">
                        <Icon name="CheckCircle" className="mr-4 text-crypto-green" size={24} />
                        Резервное электропитание (UPS + генераторы)
                      </li>
                      <li className="flex items-center text-lg">
                        <Icon name="CheckCircle" className="mr-4 text-crypto-green" size={24} />
                        Физическая охрана и видеонаблюдение
                      </li>
                      <li className="flex items-center text-lg">
                        <Icon name="CheckCircle" className="mr-4 text-crypto-green" size={24} />
                        Автоматическая система пожаротушения
                      </li>
                      <li className="flex items-center text-lg">
                        <Icon name="CheckCircle" className="mr-4 text-crypto-green" size={24} />
                        Каналы связи 10Gbps с резервированием
                      </li>
                    </ul>
                  </div>
                  
                  <Card className="p-8 bg-gradient-to-br from-crypto-green/10 to-emerald-50">
                    <CardHeader>
                      <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                        <Icon name="Award" className="mr-3 text-crypto-green" size={28} />
                        Сертификация и лицензии
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-gray-700">
                        <li>• ISO 27001 - информационная безопасность</li>
                        <li>• SOC 2 Type II - контроль безопасности</li>
                        <li>• PCI DSS - стандарт безопасности платежей</li>
                        <li>• Лицензия ЦБ РФ на работу с цифровыми активами</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-8">
                  <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Icon name="Server" size={80} className="mx-auto mb-6" />
                      <p className="text-xl">Фото нашего дата-центра</p>
                      <p className="text-lg text-gray-400 mt-2">3000+ ASIC майнеров</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-white">
                      <div className="text-3xl font-bold text-royal-blue mb-2">5000+</div>
                      <div className="text-gray-600">Единиц оборудования</div>
                    </Card>
                    <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-white">
                      <div className="text-3xl font-bold text-crypto-green mb-2">750 TH/s</div>
                      <div className="text-gray-600">Общий хешрейт</div>
                    </Card>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-royal-blue to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Thermometer" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">Климат-контроль</h4>
                  <p className="text-gray-600 leading-relaxed">Поддержание оптимальной температуры и влажности для максимальной эффективности</p>
                </Card>

                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-green-50 to-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-crypto-green to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Zap" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">Энергоэффективность</h4>
                  <p className="text-gray-600 leading-relaxed">Собственная подстанция и возобновляемые источники энергии снижают операционные расходы</p>
                </Card>

                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-yellow-50 to-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-crypto-gold to-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Wifi" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">Связь и мониторинг</h4>
                  <p className="text-gray-600 leading-relaxed">Дублированные каналы интернет-связи и система мониторинга в реальном времени</p>
                </Card>

                <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-white">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-gradient to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon name="Lock" size={32} className="text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-gray-900">Физическая безопасность</h4>
                  <p className="text-gray-600 leading-relaxed">Многоуровневая система контроля доступа, охрана и видеонаблюдение</p>
                </Card>
              </div>
            </div>
          </div>
        )

      case 'support':
        return (
          <div className="min-h-screen py-24 px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                  Поддержка и FAQ
                </h2>
                <p className="text-2xl text-gray-600">
                  Ответы на самые популярные вопросы о нашей платформе
                </p>
              </div>

              <div className="space-y-8">
                <Card className="p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Как работают смарт-контракты майнинга?</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Смарт-контракты автоматически распределяют ваши средства по майнинг-пулам в нашем дата-центре. 
                    Прибыль от майнинга начисляется ежемесячно согласно выбранному тарифу. Все процессы полностью 
                    автоматизированы и прозрачны.
                  </p>
                </Card>

                <Card className="p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Когда и как происходят выплаты?</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Выплаты производятся автоматически каждый месяц в период с 1 по 5 число. 
                    Средства поступают на ваш баланс в личном кабинете и могут быть выведены 
                    в любое удобное время без комиссий.
                  </p>
                </Card>

                <Card className="p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Какие гарантии предоставляются?</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Мы гарантируем 100% возврат вложенных средств по окончании срока контракта и выплату 
                    заявленной доходности. Все контракты застрахованы на сумму до $10 миллионов. 
                    Наше оборудование работает с гарантированным временем безотказной работы 99.9%.
                  </p>
                </Card>

                <Card className="p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Можно ли досрочно расторгнуть контракт?</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Досрочное расторжение возможно с удержанием 10% от суммы вложения. 
                    Заработанная до момента расторжения прибыль выплачивается в полном объеме. 
                    Процедура занимает до 5 рабочих дней.
                  </p>
                </Card>

                <Card className="p-8 bg-gradient-to-r from-deep-blue to-royal-blue text-white">
                  <h3 className="text-2xl font-bold mb-6">Связаться с технической поддержкой</h3>
                  <p className="text-blue-100 text-lg mb-6">
                    Наша служба поддержки работает круглосуточно. Среднее время ответа — 15 минут.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="flex items-center justify-center py-3 border-white/30 text-white hover:bg-white/10">
                      <Icon name="MessageCircle" className="mr-2" size={24} />
                      Онлайн-чат
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center py-3 border-white/30 text-white hover:bg-white/10">
                      <Icon name="Mail" className="mr-2" size={24} />
                      support@mining.pro
                    </Button>
                    <Button variant="outline" className="flex items-center justify-center py-3 border-white/30 text-white hover:bg-white/10">
                      <Icon name="Phone" className="mr-2" size={24} />
                      +7 (800) 555-MINE
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
            <div className="min-h-screen flex items-center justify-center px-6">
              <Card className="p-10 max-w-md w-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-bold text-gray-900 mb-4">Личный кабинет</CardTitle>
                  <CardDescription className="text-lg text-gray-600">
                    Войдите в систему для доступа к вашим контрактам и статистике
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    onClick={() => setIsLoginOpen(true)}
                    className="w-full py-3 text-lg"
                  >
                    Войти в систему
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setIsRegisterOpen(true)}
                    className="w-full py-3 text-lg"
                  >
                    Создать аккаунт
                  </Button>
                </CardContent>
              </Card>
            </div>
          )
        }

        return (
          <div className="min-h-screen py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">Личный кабинет</h2>
                <p className="text-xl text-gray-600">Добро пожаловать, {user?.name}!</p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <Card className="p-8 bg-gradient-to-br from-crypto-green/10 to-emerald-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg text-gray-600 mb-2">Общий баланс</p>
                      <p className="text-3xl font-bold text-gray-900">${user?.balance.toLocaleString()}</p>
                    </div>
                    <div className="w-16 h-16 bg-crypto-green/20 rounded-2xl flex items-center justify-center">
                      <Icon name="DollarSign" size={32} className="text-crypto-green" />
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-blue-50 to-royal-blue/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg text-gray-600 mb-2">Активные контракты</p>
                      <p className="text-3xl font-bold text-gray-900">2</p>
                    </div>
                    <div className="w-16 h-16 bg-royal-blue/20 rounded-2xl flex items-center justify-center">
                      <Icon name="FileText" size={32} className="text-royal-blue" />
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-crypto-gold/10 to-amber-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg text-gray-600 mb-2">Доход за месяц</p>
                      <p className="text-3xl font-bold text-crypto-green">+$687.50</p>
                    </div>
                    <div className="w-16 h-16 bg-crypto-gold/20 rounded-2xl flex items-center justify-center">
                      <Icon name="TrendingUp" size={32} className="text-crypto-gold" />
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-br from-purple-50 to-purple-gradient/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg text-gray-600 mb-2">Общий доход</p>
                      <p className="text-3xl font-bold text-purple-gradient">${user?.totalEarned.toLocaleString()}</p>
                    </div>
                    <div className="w-16 h-16 bg-purple-gradient/20 rounded-2xl flex items-center justify-center">
                      <Icon name="Coins" size={32} className="text-purple-gradient" />
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* My Contracts */}
                <Card className="p-8">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Icon name="FileText" className="mr-3 text-royal-blue" size={28} />
                      Мои контракты
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="p-6 bg-gradient-to-r from-emerald-50 to-crypto-green/5 rounded-2xl border border-emerald-200">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="font-bold text-lg text-gray-900">Контракт #1001</p>
                            <p className="text-gray-600">$5,000 USDT • 55% годовых</p>
                          </div>
                          <Badge className="bg-crypto-green/10 text-crypto-green border-crypto-green/20">
                            Активен
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Прогресс:</span>
                            <span className="font-semibold">3 из 12 месяцев</span>
                          </div>
                          <Progress value={25} className="h-2" />
                          <div className="flex justify-between">
                            <span className="text-gray-600">Следующая выплата:</span>
                            <span className="font-semibold text-crypto-green">01.10.2024</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 bg-gradient-to-r from-blue-50 to-royal-blue/5 rounded-2xl border border-blue-200">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <p className="font-bold text-lg text-gray-900">Контракт #1003</p>
                            <p className="text-gray-600">$10,000 USDT • 55% годовых</p>
                          </div>
                          <Badge className="bg-crypto-green/10 text-crypto-green border-crypto-green/20">
                            Активен
                          </Badge>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Прогресс:</span>
                            <span className="font-semibold">3 из 12 месяцев</span>
                          </div>
                          <Progress value={25} className="h-2" />
                          <div className="flex justify-between">
                            <span className="text-gray-600">Следующая выплата:</span>
                            <span className="font-semibold text-crypto-green">01.10.2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment History */}
                <Card className="p-8">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Icon name="History" className="mr-3 text-crypto-gold" size={28} />
                      История выплат
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {paymentHistory.map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-crypto-green/10 rounded-xl flex items-center justify-center">
                              <Icon name="CheckCircle" size={24} className="text-crypto-green" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">${payment.amount}</p>
                              <p className="text-sm text-gray-600">{payment.contract} • {payment.date}</p>
                            </div>
                          </div>
                          <Badge className="bg-crypto-green/10 text-crypto-green border-crypto-green/20">
                            {payment.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-gradient-to-r from-deep-blue to-royal-blue rounded-2xl text-white">
                      <h4 className="font-bold text-lg mb-3">Реферальная программа</h4>
                      <p className="text-blue-100 mb-4">Приглашайте друзей и получайте 5% с их инвестиций!</p>
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                          Пригласить друга
                        </Button>
                        <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                          Мои рефералы
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-deep-blue via-royal-blue to-crypto-green rounded-xl shadow-lg"></div>
                <span className="text-2xl font-bold bg-gradient-to-r from-deep-blue to-royal-blue bg-clip-text text-transparent">
                  CryptoMining Pro
                </span>
              </div>
              
              <div className="hidden lg:flex space-x-8">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`px-4 py-2 text-lg font-medium transition-colors ${
                    activeTab === 'home' ? 'text-royal-blue border-b-2 border-royal-blue' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Главная
                </button>
                <button
                  onClick={() => setActiveTab('contracts')}
                  className={`px-4 py-2 text-lg font-medium transition-colors ${
                    activeTab === 'contracts' ? 'text-royal-blue border-b-2 border-royal-blue' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Контракты
                </button>
                <button
                  onClick={() => setActiveTab('datacenter')}
                  className={`px-4 py-2 text-lg font-medium transition-colors ${
                    activeTab === 'datacenter' ? 'text-royal-blue border-b-2 border-royal-blue' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Дата-центр
                </button>
                <button
                  onClick={() => setActiveTab('support')}
                  className={`px-4 py-2 text-lg font-medium transition-colors ${
                    activeTab === 'support' ? 'text-royal-blue border-b-2 border-royal-blue' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Поддержка
                </button>
                {isAuthenticated && (
                  <button
                    onClick={() => setActiveTab('dashboard')}
                    className={`px-4 py-2 text-lg font-medium transition-colors ${
                      activeTab === 'dashboard' ? 'text-royal-blue border-b-2 border-royal-blue' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Кабинет
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {!isAuthenticated ? (
                <>
                  {/* Login Dialog */}
                  <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="lg" className="text-lg">Войти</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Вход в систему</DialogTitle>
                        <DialogDescription className="text-lg">
                          Введите ваши данные для доступа к личному кабинету
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                          <Label htmlFor="email" className="text-lg">Email</Label>
                          <Input id="email" type="email" placeholder="your@email.com" className="mt-2 h-12 text-lg" required />
                        </div>
                        <div>
                          <Label htmlFor="password" className="text-lg">Пароль</Label>
                          <Input id="password" type="password" className="mt-2 h-12 text-lg" required />
                        </div>
                        <div className="flex justify-between items-center">
                          <Button 
                            type="button" 
                            variant="link" 
                            className="text-royal-blue p-0"
                            onClick={() => {
                              setIsLoginOpen(false)
                              setIsForgotPasswordOpen(true)
                            }}
                          >
                            Забыли пароль?
                          </Button>
                        </div>
                        <Button type="submit" className="w-full h-12 text-lg bg-deep-blue hover:bg-royal-blue">
                          Войти
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  {/* Register Dialog */}
                  <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-deep-blue hover:bg-royal-blue text-lg px-6">
                        Регистрация
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Создать аккаунт</DialogTitle>
                        <DialogDescription className="text-lg">
                          Зарегистрируйтесь для покупки смарт-контрактов
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleRegister} className="space-y-6">
                        <div>
                          <Label htmlFor="name" className="text-lg">Полное имя</Label>
                          <Input id="name" placeholder="Иван Петров" className="mt-2 h-12 text-lg" required />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-lg">Email</Label>
                          <Input id="email" type="email" placeholder="your@email.com" className="mt-2 h-12 text-lg" required />
                        </div>
                        <div>
                          <Label htmlFor="password" className="text-lg">Пароль</Label>
                          <Input id="password" type="password" className="mt-2 h-12 text-lg" required />
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword" className="text-lg">Подтвердите пароль</Label>
                          <Input id="confirmPassword" type="password" className="mt-2 h-12 text-lg" required />
                        </div>
                        <Button type="submit" className="w-full h-12 text-lg bg-deep-blue hover:bg-royal-blue">
                          Создать аккаунт
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  {/* Forgot Password Dialog */}
                  <Dialog open={isForgotPasswordOpen} onOpenChange={setIsForgotPasswordOpen}>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">Восстановление пароля</DialogTitle>
                        <DialogDescription className="text-lg">
                          Введите ваш email для получения ссылки восстановления
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleForgotPassword} className="space-y-6">
                        <div>
                          <Label htmlFor="resetEmail" className="text-lg">Email</Label>
                          <Input id="resetEmail" type="email" placeholder="your@email.com" className="mt-2 h-12 text-lg" required />
                        </div>
                        <Button type="submit" className="w-full h-12 text-lg bg-deep-blue hover:bg-royal-blue">
                          Отправить ссылку
                        </Button>
                        <Button 
                          type="button" 
                          variant="outline" 
                          className="w-full h-12 text-lg"
                          onClick={() => {
                            setIsForgotPasswordOpen(false)
                            setIsLoginOpen(true)
                          }}
                        >
                          Вернуться к входу
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </>
              ) : (
                <div className="flex items-center space-x-6">
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">{user?.name}</p>
                    <p className="text-sm text-gray-600">${user?.balance.toLocaleString()}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="lg"
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
      <main className="pt-20">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-deep-blue to-royal-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-crypto-green to-crypto-gold rounded-xl"></div>
                <span className="text-2xl font-bold">CryptoMining Pro</span>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                Профессиональная платформа для инвестиций в майнинг-контракты с гарантированной доходностью
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6">Платформа</h4>
              <ul className="space-y-3 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors text-lg">О компании</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Смарт-контракты</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Наш дата-центр</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Безопасность</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6">Поддержка</h4>
              <ul className="space-y-3 text-blue-100">
                <li><a href="#" className="hover:text-white transition-colors text-lg">Центр помощи</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Техподдержка</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">Документы</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-lg">API</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xl mb-6">Контакты</h4>
              <div className="space-y-4 text-blue-100">
                <p className="text-lg">support@cryptomining.pro</p>
                <p className="text-lg">+7 (800) 555-MINE (6463)</p>
                <p className="text-lg">Поддержка 24/7</p>
                <div className="flex space-x-4 mt-6">
                  <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                    <Icon name="MessageCircle" size={20} />
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                    <Icon name="Mail" size={20} />
                  </Button>
                  <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
                    <Icon name="Phone" size={20} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 mt-12 pt-8 text-center">
            <p className="text-blue-100 text-lg">
              &copy; 2024 CryptoMining Pro. Все права защищены. Лицензия ЦБ РФ №4521
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}