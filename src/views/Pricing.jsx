import { BiMailSend } from "react-icons/bi";

const Pricing = () => {
    const handleMailtoClick = (plan) => {
        const subject = `Inquiry about ${plan} plan`;
        const body = `Dear Sushain,
I am interested in the ${plan} plan and would like to get more information about it. Please contact me at {Contact Number/email}.

Thank you.`;

        const mailtoLink = `mailto:sushain.work@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        const anchor = document.createElement('a');
        anchor.href = mailtoLink;
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';

        // Append the anchor tag to the body
        document.body.appendChild(anchor);

        // Programmatically trigger a click on the anchor tag
        anchor.click();

        // Remove the anchor tag from the DOM after a short delay
        setTimeout(() => {
            document.body.removeChild(anchor);
        }, 1000);
    };

    return (
        <section id="pricing" className="text-gray-600 flex px-5 py-24">
            <div className="container px-5 mx-auto">
                <div className="flex flex-col text-center w-full mb-14">
                    <h2 className="sm:text-4xl text-2xl font-bold text-gray-900 mb-4 heading">Pricing</h2>

                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
                        Choose the plan that best fits your needs. Whether you require data for a few thousand voters or hundreds of thousands, our flexible pricing ensures you get the best value for your investment.
                    </p>
                </div>

                <div className="flex flex-wrap w-full justify-center gap-6">
                    <div className="p-2 md:p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-xl border-2 border-black flex flex-col relative overflow-hidden hover:shadow-xl duration-300">
                            <span className="bg-black text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                            <h2 className="text-sm tracking-widest mb-1 font-medium">BASIC</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₹1</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/voter</span>
                            </h1>

                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>For small-scale clients
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Ideal for voter data from 1,000 to 5,000 voters
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>₹1/voter for up to 5,000 voters. Additional voters: ₹0.5 per voter
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>CSV file output format
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Basic support
                            </p>

                            <div className="flex justify-center mt-auto">
                                <button onClick={() => handleMailtoClick("Basic")} className="group inline-flex items-center gap-1 text-white border-0 py-2 px-6 focus:outline-none bg-black hover:bg-blue-600 rounded-full text-lg transition-all duration-300">
                                    Contact <BiMailSend className="mt-1 group-hover:translate-x-1 transition-all duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-2 md:p-4 xl:w-1/4 md:w-1/2 w-full">
                        <div className="h-full p-6 rounded-xl border-2 border-gray-300 flex flex-col relative overflow-hidden hover:shadow-xl duration-300">
                            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PREMIUM</h2>
                            <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                <span>₹1</span>
                                <span className="text-lg ml-1 font-normal text-gray-500">/15 voter</span>
                            </h1>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>For large-scale clients
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Ideal for voter data from 100,000 to 200,000 voters
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Data extraction @₹1 per 15 voter for 100k to 200k voters
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>CSV file output format
                            </p>
                            <p className="flex items-center text-gray-600 mb-2">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Priority support
                            </p>
                            <p className="flex items-center text-gray-600 mb-6">
                                <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-blue-500 text-white rounded-full flex-shrink-0">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                        <path d="M20 6L9 17l-5-5"></path>
                                    </svg>
                                </span>Customization options for data output
                            </p>


                            <div className="flex justify-center mt-auto">
                                <button onClick={() => handleMailtoClick("Premium")} className="group inline-flex items-center gap-1 text-white border-0 py-2 px-6 focus:outline-none bg-black hover:bg-blue-600 rounded-full text-lg transition-all duration-300">
                                    Contact <BiMailSend className="mt-1 group-hover:translate-x-1 transition-all duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing