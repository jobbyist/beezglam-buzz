import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Story {
  id: string;
  username: string;
  image: string;
}

const stories: Story[] = [
  { id: "1", username: "@beezglam_studios", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400" },
  { id: "2", username: "@janefinesse_", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" },
  { id: "3", username: "@daystarofficial_", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
  { id: "4", username: "@justine.george", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400" },
  { id: "5", username: "@official808x", image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400" },
  { id: "6", username: "@krisyubi", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400" },
  { id: "7", username: "@king_jillz", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400" },
  { id: "8", username: "@layla_jzd", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400" },
  { id: "9", username: "@jord.ss", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" },
  { id: "10", username: "@southsidemohammed", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400" },
];

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const container = document.getElementById("stories-container");
        if (container) {
          const maxScroll = container.scrollWidth - container.clientWidth;
          const newPosition = prev + 300;
          if (newPosition >= maxScroll) {
            container.scrollTo({ left: 0, behavior: "smooth" });
            return 0;
          }
          container.scrollTo({ left: newPosition, behavior: "smooth" });
          return newPosition;
        }
        return prev;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-background border-b border-border py-4 sticky top-0 z-40">
        <div
          id="stories-container"
          className="container mx-auto px-4 flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stories.map((story) => (
            <button
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="flex flex-col items-center gap-2 min-w-fit group"
            >
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5">
                  <div className="w-full h-full rounded-full bg-background p-1">
                    <img
                      src={story.image}
                      alt={story.username}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <span className="text-xs font-medium text-foreground group-hover:text-accent transition-colors max-w-[80px] truncate">
                {story.username}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-md p-0 bg-black border-none">
          {selectedStory && (
            <div className="relative aspect-[9/16]">
              <img
                src={selectedStory.image}
                alt={selectedStory.username}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 right-4 flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.username}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="text-white font-semibold">{selectedStory.username}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Stories;
