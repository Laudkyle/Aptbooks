import { FaBuilding, FaStore, FaUserTie, FaChartLine, FaHandshake } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const SolutionsPage = () => {
  const solutions = [
    {
      icon: <FaStore className="text-4xl text-blue-600" />,
      title: "Small Businesses",
      description: "Streamline your finances with easy-to-use tools designed for growing businesses.",
      features: [
        "Simple invoicing and payments",
        "Expense tracking and categorization",
        "Basic financial reporting",
        "Tax preparation support"
      ],
      cta: "Explore Small Business Solutions",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <FaUserTie className="text-4xl text-green-600" />,
      title: "Freelancers & Consultants",
      description: "Spend less time on paperwork and more time doing what you love.",
      features: [
        "Time tracking integration",
        "Professional invoice templates",
        "Quarterly tax estimates",
        "Client portal for payments"
      ],
      cta: "See Freelancer Tools",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <FaBuilding className="text-4xl text-purple-600" />,
      title: "Enterprises",
      description: "Scalable solutions for complex financial operations and multi-entity management.",
      features: [
        "Advanced user permissions",
        "Multi-currency support",
        "Custom reporting",
        "API and integration options"
      ],
      cta: "Learn About Enterprise Plans",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <FaChartLine className="text-4xl text-orange-600" />,
      title: "E-commerce",
      description: "Seamlessly connect your online store with your accounting workflow.",
      features: [
        "Platform integrations (Shopify, WooCommerce)",
        "Automatic sales recording",
        "Inventory synchronization",
        "Sales tax automation"
      ],
      cta: "Discover E-commerce Features",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      icon: <FaHandshake className="text-4xl text-teal-600" />,
      title: "Accounting Firms",
      description: "Tools to manage multiple clients efficiently and profitably.",
      features: [
        "Client management dashboard",
        "Bulk operations",
        "Firm-branded client portal",
        "Collaboration tools"
      ],
      cta: "View Accountant Solutions",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  const industries = [
    {
      name: "Retail",
      description: "Inventory management, sales tracking, and supplier payments"
    },
    {
      name: "Restaurants",
      description: "Shift reporting, food cost tracking, and tip management"
    },
    {
      name: "Construction",
      description: "Job costing, progress billing, and subcontractor payments"
    },
    {
      name: "Healthcare",
      description: "Patient billing, insurance claims, and expense tracking"
    },
    {
      name: "Professional Services",
      description: "Time tracking, project billing, and expense management"
    },
    {
      name: "Nonprofits",
      description: "Donation tracking, grant management, and fund accounting"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Accounting Solutions</span>
              <span className="block text-blue-600">Tailored to Your Business</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              AptBooks provides specialized accounting solutions designed to meet the unique needs of your industry and business size.
            </p>
            <div className="mt-8 flex justify-center">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="https://app.ryamex.com"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="ml-3 inline-flex">
                <Link
                  to="#contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Built for your business type
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Whether you're a solopreneur or a growing enterprise, we have the right tools for you.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {solutions.map((solution, index) => (
                <div key={index} className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {solution.icon}
                    </div>
                    <div className="ml-5">
                      <h3 className="text-lg leading-6 font-medium text-gray-900">{solution.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{solution.description}</p>
                      <ul className="mt-4 space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 text-green-500">
                              <FiCheck className="h-5 w-5" />
                            </div>
                            <p className="ml-2 text-sm text-gray-700">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Link to="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                          {solution.cta} <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-10 -bottom-10 opacity-10">
                    <div className="w-48 h-48 rounded-full bg-blue-400"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Industry Solutions */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Industry Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Specialized for your industry
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We understand that different industries have unique accounting needs.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{industry.name}</h3>
                    <div className="mt-2 max-w-xl text-sm text-gray-500">
                      <p>{industry.description}</p>
                    </div>
                    <div className="mt-5">
                      <Link
                        to="#"
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none"
                      >
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integration Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Integrations</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Works with the tools you already use
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              AptBooks connects with popular business apps to streamline your workflow.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
              <div className="col-span-1 flex justify-center">
                <img className="h-12" src="https://tailwindui.com/img/logos/shopify-logo-gray-400.svg" alt="Shopify" />
              </div>
              <div className="col-span-1 flex justify-center">
                <img className="h-12" src="https://tailwindui.com/img/logos/slack-logo-gray-400.svg" alt="Slack" />
              </div>
              <div className="col-span-1 flex justify-center">
                <img className="h-12" src="https://tailwindui.com/img/logos/zoom-logo-gray-400.svg" alt="Zoom" />
              </div>
              <div className="col-span-1 flex justify-center">
                <img className="h-12" src="https://tailwindui.com/img/logos/stripe-logo-gray-400.svg" alt="Stripe" />
              </div>
              <div className="col-span-1 flex justify-center">
                <img className="h-12" src="https://tailwindui.com/img/logos/paypal-logo-gray-400.svg" alt="PayPal" />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link to="#" className="text-base font-medium text-blue-600 hover:text-blue-500">
              View all integrations <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to transform your accounting?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            No credit card required. Get started in minutes. Cancel anytime.
          </p>
          <Link
            to="https://app.ryamex.com"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;