import React from 'react'
import { Phone, UserPlus, Settings,BarChart3 } from 'lucide-react'

const GetStarted = () => {
  const steps = [
    {
      icon: Phone,
      title: 'Book a call',
      description: 'Book a call with our global workforce consultants. We\'ll set you up with a free account ready to suit your team\'s needs.',
      color: 'bg-blue-500'
    },
    {
      icon: UserPlus,
      title: 'Add your people',
      description: 'From new hires to your existing workforce, onboard effortlessly with our self-serve platform.',
      color: 'bg-green-500'
    },
    {
      icon: Settings,
      title: 'Dedicated onboarding',
      description: 'From navigating local laws to support for your team members, our dedicated team will help you get set up seamlessly.',
      color: 'bg-purple-500'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get started with Deel in three easy steps
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  <div className={`${step.color} p-6 rounded-full inline-block group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to scale your global team?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join 35,000+ companies that trust Deel for their global workforce needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-deel-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Get started
              </button>
              <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-lg">
                Book a demo
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Visual */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 rounded-xl p-8 max-w-md mx-auto">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg h-32 flex items-center justify-center mb-4">
              <BarChart3 className="h-16 w-16 text-white" />
            </div>
            <p className="text-sm opacity-80">
              Analytics Dashboard Preview
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted