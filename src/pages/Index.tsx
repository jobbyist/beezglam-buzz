import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TeamCarousel from "@/components/TeamCarousel";
import Articles from "@/components/Articles";
import Events from "@/components/Events";
import InstagramFeed from "@/components/InstagramFeed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Stories from "@/components/Stories";
import AIChat from "@/components/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Stories />
      <Navigation />
      <main>
        <Hero />
        <TeamCarousel />
        <Articles />
        <Events />
        <InstagramFeed />
        <ContactForm />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
