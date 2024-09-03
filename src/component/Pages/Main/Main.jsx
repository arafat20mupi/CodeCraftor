import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import StickyIcon from "../../StickyIcon/StickyIcon";

const Main = () => {
    return (
        <div className=" bg-[#ECEADD]">
            <Navbar />
            <div className='min-h-[calc(100vh-638px)]'>
                <Outlet />
            </div>
            <Footer />
            <StickyIcon />
        </div>
    );
};

export default Main;