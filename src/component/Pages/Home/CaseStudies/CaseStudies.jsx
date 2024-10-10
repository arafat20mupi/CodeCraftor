import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'tailwindcss/tailwind.css';
import Service from '../Service/Service';

const CaseStudies = () => {
    const tabData = [
        {
            title: 'Web Development',
            services: [
                { title: 'Website Design', image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'E-commerce Solutions', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Progressive Web Apps', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ],
        },
        {
            title: 'Mobile Development',
            services: [
                { title: 'Android App Development', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'iOS App Development', image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Cross-Platform Development', image: 'https://images.pexels.com/photos/3861961/pexels-photo-3861961.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ],
        },
        {
            title: 'E-commerce',
            services: [
                { title: 'WooCommerce Integration', image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Shopify Development', image: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Payment Gateway Integration', image: 'https://images.pexels.com/photos/3938889/pexels-photo-3938889.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ],
        },
        {
            title: 'CRM Solutions',
            services: [
                { title: 'Custom CRM Development', image: 'https://images.pexels.com/photos/3184631/pexels-photo-3184631.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'CRM Integration', image: 'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Sales Automation Tools', image: 'https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ],
        },
        {
            title: 'Web Designing',
            services: [
                { title: 'UI/UX Design', image: 'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Responsive Web Design', image: 'https://images.pexels.com/photos/1181473/pexels-photo-1181473.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Graphic Design Services', image: 'https://images.pexels.com/photos/3184406/pexels-photo-3184406.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ],
        },
        {
            title: 'Digital Marketing',
            services: [
                { title: 'SEO Services', image: 'https://images.pexels.com/photos/1661002/pexels-photo-1661002.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Social Media Marketing', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Content Marketing', image: 'https://images.pexels.com/photos/3873755/pexels-photo-3873755.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ],
        },
        {
            title: 'IT Support',
            services: [
                { title: 'Technical Support', image: 'https://images.pexels.com/photos/1181465/pexels-photo-1181465.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Network Solutions', image: 'https://images.pexels.com/photos/1598256/pexels-photo-1598256.jpeg?auto=compress&cs=tinysrgb&w=600' },
                { title: 'Cloud Services', image: 'https://images.pexels.com/photos/3844659/pexels-photo-3844659.jpeg?auto=compress&cs=tinysrgb&w=600' },
            ],
        },
    ];
    
    

    return (
        <div  data-aos="fade-up" data-aos-duration="1000" className='space-y-8 py-8 px-6 md:px-16 lg:px-36  bg-[#F3F6FD]'>
            <div className="w-full mx-auto py-12 px-4">
                <div className='text-center mb-8 md:mb-10'>
                    <h5 className="text-[10px] mb-3 tracking-[5px] font-medium">CASE STUDIES</h5>
                    <h1 className="text-2xl md:text-[45px] leading-tight md:leading-10 font-bold">
                        Detailing of our products
                    </h1>
                </div>
                <Tabs className=" mx-auto">
                    <TabList className="flex flex-wrap justify-center space-x-2 md:space-x-4 bg-white rounded-2xl py-2 px-4 md:py-4 md:px-8">
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
