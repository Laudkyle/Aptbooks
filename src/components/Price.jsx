import { FiCheck, FiStar } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "₵200",
      period: "/month",
      description: "Perfect for freelancers and sole proprietors",
      features: ["50 invoices/month", "Expense tracking", "Basic reporting", "1 user"],
      cta: "Start Free Trial",
    },
    {
      name: "Quarterly",
      price: "₵500",
      period: "/3 months",
      description: "Perfect for freelancers and sole proprietors",
      features: ["200 invoices/month", "Expense tracking", "Basic reporting", "3 users"],
      cta: "Start Free Trial",
    },
    {
      name: "Biannually",
      price: "₵1100",
      period: "/6 months",
      description: "Ideal for small businesses",
      features: [
        "Unlimited invoices",
        "Inventory management",
        "Advanced reporting",
        "5 users included",
      ],
      cta: "Start Free Trial",
    },
    {
      name: "Annually",
      price: "₵2000",
      period: "/Year",
      description: "For growing businesses with complex needs",
      popular: true,
      features: [
        "Unlimited everything",
        "Priority support",
        "Custom integrations",
        "10+ users",
      ],
      cta: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, all plans come with a 14-day free trial. No credit card required."
    },
    {
      question: "Can I change plans later?",
      answer: "Absolutely! You can upgrade or downgrade your plan at any time."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept mobile money (MTN, Telecel, AirtelTigo), credit cards, and bank transfers."
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we offer special pricing for registered non-profit organizations. Contact our sales team for details."
    },
    {
      question: "How does the user limit work?",
      answer: "The user limit refers to how many people can access your AptBooks account simultaneously."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no hidden setup fees. You only pay the subscription fee."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your business. All plans include a 14-day free trial.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="relative bg-gray-100 rounded-lg p-1 flex">
              <button
                type="button"
                className="relative py-2 px-6 border border-transparent rounded-md bg-white shadow-sm text-sm font-medium text-gray-900 whitespace-nowrap focus:outline-none"
              >
                Monthly billing
              </button>
              <button
                type="button"
                className="ml-1 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none"
              >
                Yearly billing (Save 20%)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl border border-gray-200 bg-white shadow-sm ${plan.popular ? 'border-blue-500 ring-2 ring-blue-500' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    <FiStar className="mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                  <span className="ml-1 text-lg font-semibold text-gray-500">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-gray-500">{plan.description}</p>
                <div className="mt-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FiCheck className="h-5 w-5 flex-shrink-0 text-green-500" />
                        <span className="ml-3 text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 rounded-b-2xl">
                <Link
                  to={plan.cta === "Contact Sales" ? "/contact" : "https://app.aptbooks.com"}
                  className={`block w-full py-3 px-6 text-center rounded-md border border-transparent text-base font-medium ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'}`}
                >
                  {plan.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Savings Calculator */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 sm:p-10">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900">See how much you can save</h2>
              <p className="mt-4 text-gray-600">
                Compare plans to find the perfect fit for your budget and business needs.
              </p>
            </div>
            <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="business-size" className="block text-sm font-medium text-gray-700">
                    Business Size
                  </label>
                  <select
                    id="business-size"
                    name="business-size"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option>Just me (Sole proprietor)</option>
                    <option>Small team (2-5 people)</option>
                    <option>Growing business (6-10 people)</option>
                    <option>Large business (10+ people)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="invoices" className="block text-sm font-medium text-gray-700">
                    Monthly Invoices
                  </label>
                  <select
                    id="invoices"
                    name="invoices"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option>Less than 50</option>
                    <option>50-200</option>
                    <option>200-500</option>
                    <option>500+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="billing-cycle" className="block text-sm font-medium text-gray-700">
                    Billing Cycle
                  </label>
                  <select
                    id="billing-cycle"
                    name="billing-cycle"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Biannually</option>
                    <option>Annually (Save 20%)</option>
                  </select>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="button"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Calculate Savings
                </button>
              </div>
              <div className="mt-6 bg-blue-100 rounded-lg p-4 hidden" id="savings-result">
                <p className="text-center font-medium text-blue-800">
                  The <span className="font-bold">Annual</span> plan will save you <span className="font-bold">₵400/year</span> compared to monthly billing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Comparison */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Plan comparison
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              See how our plans stack up against each other
            </p>
          </div>
          <div className="mt-12">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Features
                    </th>
                    {pricingPlans.map((plan, index) => (
                      <th key={index} scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Invoices per month
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      50
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      200
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      Unlimited
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      Unlimited
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Users included
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      1
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      5
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      10+
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Expense tracking
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Inventory management
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      -
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      -
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Priority support
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      -
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      -
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      -
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-gray-500">
                      <FiCheck className="mx-auto h-5 w-5 text-green-500" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">FAQs</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently asked questions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Try AptBooks free for 14 days.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            No credit card required. Cancel anytime.
          </p>
          <Link
            to="https://app.aptbooks.com"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Sign up for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;