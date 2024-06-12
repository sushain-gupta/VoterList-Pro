
const Footer = () => {
    return (
        <footer className="text-gray-100 body-font">
            <div className="bg-slate-950">
                <div className="container mx-auto py-4 px-5 flex flex-wrap items-center flex-col-reverse gap-5 sm:flex-row">
                    <p className="text-gray-100 text-sm text-center sm:text-left">© 2024 VoterList Pro <br /> A Product By 
                        <a href="https://sushaingupta.vercel.app" rel="noopener noreferrer" className="text-blue-300 ml-1" target="_blank">Sushain Gupta.</a>
                    </p>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start gap-2">
                        <a className="ml-3 text-gray-400 hover:text-gray-100 transition-colors duration-300" target="_blank" href="https://www.linkedin.com/in/sushain-gupta">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400 hover:text-gray-100 transition-colors duration-300" href="https://www.instagram.com/sushain.gupta" target="_blank">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-400 hover:text-gray-100 transition-colors duration-300" href="https://x.com/sushain_guptaa" target="_blank">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer