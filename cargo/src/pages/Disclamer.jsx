import React, { useState } from 'react';

const Disclaimer = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const disclaimerData = [
    {
      title: "Website Content",
      content: "The information, pricing, itineraries, and availability displayed on this website are for general informational purposes only. While we strive to ensure accuracy, details are subject to change at any time without notice."
    },
    {
      title: "No Guarantee of Accuracy",
      content: "Power Cruises Holiday makes no representations or warranties of any kind regarding the accuracy, completeness, reliability, or suitability of the information provided on this site. Use of this site is at your own risk."
    },
    {
      title: "Third-Party Links",
      content: "This website may contain links to third-party websites. These links are provided for convenience only. Power Cruises Holiday does not control or endorse the content of any third-party sites and assumes no responsibility for their content or privacy practices."
    },
    {
      title: "Cruise Line Responsibility",
      content: "Power Cruises Holiday acts solely as a booking agent between you and the cruise line or third-party suppliers. The cruise line is solely responsible for providing the cruise services, including itinerary changes, onboard experiences, and health and safety standards."
    },
    {
      title: "No Warranty of Service",
      content: "Power Cruises Holiday does not guarantee that website services will be uninterrupted, timely, secure, or error-free. The website is provided on an 'as-is' and 'as-available' basis."
    },
    {
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, Power Cruises Holiday shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of this website, booking errors, or reliance on any information provided herein."
    },
    {
      title: "Prices & Availability",
      content: "All prices and cruise availability are subject to change without notice. Final booking terms and conditions will be provided in your confirmation email and supersede any conflicting details displayed on the website."
    },
    {
      title: "Intellectual Property",
      content: "All website content, including text, graphics, logos, images, and software, is the property of Power Cruises Holiday or its content providers and is protected by intellectual property laws. Unauthorized use is prohibited."
    },
    {
      title: "Changes to this Disclaimer",
      content: "Power Cruises Holiday reserves the right to update or modify this Disclaimer at any time without prior notice. Changes will be effective upon posting on this website."
    },
    {
      title: "Governing Law",
      content: "This Disclaimer shall be governed by and construed in accordance with the laws of the country in which Power Cruises Holiday is registered. Any disputes will be subject to the exclusive jurisdiction of the local courts."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="mb-8 text-center border-b pb-6">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">Disclaimer</h1>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-gray-700 text-sm">
            This website is owned and operated by <span className="font-semibold text-blue-800">Power Cruises Holiday</span>. 
            By accessing or using this website, you acknowledge and agree to the terms of this Disclaimer. 
            Please read the following points carefully.
          </p>
        </div>
      </header>

      <div className="space-y-4">
        {disclaimerData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
            <button
              className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
              onClick={() => toggleItem(index)}
              aria-expanded={expandedItems[index] || false}
            >
              <span className="font-semibold text-gray-800 flex items-start">
                <span className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                {item.title}
              </span>
              <svg 
                className={`w-5 h-5 transform transition-transform ${expandedItems[index] ? 'rotate-180' : ''} flex-shrink-0`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedItems[index] && (
              <div className="p-4 bg-white border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-center text-gray-700">
          If you have any questions regarding this Disclaimer, please contact{' '}
          <span className="font-semibold text-blue-800">Power Cruises Holiday</span> customer service. 
          We thank you for visiting our website and wish you a great cruise experience!
        </p>
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Disclaimer;