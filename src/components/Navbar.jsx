import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();

  useEffect(() => {
    const path = location.pathname;
    if (path.includes("solutions")) setActiveTab("solutions");
    else if (path.includes("pricing")) setActiveTab("pricing");
    else if (path.includes("resources")) setActiveTab("resources");
    else if (path.includes("about")) setActiveTab("about us");
    else setActiveTab("features");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", path: "/" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/90 backdrop-blur-md  md:bg-transparent"
      } rounded-2xl`}
    >
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-blue-700 rounded-xl flex items-center justify-center">
            {/* <span className="text-white font-bold text-lg">A</span> */}
            <img src="/logo.png" alt="" />
          </div>
          <span className="text-xl font-bold text-gray-900">AptBooks</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setActiveTab(link.name.toLowerCase())}
              className={`text-gray-600 hover:text-blue-600 transition-colors font-medium ${
                activeTab === link.name.toLowerCase() ? "text-blue-600" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* Desktop Contact */}
          <span className="hidden md:inline-block text-sm bg-blue-100 px-3 py-2 rounded-3xl text-blue-700">
            +233 555 866 711
          </span>

          {user && user.email ? (
            <>
              <span className="text-gray-600">{user.email}</span>
              <button
                onClick={logout}
                className="text-gray-600 hover:text-red-500 font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="https://app.aptbooks.com/"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Try for Free
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => {
                  setActiveTab(link.name.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className={`block text-base font-medium ${
                  activeTab === link.name.toLowerCase()
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              {user && user.email ? (
                <>
                  <span className="block text-gray-600">{user.email}</span>
                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="block mt-2 text-gray-600 hover:text-red-500"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block text-gray-600 hover:text-blue-600"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="https://app.aptbooks.com"
                    className="block mt-2 bg-blue-600 text-white px-4 py-2 rounded-full text-center hover:bg-blue-700 transition"
                  >
                    Try for Free
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
