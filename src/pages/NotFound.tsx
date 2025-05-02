
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/Header";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container py-12 flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-brand-purple mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="mb-6 text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button>
              <ChevronLeft size={16} className="mr-2" /> Back to Homepage
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
