import React from "react";
import { motion } from "framer-motion";
import { Car, Wallet, Headphones, Route, Star, MapPin, Clock, Shield, Zap, ArrowRight } from "lucide-react";
import car1 from "../assets/bo1.jpg";
import car2 from "../assets/bo2.jpg";
import car3 from "../assets/bo3.jpg";
import car4 from "../assets/bo4.jpg";
import car5 from "../assets/bo5.jpg";
import car6 from "../assets/bo6.jpg";
import car7 from "../assets/bo7.jpg";
import car8 from "../assets/bo8.jpg";
import car9 from "../assets/bo9.jpg";
import car10 from "../assets/bo10.jpg";

const cities = [
  { name: "New York City, NY", desc: "Perfect for business & city trips", price: "From $28/day", img: car3, popular: true },
  { name: "Los Angeles, CA", desc: "Convertibles for sunny drives", price: "From $30/day", img: car4, popular: true },
  { name: "Chicago, IL", desc: "Great for weekend escapes", price: "From $35/day", img: car5 },
  { name: "Miami, FL", desc: "Cruise through South Beach", price: "From $27/day", img: car6 },
  { name: "Dallas, TX", desc: "Spacious rides for comfort", price: "From $26/day", img: car8 },
  { name: "Las Vegas, NV", desc: "Hit the strip in style", price: "From $29/day", img: car10, popular: true },
  { name: "Orlando, FL", desc: "Perfect for family vacations", price: "From $25/day", img: car7 },
  { name: "San Francisco, CA", desc: "Explore the Golden Gate City", price: "From $32/day", img: car9 },
];

const features = [
  {
    icon: <Car className="w-6 h-6" />,
    bg: "bg-blue-500",
    gradient: "from-blue-500 to-blue-600",
    title: "Modern Fleet",
    desc: "From economy to luxury — experience clean, efficient, and stylish vehicles suited for every traveler.",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    bg: "bg-green-500",
    gradient: "from-green-500 to-green-600",
    title: "Affordable Pricing",
    desc: "Get transparent pricing and exclusive deals with no hidden fees — guaranteed savings on every rental.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    bg: "bg-orange-500",
    gradient: "from-orange-500 to-orange-600",
    title: "24/7 Live Support",
    desc: "Need help on the go? Our U.S.-based support is available around the clock to keep your journey stress-free.",
  },
  {
    icon: <Route className="w-6 h-6" />,
    bg: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
    title: "Nationwide Access",
    desc: "With hundreds of pickup & drop-off points — enjoy seamless service across all major U.S. cities and airports.",
  },
];

const testimonials = [
  {
    name: "John M.",
    route: "New York → Boston",
    text: "Fantastic service! The car was spotless, pickup was quick, and I got an upgrade for free. Made my trip super convenient.",
    rating: 5,
  },
  {
    name: "Sophia L.",
    route: "Miami → Orlando",
    text: "Smooth booking and friendly customer support! The SUV was perfect for our family trip — clean, comfortable, and affordable.",
    rating: 5,
  },
  {
    name: "David R.",
    route: "Los Angeles → San Diego",
    text: "Easiest car rental experience ever! The app made check-in a breeze and the drop-off took just minutes.",
    rating: 4,
  },
];

const stats = [
  { number: "50K+", label: "Happy Customers", icon: <Star className="w-5 h-5" /> },
  { number: "200+", label: "Cities Covered", icon: <MapPin className="w-5 h-5" /> },
  { number: "24/7", label: "Support Available", icon: <Clock className="w-5 h-5" /> },
  { number: "100%", label: "Secure Booking", icon: <Shield className="w-5 h-5" /> },
];

const CarRental = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${car1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-blue-900/60" />
        
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">Premium Car Rentals</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Drive Your
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Adventure
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Experience the ultimate comfort and luxury with our premium car rental service. 
              Book your dream ride today!
            </p>

          
          </motion.div>
        </div>

        {/* Stats Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="container mx-auto px-6 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    {stat.icon}
                    <div className="text-2xl font-bold">{stat.number}</div>
                  </div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={car2} alt="Car rental service" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100% Secure</div>
                    <div className="text-sm text-gray-600">Book with confidence</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wider">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                Why Choose Us
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Reliable Car Rentals
                <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                  Across the USA
                </span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Flexible and affordable rentals designed for every traveler — business, family trips, or city escapes.
              </p>

              <div className="space-y-4">
                {[
                  "Wide Fleet Selection — Economy to luxury vehicles",
                  "Nationwide Availability — Airports & major cities",
                  "Trusted & Secure — Transparent pricing & 24/7 support",
                  "Best Price Guarantee — Find a lower price? We'll match it!"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition-all flex items-center gap-2"
              >
                Book Ride Now
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* City Deals */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Zap className="w-4 h-4" />
              Limited-Time Offers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Car Rental Deals
              <span className="block text-transparent bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text">
                Across U.S. Cities
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              From city streets to scenic highways — get the best rates & reliable service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
              >
                {city.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img 
                    src={city.img} 
                    alt={city.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{city.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{city.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-bold text-lg">{city.price}</span>
                  <motion.a
    href="tel:+18883704002"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-1"
>
    Book
    <ArrowRight className="w-4 h-4" />
</motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold mb-4">
              Why Choose Us?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Drive Smarter,
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                Travel Better
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-blue-100 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Star className="w-4 h-4" />
              Customer Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Stories from
              <span className="block text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text">
                Happy Travelers
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              From city drives to cross-country adventures, see why customers across the USA trust{" "}
              <span className="font-semibold text-blue-600">KTC Cruises</span> for their journeys.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-4">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-6 flex-grow">
                    "{review.text}"
                  </p>

                  <div className="border-t border-gray-200 pt-4">
                    <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.route}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarRental;