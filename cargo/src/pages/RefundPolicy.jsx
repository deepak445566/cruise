import React from "react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 text-gray-800">
      
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Clear guidelines for cancellations and refunds to ensure a transparent booking experience
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-gray-700 text-lg leading-relaxed">
              This Refund & Cancellation Policy explains how <b className="text-blue-600">Power Cruise Holidays</b> handles
              cancellations, refunds, and related matters for cruise bookings. By
              confirming your booking, you acknowledge that you have read and agreed
              to this policy.
            </p>
          </div>

          <div className="space-y-8">
            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                Booking Confirmation
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your cruise reservation is confirmed once you receive an official
                booking confirmation email from Power Cruise Holidays.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                Payment Requirements
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Full payment is required at the time of booking, unless otherwise
                specified in your confirmation or under special promotional terms.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                Cancellation by Guest
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you choose to cancel your booking, cancellation fees will apply
                based on how far in advance you notify us of your intent to cancel.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                Standard Cancellation Fees
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>More than 60 days before departure:</strong> 10% of fare or $100 per person.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>30–59 days before departure:</strong> 25% of total fare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>15–29 days before departure:</strong> 50% of total fare.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>0–14 days before departure or no-show:</strong> 100% cancellation fee (no refund).</span>
                </li>
              </ul>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </div>
                Non-Refundable Bookings
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Promotional fares, last-minute deals, or special offers may be
                non-refundable. These will be clearly indicated at the time of booking.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  6
                </div>
                How to Cancel
              </h2>
              <p className="text-gray-700 leading-relaxed">
                To cancel a booking, please contact Power Cruise Holidays customer service by
                email or through your account on our website. The date we receive your
                request will determine applicable fees.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  7
                </div>
                Refund Process
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If a refund is applicable, it will be processed back to your original
                payment method within 30 business days after cancellation confirmation.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  8
                </div>
                Refundable Items
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Only the cruise fare is eligible for refund (if applicable).
                Non-recoverable items, such as booking fees, third-party excursions,
                credit card fees, or insurance, are non-refundable.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  9
                </div>
                Cancellation Due to Force Majeure
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If the cruise is canceled due to force majeure — such as natural
                disasters, pandemics, strikes, or government restrictions — Power Cruise Holidays
                may offer a refund, partial refund, or future travel credit, depending
                on circumstances and cruise line policies.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  10
                </div>
                Cruise Line Cancellations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If your cruise is canceled by the cruise line, we will notify you and
                provide applicable refund or rebooking options as offered by the cruise
                operator.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  11
                </div>
                Medical Cancellations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In the case of cancellations due to medical emergencies, supporting
                documents will be required for consideration of refunds or credits.
                Approval is at the discretion of Power Cruise Holidays and the cruise line.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  12
                </div>
                No-Show Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Failure to check in and board your cruise as scheduled (no-show) will
                result in a 100% cancellation fee. No refunds or credits will be issued.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  13
                </div>
                Travel Insurance
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Power Cruise Holidays strongly recommends purchasing travel insurance to cover
                unexpected cancellations, delays, or emergencies. Travel insurance is
                not included in the cruise fare and must be purchased separately.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  14
                </div>
                Refund Timelines
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Refund processing times may vary depending on your bank or card
                provider. Power Cruise Holidays is not liable for delays caused by financial
                institutions.
              </p>
            </section>

            <section className="p-6 hover:bg-gray-50 rounded-xl transition-colors duration-200">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">
                  15
                </div>
                Policy Changes
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Power Cruise Holidays reserves the right to modify this Refund & Cancellation
                Policy at any time. The version published on our website at the time of
                your booking will apply.
              </p>
            </section>

            <section className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
              <h2 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  ✓
                </div>
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions regarding this Refund & Cancellation Policy,
                please contact Power Cruise Holidays customer service. We are happy to assist and
                ensure your experience with us is seamless.
              </p>
            </section>
          </div>
        </div>

        {/* Additional Info Box */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <p className="text-yellow-800 font-medium">
            💡 <strong>Important:</strong> Please review this policy carefully before booking. 
            Terms are subject to change and the policy in effect at the time of booking applies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;