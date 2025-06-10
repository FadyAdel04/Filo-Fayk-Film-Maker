import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center p-8 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 shadow-2xl">
        <h1 className="text-6xl font-bold mb-4 text-[#ff2436]">404</h1>
        <p className="text-2xl text-gray-300 mb-6">Oops! Page not found</p>
        <p className="text-gray-400 mb-8 max-w-md">
          The page at <code className="bg-gray-700 px-2 py-1 rounded">{location.pathname}</code> doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 rounded-lg bg-[#ff2436] text-white font-medium hover:bg-[#e61e30] transition-colors duration-300"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;