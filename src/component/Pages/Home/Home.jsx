import Banner from "./Banner/Banner";
import CaseStudies from "./CaseStudies/CaseStudies";
import HowWeDo from "./HowWeDo/HowWeDo";
import { Slider } from "./Slider/Slider";


const Home = () => {
    return (
        <div className="mt-[4%]">
            <Banner />
            <HowWeDo />
            <CaseStudies />
            <Slider />
        </div>
    );
};

export default Home;