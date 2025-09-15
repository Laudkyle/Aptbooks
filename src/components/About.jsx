import { FaChartLine, FaHandshake, FaLightbulb, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const stats = [
    { label: "Businesses Empowered", value: "50+" },
    { label: "Invoices Processed", value: "1M+" },
    { label: "Team Members", value: "5+" },
    { label: "Satisfied Customers", value: "100+" }
  ];

  const values = [
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Simplify Accounting",
      description: "We make complex financial tasks easy and accessible for all business owners"
    },
    {
      icon: <FaHandshake className="text-4xl text-green-600" />,
      title: "Build Trust",
      description: "Honest relationships with our customers are at the core of everything we do"
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-500" />,
      title: "Innovate Constantly",
      description: "We continuously improve our platform to meet evolving business needs"
    },
    {
      icon: <FaUsers className="text-4xl text-purple-600" />,
      title: "Empower Businesses",
      description: "Our success is measured by our customers' financial growth"
    }
  ];

 const teamMembers = [
  {
    name: "Isaac Baffour Awuah",
    role: "CEO",
    bio: "Isaac leads the vision and strategy at AptBooks, driving innovation and growth. With over 20 years in financial technology, he’s committed to making accounting simple and accessible for businesses across Africa.",
    image: "/audit.png"
  },
  {
    name: "Constant Ekow Takyi",
    role: "Head of Finance, Administration, and Business Development",
    bio: "Constant manages operations and ensures seamless execution across teams. His leadership ensures AptBooks delivers value through efficiency and strong market alignment.",
    image: "/constant.png"
  },
  {
    name: "Abraham Yiadom Boakye",
    role: "Chief Technology Officer",
    bio: "Abraham heads our engineering team, designing and maintaining the platform’s core systems. His expertise ensures AptBooks is secure, scalable, and developer-friendly.",
    image: "/ab.png"
  },
  {
    name: "Rosemond Asante Osei",
    role: "Customer Success",
    bio: "Rosemond supports users throughout their journey on AptBooks, providing training and troubleshooting. Her background in accounting helps customers unlock the platform’s full potential.",
    image: "./rose.jpg"
  }
];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            About AptBooks
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering Ghanaian businesses with simple, powerful accounting tools
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
            <div className="mt-6 prose prose-lg text-gray-600">
              <p>
                AptBooks was founded in 2024 with a simple mission: to make professional accounting accessible to every Ghanaian business owner.
              </p>
              <p className="mt-4">
                After experiencing firsthand the challenges of managing business finances with limited resources, our founder set out to create an affordable, easy-to-use accounting solution tailored for Ghana's unique business environment.
              </p>
              <p className="mt-4">
                Today, AptBooks serves thousands of businesses across Ghana - from solo entrepreneurs to growing companies. We're proud to be part of our customers' success stories as they achieve their financial goals.
              </p>
              <p className="mt-4">
                Headquartered in Accra, our team combines local business expertise with world-class technology to deliver the best accounting experience in West Africa.
              </p>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="AptBooks team working"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <p className="text-3xl font-extrabold text-blue-600">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What drives us every day
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-white text-white mx-auto shadow-md">
                    {value.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-medium text-gray-900">{value.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet the people behind AptBooks
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Passionate professionals dedicated to your financial success
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img className="h-16 w-16 rounded-full" src={member.image} alt={member.name} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-blue-600">{member.role}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/careers"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to transform your business accounting?
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            Join thousands of Ghanaian businesses using AptBooks today.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="https://app.aptbooks.com"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Start Free Trial
              </Link>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;