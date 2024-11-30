export default function HeroSection() {
    return (
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Convert PDFs to Audio Effortlessly</h1>
        <p className="mt-4 text-lg">Transform your documents into high-quality audio in seconds with multilingual support.</p>
        <div className="mt-6 space-x-4">
          <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-md hover:bg-gray-200">
            Try for Free
          </button>
          <button className="px-6 py-3 bg-secondary text-white font-semibold rounded-lg shadow-md hover:bg-primary">
            Learn More
          </button>
        </div>
      </section>
    );
  }
  