import React, { useState } from 'react';

import lo1 from "../assets/lo1.jpeg"; 
import lo2 from "../assets/lo2.png"; 
import lo3 from "../assets/lo3.jpeg"; 
import lo4 from "../assets/lo4.png"; 
import lo5 from "../assets/lo5.png"; 
import lo6 from "../assets/lo6.png"; 
import lo7 from "../assets/lo7.jpeg"; 
import cu1 from "../assets/cu2.png"; 
import cu2 from "../assets/cu1.png"; 
import cu3 from "../assets/cu3.png"; 
import cu4 from "../assets/cu4.png"; 
import cu5 from "../assets/cu5.png"; 
import cu6 from "../assets/cu2.png"; 
const Package = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const cruisePackages = [
        {
            id: 1,
            cruiseLine: "ROYAL CARIBBEAN",
            price: 452,
            route: "Miami to Bahamas",
            duration: "5 days 6 nights",
            rating: "5 star",
            image:cu3,
            discount: "15% OFF",
            logo: lo1
        },
        {
            id: 2,
            cruiseLine: "Celebrity Outdoor",
            price: 349,
            route: "Miami to Bahamas",
            duration: "5 days 6 nights",
            rating: "5 star",
            image:cu4,
            discount: "20% OFF",
            logo: lo2
        },
        {
            id: 3,
            cruiseLine: "Holland America Line",
            price: 569,
            route: "Miami to Bahamas",
            duration: "5 days 6 nights",
            rating: "5 star",
            image: cu5,
            discount: "10% OFF",
            logo: lo3
        },
        {
            id: 4,
            cruiseLine: "Norwegian Cruise",
            price: 489,
            route: "Miami to Bahamas",
            duration: "5 days 6 nights",
            rating: "5 star",
            image: cu1,
            discount: "25% OFF",
            logo: lo4
        },
        {
            id: 5,
            cruiseLine: "Princess Cruises",
            price: 521,
            route: "Miami to Bahamas",
            duration: "5 days 6 nights",
            rating: "5 star",
            image: cu2,
            discount: "18% OFF",
            logo: lo5
        },
        {
            id: 6,
            cruiseLine: "MSC Cruises",
            price: 395,
            route: "Miami to Bahamas",
            duration: "5 days 6 nights",
            rating: "5 star",
            image: cu3,
            discount: "30% OFF",
            logo: lo6
        },
        {
            id: 7,
            cruiseLine: "Carnival Cruise",
            price: 325,
            route: "Miami to Bahamas",
            duration: "5 days 6 nights",
            rating: "5 star",
            image:cu4,
            discount: "22% OFF",
            logo: lo7
        },
        {
            id: 8,
            cruiseLine: "Disney Cruise",
            price: 612,
            route: "Miami to Bahamas",
            duration: "5 days 6 nights",
            rating: "5 star",
            image: cu5,
            discount: "12% OFF",
            logo: lo3
        },
        {
            id: 9,
            cruiseLine: "Virgin Voyages",
            price: 578,
            route: "Miami to Bahamas",
            duration: "5 days 6 nights",
            rating: "5 star",
            image: cu6,
            discount: "17% OFF",
            logo: lo5
        }
    ];

    const slidesToShow = 3;
    const totalSlides = Math.ceil(cruisePackages.length / slidesToShow);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getVisiblePackages = () => {
        const startIndex = currentSlide * slidesToShow;
        return cruisePackages.slice(startIndex, startIndex + slidesToShow);
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white w-[100%]">
            <div className="w-full mx-auto">
                {/* Header */}
                <div className="text-center mb-16 w-[100%]">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Luxury Cruise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Packages</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience world-class amenities, stunning destinations, and unforgettable memories with our exclusive cruise packages
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative w-full overflow-hidden">
                    {/* Navigation Buttons */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-10 transition-all duration-300 hover:scale-110 hover:shadow-blue-500/25"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Packages Grid */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {getVisiblePackages().map((pkg) => (
                            <div key={pkg.id} className="group relative w-full">
                                {/* Main Card */}
                                <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 group-hover:scale-105 group-hover:border-blue-200 w-full">
                                    
                                    {/* Image Section with Overlay */}
                                    <div className="relative h-56 overflow-hidden w-full">
                                        <img 
                                            src={pkg.image} 
                                            alt={pkg.cruiseLine}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                        
                                        {/* Discount Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                                                {pkg.discount}
                                            </span>
                                        </div>
                                        
                                        {/* Rating Badge */}
                                        <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
                                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                            </svg>
                                            <span className="text-white text-sm font-semibold">{pkg.rating}</span>
                                        </div>

                                        {/* Cruise Line Name */}
                                        <div className="absolute bottom-4 left-4">
                                            <h3 className="text-xl font-bold text-white drop-shadow-lg">{pkg.cruiseLine}</h3>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6 w-full">
                                        {/* Price Section */}
                                        <div className="flex items-center justify-between mb-6 w-full">
                                            <div>
                                                <span className="text-3xl font-bold text-gray-900">${pkg.price}</span>
                                                <span className="text-gray-500 text-sm block">per person</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                                   <img 
                                                     src={pkg.logo} 
                                                     alt={`${pkg.cruiseLine} logo`}
                                                     className="w-full h-full object-cover"
                                                   />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Route and Duration */}
                                        <div className="space-y-3 mb-6 w-full">
                                            <div className="flex items-center text-gray-700 w-full">
                                                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <span className="text-sm text-gray-500">Route</span>
                                                    <p className="font-semibold text-gray-900">{pkg.route}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center text-gray-700 w-full">
                                                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1">
                                                    <span className="text-sm text-gray-500">Duration</span>
                                                    <p className="font-semibold text-gray-900">{pkg.duration}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Call Now Button */}
                                      <button 
    onClick={() => window.open('tel:+18883704002', '_self')}
    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 group relative overflow-hidden"
>
    <span className="relative z-10 flex items-center justify-center">
        Call Now
        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
    </span>
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</button>
                                    </div>
                                </div>

                                {/* Floating Glow Effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-10 blur transition duration-500 group-hover:duration-200 -z-10 w-full" />
                            </div>
                        ))}
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-12 space-x-3 w-full">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                                    index === currentSlide 
                                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 w-10 shadow-lg shadow-blue-500/50' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Package;