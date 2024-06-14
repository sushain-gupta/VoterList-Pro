import { useState } from "react"

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: 'What is VoterList Pro?',
            answer: 'VoterList Pro provides advanced services to assist consultancies and election management organizations in converting Electoral Roll PDFs into structured CSV files efficiently.'
        },
        {
            question: 'How does VoterList Pro work?',
            answer: 'We utilize sophisticated Python algorithms to accurately extract voter details from PDF files and present them in an organized CSV format.'
        },
        {
            question: 'How long does it take to process the data?',
            answer: 'The processing time varies based on the selected plan and the volume of data. On average, processing 1,000 voters takes approximately 7-10 minutes, though this can vary depending on the data size.'
        },
        {
            question: 'How can I use this service?',
            answer: 'To use our service, please send us a message along with the service you are looking for at sushain.work@gmail.com. Our team will respond within 48 hours to assist you further.'
        },
        {
            question: 'Is there any thing required from my side?',
            answer: "Once you provide the requested plan, we'll just need the Electoral List, which we will then convert into CSV format for you."
        },
    ];


    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-10 bg-gradient-to-br from-blue-50 via-white to-blue-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="sm:text-4xl text-3xl font-bold leading-tight text-black heading">Frequently Asked Questions</h2>
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Here you will find answers to the frequently asked questions</p>
                </div>

                <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                    {faqs.map((faq, index) => (
                        <div key={index} className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer rounded-lg  hover:bg-gray-50">
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => handleToggle(index)}>
                                <span className="text-left font-semibold text-black">
                                    {faq.question}
                                </span>

                                <svg
                                    className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            <div className={`transition-max-height ease-in-out duration-300 overflow-hidden px-4 ${openIndex === index ? "max-h-40 pb-6" : "max-h-0 pb-0"}`}>
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-gray-600 textbase mt-9">Didn&apos;t find the answer you are looking for? <a href="mailto:sushain.work@gmail.com" target="_blank" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">Contact our support</a></p>
            </div>
        </section>

    )
}

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ