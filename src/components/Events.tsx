import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";

const upcomingEvents = [
  {
    title: "Photography Workshop",
    date: "April 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "BEEZGLAM STUDIOS",
    description: "Learn advanced photography techniques from industry professionals.",
    spots: 12,
  },
  {
    title: "Creative Networking Night",
    date: "April 22, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "BEEZGLAM STUDIOS",
    description: "Connect with fellow creatives and share ideas over drinks and music.",
    spots: 30,
  },
  {
    title: "Video Production Masterclass",
    date: "May 5, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "BEEZGLAM STUDIOS",
    description: "Complete guide to video production from concept to final edit.",
    spots: 15,
  },
];

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <section id="events" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for workshops, networking, and creative sessions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Calendar */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5" />
                Event Calendar
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border pointer-events-auto"
              />
            </CardContent>
          </Card>

          {/* Events List */}
          <div className="lg:col-span-2 space-y-4">
            {upcomingEvents.map((event, index) => (
              <Card
                key={index}
                className="hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-display text-xl mb-2">
                        {event.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <CalendarIcon className="w-4 h-4" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {event.spots} spots left
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="hero" onClick={() => setSelectedEvent(index)}>
                        Book Your Spot
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Book Event: {event.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <p className="text-sm text-muted-foreground">
                          You're about to book a spot for {event.title} on {event.date}.
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold">Event Details:</p>
                          <p className="text-sm">Time: {event.time}</p>
                          <p className="text-sm">Location: {event.location}</p>
                          <p className="text-sm">Available spots: {event.spots}</p>
                        </div>
                        <Button variant="hero" className="w-full">
                          Confirm Booking
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
