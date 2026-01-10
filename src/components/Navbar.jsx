import { useState } from "react";

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl text-blue-500 font-bold">
                Dev<span className="text-white">Folio</span> 
            </div>

            <div className="hidden md:flex space-x-8 text-gray-300">
                <a href="#home" className="hover:text-blue-500 transition"> Home </a>
                <a href="#projects" className="hover:text-blue-500 transition"> Projects </a>
                <a href="#about" className="hover:text-blue-500 transition"> About</a>
                <a href="#contact" className="hover:text-blue-500 transition"> Contact</a>
            </div>

            <button className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? (
                /* this is X Icon State*/
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    /* this is Hamburger Menu Icon State*/
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
               )}
            </button>

            { isMenuOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800">
                    <div className="flex flex-col px-4 pt-2 pb-4 space-y-1">
                        <a href="#home"
                            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md text-center"
                            onClick={() => setIsMenuOpen(false)}>
                            Home
                        </a>
                        <a href="#projects"
                            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md text-center"
                            onClick={() => setIsMenuOpen(false)}>
                            Projects
                        </a>
                        <a href="#contact"
                            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md text-center"
                            onClick={() => setIsMenuOpen(false)}>
                            Contact
                        </a>
                    </div>

                </div>
            )}

        </div>
    </nav>
  );
};

export default Navbar;