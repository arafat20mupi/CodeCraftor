import Banner from "./Banner/Banner";
import CaseStudies from "./CaseStudies/CaseStudies";
import HowWeDo from "./HowWeDo/HowWeDo";

const Home = () => {
    return (
        <div className="mt-[4%]">
            <Banner />
            <HowWeDo />
            <CaseStudies />
        </div>
    );
};

export default Home;