import React from 'react';
import { Link } from 'react-router-dom';

const TravelAdvisory = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 mt-10 big">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Advisory
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This Travel Advisory is provided by PowerCruise Holidays to help you stay informed about important travel requirements, safety considerations, and government advisories that may affect your cruise. Please review the following information carefully before your trip.
          </p>
        </div>

        {/* Advisory Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            
            {/* 1. Passport & Visa Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  1
                </span>
                Passport & Visa Requirements
              </h2>
              <p className="text-gray-700">
                It is your responsibility to ensure that all travelers in your party have valid passports and any necessary visas for the entire duration of your cruise, including all ports of call. Expired or incomplete documentation may result in denied boarding or entry into certain destinations.
              </p>
            </div>

            {/* 2. Health & Vaccination Requirements */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  2
                </span>
                Health & Vaccination Requirements
              </h2>
              <p className="text-gray-700">
                Some destinations may require vaccinations or proof of health clearance (such as COVID-19 vaccination certificates or testing results). Please consult with your healthcare provider and check government websites for the latest health advisories.
              </p>
            </div>

            {/* 3. Government Travel Warnings */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  3
                </span>
                Government Travel Warnings
              </h2>
              <p className="text-gray-700">
                It is your responsibility to be aware of and understand any government travel warnings or advisories for your intended destinations. For the latest advisories, consult your local government's official website.
              </p>
            </div>

            {/* 4. Entry Restrictions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  4
                </span>
                Entry Restrictions
              </h2>
              <p className="text-gray-700">
                Countries may impose restrictions on travelers based on nationality, vaccination status, or recent travel history. PowerCruise Holidays is not liable for guests denied entry into any country or port due to government restrictions.
              </p>
            </div>

            {/* 5. Weather-Related Advisories */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  5
                </span>
                Weather-Related Advisories
              </h2>
              <p className="text-gray-700">
                Weather conditions may affect cruise itineraries. Ports of call or schedules may be altered due to severe weather such as storms or hurricanes. Safety is our top priority, and all decisions regarding itinerary changes will be made accordingly.
              </p>
            </div>

            {/* 6. Security Considerations */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  6
                </span>
                Security Considerations
              </h2>
              <p className="text-gray-700">
                Guests are advised to exercise normal precautions while ashore in foreign ports. Please avoid high-risk areas, follow local regulations, and remain alert to your surroundings at all times.
              </p>
            </div>

            {/* 7. Port & Itinerary Changes */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  7
                </span>
                Port & Itinerary Changes
              </h2>
              <p className="text-gray-700">
                The cruise line may adjust ports of call or itineraries in response to safety or operational considerations. While we will notify you of any significant changes, such modifications do not constitute grounds for compensation or refunds unless otherwise specified.
              </p>
            </div>

            {/* 8. Health Emergencies During Cruise */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  8
                </span>
                Health Emergencies During Cruise
              </h2>
              <p className="text-gray-700">
                In the event of illness, quarantine, or other health emergencies during the cruise, passengers must follow the cruise line's health and safety protocols, which may include isolation or disembarkation as required by local health authorities.
              </p>
            </div>

            {/* 9. Insurance Recommendation */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  9
                </span>
                Insurance Recommendation
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays strongly recommends that all travelers obtain comprehensive travel insurance covering medical expenses, trip cancellation, travel delays, and emergencies. Insurance provides peace of mind in case of unforeseen events.
              </p>
            </div>

            {/* 10. Accessibility & Medical Facilities */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  10
                </span>
                Accessibility & Medical Facilities
              </h2>
              <p className="text-gray-700">
                While cruise ships are equipped with basic medical services, facilities at sea may be limited. Guests with medical conditions should consult their doctors and notify PowerCruise Holidays in advance if special accommodations are needed.
              </p>
            </div>

            {/* 11. Personal Safety Onboard */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  11
                </span>
                Personal Safety Onboard
              </h2>
              <p className="text-gray-700">
                Please follow all onboard safety instructions provided by the crew. Familiarize yourself with emergency exits, muster stations, and safety drills. Your cooperation ensures a safe cruise experience for everyone.
              </p>
            </div>

            {/* 12. Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  12
                </span>
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about this Travel Advisory or need further guidance before your trip, please contact PowerCruise Holidays customer service. We are here to help ensure that your cruise is safe, enjoyable, and worry-free.
              </p>
            </div>

            {/* Important Notice Section */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mt-12">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-yellow-800">Important Notice</h3>
                  <p className="text-yellow-700 mt-2">
                    Travel requirements and advisories can change rapidly. We strongly recommend checking the latest updates from official government sources and consulting with our team before your departure.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Need Travel Assistance?
              </h3>
              <p className="text-gray-700 mb-4">
                Our travel experts are available to help you understand current travel requirements and ensure you're fully prepared for your cruise adventure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Contact Our Team
                </Link>
                <Link
                  to="/terms"
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/cancellation"
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  Cancellation Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelAdvisory;