import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 mt-10 big">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before booking your cruise with PowerCruise Holidays. By confirming your reservation, you acknowledge and accept all terms outlined below.
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            
            {/* 1. Booking Confirmation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  1
                </span>
                Booking Confirmation
              </h2>
              <p className="text-gray-700">
                Your cruise reservation with PowerCruise Holidays will be considered confirmed only once you receive an official confirmation email. This email will include details of your cruise itinerary, payment summary, cabin assignment, and other essential information. Please review the confirmation carefully and notify us immediately if you notice any discrepancies.
              </p>
            </div>

            {/* 2. Eligibility */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  2
                </span>
                Eligibility
              </h2>
              <p className="text-gray-700">
                To book a cruise with PowerCruise Holidays, you must be at least 18 years of age and have the legal authority to enter into this agreement. Guests under the age of 18 must be accompanied by a parent or legal guardian who assumes full responsibility for the minor during the cruise and in all ports of call.
              </p>
            </div>

            {/* 3. Payment Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  3
                </span>
                Payment Terms
              </h2>
              <p className="text-gray-700">
                Full payment is required at the time of booking unless stated otherwise on the booking confirmation or during a promotional offer. Accepted payment methods include major credit cards, debit cards, and secure online payment systems. All payments must be received before the final payment deadline to avoid cancellation of the booking.
              </p>
            </div>

            {/* 4. Pricing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  4
                </span>
                Pricing
              </h2>
              <p className="text-gray-700">
                All cruise fares are listed in USD and are subject to change until your booking is confirmed. Additional charges such as government taxes, port fees, fuel surcharges, and onboard gratuities are not always included in the advertised fare and may be added to the final payment. Any discounts or promotions are subject to availability and may change without notice.
              </p>
            </div>

            {/* 5. Booking Modifications */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  5
                </span>
                Booking Modifications
              </h2>
              <p className="text-gray-700">
                If you wish to modify an existing reservation — including changes to travel dates, cabin category, or passenger names — you must contact PowerCruise Holidays customer service as soon as possible. Modifications are subject to availability, and additional fees imposed by the cruise line or other providers may apply. Late requests may result in additional penalties or may not be accommodated.
              </p>
            </div>

            {/* 6. Cancellations by Guest */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  6
                </span>
                Cancellations by Guest
              </h2>
              <p className="text-gray-700">
                All cancellations must be submitted in writing. The amount of the cancellation fee depends on the time remaining prior to the scheduled departure date. Refunds are determined according to the cancellation policies of the cruise line and will be clearly stated in your confirmation. Please be aware that certain promotional fares may be non-refundable.
              </p>
            </div>

            {/* 7. Refund Process */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  7
                </span>
                Refund Process
              </h2>
              <p className="text-gray-700">
                If eligible for a refund, PowerCruise Holidays will process it back to your original payment method within 30 business days from the date of cancellation approval. Refund times may also depend on your bank or credit card provider. Non-refundable fees and third-party charges may be excluded from the total refund amount.
              </p>
            </div>

            {/* 8. Force Majeure */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  8
                </span>
                Force Majeure
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays shall not be held responsible for delays, modifications, or cancellations caused by events outside of our control, including but not limited to severe weather, acts of terrorism, natural disasters, war, strikes, health emergencies, or government orders. In such circumstances, alternative arrangements or travel credits may be offered at our discretion.
              </p>
            </div>

            {/* 9. Cruise Line Changes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  9
                </span>
                Cruise Line Changes
              </h2>
              <p className="text-gray-700">
                The cruise line reserves the right to modify itineraries, change ports of call, adjust schedules, or substitute ships when operational needs demand. While PowerCruise Holidays will make every effort to notify guests of significant changes in a timely manner, we are not responsible for decisions made by the cruise line, nor for any resulting expenses incurred by the guest.
              </p>
            </div>

            {/* 10. Travel Documentation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  10
                </span>
                Travel Documentation
              </h2>
              <p className="text-gray-700">
                It is the guest's responsibility to ensure they possess all necessary travel documents, such as valid passports, visas, health certificates, and any required entry permits. Failure to present proper documentation may result in denied boarding, in which case neither PowerCruise Holidays nor the cruise line shall issue any refunds or assume any liability.
              </p>
            </div>

            {/* 11. Travel Insurance */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  11
                </span>
                Travel Insurance
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays strongly advises all passengers to purchase comprehensive travel insurance to cover unforeseen events, such as trip cancellation, medical emergencies, delayed or lost luggage, and evacuation. Travel insurance is not included in the price of the cruise and must be purchased separately from your cruise fare.
              </p>
            </div>

            {/* 12. Onboard Conduct */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  12
                </span>
                Onboard Conduct
              </h2>
              <p className="text-gray-700">
                Guests are expected to adhere to all shipboard rules, regulations, and guidelines. Any behavior that is unsafe, disruptive, or offensive may result in disciplinary action, including removal from the ship. In such cases, the guest will be responsible for any additional costs incurred, and no refund will be provided for unused portions of the cruise.
              </p>
            </div>

            {/* 13. Medical Care */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  13
                </span>
                Medical Care
              </h2>
              <p className="text-gray-700">
                While medical services are available onboard most cruise ships, they may be limited in scope. Guests with pre-existing medical conditions should consult their healthcare provider prior to booking and are advised to travel with adequate medical supplies and prescriptions. Any medical expenses incurred onboard or at a port of call are the responsibility of the guest.
              </p>
            </div>

            {/* 14. Accessibility */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  14
                </span>
                Accessibility
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays strives to accommodate guests with disabilities or special needs. However, not all ships, excursions, or destinations may be fully accessible. It is the guest's responsibility to inform PowerCruise Holidays of any accessibility or dietary requirements at the time of booking so that we can attempt to make necessary arrangements with the cruise line and service providers.
              </p>
            </div>

            {/* 15. Shore Excursions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  15
                </span>
                Shore Excursions
              </h2>
              <p className="text-gray-700">
                Optional shore excursions are provided by independent third-party operators. Participation in these excursions is entirely voluntary and is undertaken at your own risk. PowerCruise Holidays is not responsible for any injury, loss, or dissatisfaction resulting from your participation in these services.
              </p>
            </div>

            {/* 16. Liability Disclaimer */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  16
                </span>
                Liability Disclaimer
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays acts solely as an agent between you and the cruise line. We assume no responsibility or liability for acts or omissions of the cruise operator or any third-party service provider. Guests acknowledge that they are subject to the terms and conditions of those providers as well as these terms.
              </p>
            </div>

            {/* 17. Privacy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  17
                </span>
                Privacy
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays respects your privacy and is committed to protecting your personal information. Data collected during the booking process is used only for managing your reservation and delivering important updates about your cruise. We do not share your data with third parties except as required to fulfill your booking or where required by law. Please refer to our Privacy Policy for full details.
              </p>
            </div>

            {/* 18. Data Sharing */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  18
                </span>
                Data Sharing
              </h2>
              <p className="text-gray-700">
                By booking through PowerCruise Holidays, you consent to the sharing of your personal information with the cruise line, port authorities, insurance providers, and any other travel partners necessary to fulfill your booking. This data sharing is conducted securely and is limited to what is required to complete your travel arrangements.
              </p>
            </div>

            {/* 19. Governing Law */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  19
                </span>
                Governing Law
              </h2>
              <p className="text-gray-700">
                These Terms & Conditions shall be governed by and construed in accordance with the laws of the country in which PowerCruise Holidays is registered. Any legal disputes arising from these Terms & Conditions or from your cruise booking will be subject to the exclusive jurisdiction of the courts in that country.
              </p>
            </div>

            {/* 20. Changes to Terms */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  20
                </span>
                Changes to Terms
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays reserves the right to amend or update these Terms & Conditions at any time without prior notice. The latest version of these Terms & Conditions will be published on our website and will apply to all bookings made thereafter. We encourage guests to review these terms periodically for updates.
              </p>
            </div>

            {/* 21. Final Acknowledgement */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  21
                </span>
                Final Acknowledgement
              </h2>
              <p className="text-gray-700">
                By booking a cruise with PowerCruise Holidays, you acknowledge that you have read, understood, and agreed to these Terms & Conditions. Should you have any questions or require clarification, please contact our customer service team.
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;