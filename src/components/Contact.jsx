import { FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-4xl text-green-500" />,
      title: "WhatsApp Chat",
      description: "Get instant support via WhatsApp",
      details: "+233 55 586 6711",
      action: "Chat Now",
      link: "https://wa.me/233555866711"
    },
    {
      icon: <FaPhone className="text-4xl text-blue-500" />,
      title: "Phone Support",
      description: "Speak with our support team",
      details: "+233 55 586 6711",
      action: "Call Now",
      link: "tel:+233555866711"
    },
    {
      icon: <FaEnvelope className="text-4xl text-red-500" />,
      title: "Email Us",
      description: "Send us your questions",
      details: "support@aptbooks.com",
      action: "Send Email",
      link: "mailto:aptbookvps@gmail.com"
    }
  ];

  const officeInfo = [
    {
      icon: <FaMapMarkerAlt className="text-xl text-gray-500" />,
      title: "Our Office",
      description: "123 Business Avenue, Accra, Ghana"
    },
    {
      icon: <FaClock className="text-xl text-gray-500" />,
      title: "Working Hours",
      description: "Monday - Friday: 8:00 AM - 5:00 PM\nSunday: 9:00 AM - 1:00 PM"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Contact AptBooks Support
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you with any questions about our accounting software.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {method.icon}
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">{method.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{method.description}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-900">{method.details}</p>
                  <div className="mt-4">
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${method.title === 'WhatsApp Chat' ? 'bg-green-600 hover:bg-green-700' : method.title === 'Phone Support' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'}`}
                    >
                      {method.action}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Information */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Our Location
              </h2>
              <div className="mt-6">
                {officeInfo.map((info, index) => (
                  <div key={index} className="flex mb-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-gray-500">
                        {info.icon}
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{info.title}</h3>
                      <p className="mt-1 text-base text-gray-500 whitespace-pre-line">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.755348379255!2d-0.2008499852313177!3d5.603986995932632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0x5e5a5e5a5e5a5e5a!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="AptBooks Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">FAQs</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Can't find what you're looking for? Chat with us on WhatsApp.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What are your support hours?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Our standard support hours are Monday-Friday from 8:00 AM to 5:00 PM GMT. WhatsApp support may be available outside these hours.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How quickly can I expect a response?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We typically respond to WhatsApp messages within 30 minutes during business hours. Email responses may take up to 24 hours.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Do you offer phone support?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, you can call us at +233 55 586 6711 during business hours. For faster service, we recommend WhatsApp.
                </dd>
              </div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Is there a support charge?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Basic support is included with all paid plans at no additional cost. Premium support plans are available for enterprise customers.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Final WhatsApp CTA */}
      <div className="bg-green-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <FaWhatsapp className="h-12 w-12 text-white" />
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mt-6">
            <span className="block">Need help right now?</span>
            <span className="block">Chat with us on WhatsApp</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-green-100">
            Get instant answers to your questions from our support team.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://wa.me/233555866711"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-600 bg-white hover:bg-green-50"
            >
              <FaWhatsapp className="mr-2" />
              Open WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;