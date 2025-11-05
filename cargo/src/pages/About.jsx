import React from "react";
import { Users, Compass, Headphones, Anchor, Star, Globe, Shield, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-700 to-indigo-800 px-4 sm:px-6 md:px-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400/20 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-300/10 rounded-full"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <Anchor size={20} />
            <span className="text-sm font-medium">Since 2015</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            About <span className="text-blue-300">Us</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Crafting unforgettable sea journeys with passion, innovation, and exceptional service
          </p>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-12 sm:h-20 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Our Journey
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Sailing Through <span className="text-blue-600">Time</span> & <span className="text-indigo-600">Excellence</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded in <span className="text-gray-900 font-semibold">2015</span>, OceanLine began with a 
                  revolutionary vision — to transform luxury sea travel into accessible, unforgettable experiences.
                </p>
                <p className="text-lg">
                  From our humble beginnings to serving thousands of global travelers, our commitment to 
                  <span className="text-gray-900 font-semibold"> innovation, hospitality, and sustainability</span> 
                  has never wavered.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-500">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600">100+</div>
                  <div className="text-sm text-gray-500">Destinations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600">8</div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right image placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl h-80 sm:h-96 shadow-2xl border border-blue-200/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-blue-600">
                    <Globe size={64} className="mx-auto mb-4 opacity-20" />
                    <p className="text-sm opacity-40">OceanLine Journey</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-2xl shadow-lg flex items-center justify-center">
                <Star className="text-white" size={32} fill="currentColor" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-400 rounded-2xl shadow-lg flex items-center justify-center">
                <Heart className="text-white" size={24} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Us <span className="text-blue-600">Different</span>
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to delivering exceptional experiences through our core values
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Explore Destinations */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Compass size={24} className="text-blue-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Explore Destinations</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Discover exclusive offers on affordable and luxurious cruise experiences to the world's most breathtaking destinations.
              </p>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Learn more
                <span className="text-lg">→</span>
              </div>
            </div>

            {/* Easy Booking */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-indigo-200">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users size={24} className="text-indigo-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Easy Booking</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Plan your perfect cruise in just a few clicks with our intuitive platform designed for simplicity and convenience.
              </p>
              <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Learn more
                <span className="text-lg">→</span>
              </div>
            </div>

            {/* 24/7 Support */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200">
              <div className="absolute top-6 right-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Headphones size={24} className="text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our dedicated support team is available around the clock to ensure your journey is smooth and worry-free.
              </p>
              <div className="inline-flex items-center gap-2 text-green-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Learn more
                <span className="text-lg">→</span>
              </div>
            </div>
          </div>

          {/* Additional mini-features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-4">
              <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900">Safe Travel</div>
            </div>
            <div className="text-center p-4">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900">5-Star Service</div>
            </div>
            <div className="text-center p-4">
              <Globe className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900">Global Reach</div>
            </div>
            <div className="text-center p-4">
              <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <div className="font-semibold text-gray-900">Passionate Team</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;