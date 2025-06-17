import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

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
    name: "Quaterly",
    price: "₵500",
    period: "/ 3 months",
    description: "Perfect for freelancers and sole proprietors",
    features: ["200 invoices/month", "Expense tracking", "Basic reporting", "3 users"],
    cta: "Start Free Trial",
  },
  {
    name: "Biannually",
    price: "₵1100",
    period: "/ 6 months",
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
    period: "/ Year",
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

export default function PricingSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:items-center text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-5 text-xl text-gray-500">
            Choose the plan that works best for your business needs.
          </p>
          <div className="relative mt-6 bg-gray-100 rounded-lg p-0.5 flex">
            <button
              type="button"
              className="relative bg-white border-gray-200 rounded-md shadow-sm py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="ml-0.5 relative border border-transparent rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500"
            >
              Yearly billing
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4  mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative border rounded-lg shadow-sm divide-y divide-gray-200 ${
                plan.popular ? "border-blue-500 ring-2 ring-blue-300" : "border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1 text-xs font-semibold uppercase rounded-full shadow-md z-10">
                  Most Popular
                </div>
              )}

              <div className="p-6 pt-8">
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="ml-1 text-xl text-gray-500">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-gray-500">{plan.description}</p>
              </div>

              <div className="pt-6 pb-8 px-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-green-500">
                        <FiCheck className="h-5 w-5" />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="#"
                    className={`block w-full text-center py-3 px-6 rounded-md text-base font-medium ${
                      plan.popular
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
