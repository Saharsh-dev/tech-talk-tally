
import Header from "@/components/Header";
import EventSubmitForm from "@/components/EventSubmitForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const SubmitEvent = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container py-8 flex-grow">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="pl-0">
              <ChevronLeft size={16} className="mr-2" /> Back to Events
            </Button>
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Submit a New Event</h1>
          <p className="text-muted-foreground mb-8">
            Know about an upcoming tech event? Share it with the community by filling out the form below.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <EventSubmitForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SubmitEvent;
