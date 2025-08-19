import React from 'react'
import { FileText, BarChart3, UserCheck } from 'lucide-react'

const ComplianceSection = () => {
  const complianceFeatures = [
    {
      icon: FileText,
      title: 'Keep track of the latest legal updates',
      description: 'Stay informed about regulatory changes across all jurisdictions where you operate.',
      color: 'bg-blue-500'
    },
    {
      icon: BarChart3,
      title: 'Get monthly workforce insights',
      description: 'Comprehensive analytics and reporting on your global workforce performance.',
      color: 'bg-green-500'
    },
    {
      icon: UserCheck,
      title: 'Easily determine worker classification',
      description: 'Automated tools to ensure proper worker classification and compliance.',
      color: 'bg-purple-500'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Global Compliance
            </h2>
            <h3 className="text-2xl font-semibold text-deel-blue mb-8">
              Unlock Continuous Compliance™ with the Deel Compliance Hub
            </h3>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Keep your finger on the pulse of global compliance issues like never before. 
              Our Compliance Hub provides access to the latest regulatory updates and risk warnings, 
              offering guidance and actionable alerts to enhance compliance—all in a single place.
            </p>

            <div className="space-y-8">
              {complianceFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-start group">
                    <div className={`${feature.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            <button className="btn-primary mt-8">
              Explore Compliance Hub
            </button>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-semibold">Compliance Dashboard</h4>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">Legal Updates</span>
                      <span className="text-green-300 text-sm">✓ Up to date</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">Worker Classification</span>
                      <span className="text-green-300 text-sm">✓ Compliant</span>
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-sm">Risk Monitoring</span>
                      <span className="text-yellow-300 text-sm">⚠ 2 Alerts</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">150+</div>
                  <div className="text-white/80 text-sm">Countries Covered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-white/80 text-sm">Compliance Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComplianceSection