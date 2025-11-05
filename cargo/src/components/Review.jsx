import React from 'react';

const Review = () => {
  const testimonials = [
    {
      id: 1,
      text: "This was our first cruise and thanks to powercruiseholiday, it won't be our last! Everything was seamless, from booking to boarding, and we truly appreciated the helpful customer service throughout.",
      author: "Wade"
    },
    {
      id: 2,
      text: "Smooth booking process with powercruisesholiday, excellent service, great cruise experience. Highly recommend and will book again soon!",
      author: "Rian Nicolus"
    },
    {
      id: 3,
      text: "From start to finish, powercruisesholiday made our vacation stress-free and relaxing. The staff were attentive, the ship was beautiful, and the excursions were well-organized. Highly recommend!",
      author: "charlie"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-500 text-white p-2 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-600 leading-relaxed mb-6 mt-4">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">
                    {testimonial.author.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 capitalize">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">Happy Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;