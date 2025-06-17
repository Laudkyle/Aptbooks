import React from "react";
import { Link } from "react-router-dom";
const GDPRPage = () => {
  const rights = [
    {
      title: "Right to Access",
      description: "You can request copies of your personal data that we hold."
    },
    {
      title: "Right to Rectification",
      description: "You can request correction of inaccurate or incomplete data."
    },
    {
      title: "Right to Erasure",
      description: "You can request deletion of your personal data under certain conditions."
    },
    {
      title: "Right to Restrict Processing",
      description: "You can request restriction of processing your personal data."
    },
    {
      title: "Right to Data Portability",
      description: "You can request transfer of your data to another organization."
    },
    {
      title: "Right to Object",
      description: "You can object to our processing of your personal data."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            GDPR Compliance
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            AptBooks' commitment to the EU General Data Protection Regulation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg text-gray-600 mx-auto">
          <h2 className="text-2xl font-bold text-gray-900">Our GDPR Commitment</h2>
          <p>
            AptBooks complies with the EU General Data Protection Regulation (GDPR) which took effect on May 25, 2018. The GDPR establishes data protection requirements for organizations offering goods and services to people in the European Union (EU) or processing their personal data.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12">Data Processing Addendum</h2>
          <p>
            We offer a Data Processing Addendum (DPA) for customers who require it to comply with GDPR requirements. Our DPA outlines our commitments as a data processor and your obligations as a data controller.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12">Your GDPR Rights</h2>
          <p>
            Under GDPR, you have specific rights regarding your personal data:
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rights.map((right, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900">{right.title}</h3>
                <p className="mt-2 text-base text-gray-600">{right.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-12">Data Transfers</h2>
          <p>
            AptBooks uses Standard Contractual Clauses (SCCs) as a legal mechanism for data transfers from the EU to other countries when necessary. We ensure all data transfers comply with GDPR requirements.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12">Data Protection Officer</h2>
          <p>
            AptBooks has appointed a Data Protection Officer (DPO) to oversee our GDPR compliance efforts. You can contact our DPO at:
          </p>
          <p className="mt-4">
            <strong>Email:</strong> Joekay0976@gmail.com<br />
            <strong>Address:</strong> 123 Business Avenue, Accra, Ghana (Attention: Data Protection Officer)
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-12">Exercising Your Rights</h2>
          <p>
            To exercise any of your GDPR rights, please contact us at privacy@aptbooks.com. We may need to verify your identity before processing certain requests.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Have GDPR questions?
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Contact our Data Protection Officer for any GDPR-related inquiries.
          </p>
          <div className="mt-8">
            <Link
              to="mailto:joekay0976@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
            >
              Contact DPO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;