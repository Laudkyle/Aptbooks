import { FaUserTie, FaRegLightbulb, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CareersPage = () => {
  const benefits = [
    {
      icon: <FaRegLightbulb className="text-4xl text-blue-600" />,
      title: "Growth Opportunities",
      description: "Continuous learning with training budgets and mentorship programs"
    },
    {
      icon: <FaHandshake className="text-4xl text-green-600" />,
      title: "Flexible Work",
      description: "Hybrid work model with flexible hours to support work-life balance"
    },
    {
      icon: <FaUserTie className="text-4xl text-purple-600" />,
      title: "Competitive Packages",
      description: "Attractive compensation including health benefits and performance bonuses"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Careers at AptBooks
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Help us build the future of accounting for African businesses
          </p>
        </div>
      </div>

      {/* Current Openings */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Current Open Positions</h2>
          <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm p-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900">No open positions at this time</h3>
            <p className="mt-2 text-base text-gray-600">
              We're not currently hiring, but great talent is always welcome in our inbox. 
              Feel free to send us your resume for future opportunities.
            </p>
            <div className="mt-6">
              <Link
                to="mailto:careers@aptbooks.com?subject=Spontaneous Application"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit Your Resume
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Us */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Why Join Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Building more than accounting software
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              At AptBooks, we're empowering African businesses to thrive through financial technology.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-white text-white mx-auto shadow-md">
                    {benefit.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">{benefit.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Our Culture */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Culture</h2>
              <div className="mt-6 prose prose-lg text-gray-600">
                <p>
                  At AptBooks, we believe our people are our greatest asset. We've built a culture of collaboration, innovation, and mutual respect where everyone can do their best work.
                </p>
                <p className="mt-4">
                  We value diversity and welcome team members from all backgrounds who share our passion for empowering African businesses through technology.
                </p>
                <p className="mt-4">
                  While we work hard to deliver exceptional products to our customers, we also prioritize work-life balance and team bonding through regular social events and learning opportunities.
                </p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="AptBooks team working together"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Keep in Touch */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Want to join us in the future?
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            We're always interested in connecting with talented individuals. Share your details and we'll contact you when roles become available.
          </p>
          <div className="mt-8">
            <Link
              to="mailto:aptbookvps@gmail.com?subject=Future Opportunities"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-600 bg-white hover:bg-blue-50"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;