import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TeamCarousel from "@/components/TeamCarousel";
import Articles from "@/components/Articles";
import Events from "@/components/Events";
import InstagramFeed from "@/components/InstagramFeed";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export default Index;
