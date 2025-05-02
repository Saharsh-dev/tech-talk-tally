
import { Event } from "@/data/mockEvents";
import EventCard from "./EventCard";

interface EventListProps {
  events: Event[];
  className?: string;
}

const EventList: React.FC<EventListProps> = ({ events, className = "" }) => {
  if (events.length === 0) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <p className="text-muted-foreground text-center">
          No events found matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
