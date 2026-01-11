import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;