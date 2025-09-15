import {
  FaLink,
  FaMobileAlt,
  FaCreditCard,
  FaExchangeAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const IntegrationsPage = () => {
  const paymentIntegrations = [
    {
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Credit-cards.jpg/1200px-Credit-cards.jpg"
          alt="Paystack"
          className="h-12"
        />
      ),
      title: "Paystack",
      description: "Accept credit/debit card payments via Paystack",
      features: [
        "Secure card payments",
        "Recurring billing",
        "Instant verification",
        "Multi-currency support",
      ],
      cta: "Connect Paystack",
      link: "register",
    },
    {
      icon: (
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600">
          <FaMobileAlt className="text-3xl" />
        </div>
      ),
      title: "Mobile Money (All Networks)",
      description:
        "Accept payments via MTN, Telecel, AirtelTigo, and other mobile money services",
      features: ["MTN Mobile Money", "Telecel Cash", "AirtelTigo Money"],
      cta: "Setup Mobile Money",
      link: "register",
    },
    {
      icon: (
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
          <FaExchangeAlt className="text-3xl" />
        </div>
      ),
      title: "Bank Transfer",
      description:
        "Receive payments directly to your bank account with automatic reconciliation",
      features: [
        "All Ghanaian banks supported",
        "Automatic transaction matching",
        "Payment notifications",
        "Detailed records",
      ],
      cta: "Connect Bank Account",
      link: "register",
    },
  ];

  const benefits = [
    {
      icon: <FaLink className="text-3xl text-blue-600" />,
      title: "Seamless Integration",
      description:
        "All payment methods connect directly to your AptBooks account for automatic reconciliation",
    },
    {
      icon: <FaCreditCard className="text-3xl text-green-600" />,
      title: "Unified Reporting",
      description:
        "View all payment activity in one place with consolidated financial reports",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-purple-600" />,
      title: "Ghana-Optimized",
      description:
        "Payment solutions designed specifically for Ghanaian businesses and customers",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Payment Integrations
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Connect AptBooks with Ghana's most popular payment methods for
            seamless transactions and automatic reconciliation.
          </p>
        </div>
      </div>

      {/* Payment Integrations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Supported Payment Methods
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Accept payments the way your customers prefer
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {paymentIntegrations.map((integration, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">{integration.icon}</div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      {integration.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {integration.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <ul className="space-y-3">
                    {integration.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-green-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="ml-3 text-sm text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 text-center">
                <Link
                  to={integration.link}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                    integration.title === "Paystack"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : integration.title === "Mobile Money"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {integration.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Benefits
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why integrate payments with AptBooks?
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-white mx-auto shadow-sm">
                    {benefit.icon}
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              How It Works
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get set up in minutes
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-between">
                <div className="flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600">
                    <span className="text-white text-sm font-medium">1</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">
                    Connect payment method
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600">
                    <span className="text-white text-sm font-medium">2</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">
                    Configure settings
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-blue-600">
                    <span className="text-white text-sm font-medium">3</span>
                  </span>
                  <span className="ml-4 text-sm font-medium text-gray-900">
                    Start accepting payments
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="text-lg font-medium text-gray-900">
                  1. Connect payment method
                </p>
                <p className="mt-2 text-base text-gray-500">
                  Link your Paystack, Mobile Money, or bank account through our
                  secure connection process.
                </p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  2. Configure settings
                </p>
                <p className="mt-2 text-base text-gray-500">
                  Set up payment options, currencies, and automatic
                  reconciliation preferences.
                </p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900">
                  3. Start accepting payments
                </p>
                <p className="mt-2 text-base text-gray-500">
                  Payments will automatically sync with your AptBooks account
                  for seamless accounting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Money Networks */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Supported Networks
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              All major Ghanaian mobile money providers
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-1 flex justify-center">
              <img
                className="h-12"
                src="https://coupons.com.gh//blog/assets/images/mtn-mobile-money.jpg"
                alt="MTN Mobile Money"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-12"
                src="https://citinewsroom.com/wp-content/uploads/2024/05/Telecel-Cash-Logo.jpg"
                alt="Telecel Cash"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-12"
                src="https://techlabari.com/wp-content/uploads/2023/10/AirtelTigo_Rebrands_for_Enhanced_Identification_and_Simplicity-860x430.jpg"
                alt="AirtelTigo Money"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-12"
                src="https://www.visa.co.in/dam/VCOM/regional/ap/india/global-elements/images/in-visa-platinum-card-498x280.png"
                alt="Debit/Credit Card"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to simplify your payments?
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Connect your payment methods today and start accepting payments with
            automatic reconciliation.
          </p>
          <Link
            to="https://app.aptbooks.com"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
