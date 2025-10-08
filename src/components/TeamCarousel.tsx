import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "Creative Director",
    story: "10+ years shaping visual narratives that captivate and inspire. Passionate about pushing creative boundaries.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  },
  {
    name: "Jordan Blake",
    role: "Lead Photographer",
    story: "Award-winning photographer specializing in editorial and commercial work. Obsessed with light and composition.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
  },
  {
    name: "Sam Chen",
    role: "Videographer",
    story: "Crafting cinematic stories through motion. From concept to post-production, bringing visions to life.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
  },
  {
    name: "Morgan Taylor",
    role: "Content Strategist",
    story: "Building brands through compelling narratives and strategic content. Making every message count.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
  },
  {
    name: "Casey Martinez",
    role: "Studio Manager",
    story: "Ensuring seamless production experiences. Dedicated to creating the perfect environment for creativity.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop",
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const previous = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <section id="team" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">Meet The Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creative minds behind every project
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Instagram Reel Style Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Previous Card (Hidden on mobile) */}
            <Card className="hidden md:block opacity-40 hover:opacity-60 transition-opacity cursor-pointer overflow-hidden aspect-[3/4]" onClick={previous}>
              <img
                src={teamMembers[(currentIndex - 1 + teamMembers.length) % teamMembers.length].image}
                alt={teamMembers[(currentIndex - 1 + teamMembers.length) % teamMembers.length].name}
                className="w-full h-full object-cover"
              />
            </Card>

            {/* Current Card */}
            <Card className="overflow-hidden aspect-[3/4] shadow-2xl animate-zoom-in">
              <div className="relative h-full">
                <img
                  src={teamMembers[currentIndex].image}
                  alt={teamMembers[currentIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                      {teamMembers[currentIndex].name}
                    </h3>
                    <p className="text-accent font-semibold mb-4">{teamMembers[currentIndex].role}</p>
                    <p className="text-sm text-foreground/80">{teamMembers[currentIndex].story}</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Next Card (Hidden on mobile) */}
            <Card className="hidden md:block opacity-40 hover:opacity-60 transition-opacity cursor-pointer overflow-hidden aspect-[3/4]" onClick={next}>
              <img
                src={teamMembers[(currentIndex + 1) % teamMembers.length].image}
                alt={teamMembers[(currentIndex + 1) % teamMembers.length].name}
                className="w-full h-full object-cover"
              />
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={previous}>
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronRight />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-accent" : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
