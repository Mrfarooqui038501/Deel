import React, { useState } from 'react'
import { Building, Users, CreditCard, Globe, Shield } from 'lucide-react'

const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const platformServices = [
    {
      icon: Building,
      title: 'EOR',
      description: 'Hire employees anywhere without setting up entities',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Contractor',
      description: 'Onboard and pay independent contractors globally',
      color: 'bg-green-500'
    },
    {
      icon: CreditCard,
      title: 'Global Payroll',
      description: 'Streamlined payroll for your global workforce',
      color: 'bg-purple-500'
    },
    {
      icon: Globe,
      title: 'Contractor of Record',
      description: 'Simplified contractor management and compliance',
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'PEO',
      description: 'Professional Employer Organization services',
      color: 'bg-red-500'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Deel is your all-in-one Global People Platform
          </h2>
        </div>

        {/* Platform Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {platformServices.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                  activeTab === index 
                    ? 'bg-white shadow-xl border-2 border-deel-blue' 
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <div className={`${service.color} p-3 rounded-lg inline-block mb-4`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Active Service Detail */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {platformServices[activeTab].title} Solutions
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {platformServices[activeTab].description}. Our platform ensures full compliance 
                while providing the flexibility and speed your business needs to grow globally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-deel-blue rounded-full mr-3"></div>
                  <span className="text-gray-700">Full legal compliance in 150+ countries</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-deel-blue rounded-full mr-3"></div>
                  <span className="text-gray-700">Automated workflows and approvals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-deel-blue rounded-full mr-3"></div>
                  <span className="text-gray-700">24/7 dedicated support</span>
                </div>
              </div>
              <button className="btn-primary mt-8">
                Learn more
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center">
                <div className={`${platformServices[activeTab].color} p-6 rounded-full inline-block mb-4`}>
                  {React.createElement(platformServices[activeTab].icon, { className: "h-12 w-12 text-white" })}
                </div>
                <div className="text-lg font-semibold text-gray-700">
                  {platformServices[activeTab].title} Dashboard
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformSection