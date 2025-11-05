import React from 'react';
import { Link } from 'react-router-dom';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This Cookie Policy explains how PowerCruise Holidays ("we", "our", or "us") uses cookies and similar technologies on our website. By using our website, you consent to our use of cookies as described below.
          </p>
        </div>

        {/* Policy Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            
            {/* 1. What Are Cookies? */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  1
                </span>
                What Are Cookies?
              </h2>
              <p className="text-gray-700">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They help the website recognize your device and remember information about your visit.
              </p>
            </div>

            {/* 2. Why We Use Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  2
                </span>
                Why We Use Cookies
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays uses cookies to provide a better user experience, improve website functionality, analyze site traffic, and deliver relevant marketing content.
              </p>
            </div>

            {/* 3. Types of Cookies We Use */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  3
                </span>
                Types of Cookies We Use
              </h2>
              <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Essential Cookies</h4>
                    <p className="text-gray-700 text-sm">Necessary for website functionality (such as security, login, booking forms).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance Cookies</h4>
                    <p className="text-gray-700 text-sm">Help us understand how visitors interact with the site.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Analytics Cookies</h4>
                    <p className="text-gray-700 text-sm">Used to collect anonymous statistics about website usage.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Marketing Cookies</h4>
                    <p className="text-gray-700 text-sm">Help deliver relevant advertisements and promotional content.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Third-Party Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  4
                </span>
                Third-Party Cookies
              </h2>
              <p className="text-gray-700">
                We may allow trusted third parties (such as analytics providers and advertising partners) to place cookies on your device through our website.
              </p>
            </div>

            {/* 5. Managing Cookies */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  5
                </span>
                Managing Cookies
              </h2>
              <p className="text-gray-700">
                You can control or disable cookies through your browser settings at any time. Please note that disabling certain cookies may affect website functionality.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4 rounded">
                <p className="text-yellow-700 text-sm">
                  <strong>Note:</strong> Disabling essential cookies may prevent you from using certain features of our website, including booking functionality.
                </p>
              </div>
            </div>

            {/* 6. Cookie Duration */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  6
                </span>
                Cookie Duration
              </h2>
              <p className="text-gray-700">
                Some cookies expire when you close your browser, while others remain on your device until they expire or you delete them manually.
              </p>
            </div>

            {/* 7. Google Analytics */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  7
                </span>
                Google Analytics
              </h2>
              <p className="text-gray-700">
                We may use Google Analytics to help us analyze website usage. Google Analytics uses cookies to collect information such as pages visited, time on site, and referring websites. You can opt out by using Google's browser add-on.
              </p>
            </div>

            {/* 8. Updates to This Policy */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  8
                </span>
                Updates to This Policy
              </h2>
              <p className="text-gray-700">
                PowerCruise Holidays may update this Cookie Policy at any time. Changes will be posted on this page with the updated date. We encourage you to review this policy regularly.
              </p>
            </div>

            {/* 9. Contact Us */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                  9
                </span>
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have any questions about this Cookie Policy or our use of cookies, please contact PowerCruise Holidays customer service. We are happy to assist you.
              </p>
            </div>

            {/* Cookie Settings Notice */}
            <div className="bg-blue-50 rounded-lg p-6 mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cookie Preferences
              </h3>
              <p className="text-gray-700 mb-4">
                You can manage your cookie preferences at any time through your browser settings. Most web browsers allow you to control cookies through their settings preferences.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Accept All Cookies
                </button>
                <button className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  Essential Cookies Only
                </button>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Need More Information?
              </h3>
              <p className="text-gray-700 mb-4">
                Our team is here to help you understand our cookie policy and address any concerns you may have.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Contact Us
                </Link>
                <Link
                  to="/policy"
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;