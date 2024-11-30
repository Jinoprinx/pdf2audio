export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center space-y-4">
          <div className="space-x-6">
            <a href="#about" className="hover:text-gray-400">About</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
            <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-400">Terms</a>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-400">Facebook</a>
            <a href="#" className="hover:text-gray-400">Twitter</a>
            <a href="#" className="hover:text-gray-400">LinkedIn</a>
          </div>
          <p>&copy; 2024 PDF2Audio. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  