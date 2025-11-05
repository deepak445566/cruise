import React from 'react';

const Tour = () => {
  return (
    <div className="bg-white">
<div className=' h-[40vh] flex flex-col items-center bg-[#F2F4FB] w-full py-1'>
<h1 className='mt-5 big text-5xl font-semibold'>Great Offers</h1>
<p className='max-w-5xl text-md mt-5 p-4'>Discover incredible cruise deals with powercruiseholidays! Enjoy exclusive discounts on top cruise lines, limited-time promotions, and special onboard packages. Whether you're planning a family vacation or a romantic getaway, our great offers help you sail for less. Don’t miss out—book your dream cruise today!

</p>

</div>



      {/* Section 1: Text Left, Image Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6 big">
            {/* Price */}
            <div className="flex items-baseline gap-2 big">
              <span className="text-5xl font-bold text-gray-900">$699</span>
              <span className="text-lg text-gray-600">/ PER NIGHT</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900">Deluxe Room</h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience unmatched comfort and style in our Deluxe Rooms aboard powercruiseholidays. 
              Enjoy spacious accommodations, elegant furnishings, and stunning ocean views — 
              the perfect retreat after a day of adventure and relaxation. Whether traveling 
              as a couple or with family, our Deluxe Rooms offer an ideal blend of luxury and value.
            </p>

            <button
  onClick={() => window.location.href = "tel:+18883704002"}
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
>
  Call Now
</button>

          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] bg-gray-200 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Deluxe Room"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative lg:order-1">
            <div className="w-full h-96 lg:h-[500px] bg-gray-200 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Luxury Suite"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-6 lg:order-2 big">
            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-gray-900">$899</span>
              <span className="text-lg text-gray-600">/ PER NIGHT</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900">Luxury Suite</h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Indulge in the ultimate cruise experience with our Luxury Suites. Featuring 
              expansive living areas, premium amenities, and panoramic ocean views, these 
              suites redefine luxury at sea. Perfect for those seeking extra space and 
              exclusive services during their maritime journey.
            </p>

           <button
  onClick={() => window.location.href = "tel:+18883704002"}
  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
>
  Call Now
</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;