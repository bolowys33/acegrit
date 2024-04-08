import About from "@/components/About";
import Blog from "@/components/Blog";
import Expertise from "@/components/Expertise";
import Slider from "@/components/Slider";
import Social from "@/components/Social";

const Home = () => {
    return <div>
        <Slider />
        <About />
        <Blog />
        <Expertise />
        <Social />
    </div>;
};

export default Home;
