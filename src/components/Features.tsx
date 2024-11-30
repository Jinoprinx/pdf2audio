export default function Features() {
    const features = [
      { icon: "🚀", title: "Fast and Accurate Conversion" },
      { icon: "🌎", title: "Multilingual Support" },
      { icon: "🔒", title: "Secure File Processing" },
      { icon: "🎵", title: "High-Quality Audio Outputs" },
    ];
  
    return (
      <section id="features" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow rounded-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  