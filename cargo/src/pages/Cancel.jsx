import React from 'react';
import { Link } from 'react-router-dom';

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 mt-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 big">
            Cancellation Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This Cancellation Policy outlines how PowerCruise Holidays handles cancellations, fees, and refund processing. By confirming your cruise booking with us, you acknowledge and accept this policy.
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            {/* 1. Booking Confirmation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w--8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  1
                </span>
                Booking Confirmation
              </h2>
              <p className="text-gray-700">
                Your cruise reservation is confirmed when you receive an official booking confirmation email from PowerCruise Holidays.
              </p>
            </div>

            {/* 2. Payment Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  2
                </span>
                Payment Terms
              </h2>
              <p className="text-gray-700">
                Full payment is required at the time of booking, unless otherwise specified in your confirmation or special offer.
              </p>
            </div>

            {/* 3. Cancellation Request */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  3
                </span>
                Cancellation Request
              </h2>
              <p className="text-gray-700">
                All cancellation requests must be submitted in writing via email to PowerCruise Holidays customer service. The date your request is received determines applicable fees.
              </p>
            </div>

            {/* 4. Standard Cancellation Fees */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  4
                </span>
                Standard Cancellation Fees
              </h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    More than 60 days prior to departure: 10% of total fare or $100 per person.
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 mr-2">•</span>
                    30–59 days prior: 25% of total fare.
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    15–29 days prior: 50% of total fare.
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    0–14 days prior or no-show: 100% cancellation fee — no refund.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Non-Refundable Fares */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  5
                </span>
                Non-Refundable Fares
              </h2>
              <p className="text-gray-700">
                Some promotional rates, last-minute specials, or exclusive offers are non-refundable. These fares will be clearly marked during booking.
              </p>
            </div>

            {/* 6. Refund Timeline */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  6
                </span>
                Refund Timeline
              </h2>
              <p className="text-gray-700">
                Refunds (if applicable) will be processed to the original form of payment within 30 business days after cancellation approval.
              </p>
            </div>

            {/* 7. Travel Insurance */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  7
                </span>
                Travel Insurance
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays strongly recommends purchasing travel insurance. Insurance is not included in your fare and must be purchased separately to cover trip cancellations, delays, or emergencies.
              </p>
            </div>

            {/* 8. Force Majeure Events */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  8
                </span>
                Force Majeure Events
              </h2>
              <p className="text-gray-700">
                If a cruise is canceled or disrupted due to force majeure (natural disasters, pandemics, strikes, government restrictions, or similar events), PowerCruise Holidays may issue refunds, partial refunds, or future travel credits, depending on circumstances and cruise line policies.
              </p>
            </div>

            {/* 9. Cruise Line Cancellations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  9
                </span>
                Cruise Line Cancellations
              </h2>
              <p className="text-gray-700">
                If your cruise is canceled by the cruise line, we will inform you of your options for refund or rebooking according to the cruise line's terms.
              </p>
            </div>

            {/* 10. Medical Cancellations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  10
                </span>
                Medical Cancellations
              </h2>
              <p className="text-gray-700">
                If cancellation is due to serious illness or medical emergency, supporting documents may be required. Refunds or credits for medical cancellations are subject to approval by PowerCruise Holidays and the cruise line.
              </p>
            </div>

            {/* 11. Partial Cancellations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  11
                </span>
                Partial Cancellations
              </h2>
              <p className="text-gray-700">
                If only part of your booking is canceled (such as one passenger), applicable fees will be adjusted accordingly, based on the remaining booking and cabin occupancy.
              </p>
            </div>

            {/* 12. No-Show Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  12
                </span>
                No-Show Policy
              </h2>
              <p className="text-gray-700">
                Failure to board your cruise without prior cancellation notice will result in a 100% cancellation fee with no refund.
              </p>
            </div>

            {/* 13. Shore Excursions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  13
                </span>
                Shore Excursions
              </h2>
              <p className="text-gray-700">
                Cancellation of shore excursions is subject to the cruise line's or third-party operator's policies. Some excursions may be non-refundable after a certain cutoff date.
              </p>
            </div>

            {/* 14. Non-Refundable Items */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  14
                </span>
                Non-Refundable Items
              </h2>
              <p className="text-gray-700">
                Processing fees, booking service fees, third-party excursions, port taxes, or government fees may be non-refundable even if your cruise fare is refunded.
              </p>
            </div>

            {/* 15. Policy Changes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  15
                </span>
                Policy Changes
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays reserves the right to update this Cancellation Policy at any time. The version in effect at the time of booking will apply to your reservation.
              </p>
            </div>

          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;