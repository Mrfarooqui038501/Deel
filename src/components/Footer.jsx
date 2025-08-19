import React from 'react'
import { Twitter, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Solutions',
      links: ['Global Payroll', 'EOR', 'Contractors', 'HR Management', 'Compliance', 'Immigration']
    },
    {
      title: 'Use Cases',
      links: ['Hire Globally', 'Manage Contractors', 'Scale Teams', 'Stay Compliant', 'Expand Business']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Help Center', 'Templates', 'Webinars', 'Guides', 'Reports']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Partners', 'Security', 'Status']
    }
  ]

  const socialLinks = [
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-bold text-white mb-4">deel</div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The global people platform that simplifies hiring, HR, payroll, and compliance 
              for businesses operating across borders.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">
              Stay updated with Deel
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on global hiring and compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-deel-blue"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Deel. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Security
              </a>
            </div>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-3 mb-2">
                <div className="text-xs font-semibold">SOC 2</div>
              </div>
              <div className="text-xs text-gray-400">Type II</div>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-3 mb-2">
                <div className="text-xs font-semibold">ISO 27001</div>
              </div>
              <div className="text-xs text-gray-400">Certified</div>
            </div>
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-3 mb-2">
                <div className="text-xs font-semibold">GDPR</div>
              </div>
              <div className="text-xs text-gray-400">Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer