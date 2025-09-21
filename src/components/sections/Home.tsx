import Contact from "./Contact";
import Hero from "./Hero";
import Services from "./Services";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
