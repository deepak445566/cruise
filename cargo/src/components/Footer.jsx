import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
     <>
    <footer className="bg-gray-900 text-white ">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* Column 1 */}
            <div>
              <h4 className="font-semibold mb-3 text-blue-300">Explore</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
                <li><Link to="/cruises" className="text-gray-300 hover:text-white">Cruises</Link></li>
                <li><Link to="/car" className="text-gray-300 hover:text-white">Car Rental</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h4 className="font-semibold mb-3 text-blue-300">Policies</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/term" className="text-gray-300 hover:text-white">Terms & Conditions</Link></li>
                <li><Link to="/policy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/refund" className="text-gray-300 hover:text-white">Refund Policy</Link></li>
                <li><Link to="/cancel" className="text-gray-300 hover:text-white">Cancellation Policy</Link></li>
                <li><Link to="/advisory" className="text-gray-300 hover:text-white">Travel Advisory</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h4 className="font-semibold mb-3 text-blue-300">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/cookie" className="text-gray-300 hover:text-white">Cookie Policy</Link></li>
                <li><Link to="/service" className="text-gray-300 hover:text-white">Service Fees</Link></li>
                <li><Link to="/tax" className="text-gray-300 hover:text-white">Taxes & Fees</Link></li>
                <li><Link to="/fees" className="text-gray-300 hover:text-white">Post Ticketing Fees</Link></li>
                <li><Link to="/disclamer" className="text-gray-300 hover:text-white">Disclaimer</Link></li>
              </ul>
            </div>
          </div>

          {/* Right Side - Contact Info */}
          <div className="bg-gray-700 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">The Company</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-300">Address</p>
                  <p className="text-gray-400">Namecheap,Inc. 4600, East Washington Street .Suite 305, Pheonix,AZ 85034</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-300">Phone</p>
                  <p className="text-gray-400">(888)370-4002</p>
                </div>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-300">Email</p>
                  <p className="text-gray-400">info@powercruiseholidays.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </footer>
      <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Company Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Company Description */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Power<span className="text-blue-400">Cruises Holidays</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            www.PowerCruisesHolidays.com is a premier travel brand operated by PowerCruisesHolidays COMPANY LLC 
                            (Company Registration No: 88-3647975), headquartered at 6639 Fairway Ave, 
                            Indianapolis, IN 46250, USA. We pride ourselves on delivering top-tier cruise 
                            services, backed by our CLIA certification (No: 00046311), ensuring industry-standard excellence.
                        </p>
                        
                        
                    </div>

                    {/* Partnerships & Legal */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">Partnerships & Affiliations</h4>
                        <p className="text-gray-300 leading-relaxed">
                            We partner with ALLCRUISES24.COM for ticketing services and are proudly affiliated 
                            with major cruise lines including Royal Caribbean Group, Carnival Corporation, 
                            Celebrity Cruises, and Allcruises24.com, offering our clients a wide range of 
                            trusted cruise options worldwide.
                        </p>
                        
                        {/* Legal Links */}
                        <div className="space-y-2 pt-4">
                            <p className="text-gray-300">
                                By using our services, you agree to our{' '}
                                <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                                    www.PowerCruisesHolidays.com (PowerCruisesHolidays)'s Terms & Conditions
                                </a>{' '}
                                and{' '}
                                <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                                    Privacy Policy
                                </a>
                            </p>
                            <p className="text-gray-300 text-sm">
                                Please note that all transactions are subject to Our Service Fees and Post 
                                Ticketing Fees. For more details, make sure to check insights from our{' '}
                                <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                                    PostCookie Policy
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact & Help Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                    {/* Call Us */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center justify-center md:justify-start">
                            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Need help? Call us
                        </h4>
                        <a 
                            href="tel:18884536115" 
                            className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors duration-300"
                        >
                        (888)370-4002
                        </a>
                    </div>

                    {/* Send Message */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center justify-center md:justify-start">
                            <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send us a message
                        </h4>
                        <p className="text-gray-300">
                            Contact our agents about your booking, and we'll reply as soon as possible.
                        </p>
                    
                    </div>

                    {/* Share Moments */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center justify-center md:justify-start">
                            <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                            </svg>
                            Share Your Moments
                        </h4>
                        <div className="flex justify-center md:justify-start space-x-4 text-2xl">
                            <span className="cursor-pointer hover:scale-110 transition-transform duration-300">💬</span>
                            <span className="cursor-pointer hover:scale-110 transition-transform duration-300">💬</span>
                        </div>
                        <p className="text-gray-300 text-sm mt-2">
                            Share your cruise experiences with us!
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-gray-900 border-t border-gray-700 big">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} KTCCruises COMPANY LLC. All rights reserved.
                        </p>
                        
                    </div>
                </div>
            </div>
        </footer>
       </>
  );
};

export default Footer;