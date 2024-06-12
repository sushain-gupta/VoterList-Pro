import { BiRightArrowAlt } from "react-icons/bi";
import hero from "../assets/png/hero.png"
import clipboard from "../assets/png/clipboard.png"
import pc from "../assets/png/pc.png"
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <section id="home" className="text-gray-600 flex px-5 py-24 min-h-screen">
            <div className="container mx-auto flex lg:flex-row flex-col items-center my-auto">
                <div className="lg:flex-grow lg:w-1/2 lg:pr-24 flex flex-col lg:items-start lg:text-left mb-16 lg:mb-0 items-center text-center">
                    <h1 className="sm:text-4xl text-3xl mb-4 font-bold text-gray-900 heading">Introducing,
                        <br className="lg:inline-block" />
                        <span className="text-5xl sm:text-6xl font-black">VoterList</span>
                        <span className="text-5xl sm:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br from-black to-blue-600"> Pro.</span>
                    </h1>

                    <strong className="text-lg sm:text-xl">Streamline Your Voter Data Management with Ease.</strong>

                    <p className="mb-8 leading-relaxed">Are you looking for a seamless solution to extract and manage voter data from Electoral Roll PDF files? Look no further! VoterList Pro offers cutting-edge services to help consultancies and election management organizations efficiently convert voter lists from PDFs into structured CSV files.</p>
                    <div className="flex justify-center">
                        <Link to="features" spy={true}
                            smooth={true} className="group inline-flex items-center gap-1 text-white border-0 py-2 px-6 focus:outline-none bg-black hover:bg-blue-600 rounded-full text-lg transition-all duration-300 hover:cursor-pointer">
                            Explore <BiRightArrowAlt className="mt-1 group-hover:translate-x-1 transition-all duration-300" />
                        </Link>
                    </div>
                </div>

                <div className="lg:max-w-full lg:w-1/2 w-5/6 relative">
                    <img className="object-cover object-center rounded-b-full" alt="hero" src={hero} />

                    {/* <img className="absolute top-20 left-40 w-40" src={india} alt="" /> */}
                    <img className="absolute top-20 lg:top-10 -left-12 lg:-left-24 w-24 lg:w-36" src={clipboard} alt="" />

                    <img className="absolute top-0 lg:top-auto lg:bottom-10 -right-10 lg:right-auto lg:left-5 w-28" src={pc} alt="" />

                </div>
            </div>
        </section>
    )
}

export default Hero