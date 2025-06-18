import {
  FaChartLine,
  FaReceipt,
  FaUsers,
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaMobileAlt,
} from "react-icons/fa";
import PricingSection from "./Pricing";
import { Link } from "react-router-dom";

const Homepage = () => {
  const features = [
    {
      icon: <FaFileInvoiceDollar className="text-3xl text-blue-600" />,
      title: "Invoicing",
      description:
        "Create professional invoices, track payments, and send automatic reminders.",
    },
    {
      icon: <FaReceipt className="text-3xl text-green-600" />,
      title: "Expense Tracking",
      description:
        "Capture receipts, categorize expenses, and monitor cash flow in real-time.",
    },
    {
      icon: <FaChartLine className="text-3xl text-purple-600" />,
      title: "Financial Reporting",
      description:
        "Generate balance sheets, profit & loss statements, and custom reports.",
    },
    {
      icon: <FaUsers className="text-3xl text-orange-600" />,
      title: "Client Management",
      description:
        "Manage customer and supplier details with integrated contact management.",
    },
    {
      icon: <FaShoppingCart className="text-3xl text-red-600" />,
      title: "Inventory Control",
      description:
        "Track stock levels, manage products, and automate reordering.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-teal-600" />,
      title: "Payroll Processing",
      description:
        "Calculate salaries, deductions, and generate payslips automatically.",
    },
  ];

  const testimonials = [
    {
      name: "Isaac Baffour Awuah",
      role: "Managing Director, Essential Anchor",
      quote:
        "AptBooks has simplified my accounting process so much. I can now focus on growing my business instead of paperwork.",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Constant Ekow Takyi",
      role: "Cheif Executive Officer",
      quote:
        "The invoicing and expense tracking features have saved me hours each week. Highly recommended for solopreneurs!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "George Mensah",
      role: "Accounting Manager",
      quote:
        "Our team switched to AptBooks last year and our month-end close process is now 40% faster with fewer errors.",
      avatar: "https://randomuser.me/api/portraits/men/63.jpg",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Smart Accounting</span>
                <span className="block text-blue-600">for Your Business</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                AptBooks simplifies accounting, invoicing, and expense tracking
                so you can focus on what matters most - growing your business.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    to="https://app.ryamex.com"
                    className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    to="#"
                    className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-8"
                  >
                    Watch Demo
                  </Link>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  No credit card required. Cancel anytime.
                </p>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Dashboard preview"
                />
                <div className="absolute inset-0 bg-blue-600 opacity-10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Cloud */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            Trusted by businesses worldwide
          </p>
          <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-3  lg:grid-cols-3">
            <div className="col-span-1 flex justify-center">
              <img
                className="h-12 object-cover"
                src="./logo-ess.png"
                alt="Essential Anchor"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <img
                className="h-12 object-cover"
                src="./logo-rya.png"
                alt="Ryamex Ventures"
              />
            </div>
            <div className="col-span-1 flex justify-center">
              <img className="h-12" src="./logo.png" alt="Hostella Ghana" />
            </div>
            {/* <div className="col-span-1 flex justify-center">
                    <img className="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
                  </div>
                  <div className="col-span-1 flex justify-center">
                    <img className="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
                  </div> */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to manage your finances
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              AptBooks provides comprehensive accounting tools designed to save
              you time and give you better financial insights.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-blue-500 rounded-md shadow-lg">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Screenshots */}
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="AptBooks Dashboard"
                />
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">
                Powerful yet simple financial management
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg">
                  AptBooks combines powerful accounting features with an
                  intuitive interface that makes financial management accessible
                  to everyone.
                </p>
                <p className="text-base leading-7">
                  Whether you're a freelancer, small business owner, or growing
                  enterprise, our platform scales with your needs while keeping
                  complexity at bay.
                </p>
              </div>
            </div>

            <div className="mt-10">
              <div className="grid grid-cols-2 gap-x-4 gap-y-8">
                <div className="border-t-2 border-gray-100 pt-6">
                  <p className="text-sm font-medium text-gray-500">Invoices</p>
                  <p className="text-3xl font-extrabold tracking-tight text-blue-600">
                    10,000+
                  </p>
                </div>

                <div className="border-t-2 border-gray-100 pt-6">
                  <p className="text-sm font-medium text-gray-500">
                    Businesses
                  </p>
                  <p className="text-3xl font-extrabold tracking-tight text-blue-600">
                    50+
                  </p>
                </div>

                <div className="border-t-2 border-gray-100 pt-6">
                  <p className="text-sm font-medium text-gray-500">Cities Across Ghana</p>
                  <p className="text-3xl font-extrabold tracking-tight text-blue-600">
                    50+
                  </p>
                </div>

                <div className="border-t-2 border-gray-100 pt-6">
                  <p className="text-sm font-medium text-gray-500">Support</p>
                  <p className="text-3xl font-extrabold tracking-tight text-blue-600">
                    24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-blue-600 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-200 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Trusted by businesses of all sizes
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white pt-10 pb-6 px-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.avatar}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-6 text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PricingSection />
      {/* Mobile App CTA */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Take AptBooks with you</span>
              <span className="block text-blue-600">
                Download our mobile app
              </span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Manage your finances on the go with our iOS and Android apps.
              Create invoices, track expenses, and view reports from anywhere.
            </p>
            <div className="mt-8 flex">
              <div className="mr-4 flex-shrink-0">
                <Link
                  to="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
                >
                  <FaMobileAlt className="mr-2" />
                  App Store
                </Link>
              </div>
              <div className="flex-shrink-0">
                <Link
                  to="#"
                  className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
                >
                  <FaMobileAlt className="mr-2" />
                  Google Play
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative mx-auto w-full rounded-lg shadow-lg">
              <img
                className="w-full rounded-lg"
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Mobile app screenshot"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cloud Hosting CTA */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
          <div className="rounded-lg bg-blue-700 overflow-hidden shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to dive in?</span>
                  <span className="block">Start your free trial today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-200">
                  No credit card required. Get started in minutes. Cancel
                  anytime.
                </p>
                <Link
                  to="https://app.ryamex.com"
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Sign up for free
                </Link>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
