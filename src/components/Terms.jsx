const TermsOfServicePage = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing or using AptBooks' accounting software and services, you agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, you may not use our services."
      ]
    },
    {
      title: "Account Registration",
      content: [
        "You must provide accurate and complete information when creating an account.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You must notify us immediately of any unauthorized use of your account."
      ]
    },
    {
      title: "Service Usage",
      content: [
        "AptBooks grants you a limited, non-exclusive, non-transferable license to use our services for your business accounting needs.",
        "You may not: reverse engineer our software, use our services for illegal activities, or attempt to gain unauthorized access to our systems.",
        "We reserve the right to suspend or terminate accounts that violate these terms."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Subscription fees are billed in advance on a monthly, quarterly, or annual basis.",
        "All fees are non-refundable except as required by law.",
        "We may change our pricing with 30 days notice via email or in-app notification."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "All rights, title, and interest in the AptBooks software and services remain our exclusive property.",
        "You retain ownership of all data you input into our services.",
        "We may use aggregated, anonymized data to improve our services."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "AptBooks shall not be liable for any indirect, incidental, or consequential damages arising from use of our services.",
        "Our total liability for any claims related to our services is limited to the amount you paid us in the 12 months preceding the claim."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These terms shall be governed by the laws of Ghana.",
        "Any disputes shall be resolved in the courts of Accra, Ghana."
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
              Terms of Service
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
            These Terms of Service ("Terms") govern your access to and use of AptBooks' accounting software and services. Please read them carefully before using our services.
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
            <h2 className="text-2xl font-bold text-gray-900">Changes to Terms</h2>
            <p className="mt-6">
              We may modify these Terms at any time. We will provide notice of significant changes through our website or via email. Your continued use of our services after changes constitutes acceptance of the updated Terms.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <p className="mt-6">
              For questions about these Terms, please contact us at legal@aptbooks.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;