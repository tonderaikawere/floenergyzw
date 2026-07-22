import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import WindLeafIcon from "../components/WindLeafIcon";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-aluwind-dark text-white font-sans px-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center mb-4">
          <WindLeafIcon className="w-12 h-6 text-aluwind-green" />
        </div>
        <h1 className="text-6xl font-black text-white leading-none tracking-tight">404</h1>
        <p className="text-sm text-gray-300">
          The page you are looking for does not exist or has been moved.
        </p>
        <div>
          <Link 
            to="/" 
            className="inline-block bg-aluwind-green hover:bg-aluwind-green/90 text-white font-bold text-[10px] uppercase tracking-widest px-6 py-3.5 transition"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
