import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const CustomerStories = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      company: 'TechCorp',
      logo: 'TC',
      quote: 'Deel helped us expand to 15 countries in just 6 months. The compliance support is unmatched.',
      author: 'Sarah Johnson',
      position: 'Head of People Operations',
      rating: 5
    },
    {
      company: 'GlobalStart',
      logo: 'GS',
      quote: 'The platform saved us countless hours on payroll management. Our team loves the self-service features.',
      author: 'Mike Chen',
      position: 'CFO',
      rating: 5
    },
    {
      company: 'ScaleUp Inc',
      logo: 'SU',
      quote: 'From 50 to 500 employees across 20 countries - Deel made our growth seamless and compliant.',
      author: 'Emma Davis',
      position: 'VP of Operations',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Customer Stories
          </h2>
          <p className="text-xl text-gray-600">
            We've helped 35,000+ companies grow and manage global teams
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 bg-deel-blue rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonials[currentTestimonial].logo}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? 'bg-deel-blue' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div className="mt-20">
          <p className="text-center text-gray-500 mb-8">
            Trusted by companies worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center opacity-60">
            {['Shopify', 'Klarna', 'Revolut', 'Notion', 'Dropbox', 'Reddit'].map((company) => (
              <div key={company} className="text-center">
                <div className="bg-gray-200 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="font-semibold text-gray-600">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomerStories