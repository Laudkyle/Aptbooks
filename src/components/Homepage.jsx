import React, { useState, useEffect } from "react";
import {
  FaChartLine,
  FaReceipt,
  FaUsers,
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaMoneyBillWave,
  FaMobileAlt,
  FaCloud,
  FaDesktop,
  FaCheckCircle,
  FaTimes,
  FaArrowRight,
  FaStar,
  FaPlay,
  FaShieldAlt,
  FaClock,
  FaGlobe,
  FaUser,
  FaCalculator,
} from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";

const Homepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    // Create mailto link
    const subject = encodeURIComponent(
      "Demo Request from " + demoFormData.name
    );
    const body = encodeURIComponent(
      `Name: ${demoFormData.name}\n` +
        `Email: ${demoFormData.email}\n` +
        `Company: ${demoFormData.company}\n` +
        `Phone: ${demoFormData.phone}\n` +
        `Message: ${demoFormData.message}`
    );
    window.location.href = `mailto:aptbookvps@gmail.com?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setShowDemoForm(false);
      setFormSubmitted(false);
      setDemoFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    }, 2000);
  };
const features = [
  {
    icon: <FaUsers className="text-2xl" />,
    title: "Customer & Supplier Management",
    description:
      "Easily manage customers, suppliers, and groups with contact-level tracking and insights.",
    color: "bg-blue-500",
  },
  {
    icon: <FaShoppingCart className="text-2xl" />,
    title: "Smart POS & Inventory",
    description:
      "Integrated Point-of-Sale with inventory tracking, returns, and draft sales support.",
    color: "bg-green-500",
  },
  {
    icon: <FaWarehouse className="text-2xl" />,
    title: "Purchase Workflow",
    description:
      "Seamless purchase orders with status tracking and supplier coordination.",
    color: "bg-yellow-500",
  },
  {
    icon: <FaCalculator className="text-2xl" />,
    title: "Transactions & Journal Entries",
    description:
      "Automate journal entries and manage cash, transfers, and expense records with ease.",
    color: "bg-purple-500",
  },
  {
    icon: <FaReceipt className="text-2xl" />,
    title: "Tax Automation",
    description:
      "Configure tax rules and generate reports for compliance and filing with zero hassle.",
    color: "bg-red-500",
  },
  {
    icon: <FaChartLine className="text-2xl" />,
    title: "Financial Reports",
    description:
      "Real-time income statements, balance sheets, and trial balances tailored for growth.",
    color: "bg-teal-500",
  },
];

  const deploymentOptions = [
    {
      icon: <FaCloud className="text-4xl text-blue-600" />,
      title: "Cloud Hosted",
      description:
        "Fully managed cloud solution with automatic updates and backups",
      features: ["99.9% Uptime", "Auto Scaling", "24/7 Support", "Global CDN"],
      price: "Starting at GH₵ 200/month",
    },
    {
      icon: <FaDesktop className="text-4xl text-green-600" />,
      title: "Self Hosted",
      description: "Deploy on your own infrastructure with complete control",
      features: [
        "Full Control",
        "Custom Integrations",
        "No Data Limits",
        "One-time License",
      ],
      price: "Starting at GH₵ 7299 one-time",
    },
  ];

  const testimonials = [
    {
      name: "Isaac Baffour Awuah",
      role: "Managing Director",
      company: "Essential Anchor Ltd",
      quote:
        "AptBooks transformed our financial operations. The AI-powered insights helped us increase profit margins by 23%.",
      avatar: "./audit.png",
      rating: 5,
    },
    {
      name: "Constant Ekow Takyi",
      role: "CEO",
      company: "Ryamex Ventures",
      quote:
        "The self-hosted option gave us the security we needed while maintaining all the powerful features.",
      avatar: "./constant.png",
      rating: 5,
    },
    {
      name: "Rosemond Asante",
      role: "Accounting Manager",
      company: "Tech Solutions Ltd",
      quote:
        "Our month-end process went from 5 days to just 4 hours. The automation is incredible.",
      avatar: "./rose.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* Floating Header */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-92 text-center">
          {" "}
          {/* Increased bottom padding */}
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <FaStar className="text-yellow-500" />
            <span>Trusted by 50+ businesses across Ghana</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-3 leading-tight">
            Accounting Made
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Intelligent
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            The first AI-powered accounting platform that thinks like your
            accountant, works like your assistant, and scales like your
            ambition.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <a
              href="https://app.aptbooks.com"
              className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Start Free Trial</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => setShowDemoForm(true)}
              className="group bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center space-x-2 shadow-lg border border-gray-200"
            >
              <FaPlay className="text-blue-600" />
              <span>Watch Demo</span>
            </button>
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCheckCircle className="text-green-500" />
              <span>Setup in 15 minutes</span>
            </div>
          </div>
        </div>

        {/* Floating Dashboard Preview */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="bg-white px-4 py-1 rounded-full text-sm text-gray-600">
                  app.aptbooks.com
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="AptBooks Dashboard"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Modern Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature designed with intelligence, simplicity, and your
              success in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div
                  className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section id="deployment" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Deploy Your Way
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose between cloud convenience or on-premise control. Same
              powerful features, different deployment models.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {deploymentOptions.map((option, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-8">
                  {option.icon}
                  <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <div className="text-2xl font-bold text-blue-600">
                    {option.price}
                  </div>
                </div>

                <div className="space-y-4">
                  {option.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-3">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200">Active Businesses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">₵50M+</div>
              <div className="text-blue-200">Processed Monthly</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-200">Uptime SLA</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by Finance Teams
            </h2>
            <p className="text-xl text-gray-600">
              See what business leaders are saying about AptBooks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-blue-600 text-sm">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Accounting?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses already using AptBooks to streamline
            their financial operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://app.aptbooks.com"
              className="bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg"
            >
              <span>Start Free Trial</span>
              <FaArrowRight />
            </a>
            <button
              onClick={() => setShowDemoForm(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* Demo Form Modal */}
      {showDemoForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowDemoForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <FaTimes />
            </button>

            {!formSubmitted ? (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Request a Demo
                </h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={demoFormData.name}
                    onChange={(e) =>
                      setDemoFormData({ ...demoFormData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Business Email *"
                    value={demoFormData.email}
                    onChange={(e) =>
                      setDemoFormData({
                        ...demoFormData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={demoFormData.company}
                    onChange={(e) =>
                      setDemoFormData({
                        ...demoFormData,
                        company: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={demoFormData.phone}
                    onChange={(e) =>
                      setDemoFormData({
                        ...demoFormData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <textarea
                    placeholder="Tell us about your business needs..."
                    value={demoFormData.message}
                    onChange={(e) =>
                      setDemoFormData({
                        ...demoFormData,
                        message: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Send Demo Request
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Request Sent!
                </h3>
                <p className="text-gray-600">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
