import React from 'react';

import cu1 from "../assets/cu2.png"; 
import cu2 from "../assets/cu1.png"; 
import cu3 from "../assets/cu3.png"; 
import cu4 from "../assets/cu4.png"; 
import cu5 from "../assets/cu5.png"; 
import cu6 from "../assets/cu2.png"; 

const Cruises = () => {
  const cruises = [
    {
      id: 1,
      name: "BOTAL CAMBERAN",
      route: "Miami to Bahamas",
      duration: "5 days 6 nights",
      price: "$999",
      rating: "5 star",
      image: cu1,
      callToAction: "Call Now",
      badge: "Most Popular"
    },
    {
      id: 2,
      name: "Celebrity Couleur",
      route: "Miami to Bahamas",
      duration: "5 days 6 nights",
      price: "$999",
      rating: "5 star",
      image: cu2,
      callToAction: "Call Now",
      badge: "Luxury"
    },
    {
      id: 3,
      name: "Holland America",
      route: "Miami to Bahamas",
      duration: "5 days 6 nights",
      price: "$999",
      rating: "5 star",
      image: cu3,
      callToAction: "Call Now",
      badge: "Family Friendly"
    },
    {
      id: 4,
      name: "Reginl",
      route: "Miami to Bahamas",
      duration: "5 days 6 nights",
      price: "$999",
      rating: "5 star",
      image: cu4,
      callToAction: "Call Now",
      badge: "Best Value"
    },
    {
      id: 5,
      name: "SEABOURN",
      route: "Miami to Bahamas",
      duration: "5 days 6 nights",
      price: "$999",
      rating: "5 star",
      image: cu5,
      callToAction: "Call Now",
      badge: "Premium"
    },
    {
      id: 6,
      name: "Celebrity Couleur",
      route: "Miami to Bahamas",
      duration: "5 days 6 nights",
      price: "$999",
      rating: "5 star",
      image: cu6,
      callToAction: "Call Now",
      badge: "Luxury"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-100 py-8 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16 mt-16 big">
        <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          🚢 Limited Time Offers
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Discover the best{' '}
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            cruise deals
          </span>{' '}
          with KTC Cruises!
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Take advantage of <span className="font-semibold text-blue-600">limited-time discounts</span>, 
          early booking promotions, and exclusive onboard perks for your perfect sea adventure.
        </p>
      </div>

      {/* Main Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16 big ">
        <div className="relative inline-block">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Amazing Cruise Packages for
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Every Traveler
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
        </div>
      </div>

      {/* Cruise Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 big">
          {cruises.map((cruise) => (
            <div 
              key={cruise.id}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 relative"
            >
              {/* Badge */}
              {cruise.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {cruise.badge}
                  </span>
                </div>
              )}

              {/* Cruise Image - FIXED */}
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={cruise.image} 
                  alt={cruise.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                
                {/* Cruise Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white text-2xl font-bold text-left block bg-black/50 px-4 py-2 rounded-lg backdrop-blur-sm">
                    {cruise.name}
                  </span>
                </div>
                
                {/* Decorative Waves */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-t-full transform translate-y-1/2"></div>
              </div>
              
              {/* Cruise Details */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {cruise.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">{cruise.route}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-medium">{cruise.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-amber-600">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <span className="font-bold">{cruise.rating}</span>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="border-t border-gray-200 my-6"></div>
                
                {/* Price and Call to Action */}
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <div className="text-sm text-gray-500 font-medium">Starting from</div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      {cruise.price}
                    </div>
                    <div className="text-xs text-gray-400">per person</div>
                  </div>
                  <button 
    onClick={() => window.open('tel:8883704002', '_self')}
    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
>
    {cruise.callToAction}
</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    

      {/* Trust Badges */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-600">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-blue-600 font-bold">✓</span>
            </div>
            <span className="font-semibold">Best Price Guarantee</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-blue-600 font-bold">⭐</span>
            </div>
            <span className="font-semibold">5-Star Rated</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-blue-600 font-bold">🛡️</span>
            </div>
            <span className="font-semibold">Secure Booking</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <span className="text-blue-600 font-bold">24/7</span>
            </div>
            <span className="font-semibold">Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cruises;