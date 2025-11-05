import React, { useState } from 'react';

const ServiceFees = () => {
  const [isExpanded, setIsExpanded] = useState(Array(11).fill(false));

  const toggleExpand = (index) => {
    const newExpanded = [...isExpanded];
    newExpanded[index] = !newExpanded[index];
    setIsExpanded(newExpanded);
  };

  const feesData = [
    {
      title: "Booking Fee",
      content: "A non-refundable service fee of $25 per booking may be charged for each cruise reservation made through Power Cruises Holiday."
    },
    {
      title: "Change Fee",
      content: "If you request changes to your booking (such as name changes, date changes, or cabin upgrades), a change fee of $50 per booking may apply, plus any additional costs imposed by the cruise line."
    },
    {
      title: "Cancellation Fee",
      content: "In addition to any cancellation fees charged by the cruise line, Power Cruises Holiday applies an administrative cancellation fee of $50 per booking for processing cancellations."
    },
    {
      title: "Payment Processing Fee",
      content: "Certain payment methods (such as international credit cards or alternate currencies) may incur a processing fee of up to 3% of the total transaction amount. You will be informed at checkout if applicable."
    },
    {
      title: "Paper Ticket Fee",
      content: "If you request printed cruise documents or paper tickets, a fee of $15 per mailing may apply. Most cruise documents are provided electronically."
    },
    {
      title: "Port Taxes & Government Fees",
      content: "Port taxes and government fees are typically included in your cruise fare. If any adjustments are required by the cruise line, Power Cruises Holiday will notify you accordingly."
    },
    {
      title: "Gratuities & Onboard Service Fees",
      content: "Most cruise lines charge mandatory gratuities or onboard service fees. These may be prepaid at the time of booking or automatically added to your onboard account. Amounts vary by cruise line."
    },
    {
      title: "Shore Excursion Fees",
      content: "Optional shore excursions may be booked through Power Cruises Holiday or directly through the cruise line. Fees for these excursions are non-refundable after a certain deadline — refer to the terms provided at the time of booking."
    },
    {
      title: "Specialty Dining & Beverage Packages",
      content: "Fees for optional specialty dining, beverage packages, and onboard entertainment are determined by the cruise line and may vary by itinerary and ship."
    },
    {
      title: "Non-Refundable Fees",
      content: "Booking fees, administrative fees, and payment processing fees are non-refundable once applied. Please refer to our Cancellation Policy for more details on applicable refund conditions."
    },
    {
      title: "Changes to This Fee Schedule",
      content: "Power Cruises Holiday reserves the right to update this Service Fees page at any time. The most current version will be displayed on our website and will apply to all new bookings."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <header className="mb-8 text-center mt-20">
        <h1 className="text-3xl font-bold text-blue-800 mb-2">Service Fees</h1>
        <p className="text-gray-600">
          Below is an overview of service fees that may apply to cruise bookings with Power Cruises Holiday. 
          These fees are in addition to the cruise fare charged by the cruise line and are subject to change at any time. 
          Please review this information carefully before booking.
        </p>
      </header>

      <div className="space-y-4">
        {feesData.map((fee, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left bg-blue-50 hover:bg-blue-100 transition-colors flex justify-between items-center"
              onClick={() => toggleExpand(index)}
            >
              <span className="font-semibold text-blue-800">{index + 1}. {fee.title}</span>
              <svg 
                className={`w-5 h-5 transform transition-transform ${isExpanded[index] ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isExpanded[index] && (
              <div className="p-4 bg-white">
                <p className="text-gray-700">{fee.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-blue-50 rounded-lg">
        <p className="text-center text-gray-700">
          If you have any questions about applicable service fees, please contact Power Cruises Holiday customer service prior to booking. 
          We are happy to assist you!
        </p>
      </div>
    </div>
  );
};

export default ServiceFees;