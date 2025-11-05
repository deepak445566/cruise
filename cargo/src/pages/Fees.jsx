import React, { useState } from 'react';

const PostTicketingFees = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleItem = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const feesData = [
    {
      title: "Name Correction Fee",
      content: "A name correction fee may apply for any request to modify a passenger's name after the ticket has been issued. Documentation may be required, and approval is at the discretion of the cruise line."
    },
    {
      title: "Reissuance Fee",
      content: "Major booking changes such as altering travel dates, changing cabin category, or rebooking to a different sailing may incur a reissuance fee in addition to any applicable fare difference."
    },
    {
      title: "Itinerary Change Fee",
      content: "Requests to change your selected itinerary or port of embarkation after ticketing may incur additional administrative fees plus any change fees from the cruise line."
    },
    {
      title: "Cancellation After Ticketing",
      content: "If you cancel after your cruise ticket has been issued, cancellation fees as per the cruise line's cancellation policy will apply. These fees typically increase as the sailing date approaches."
    },
    {
      title: "Upgrade Fee",
      content: "Requests to upgrade cabin class or add special packages post-ticketing may be subject to an administrative fee in addition to the upgrade cost."
    },
    {
      title: "Document Reissue Fee",
      content: "If you request a reissue of your cruise documents after original delivery (due to loss, correction, or change), a document reissue fee may apply."
    },
    {
      title: "Document Delivery Fee",
      content: "If you request physical delivery of cruise documents (via postal mail or courier), a shipping fee will apply based on delivery method and location."
    },
    {
      title: "Payment Processing Fee",
      content: "Additional payment processing fees may apply for post-ticketing payments made using certain credit cards or international payment methods."
    },
    {
      title: "Service Reinstatement Fee",
      content: "If your reservation is reinstated after cancellation or non-payment, a reinstatement fee may apply, subject to availability and cruise line approval."
    },
    {
      title: "Visa or Immigration Document Processing Fees",
      content: "If you request assistance from Power Cruises Holiday or a third-party service for visa or travel document processing after ticket issuance, applicable processing fees will apply."
    },
    {
      title: "Special Meal Request Fee",
      content: "Certain special meal requests made post-ticketing may incur fees, depending on the cruise line's policies and the nature of the request."
    },
    {
      title: "Special Needs Accommodation Fee",
      content: "Some special accommodation requests made after ticket issuance may incur administrative charges or may be subject to limited availability."
    },
    {
      title: "Third-Party Service Charges",
      content: "Changes to services booked through third-party providers (such as shore excursions, transfers, insurance, or hotels) may incur additional fees according to the third party's terms and conditions."
    },
    {
      title: "Port Fees Adjustment",
      content: "Port fees and taxes are based on government-imposed rates and may be adjusted after ticketing if rates change. In such cases, any additional charges will be communicated to you before final payment is due."
    },
    {
      title: "Fuel Surcharge",
      content: "If a fuel surcharge is imposed by the cruise line after ticket issuance, Power Cruises Holiday will inform you of the applicable charge and options for payment or adjustment."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="mb-8 text-center border-b pb-4">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Post Ticketing Fees</h1>
        <p className="text-gray-600">
          The following outlines post-ticketing service fees that may apply once your cruise ticket has been issued. 
          Fees may vary depending on the cruise line, fare type, and specific requests made after ticket issuance. 
          All fees are subject to change without notice.
        </p>
      </header>

      <div className="space-y-3">
        {feesData.map((fee, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md">
            <button
              className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
              onClick={() => toggleItem(index)}
              aria-expanded={expandedItems[index] || false}
            >
              <span className="font-semibold text-blue-800 flex items-start">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                {fee.title}
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
                <p className="text-gray-700 leading-relaxed">{fee.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <p className="text-center text-gray-700">
          Please contact <span className="font-semibold text-blue-800">Power Cruises Holiday</span> customer service for the most up-to-date information regarding post-ticketing fees that may apply to your booking. We are here to assist you.
        </p>
      </div>
    </div>
  );
};

export default PostTicketingFees;