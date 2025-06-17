import { FaSearch, FaBook, FaVideo, FaQuestionCircle, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HelpCenterPage = () => {
  const helpCategories = [
    {
      icon: <FaBook className="text-4xl text-blue-600" />,
      title: "Documentation",
      description: "Step-by-step guides and technical documentation",
      link: "/help/documentation"
    },
    {
      icon: <FaVideo className="text-4xl text-green-600" />,
      title: "Video Tutorials",
      description: "Watch guided walkthroughs of key features",
      link: "/help/videos"
    },
    {
      icon: <FaQuestionCircle className="text-4xl text-purple-600" />,
      title: "FAQs",
      description: "Answers to common questions",
      link: "/help/faqs"
    },
    {
      icon: <FaUserFriends className="text-4xl text-orange-600" />,
      title: "Community Forum",
      description: "Get help from other AptBooks users",
      link: "/help/community"
    }
  ];

  const popularArticles = [
    {
      title: "How to Create and Send an Invoice",
      category: "Invoicing",
      link: "/help/article/create-invoice"
    },
    {
      title: "Setting Up Mobile Money Payments",
      category: "Payments",
      link: "/help/article/mobile-money"
    },
    {
      title: "Generating Financial Reports",
      category: "Reporting",
      link: "/help/article/financial-reports"
    },
    {
      title: "Managing User Permissions",
      category: "Account Settings",
      link: "/help/article/user-permissions"
    },
    {
      title: "Troubleshooting Sync Issues",
      category: "Technical Help",
      link: "/help/article/sync-troubleshooting"
    },
    {
      title: "Year-End Accounting Checklist",
      category: "Best Practices",
      link: "/help/article/year-end-checklist"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Help Center
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers, guides, and resources for using AptBooks
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-lg mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search help articles..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {helpCategories.map((category, index) => (
            <Link
              to={category.link}
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 text-center p-6"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-white text-white mx-auto">
                {category.icon}
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">{category.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Popular Help Articles</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularArticles.map((article, index) => (
              <Link
                to={article.link}
                key={index}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {article.category}
                  </span>
                  <h3 className="mt-3 text-lg font-medium text-gray-900">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 sm:p-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Still need help?</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Our support team is ready to assist you with any questions about AptBooks.
                </p>
                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-medium text-gray-900">Support Hours</h3>
                  <dl className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <dt className="flex-shrink-0 text-sm font-medium text-gray-500">Monday-Friday</dt>
                      <dd className="ml-3 text-sm text-gray-900">8:00 AM - 5:00 PM GMT</dd>
                    </div>
                    <div className="flex items-start">
                      <dt className="flex-shrink-0 text-sm font-medium text-gray-500">Sunday</dt>
                      <dd className="ml-3 text-sm text-gray-900">9:00 AM - 1:00 PM GMT</dd>
                    </div>
                    <div className="flex items-start">
                      <dt className="flex-shrink-0 text-sm font-medium text-gray-500">Emergency</dt>
                      <dd className="ml-3 text-sm text-gray-900">24/7 for critical system issues</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Help */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Mobile App Help</h2>
              <p className="mt-4 text-lg text-gray-600">
                Get the most out of the AptBooks mobile app with our dedicated mobile support resources.
              </p>
              <div className="mt-6">
                <Link
                  to="/help/mobile"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Mobile Help Center
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="flex justify-center">
                <div className="relative max-w-xs">
                  <img
                    className="w-full rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                    alt="AptBooks mobile app"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-blue-500 rounded-md p-1">
                        <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-2">
                        <p className="text-xs font-medium text-gray-500">Available on</p>
                        <p className="text-sm font-medium text-gray-900">App Store & Google Play</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenterPage;