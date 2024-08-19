import Banner from "./Banner/Banner";
import CaseStudies from "./CaseStudies/CaseStudies";
import HowWeDo from "./HowWeDo/HowWeDo";
import { Slider } from "./Slider/Slider";
import TimeLine from "./TimeLine/TimeLine";


const Home = () => {
    return (
        <div className="mt-[4%]">
            <Banner />
            <HowWeDo />
            <CaseStudies />
            <TimeLine />
            <Slider />
        </div>
    );
};

export default Home;