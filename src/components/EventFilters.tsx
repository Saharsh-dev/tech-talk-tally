
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Filter } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EventType } from "@/data/mockEvents";
import { cn } from "@/lib/utils";

interface EventFiltersProps {
  onFilterChange: (filters: {
    searchQuery: string;
    eventType: EventType | "";
    college: string;
    date: Date | undefined;
  }) => void;
  colleges: string[];
}

const EventFilters: React.FC<EventFiltersProps> = ({ onFilterChange, colleges }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [eventType, setEventType] = useState<EventType | "">("");
  const [college, setCollege] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleApplyFilters = () => {
    onFilterChange({
      searchQuery,
      eventType,
      college,
      date,
    });
    setIsOpen(false);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setEventType("");
    setCollege("");
    setDate(undefined);
    onFilterChange({
      searchQuery: "",
      eventType: "",
      college: "",
      date: undefined,
    });
    setIsOpen(false);
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-grow">
          <Input
            placeholder="Search events..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onFilterChange({
                searchQuery: e.target.value,
                eventType,
                college,
                date,
              });
            }}
            className="w-full"
          />
        </div>
        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter size={18} /> Filters
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="end">
            <Card>
              <CardContent className="p-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="event-type">Event Type</Label>
                  <Select
                    value={eventType}
                    onValueChange={(value) => setEventType(value as EventType | "")}
                  >
                    <SelectTrigger id="event-type">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Types</SelectItem>
                      <SelectItem value="hackathon">Hackathon</SelectItem>
                      <SelectItem value="tech-talk">Tech Talk</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="college">College</Label>
                  <Select
                    value={college}
                    onValueChange={setCollege}
                  >
                    <SelectTrigger id="college">
                      <SelectValue placeholder="Select college" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Colleges</SelectItem>
                      {colleges.map((college) => (
                        <SelectItem key={college} value={college}>
                          {college}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Event Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className={cn("rounded-md border w-full pointer-events-auto")}
                  />
                </div>

                <div className="flex justify-between pt-2">
                  <Button variant="outline" onClick={handleResetFilters}>
                    Reset
                  </Button>
                  <Button onClick={handleApplyFilters}>Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default EventFilters;
