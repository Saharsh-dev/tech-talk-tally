
import { useState } from "react";
import Header from "@/components/Header";
import EventList from "@/components/EventList";
import EventFilters from "@/components/EventFilters";
import { mockEvents, Event, EventType } from "@/data/mockEvents";

const Index = () => {
  const [filteredEvents, setFilteredEvents] = useState<Event[]>(mockEvents);
  
  // Extract unique colleges for the filter dropdown
  const uniqueColleges = Array.from(new Set(mockEvents.map(event => event.college)));
  
  const handleFilterChange = (filters: {
    searchQuery: string;
    eventType: EventType | "";
    college: string;
    date: Date | undefined;
  }) => {
    const { searchQuery, eventType, college, date } = filters;
    
    const filtered = mockEvents.filter((event) => {
      // Filter by search query
      const matchesQuery =
        !searchQuery ||
        event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.college.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filter by event type
      const matchesType = !eventType || event.eventType === eventType;
      
      // Filter by college
      const matchesCollege = !college || event.college === college;
      
      // Filter by date
      const matchesDate =
        !date ||
        new Date(event.date).toDateString() === date.toDateString();
      
      return matchesQuery && matchesType && matchesCollege && matchesDate;
    });
    
    setFilteredEvents(filtered);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container py-8 flex-grow">
        <section className="mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Tech Events</h2>
              <p className="text-muted-foreground">
                Discover and participate in exciting tech events from universities across the country.
              </p>
            </div>
          </div>
          
          <EventFilters 
            onFilterChange={handleFilterChange} 
            colleges={uniqueColleges}
          />
          
          <EventList events={filteredEvents} />
        </section>
      </main>
    </div>
  );
};

export default Index;
