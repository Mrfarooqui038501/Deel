import React from 'react'
import { Users, Globe, DollarSign } from 'lucide-react'

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '500K',
      description: 'workers onboarded globally',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Globe,
      number: '35K',
      description: 'global businesses supported',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: DollarSign,
      number: '$10B',
      description: 'compliantly processed Global Payroll',
      color: 'bg-purple-100 text-purple-600'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-6">
                  <div className={`p-4 rounded-full ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">
                  {stat.description}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default StatsSection