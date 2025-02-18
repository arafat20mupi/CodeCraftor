import logo from '../../../assets/images/Logo.jpeg'

const Company = () => {
    return (
        <>
            <section className="px-6 md:px-16  mx-auto text-base text-gray-700 leading-relaxed space-y-8 mt-16 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Privacy Policy</h1>
                    <div className="mt-6">
                        <img src={logo} alt="CodeCraftor Logo" className="mx-auto w-20 " />
                    </div>
                </div>
                <p className="text-lg">
                    At <span className="font-semibold text-gray-900">CodeCraftor</span>, we are committed to protecting
                    your privacy and earning your trust by following a core set of Privacy Principles. This Privacy Policy
                    explains how we collect, use, and safeguard your personal information when you use our services.
                </p>

                <div className="border-l-4 border-blue-500 pl-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">What Information Do We Collect?</h2>
                    <p>
                        We collect personal information you voluntarily provide, such as your name, email address, and other
                        identifying information. Additionally, we collect navigation and payment information that includes
                        your IP address, geographical location, browser type, and visit duration, which helps us improve our
                        services.
                    </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Access to Third Party Information</h2>
                    <p>
                        We use trusted third-party service providers like payment systems and email services. These
                        providers are given limited access to your information to help us deliver services, and we ensure
                        they use your data securely.
                    </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Cookies and Analytical Data</h2>
                    <p>
                        We use cookies to personalize your experience on our site. Cookies help us tailor the interface to
                        your needs and track your visit using tools like Yandex.Metrica. You can disable cookies, but this
                        may affect your experience on the site.
                    </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">How Do We Use Personal Information?</h2>
                    <p>
                        We use your information to provide services, improve your experience, and communicate with you. We
                        never sell your personal information to third parties, and you can opt out of promotional emails at
                        any time.
                    </p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Information Disclosure</h2>
                    <p>
                        We share your information only with your consent, for legal reasons, or to protect the rights of our
                        site and users. In cases such as site transfers, mergers, or legal obligations, your information may
                        be disclosed, but only as necessary.
                    </p>
                </div>

                <div className="border-l-4 border-indigo-500 pl-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Data Storage</h2>
                    <p>
                        We retain your data as long as it is necessary for providing services. Your personal data is
                        securely stored with limited access, and sensitive information like login data is encrypted.
                    </p>
                </div>

                <div className="border-l-4 border-pink-500 pl-4">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Final Provisions</h2>
                    <p>
                        This Privacy Policy may change at any time, and updates will be posted on our site. By using our
                        site, you agree to this policy. If you have any questions, please contact us at:
                    </p>

                    <ul className="list-disc ml-6 space-y-2">
                        <li>Email (Support): <a
                            href="mailto:codecraftor.web@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            codecraftor.web@gmail.com
                        </a>
                        </li>
                        <li>Email (Cooperation): <a
                            href="mailto:codecraftorhr@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            codecraftorhr@gmail.com
                        </a>
                        </li>
                        <li>Email (Abuse): <a
                            href="mailto:codecraftor.web@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500"
                        >
                            codecraftor.web@gmail.com
                        </a>
                        </li>
                        <li >WhatsApp (Abuse, tech support unavailable):
                            <a
                                href="https://wa.me/+8801722172906"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-blue-500'
                            >
                                +8801722172906
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Company;