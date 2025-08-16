// src/components/PricingSection.jsx
import React from "react";
import dodo from "../assets/dodo.png"

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      subtitle: "Start small with limited validation",
      features: [
        "25 Email Validations",
        "Basic API Access",
        "Community Support",
      ],
      button: "Join Free",
      gradient: "bg-gradient-to-b from-gray-900 to-gray-800",
      badge: null,
    },
    {
      name: "Starter",
      price: "$9",
      subtitle: "Best for small projects",
      features: [
        "5,000 Email Validations",
        "Full API Access",
        "Email Support",
      ],
      button: "Get Starter",
      gradient: "bg-gradient-to-b from-purple-800 to-purple-900",
      badge: "Most Popular",
    },
    {
      name: "Pro",
      price: "$49.99",
      subtitle: "Scale with confidence",
      features: [
        "60,000 Email Validations",
        "Priority Support",
        "Advanced Analytics",
      ],
      button: "Go Pro",
      gradient: "bg-gradient-to-b from-yellow-700 to-orange-800",
      badge: "Best Value",
    },
  ];

  return (
    <section className="bg-base-200 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white">Pricing Plans</h2>
        <p className="text-gray-400 mt-3 mb-12">
          Choose the plan that fits your needs — powered by Dodo Payments
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`card shadow-xl text-left text-white ${plan.gradient} rounded-2xl`}
            >
              <div className="card-body">
                {plan.badge && (
                  <span className="badge badge-warning w-fit mb-4">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <p className="text-4xl font-extrabold my-2">{plan.price}</p>
                <p className="opacity-80">{plan.subtitle}</p>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="text-green-400">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className="btn btn-primary w-full mt-8"
                  disabled
                  title="Dodo Payments Coming Soon"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center items-center gap-3">
          <a
            href="https://dodopayments.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2"
          >
            <img
              src={dodo}
              alt="Dodo Payments"
              className="h-8"
            />
            <span className="text-gray-400">Powered by Dodo Payments</span>
          </a>
        </div>
      </div>
    </section>
  );
}
