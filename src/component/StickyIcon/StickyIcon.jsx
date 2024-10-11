import { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const StickyIcon = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-10 right-5 z-50">
            <div
                className={`flex items-center justify-center bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${isHovered ? 'w-32 h-16 bg-green-500' : 'w-14 h-14'
                    }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered ? (
                    <>
                        <a
                            href="https://wa.me/+8801722172906"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-2 p-4 h-12 w-12 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-800 transition-colors duration-300"
                        >
                            <i className="fab fa-whatsapp text-2xl hover:text-white"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/profile.php?id=61564677705735"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mx-2 p-4 h-12 w-12 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-800 transition-colors duration-300"
                        >
                            <i className="fab fa-facebook text-2xl hover:text-white"></i>
                        </a>
                    </>
                ) : (
                    <i class="fa-sharp-duotone text-2xl fa-solid fa-phone"></i>
                    )}
            </div>
        </div>
    );
};

export default StickyIcon;
