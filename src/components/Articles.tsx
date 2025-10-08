import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Video, Lightbulb } from "lucide-react";

const articles = [
  {
    icon: Camera,
    title: "The Art of Photography",
    excerpt: "Exploring composition, lighting, and storytelling through the lens. Master the fundamentals of creating compelling visual narratives.",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&h=600&fit=crop",
    date: "March 15, 2024",
  },
  {
    icon: Video,
    title: "Videography Essentials",
    excerpt: "From pre-production to post, learn the key elements that make great video content stand out in today's digital landscape.",
    image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&h=600&fit=crop",
    date: "March 10, 2024",
  },
  {
    icon: Lightbulb,
    title: "Creative Process",
    excerpt: "Behind the scenes of our creative workflow. Discover how we transform ideas into impactful visual experiences.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop",
    date: "March 5, 2024",
  },
];

const Articles = () => {
  return (
    <section id="articles" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Insights & Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our thoughts on creative media, photography, and videography
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => {
            const Icon = article.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent p-2 rounded-full">
                    <Icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <p className="text-xs text-muted-foreground mb-2">{article.date}</p>
                  <CardTitle className="font-display text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold">
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Articles;
