import Hero from "./components/Hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-500">
        <Navbar/>
        <Hero/>
      </h1>
    </div>
  );
}

export default App;