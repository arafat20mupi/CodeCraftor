import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'tailwindcss/tailwind.css';
import Service from '../Service/Service';

const CaseStudies = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='bg-[#F3F6FD] '>
            <div className="max-w-[982px] mx-auto py-12 md:py-24 px-4">
                <div className='text-center mb-8 md:mb-10'>
                    <h5 className="text-[10px] mb-3 tracking-[5px] font-medium">CASE STUDIES</h5>
                    <h1 className="text-2xl md:text-[45px] leading-tight md:leading-10 font-bold">
                        Detailing of our products
                    </h1>
                </div>
                <Tabs className="max-w-4xl mx-auto">
                    <TabList className="flex flex-wrap justify-center space-x-2 md:space-x-4 bg-white rounded-2xl py-2 px-4 md:py-4 md:px-8">
                        <Tab className="w-full md:w-auto text-center flex items-center justify-center cursor-pointer text-gray-600 rounded-lg py-2 md:py-3 px-2 md:px-4" selectedClassName="bg-black text-white">
                            Development
                        </Tab>
                        <Tab className="w-full md:w-auto text-center flex items-center justify-center cursor-pointer text-gray-600 rounded-lg py-2 md:py-3 px-2 md:px-4" selectedClassName="bg-black text-white">
                            Woo Commerce
                        </Tab>
                        <Tab className="w-full md:w-auto text-center flex items-center justify-center cursor-pointer text-gray-600 rounded-lg py-2 md:py-3 px-2 md:px-4" selectedClassName="bg-black text-white">
                            CRM Solutions
                        </Tab>
                        <Tab className="w-full md:w-auto text-center flex items-center justify-center cursor-pointer text-gray-600 rounded-lg py-2 md:py-3 px-2 md:px-4" selectedClassName="bg-black text-white">
                            Web Designing
                        </Tab>
                        <Tab className="w-full md:w-auto text-center flex items-center justify-center cursor-pointer text-gray-600 rounded-lg py-2 md:py-3 px-2 md:px-4" selectedClassName="bg-black text-white">
                            IT Support
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <Service />
                    </TabPanel>
                    <TabPanel>
                        <Service />
                    </TabPanel>
                    <TabPanel>
                        <Service />
                    </TabPanel>
                    <TabPanel>
                        <Service />
                    </TabPanel>
                    <TabPanel>
                        <Service />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default CaseStudies;
