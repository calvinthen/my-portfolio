const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl">
                Dev<span className="text-white">Folio</span> 
            </div>

            <div className="hidden md:flex space-x-8 text-gray-300">
                <a href="#home" className="hover:text-blue-500 transition"> Home </a>
                <a href="#projects" className="hover:text-blue-500 transition"> Projects </a>
                <a href="#about" className="hover:text-blue-500 transition"> About</a>
                <a href="#contact" className="hover:text-blue-500 transition"> Contact</a>
            </div>

            <button className="md:hidden text-white focus:outline-none">
                Menu
            </button>

        </div>
    </nav>
  );
};

export default Navbar;