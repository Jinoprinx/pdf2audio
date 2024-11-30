export default function Header() {
    return (
      <header className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="text-xl font-bold text-primary">PDF2Audio</div>
        <nav className="space-x-4">
          <a href="#features" className="text-gray-700 hover:text-primary">Features</a>
          <a href="#pricing" className="text-gray-700 hover:text-primary">Pricing</a>
          <a href="#testimonials" className="text-gray-700 hover:text-primary">Testimonials</a>
          <a href="#login" className="text-gray-700 hover:text-primary">Login</a>
        </nav>
        <button className="px-4 py-2 text-white bg-primary rounded-md hover:bg-secondary">Get Started Free</button>
      </header>
    );
  }
  