import { BiSupport } from "react-icons/bi"; 
import { CgMenuRightAlt } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import logo from "../../public/logo512.png"
// import { Link as RouterLink } from "react-router-dom"
// import { about } from "../data/About";

const Header = () => {
    const [openSidebar, setOpenSidebar] = useState(false)
    const [scrollYVal, setScrollYVal] = useState(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", () => setScrollYVal(window.scrollY));
    }, []);

    return (
        <header
            className={`${scrollYVal > 0 ? "shadow-md bg-white/95 left-0 right-0" : "py-3"
                } flex fixed justify-between items-center top-0 w-full z-50 duration-500 px-5 sm:px-8 lg:px-14 xl:px-24 rounded-b-2xl`}
        >
            <a to={""} className="w-14 h-14 sm:w-16 sm:h-16">
                <img className="w-full h-full" src={logo} alt="logo" />
            </a>

            <div onClick={() => setOpenSidebar(false)} className={`${!openSidebar ? "translate-x-full" : "translate-x-0"} lg:hidden fixed left-0 w-full bottom-0 h-full bg-white/80 duration-700 backdrop-blur-sm`} />

            <nav onClick={() => setOpenSidebar(false)} className={`${!openSidebar ? "translate-x-full" : " translate-x-0"} fixed lg:static flex-col top-0 bg-white/95 lg:bg-transparent lg:translate-x-0 shadow-2xl lg:shadow-none bottom-0 right-0 w-2/3 sm:w-1/2 lg:w-max p-6 sm:p-8 z-60 lg:flex-row flex gap-5 lg:gap-2 lg:p-1 overflow-hidden duration-500 text-sm md:text-base`}>
                <button onClick={() => setOpenSidebar(false)} className="p-2 ml-auto overflow-hidden text-xl text-red-500 duration-500 rounded-full bg-rose-100 lg:hidden z-60 md:text-2xl">
                    <CgMenuRight />
                </button>

                <Link
                    onClick={() => setOpenSidebar(false)}
                    to="home"
                    spy={true}
                    smooth={true}
                    className="px-2 py-1.5 lg:py-0.5 lg:rounded-full duration-300 hover:bg-blue-100 cursor-pointer border-b lg:border-none"
                >
                    Home
                </Link>

                <Link
                    onClick={() => setOpenSidebar(false)}
                    to="features"
                    spy={true}
                    smooth={true}
                    className="px-2 py-1.5 lg:py-0.5 lg:rounded-full duration-300 hover:bg-blue-100 cursor-pointer border-b lg:border-none"
                >
                    Features
                </Link>

                <Link
                    onClick={() => setOpenSidebar(false)}
                    to="pricing"
                    spy={true}
                    smooth={true}
                    className="px-2 py-1.5 lg:py-0.5 lg:rounded-full duration-300 hover:bg-blue-100 cursor-pointer border-b lg:border-none"
                >
                    Pricing
                </Link>

                <Link
                    onClick={() => setOpenSidebar(false)}
                    to="faq"
                    spy={true}
                    smooth={true}
                    className="px-2 py-1.5 lg:py-0.5 lg:rounded-full duration-300 hover:bg-blue-100 cursor-pointer border-b lg:border-none"
                >
                    FAQ
                </Link>

                <a
                    target="_blank"
                    to={`mailto:${"sushain.work@gmail.com"}`}
                    onClick={() => setOpenSidebar(false)}
                    className="px-3 py-2 inline-flex items-center gap-2 w-max mx-auto mt-auto text-center rounded-full lg:hidden bg-black hover:bg-blue-600 text-gray-100 duration-500 transition-all">
                    Get in touch
                    <BiSupport />
                </a>
            </nav>

            <button
                onClick={() => setOpenSidebar(true)} className="p-2 ml-auto overflow-hidden text-2xl rounded-full lg:hidden z-60">
                <CgMenuRightAlt />
            </button>

            <button
                to={`mailto:${"sushain.work@gmail.com"}`}
                target="_blank"
                className="hidden lg:inline-flex items-center gap-2 bg-black hover:bg-blue-600 px-4 py-1.5 rounded-full text-gray-100 duration-500 transition-all">
                Get in touch 
                <BiSupport />
            </button>
        </header>
    );
};

export default Header;
