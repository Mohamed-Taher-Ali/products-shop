export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-600 py-6 mt-2">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; 2025 Your Company. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-gray-900">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900">
            Terms
          </a>
          <a href="#" className="hover:text-gray-900">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
