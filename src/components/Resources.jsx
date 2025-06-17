import { FaBook, FaVideo, FaFileAlt, FaChalkboardTeacher, FaTools, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResourcesPage = () => {
  const resourceCategories = [
    {
      icon: <FaBook className="text-4xl text-blue-600" />,
      title: "Documentation",
      description: "Comprehensive guides and technical documentation for all AptBooks features.",
      items: [
        {
          title: "Getting Started Guide",
          description: "Learn how to set up your AptBooks account in minutes",
          link: "#"
        },
        {
          title: "Invoicing Tutorial",
          description: "Step-by-step instructions for creating and managing invoices",
          link: "#"
        },
        {
          title: "Expense Tracking Manual",
          description: "Complete guide to tracking business expenses",
          link: "#"
        },
        {
          title: "API Documentation",
          description: "Technical reference for AptBooks integration API",
          link: "#"
        }
      ]
    },
    {
      icon: <FaVideo className="text-4xl text-green-600" />,
      title: "Video Tutorials",
      description: "Watch short videos to learn how to use AptBooks effectively.",
      items: [
        {
          title: "Dashboard Overview",
          description: "Tour of the AptBooks dashboard and key features",
          link: "#"
        },
        {
          title: "Mobile App Setup",
          description: "How to install and use the AptBooks mobile app",
          link: "#"
        },
        {
          title: "Tax Preparation",
          description: "Preparing your taxes with AptBooks reports",
          link: "#"
        },
        {
          title: "Advanced Reporting",
          description: "Creating custom financial reports",
          link: "#"
        }
      ]
    },
    {
      icon: <FaFileAlt className="text-4xl text-purple-600" />,
      title: "Blog & Articles",
      description: "Latest news, tips, and accounting best practices.",
      items: [
        {
          title: "5 Accounting Mistakes to Avoid",
          description: "Common pitfalls for small business owners",
          link: "#"
        },
        {
          title: "Ghana Tax Updates 2023",
          description: "Latest changes to tax regulations",
          link: "#"
        },
        {
          title: "Cash Flow Management",
          description: "Strategies for healthy business finances",
          link: "#"
        },
        {
          title: "Mobile Money Integration",
          description: "How to accept mobile payments with AptBooks",
          link: "#"
        }
      ]
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl text-orange-600" />,
      title: "Webinars & Events",
      description: "Live and recorded training sessions with our experts.",
      items: [
        {
          title: "Monthly Q&A Session",
          description: "Get your questions answered live",
          link: "#"
        },
        {
          title: "Year-End Accounting",
          description: "Preparing your books for year-end",
          link: "#"
        },
        {
          title: "Inventory Management",
          description: "Advanced techniques for product businesses",
          link: "#"
        },
        {
          title: "AptBooks New Features",
          description: "Latest updates and how to use them",
          link: "#"
        }
      ]
    },
    {
      icon: <FaTools className="text-4xl text-teal-600" />,
      title: "Tools & Templates",
      description: "Free resources to help manage your business finances.",
      items: [
        {
          title: "Invoice Template (Excel)",
          description: "Professional invoice template",
          link: "#"
        },
        {
          title: "Expense Tracker",
          description: "Spreadsheet for tracking business expenses",
          link: "#"
        },
        {
          title: "Budget Planner",
          description: "Plan your business finances",
          link: "#"
        },
        {
          title: "Tax Calculator",
          description: "Estimate your business taxes",
          link: "#"
        }
      ]
    },
    {
      icon: <FaQuestionCircle className="text-4xl text-red-600" />,
      title: "Help Center",
      description: "Get answers to common questions and support.",
      items: [
        {
          title: "FAQs",
          description: "Answers to frequently asked questions",
          link: "#"
        },
        {
          title: "Contact Support",
          description: "Reach our customer support team",
          link: "#"
        },
        {
          title: "System Status",
          description: "Check AptBooks service status",
          link: "#"
        },
        {
          title: "Feature Requests",
          description: "Suggest improvements for AptBooks",
          link: "#"
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: "Mastering Inventory Management",
      date: "June 15, 2023",
      time: "2:00 PM GMT",
      description: "Learn advanced techniques for managing your product inventory with AptBooks.",
      cta: "Register Now"
    },
    {
      title: "Tax Preparation Workshop",
      date: "June 22, 2023",
      time: "10:00 AM GMT",
      description: "Everything you need to know to prepare your business taxes for 2023.",
      cta: "Register Now"
    },
    {
      title: "New Features Demo",
      date: "July 5, 2023",
      time: "3:00 PM GMT",
      description: "See the latest AptBooks features in action and learn how to use them.",
      cta: "Register Now"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            AptBooks Resources
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to master your business accounting and get the most from AptBooks.
          </p>
          <div className="mt-8">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search resources..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Resource Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {category.icon}
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">{category.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li key={i}>
                        <Link to={item.link} className="group flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">{item.title}</p>
                            <p className="text-sm text-gray-500">{item.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 text-right">
                <Link to="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                  View all <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Upcoming Events</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Learn from our experts
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Join our live webinars and training sessions to get the most from AptBooks.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="relative bg-white p-6 rounded-lg border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                    Upcoming
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="mt-1 flex items-center text-sm text-gray-500">
                    <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {event.time}
                  </div>
                  <p className="mt-4 text-sm text-gray-600">{event.description}</p>
                  <div className="mt-6">
                    <Link
                      to="#"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      {event.cta}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Customer Stories */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Customer Stories</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              See how businesses like yours succeed with AptBooks
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Fashion Boutique</h3>
                    <p className="mt-5 text-base text-gray-500">
                      "AptBooks helped us streamline our inventory management and reduced our accounting time by 60%."
                    </p>
                    <div className="mt-6">
                      <Link to="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        Read story <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Construction Firm</h3>
                    <p className="mt-5 text-base text-gray-500">
                      "With AptBooks, we can now track project expenses in real-time and invoice clients faster."
                    </p>
                    <div className="mt-6">
                      <Link to="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        Read story <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">IT Consultant</h3>
                    <p className="mt-5 text-base text-gray-500">
                      "As a freelancer, AptBooks saves me hours each week on invoicing and expense tracking."
                    </p>
                    <div className="mt-6">
                      <Link to="#" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                        Read story <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Need more help?</span>
            <span className="block">Contact our support team</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Our team is available 24/7 to answer your questions and help you get the most from AptBooks.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Contact Support
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;