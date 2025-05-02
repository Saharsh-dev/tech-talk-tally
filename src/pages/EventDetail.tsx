
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarCheck, MapPin, Clock, ArrowUp, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { mockEvents } from "@/data/mockEvents";
import { formatDate } from "@/lib/utils";
import Header from "@/components/Header";
import { useEffect } from "react";

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const event = mockEvents.find((e) => e.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container py-12 flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
            <p className="mb-6 text-muted-foreground">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/">
              <Button>
                <ChevronLeft size={16} className="mr-2" /> Back to Events
              </Button>
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const eventTypeBadgeColor = () => {
    switch (event.eventType) {
      case "hackathon":
        return "bg-red-500 hover:bg-red-600";
      case "tech-talk":
        return "bg-blue-500 hover:bg-blue-600";
      case "workshop":
        return "bg-green-500 hover:bg-green-600";
      default:
        return "bg-gray-500";
    }
  };

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
        
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{event.name}</h1>
                <Badge className={eventTypeBadgeColor()}>
                  {event.eventType.replace('-', ' ')}
                </Badge>
              </div>
              <p className="text-lg text-muted-foreground">{event.college}</p>
            </div>
            
            <Button asChild className="shrink-0">
              <a href={event.link} target="_blank" rel="noreferrer">
                Visit Event Page
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
              <CalendarCheck size={24} className="text-brand-purple" />
              <div>
                <p className="text-sm font-medium">Date</p>
                <p>{formatDate(event.date)}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
              <Clock size={24} className="text-brand-purple" />
              <div>
                <p className="text-sm font-medium">Time</p>
                <p>{event.time}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 rounded-lg bg-secondary">
              <MapPin size={24} className="text-brand-purple" />
              <div>
                <p className="text-sm font-medium">Location</p>
                <p>{event.location}</p>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3">About This Event</h2>
            <p className="whitespace-pre-line">{event.description}</p>
          </div>
        </div>
        
        <div className="fixed bottom-8 right-8">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-md bg-white h-12 w-12"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default EventDetail;
