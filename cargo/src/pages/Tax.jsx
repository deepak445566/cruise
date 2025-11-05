import React from 'react';
import { Link } from 'react-router-dom';

const TaxesFees = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 mt-15">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Taxes & Fees
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At PowerCruise Holidays, we strive to provide clear and transparent pricing. Below you will find important information regarding taxes, port charges, and other fees that may apply to your cruise booking.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            
            {/* 1. Included in Cruise Fare */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  1
                </span>
                Included in Cruise Fare
              </h2>
              <p className="text-gray-700">
                Unless otherwise specified, your cruise fare includes accommodations, most onboard meals, entertainment, and basic access to cruise facilities.
              </p>
            </div>

            {/* 2. Port Taxes & Fees */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  2
                </span>
                Port Taxes & Fees
              </h2>
              <p className="text-gray-700">
                Mandatory port taxes and government fees are typically included in your cruise fare. These fees are charged by port authorities and governments for each port of call and may vary by destination and itinerary.
              </p>
            </div>

            {/* 3. Service Charges & Gratuities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  3
                </span>
                Service Charges & Gratuities
              </h2>
              <p className="text-gray-700">
                Most cruise lines apply a daily gratuity or service charge per person, either prepaid at the time of booking or automatically added to your onboard account. This charge covers housekeeping, dining room staff, and other onboard services.
              </p>
            </div>

            {/* 4. Onboard Purchases */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  4
                </span>
                Onboard Purchases
              </h2>
              <p className="text-gray-700">
                Onboard purchases such as beverages, spa services, specialty dining, gift shops, and excursions may be subject to additional taxes or service fees depending on the location of the ship at the time of purchase.
              </p>
            </div>

            {/* 5. Fuel Surcharges */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  5
                </span>
                Fuel Surcharges
              </h2>
              <p className="text-gray-700">
                In some cases, cruise lines may impose fuel surcharges based on global market conditions. PowerCruise Holidays will inform you in advance if any fuel surcharges are applied to your booking.
              </p>
            </div>

            {/* 6. Currency Conversion Fees */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  6
                </span>
                Currency Conversion Fees
              </h2>
              <p className="text-gray-700">
                For international transactions, your credit card provider may charge a foreign transaction fee or currency conversion fee. PowerCruise Holidays is not responsible for these bank fees.
              </p>
            </div>

            {/* 7. Government-Imposed Taxes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  7
                </span>
                Government-Imposed Taxes
              </h2>
              <p className="text-gray-700">
                Certain governments may levy additional taxes (such as VAT, sales tax, or tourism tax) depending on the country of departure or ports visited. These will be disclosed during booking when applicable.
              </p>
            </div>

            {/* 8. Fees for Modifications & Cancellations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  8
                </span>
                Fees for Modifications & Cancellations
              </h2>
              <p className="text-gray-700">
                Booking modification fees and cancellation fees are detailed in our Cancellation Policy. These fees are separate from taxes and are non-refundable.
              </p>
            </div>

            {/* 9. Third-Party Service Fees */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  9
                </span>
                Third-Party Service Fees
              </h2>
              <p className="text-gray-700">
                Any additional services you book through third-party providers (shore excursions, hotels, transfers, flights) may have their own taxes and service fees, which are subject to the provider's policies.
              </p>
            </div>

            {/* 10. Changes to Fees */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  10
                </span>
                Changes to Fees
              </h2>
              <p className="text-gray-700">
                Taxes and fees are determined by various governing authorities and cruise line policies, and may change without notice. The total applicable taxes and fees for your booking will be displayed prior to final payment.
              </p>
            </div>

            {/* Important Notice */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mt-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-blue-800">Transparent Pricing Guarantee</h3>
                  <p className="text-blue-700 mt-2">
                    We believe in complete transparency. All mandatory taxes and fees will be clearly displayed before you complete your booking. No hidden charges.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxesFees;