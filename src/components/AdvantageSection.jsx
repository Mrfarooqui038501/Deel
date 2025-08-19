import React from 'react'
import { BarChart3, TrendingUp, Headphones, Handshake, Zap, Lock } from 'lucide-react'

const AdvantageSection = () => {
  const advantages = [
    {
      icon: BarChart3,
      title: 'Powerful reporting',
      description: 'Unlock unrivalled insights into spending and performance with compensation, OKRs, equity and more for your team in one system.',
      color: 'bg-blue-500'
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'From contractors and EOR to payroll and PEO, Deel\'s the only platform that can evolve with every stage of your company\'s growth.',
      color: 'bg-green-500'
    },
    {
      icon: Headphones,
      title: 'Dedicated support',
      description: 'We don\'t rely on third parties, which means you\'ll get a single dedicated POC to work alongside with and guaranteed 1.25 min FRT.',
      color: 'bg-purple-500'
    },
    {
      icon: Handshake,
      title: 'Trusted partner',
      description: 'Engage with one partner for your global growth. From M&As to entity set up, partner with our in-house team for all your expansion needs.',
      color: 'bg-orange-500'
    },
    {
      icon: Zap,
      title: 'Seamless integration',
      description: 'Eliminate data silos and reduce manual work with 100+ integrations across your entire tech stack, from accounting to expenses.',
      color: 'bg-cyan-500'
    },
    {
      icon: Lock,
      title: 'Unrivalled security',
      description: 'Connect your company in a single secure platform. Our platform is GDPR, SOC2, and ISO 27001 compliant.',
      color: 'bg-red-500'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Deel Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Move faster with HR and payroll for your team in one place
          </p>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Deel's the only platform that allows you to combine payroll, HR, performance, and compliance 
            for any type of worker in 150 countries into a single platform. Consolidate your tools, 
            reduce overhead, and unlock unrivalled insights into your workforce data.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="bg-white border border-gray-200 rounded-xl p-8 h-full hover:shadow-xl hover:border-deel-blue transition-all duration-300">
                  <div className={`${advantage.color} p-3 rounded-lg inline-block mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Coverage Illustration */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Global Coverage</h3>
            <p className="text-xl mb-8 opacity-90">
              Operate compliantly in 150+ countries with local expertise
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold mb-2">150+</div>
                <div className="text-sm opacity-80">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">200+</div>
                <div className="text-sm opacity-80">Currencies</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm opacity-80">Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">99.9%</div>
                <div className="text-sm opacity-80">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvantageSection