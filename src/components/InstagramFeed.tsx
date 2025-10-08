import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const instagramPosts = [
  {
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=600&fit=crop",
    likes: "2.4k",
    comments: "156",
  },
  {
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=600&h=600&fit=crop",
    likes: "3.1k",
    comments: "203",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop",
    likes: "1.8k",
    comments: "98",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    likes: "2.9k",
    comments: "174",
  },
  {
    image: "https://images.unsplash.com/photo-1607434472257-d9f8e57a643d?w=600&h=600&fit=crop",
    likes: "3.5k",
    comments: "287",
  },
  {
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop",
    likes: "2.2k",
    comments: "145",
  },
];

const InstagramFeed = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8" />
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Follow The Buzz
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest projects and behind-the-scenes moments
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-4"
            asChild
          >
            <a
              href="https://www.instagram.com/the.buzz_sandstone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="mr-2" />
              @the.buzz_sandstone
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {instagramPosts.map((post, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden aspect-square cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-white">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">{post.likes}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">{post.comments}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
