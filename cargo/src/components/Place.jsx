import React, { useState } from 'react';
import pl2 from "../assets/pl2.avif"; 

import pl1 from "../assets/pl1.avif"; 
import pl3 from "../assets/pl3.avif"; 
import pl4 from "../assets/pl4.avif"; 
import pl5 from "../assets/pl5.avif"; 
import pl6 from "../assets/pl6.avif"; 
const Place = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        {
            id: 1,
            src: pl4,
            alt: "Modern art painting",
            title: "Dubai",
            description: "A beautiful blend of colors and forms"
        },
        {
            id: 2,
            src: pl6,
            alt: "Contemporary sculpture",
            title: "America",
            description: "Modern urban art inspiration"
        },
        {
            id: 3,
            src: pl2,
            alt: "Digital artwork",
            title: "Antarctica",
            description: "Futuristic digital art piece"
        },
        {
            id: 4,
            src: pl1,
            alt: "Mixed media art",
            title: "Europe",
            description: "Vibrant mixed media creation"
        }, {
            id: 5,
            src: pl3,
            alt: "Digital artwork",
            title: "Australia",
            description: "Futuristic digital art piece"
        },
        {
            id: 6,
            src: pl5,
            alt: "Mixed media art",
            title: "Mexican Riviera",
            description: "Vibrant mixed media creation"
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
           
            
            <div className="max-w-7xl mx-auto font-poppins">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl lg:text-6xl big font-semibold text-gray-900 mb-4">
                     Most Popular Locations
                    </h1>
                    <p className="text-md lg:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Explore the most popular cruise destinations with powercruiseholidays — from the sun-soaked beaches of the Caribbean to the breathtaking fjords of Northern Europe. Discover vibrant cultures, stunning coastlines, and unforgettable adventures at every port of call.


                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {images.map((image) => (
                        <div 
                            key={image.id}
                            className="group cursor-pointer relative"
                            onClick={() => setSelectedImage(image)}
                        >
                            {/* Main Card Container */}
                            <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 bg-white">
                                
                                {/* Image Container */}
                                <div className="relative h-80  w-80 overflow-hidden">
                                    <img 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={image.src}
                                        alt={image.alt}
                                        loading="lazy"
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                    
                                    {/* Hover Info Panel */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                                            <h3 className="font-semibold text-gray-900 text-md big mb-1">
                                                {image.title}
                                            </h3>
                                            
                                        </div>
                                    </div>

                                    {/* View Button */}
                                   
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-300" />
                                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 delay-500" />
                            </div>

                           
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for enlarged view */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div 
                        className="relative max-w-4xl max-h-full bg-white rounded-2xl overflow-hidden transform scale-95 animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                        >
                            ✕
                        </button>
                        <img 
                            src={selectedImage.src} 
                            alt={selectedImage.alt}
                            className="w-full h-auto max-h-[90vh] object-contain"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                            <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                            <p className="text-white/90">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Place;