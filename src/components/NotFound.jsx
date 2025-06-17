import { FaTools, FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageNotFound = ({ isMaintenance = false }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 flex flex-col">
      {/* Navigation */}
     
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          {isMaintenance ? (
            <>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mx-auto">
                <FaTools className="h-8 w-8 text-yellow-600" />
              </div>
              <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Page Under Maintenance</h1>
              <p className="mt-4 text-lg text-gray-600">
                We're currently working on improving this page. Please check back soon.
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mx-auto">
                <FaExclamationTriangle className="h-8 w-8 text-red-600" />
              </div>
              <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Page Not Found</h1>
              <p className="mt-4 text-lg text-gray-600">
                Sorry, we couldn't find the page you're looking for.
              </p>
            </>
          )}
          
          <div className="mt-10 flex justify-center space-x-4">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Go back home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              Contact support
            </Link>
          </div>

          {!isMaintenance && (
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-sm font-medium text-gray-500">Common Pages</h2>
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <li>
                  <Link to="/features" className="text-sm text-blue-600 hover:text-blue-500">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-sm text-blue-600 hover:text-blue-500">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/help" className="text-sm text-blue-600 hover:text-blue-500">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-sm text-blue-600 hover:text-blue-500">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AptBooks. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PageNotFound;