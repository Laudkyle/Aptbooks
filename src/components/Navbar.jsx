import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("solutions")) setActiveTab("solutions");
    else if (path.includes("pricing")) setActiveTab("pricing");
    else if (path.includes("resources")) setActiveTab("resources");
    else setActiveTab("features");
  }, [location.pathname]);

  const navLinks = [
    { name: "Features", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center overflow-hidden">
              <img className="h-16 w-32" src="/logo.png" alt="AptBooks" />
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setActiveTab(link.name.toLowerCase())}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    activeTab === link.name.toLowerCase()
                      ? "border-blue-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Try for Free
            </Link>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  setActiveTab(link.name.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  activeTab === link.name.toLowerCase()
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-200 px-5">
              <Link
                to="/login"
                className="text-gray-500 hover:text-gray-900 block py-2 text-sm font-medium"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="mt-2 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Try for Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
