import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
    return (
        <div className=" bg-[#ECEADD]">
            <Navbar />
            <div className='min-h-[calc(100vh-436px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;