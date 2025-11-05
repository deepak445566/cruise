import React, { useState } from 'react';

const PrivacyPolicy = () => {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    const policySections = [
        {
            id: 1,
            title: "1. Information We Collect",
            content: "We collect personal information when you make a booking, contact us, or use our website. This may include your name, address, phone number, email, passport details, travel preferences, medical information (if provided), payment details, and other information necessary to complete your booking."
        },
        {
            id: 2,
            title: "2. Booking & Payment Information",
            content: "When you book with us, we collect necessary payment and billing information to process your order. This may include credit card details, billing addresses, and transaction records. We use secure third-party payment processors to handle transactions safely."
        },
        {
            id: 3,
            title: "3. How We Use Your Information",
            content: "Your personal data is used to manage your booking, communicate updates, provide customer service, fulfill legal obligations, and personalize your cruise experience. We may also use your information for internal analysis to improve our services."
        },
        {
            id: 4,
            title: "4. Legal Basis for Processing",
            content: "We process personal information under applicable data protection laws on one or more of the following legal bases: to perform a contract with you, to comply with legal obligations, with your consent, or for our legitimate business interests."
        },
        {
            id: 5,
            title: "5. Sharing with Service Providers",
            content: "We may share your information with trusted third parties such as cruise operators, airlines, port authorities, insurance companies, payment processors, and IT service providers in order to fulfill your booking and travel arrangements."
        },
        {
            id: 6,
            title: "6. Data Sharing for Legal Requirements",
            content: "We may disclose your information when required by law, government request, court order, or to protect our rights and the safety of our passengers or the public."
        },
        {
            id: 7,
            title: "7. International Data Transfers",
            content: "Your personal data may be transferred and stored in countries outside your country of residence. We ensure that appropriate legal safeguards are in place to protect your data when transferred internationally."
        },
        {
            id: 8,
            title: "8. Marketing Communications",
            content: "If you opt in, we may send you promotional emails or newsletters about upcoming cruises, offers, and services. You can opt out at any time by following the unsubscribe link in our emails."
        },
        {
            id: 9,
            title: "9. Use of Cookies & Tracking Technologies",
            content: "We use cookies and other technologies to improve website performance, analyze site traffic, and enhance your browsing experience. You can control your cookie preferences through your browser settings."
        },
        {
            id: 10,
            title: "10. Data Retention",
            content: "We retain your personal information only as long as necessary to provide services, meet legal obligations, resolve disputes, or enforce agreements. After that, we securely delete or anonymize your data."
        },
        {
            id: 11,
            title: "11. Data Security",
            content: "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. While no system is completely secure, we follow industry best practices to safeguard your data."
        },
        {
            id: 12,
            title: "12. Your Privacy Rights",
            content: "You may have rights regarding your personal data under applicable privacy laws. These may include rights to access, correct, delete, restrict processing, or object to certain uses of your data. Contact us to exercise your rights."
        },
        {
            id: 13,
            title: "13. Access and Correction of Data",
            content: "You may request access to your personal data held by us and request corrections if inaccurate or incomplete. We will respond in accordance with applicable data protection laws."
        },
        {
            id: 14,
            title: "14. Deletion of Data",
            content: "In certain circumstances, you may request that we delete your personal information. We will do so where legally required, subject to record-keeping and legal obligations."
        },
        {
            id: 15,
            title: "15. Third-Party Links",
            content: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their policies before providing any personal information."
        },
        {
            id: 16,
            title: "16. Children's Privacy",
            content: "Our services are not directed at children under 16. We do not knowingly collect personal information from children without parental consent. If we become aware of such data, we will delete it promptly."
        },
        {
            id: 17,
            title: "17. Social Media Features",
            content: "Our website may include social media features or plugins. Your interactions with these features are governed by the privacy policies of the respective social media platforms."
        },
        {
            id: 18,
            title: "18. Changes to this Privacy Policy",
            content: "We reserve the right to update this Privacy Policy at any time. We encourage you to review this page periodically for the latest information on our privacy practices. The revised policy will be effective once posted on this site."
        },
        {
            id: 19,
            title: "19. Contacting Us",
            content: "If you have any questions about this Privacy Policy, how your information is handled, or wish to exercise your privacy rights, please contact our customer service team at the details provided on our website. Power Cruise Holidays is committed to protecting your privacy and addressing your concerns."
        }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-blue-300 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6">
                        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                        Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Policy</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Last updated: {new Date().toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}
                    </p>
                </div>

                {/* Introduction */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Protecting Your Privacy
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                This Privacy Policy explains how <strong>Power Cruise Holidays</strong> ("we", "our", or "us") collects, uses, discloses, and protects your personal information. By using our services or accessing our website, you consent to the practices described in this policy.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Your privacy is important to us, and we are committed to safeguarding your personal data in compliance with applicable data protection laws.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Navigation */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Navigation</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {policySections.slice(0, 8).map((section) => (
                            <button
                                key={section.id}
                                onClick={() => {
                                    const element = document.getElementById(`section-${section.id}`);
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-sm text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-colors duration-200 text-left"
                            >
                                {section.title.split(' ').slice(0, 3).join(' ')}...
                            </button>
                        ))}
                    </div>
                </div>

                {/* Policy Sections */}
                <div className="space-y-6">
                    {policySections.map((section) => (
                        <div 
                            key={section.id}
                            id={`section-${section.id}`}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {section.title}
                                </h3>
                                <svg 
                                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                                        activeSection === section.id ? 'rotate-180' : ''
                                    }`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <div className={`px-6 pb-4 transition-all duration-300 ${
                                activeSection === section.id ? 'block' : 'hidden'
                            }`}>
                                <div className="border-t border-gray-200 pt-4">
                                    <p className="text-gray-700 leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 mt-12 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Questions About Your Privacy?
                    </h3>
                    <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                        Our dedicated team is here to help you understand how we protect your data and address any concerns you may have about your privacy.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="tel:18884536115"
                            className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Call Us: 1 (888) 453-6115
                        </a>
                        <a 
                            href="mailto:privacy@powercruiseholidays.com"
                            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
                        >
                            Email Privacy Team
                        </a>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-8">
                    <p className="text-gray-600 text-sm">
                        © {new Date().getFullYear()} Power Cruise Holidays. All rights reserved.<br />
                        Your trust is our priority.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;