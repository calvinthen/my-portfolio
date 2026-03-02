const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-800 text-center">
        <p className="text-gray-400">
            © {new Date().getFullYear()} Calvin Then. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/calvinthen" className="text-gray-400 hover:text-blue-500 transition">Github</a>
            <a href="https://www.linkedin.com/in/calvin-then-050b2b1b8/" className="text-gray-400 hover:text-blue-500 transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition">Twitter</a>
        </div>
    </footer>
  );
};

export default Footer;