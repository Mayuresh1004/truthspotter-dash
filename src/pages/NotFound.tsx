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
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Page not found</h2>
          <p className="text-muted-foreground max-w-md">
            Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
          </p>
        </div>
        <a 
          href="/" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Return to Dashboard
        </a>
      </div>
    </div>
  );
};

export default NotFound;
