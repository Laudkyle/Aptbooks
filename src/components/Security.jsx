import { FaLock, FaServer, FaUserShield, FaSyncAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";

const SecurityPage = () => {
  const features = [
    {
      icon: <FaLock className="text-4xl text-blue-600" />,
      title: "Data Encryption",
      description: "All sensitive data is encrypted both in transit (TLS 1.2+) and at rest (AES-256)"
    },
    {
      icon: <FaServer className="text-4xl text-green-600" />,
      title: "Secure Infrastructure",
      description: "Hosted on AWS with enterprise-grade security and regular vulnerability scanning"
    },
    {
      icon: <FaUserShield className="text-4xl text-purple-600" />,
      title: "Access Controls",
      description: "Role-based permissions and multi-factor authentication options"
    },
    {
      icon: <FaSyncAlt className="text-4xl text-orange-600" />,
      title: "Continuous Monitoring",
      description: "24/7 security monitoring and alerting for suspicious activities"
    }
  ];

  const bestPractices = [
    "Use strong, unique passwords for your AptBooks account",
    "Enable two-factor authentication if available",
    "Regularly review user access permissions",
    "Log out from shared devices",
    "Keep your devices and browsers updated",
    "Be cautious of phishing attempts"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Security at AptBooks
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Protecting your financial data is our top priority
          </p>
        </div>
      </div>

      {/* Security Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Security Measures</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Enterprise-grade protection for your data
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-white text-white mx-auto shadow-md">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Compliance & Certifications
              </h2>
              <div className="mt-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-gray-700">GDPR compliant data processing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-gray-700">Regular third-party security audits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 text-green-500 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base text-gray-700">SOC 2 Type II compliant infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Security Best Practices
              </h2>
              <div className="mt-6">
                <ul className="space-y-4">
                  {bestPractices.map((practice, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-blue-500 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-base text-gray-700">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Incident Response */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Security Response</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our incident response process
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-between">
                <div className="flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600">
                    <span className="text-white text-sm font-medium">1</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">Detection</span>
                </div>
                <div className="flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600">
                    <span className="text-white text-sm font-medium">2</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">Assessment</span>
                </div>
                <div className="flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600">
                    <span className="text-white text-sm font-medium">3</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">Containment</span>
                </div>
                <div className="flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600">
                    <span className="text-white text-sm font-medium">4</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">Resolution</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-4">
              <div>
                <p className="text-lg font-medium text-gray-900">1. Detection</p>
                <p className="mt-2 text-base text-gray-500">
                  Automated monitoring systems and security teams identify potential security incidents.
                </p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">2. Assessment</p>
                <p className="mt-2 text-base text-gray-500">
                  Security team evaluates the scope and impact of the incident.
                </p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">3. Containment</p>
                <p className="mt-2 text-base text-gray-500">
                  Immediate actions taken to limit the incident's impact and prevent further damage.
                </p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">4. Resolution</p>
                <p className="mt-2 text-base text-gray-500">
                  Problem is resolved, systems secured, and affected users notified if required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reporting Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Report a Security Concern
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            If you've discovered a security vulnerability in AptBooks, please report it to our security team.
          </p>
          <div className="mt-8">
            <Link
              to="mailto:joekay0976@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Contact Security Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityPage;