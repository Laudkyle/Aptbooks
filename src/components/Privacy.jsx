import { FaShieldAlt, FaUserLock, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect personal information you provide when creating an account, such as your name, email address, phone number, and business details.",
        "When you use our services, we automatically collect information about your device, IP address, browser type, and usage patterns.",
        "For payment processing, we collect transaction details but do not store full payment card information."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our accounting services",
        "To process transactions and send payment confirmations",
        "To communicate with you about service updates, security alerts, and support messages",
        "To improve our services and develop new features",
        "To comply with legal obligations and prevent fraudulent activities"
      ]
    },
    {
      title: "Data Sharing & Disclosure",
      content: [
        "We do not sell your personal data to third parties.",
        "We may share information with trusted service providers who assist us in operating our services (e.g., payment processors, cloud hosting providers).",
        "We may disclose information when required by law or to protect our rights and safety.",
        "In the event of a business transfer (merger, acquisition, or asset sale), user information may be transferred."
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures including encryption, firewalls, and secure servers.",
        "All data transmissions are protected by SSL/TLS encryption.",
        "Regular security audits and vulnerability testing are conducted.",
        "Employee access to personal data is strictly limited and monitored."
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access, correct, or delete your personal information",
        "Object to processing of your personal data",
        "Request restriction of processing your data",
        "Data portability rights",
        "Withdraw consent at any time (where applicable)"
      ]
    },
    {
      title: "Changes to This Policy",
      content: [
        "We may update this Privacy Policy periodically. We will notify you of significant changes through email or prominent notices within our services.",
        "Your continued use of our services after changes constitutes acceptance of the updated policy."
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg text-gray-600 mx-auto">
          <p className="text-lg">
            AptBooks ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our accounting software and services.
          </p>

          <div className="mt-12 space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-12">
                <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                <ul className="mt-6 space-y-4">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-6">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> privacy@aptbooks.com<br />
              <strong>Address:</strong> 123 Business Avenue, Accra, Ghana
            </p>
          </div>
        </div>
      </div>

      {/* Security Features */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Security Measures</h2>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600 mx-auto">
                <FaShieldAlt className="text-2xl" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">Data Encryption</h3>
              <p className="mt-2 text-base text-gray-500">
                All sensitive data is encrypted both in transit and at rest using industry-standard protocols.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600 mx-auto">
                <FaUserLock className="text-2xl" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">Access Controls</h3>
              <p className="mt-2 text-base text-gray-500">
                Strict role-based access controls ensure only authorized personnel can access sensitive data.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600 mx-auto">
                <FaDatabase className="text-2xl" />
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">Regular Audits</h3>
              <p className="mt-2 text-base text-gray-500">
                We conduct regular security audits and penetration testing to identify and address vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;