const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div>
                Dev<span className="text-white">Folio</span> 
            </div>

            <div className="">
                <a href="">Home</a>
                <a href="">Projects</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>

            <button className="">
                Menu
            </button>

        </div>
    </nav>
  );
};

export default Navbar;