
import { CalendarCheck, MapPin, Clock } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Event } from "@/data/mockEvents";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
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
  
  const formattedDate = formatDate(event.date);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{event.name}</h3>
          <Badge className={eventTypeBadgeColor()}>
            {event.eventType.replace('-', ' ')}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{event.college}</p>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm line-clamp-2 mb-4">{event.description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <CalendarCheck size={16} className="text-brand-purple" />
            <span>{formattedDate}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock size={16} className="text-brand-purple" />
            <span>{event.time}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-brand-purple" />
            <span>{event.location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 flex justify-between">
        <Link to={`/events/${event.id}`}>
          <Button variant="outline">View Details</Button>
        </Link>
        <Button variant="ghost" asChild>
          <a href={event.link} target="_blank" rel="noreferrer">Event Link</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
