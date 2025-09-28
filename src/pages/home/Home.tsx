import Contact from "../../components/sections/Contact";
import Hero from "../../components/sections/Hero";
import Services from "../../components/sections/Services";
import CallToAction from "../../components/sections/CallToAction";
import Featured from "../../components/sections/Featured";

const Home = () => {
    return (
        <div>
           <Hero />
           <Services />
           <Featured />
           <CallToAction />
           <Contact />
        </div>
    );
};

export default Home;
