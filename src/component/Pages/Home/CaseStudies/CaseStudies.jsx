import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'tailwindcss/tailwind.css';
import Service from '../Service/Service';

const CaseStudies = () => {
    const tabData = [
        {
            title: 'Web Development',
            services: [
                { 
                    title: 'Website Design', 
                    image: 'https://i.ibb.co.com/vQbpjbd/Website-Design.jpg', 
                    description: 'Create visually appealing and user-friendly websites tailored to your needs.' 
                },
                { 
                    title: 'E-commerce Solutions', 
                    image: 'https://i.ibb.co.com/5v0Bzwc/ecommerce-solutions.jpg', 
                    description: 'Develop robust e-commerce platforms to boost your online sales.' 
                },
                { 
                    title: 'Progressive Web Apps', 
                    image: 'https://i.ibb.co.com/Sw85dtP/Prograss-Web-App.png', 
                    description: 'Build fast, reliable, and engaging web applications accessible on any device.' 
                },
            ],
        },
        {
            title: 'Mobile Development',
            services: [
                { 
                    title: 'Android App Development', 
                    image: 'https://i.ibb.co.com/JrDfvdV/Andriod-App-Devewlopment.jpg', 
                    description: 'Create feature-rich Android apps to engage users effectively.' 
                },
                { 
                    title: 'iOS App Development', 
                    image: 'https://i.ibb.co.com/D7DkcrC/Ios.jpg', 
                    description: 'Deliver high-performance iOS apps optimized for Apple devices.' 
                },
                { 
                    title: 'Cross-Platform Development', 
                    image: 'https://i.ibb.co.com/4SzhQqv/Cross-Platform-App-development-illustration.webp', 
                    description: 'Build apps that work seamlessly across multiple platforms.' 
                },
            ],
        },
        {
            title: 'E-commerce',
            services: [
                { 
                    title: 'WooCommerce Integration', 
                    image: 'https://i.ibb.co.com/TR1m5Dn/i-Woo-Commerce-Integration.jpg', 
                    description: 'Integrate WooCommerce to transform your WordPress site into an online store.' 
                },
                { 
                    title: 'Shopify Development', 
                    image: 'https://i.ibb.co.com/3CcPfQC/shopify-development.png', 
                    description: 'Launch a professional Shopify store for your business.' 
                },
                { 
                    title: 'Payment Gateway Integration', 
                    image: 'https://i.ibb.co.com/rQgG5G8/payment-gateway.jpg', 
                    description: 'Integrate secure payment gateways to streamline transactions.' 
                },
            ],
        },
        {
            title: 'CRM Solutions',
            services: [
                { 
                    title: 'Custom CRM Development', 
                    image: 'https://i.ibb.co.com/87Lxy6t/custom-crm-development-service.jpg', 
                    description: 'Build custom CRM systems to enhance customer relationship management.' 
                },
                { 
                    title: 'CRM Integration', 
                    image: 'https://i.ibb.co.com/0hdC14p/CRM-Integration.png', 
                    description: 'Seamlessly integrate CRM systems into your workflow.' 
                },
                { 
                    title: 'Sales Automation Tools', 
                    image: 'https://i.ibb.co.com/wrC18wD/Sales-Automation-Tools.jpg', 
                    description: 'Automate sales processes for improved efficiency and productivity.' 
                },
            ],
        },
        {
            title: 'Web Designing',
            services: [
                { 
                    title: 'UI/UX Design', 
                    image: 'https://i.ibb.co.com/kcdZL7Q/UI-Ux.jpg', 
                    description: 'Design intuitive user interfaces for an engaging user experience.' 
                },
                { 
                    title: 'Responsive Web Design', 
                    image: 'https://i.ibb.co.com/3Tb0Nzt/Responsive-Web-Design.jpg', 
                    description: 'Develop websites that adapt seamlessly to different screen sizes.' 
                },
                { 
                    title: 'Graphic Design Services', 
                    image: 'https://i.ibb.co.com/PzmNQPz/Graphic-Design-Services.jpg', 
                    description: 'Create visually striking graphics to enhance your brand.' 
                },
            ],
        },
        {
            title: 'Digital Marketing',
            services: [
                { 
                    title: 'SEO Services', 
                    image: 'https://i.ibb.co.com/W2KCJHf/SEO-Services.jpg', 
                    description: 'Optimize your website to rank higher in search engine results.' 
                },
                { 
                    title: 'Social Media Marketing', 
                    image: 'https://i.ibb.co.com/W6VL88B/Social-Media-Marketing.jpg', 
                    description: 'Promote your brand on social media platforms to reach more audiences.' 
                },
                { 
                    title: 'Content Marketing', 
                    image: 'https://i.ibb.co.com/xGgbQXD/Content-Marketing.jpg', 
                    description: 'Create and distribute valuable content to attract and retain customers.' 
                },
            ],
        },
        {
            title: 'IT Support',
            services: [
                { 
                    title: 'Technical Support', 
                    image: 'https://i.ibb.co.com/GJJYcwX/Technical-Support.jpg', 
                    description: 'Provide comprehensive technical support for your business.' 
                },
                { 
                    title: 'Network Solutions', 
                    image: 'https://i.ibb.co.com/bLXJvyg/Network-Solutions.jpg', 
                    description: 'Design and manage reliable network infrastructures.' 
                },
                { 
                    title: 'Cloud Services', 
                    image: 'https://i.ibb.co.com/BwB3wmr/Cloud-Services.webp', 
                    description: 'Leverage cloud solutions to enhance your business scalability.' 
                },
            ],
        },
    ];
    
    return (
        <div  data-aos="fade-up" data-aos-duration="1000" className='space-y-8 py-8 px-6 md:px-16 lg:px-36  bg-blue-50'>
            <div className="w-full mx-auto py-12 px-4">
                <div className='text-center mb-8 md:mb-10'>
                    <h5 className="text-[10px] mb-3 tracking-[5px] font-medium">CASE STUDIES</h5>
                    <h1 className="text-2xl md:text-[45px] leading-tight md:leading-10 font-bold">
                        Detailing of our products
                    </h1>
                </div>
                <Tabs className=" mx-auto">
                    <TabList className="flex flex-wrap justify-center space-x-2 md:space-x-4 bg-blue-50 rounded-2xl py-2 px-4 md:py-4 md:px-8">
                        {tabData.map((tab, index) => (
                            <Tab key={index} className="w-full md:w-auto text-center flex items-center justify-center cursor-pointer text-gray-600 rounded-lg py-2 md:py-3 px-2 md:px-4" selectedClassName="bg-black text-white">
                                {tab.title}
                            </Tab>
                        ))}
                    </TabList>

                    {tabData.map((tab, index) => (
                        <TabPanel key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                {tab.services.map((service, serviceIndex) => (
                                    <Service key={serviceIndex} service={service} />
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default CaseStudies;
