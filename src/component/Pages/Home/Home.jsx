import Banner from "./Banner/Banner";
import CaseStudies from "./CaseStudies/CaseStudies";
import HowWeDo from "./HowWeDo/HowWeDo";
import ProjectShowcase from "./ProjectShowcase/ProjectShowcase";
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
            <ProjectShowcase />
        </div>
    );
};

export default Home;