import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-deel-blue mb-4 tracking-wide uppercase">
            DEEL IS TRUSTED BY 35,000+ COMPANIES FROM STARTUPS TO ENTERPRISE BUSINESSES
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Global People Platform
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Scale globally with velocity and ease
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Deel is built to scale with organizations of all sizes, from small teams to enterprises of thousands. 
            Whether you want to hire worldwide without opening legal entities, streamline HR for your global team, 
            or pay all types of workers anywhere with consolidated payroll—Deel does it all with full compliance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="btn-primary text-lg px-8 py-4">
              Get started
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              Book a demo
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl h-64 md:h-80 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-3xl font-bold mb-4">Global Teams Dashboard</div>
                <div className="grid grid-cols-3 gap-8 text-sm">
                  <div>
                    <div className="text-2xl font-bold">150+</div>
                    <div>Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">500K+</div>
                    <div>Workers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">35K+</div>
                    <div>Companies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-8">
            Why companies around the world prefer Deel for expanding their team globally.
          </p>
          <p className="text-sm font-medium text-deel-blue">
            Choose Deel for an industry-leading experience
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero