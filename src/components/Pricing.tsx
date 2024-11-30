export default function Pricing() {
    const plans = [
      {
        name: "Free",
        price: "$0",
        features: [
          "Up to 5 PDFs per month",
          "Basic audio quality",
          "Limited languages",
        ],
        button: "Get Started",
      },
      {
        name: "Pro",
        price: "$9.99/month",
        features: [
          "Unlimited PDFs",
          "High-quality audio",
          "All supported languages",
        ],
        button: "Subscribe",
        highlight: true,
      },
      {
        name: "Enterprise",
        price: "Custom Pricing",
        features: [
          "Team access",
          "Priority support",
          "Custom language models",
        ],
        button: "Contact Us",
      },
    ];
  
    return (
      <section id="pricing" className="py-20 bg-white">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Choose Your Plan</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg ${
                plan.highlight ? "border-2 border-primary" : ""
              }`}
            >
              <h3 className="text-xl font-bold mb-4 text-center">{plan.name}</h3>
              <p className="text-4xl font-bold text-primary text-center mb-6">
                {plan.price}
              </p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-700 text-center mb-2">
                    ✓ {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`block w-full py-2 text-white font-semibold rounded-md ${
                  plan.highlight ? "bg-primary" : "bg-gray-500"
                } hover:opacity-90`}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  