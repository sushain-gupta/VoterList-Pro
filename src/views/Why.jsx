import pdf from "../assets/png/pdf.png"
import excel from "../assets/png/excel.png"
import needs from "../assets/png/needs.png"

const Why = () => {
    return (
        <section id="features" className="text-gray-600 flex px-5 py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <h2 className="sm:text-4xl text-2xl font-bold text-gray-900 mb-4 heading">Why Choose VoterList Pro?</h2>

                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Discover the ultimate solution for seamless voter data extraction and management. Our innovative service combines accuracy, efficiency, and security to meet your needs.</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-blue-600 inline-flex"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    <div className="bg-white shadow-md rounded-2xl border p-4 flex flex-col text-center items-center hover:shadow-xl transition-all duration-500">
                        <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-red-100 mb-5 flex-shrink-0">
                            <img src={pdf} alt="" className="w-full" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Advanced PDF Data Extraction</h2>
                            <p className="leading-relaxed text-base">Our state-of-the-art Python-based technology accurately extracts voter details from images within PDF files, ensuring precision and reliability.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-2xl border p-4 flex flex-col text-center items-center hover:shadow-xl transition-all duration-500">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-green-100 mb-5 flex-shrink-0">
                            <img src={excel} alt="" className="w-full" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Simplified Data Management</h2>
                            <p className="leading-relaxed text-base">Convert complex electoral voter lists into easy-to-manage CSV files. Our solution saves you time and reduces manual effort, allowing you to focus on what matters most.</p>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-2xl border p-4 flex flex-col text-center items-center hover:shadow-xl transition-all duration-500">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-100 text-indigo-500 mb-5 flex-shrink-0">
                            <img src={needs} alt="" className="w-full" />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Tailored for Your Needs</h2>
                            <p className="leading-relaxed text-base">We understand the unique requirements of organizations handling electoral data. Our service is designed to meet your specific needs, providing a hassle-free experience from start to finish.</p>
                        </div>
                    </div>
                </div>

                {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
            </div>

        </section>
    )
}

export default Why