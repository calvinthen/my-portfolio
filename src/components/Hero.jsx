const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <div className="max-w-3xl text-center pt-20">
        <h2>
          Hello, I'm Calvin Then
        </h2>

        <h1>
          Front-End <span/>
        </h1>

        <p className="">
          I build modern web applications with React, TypeScript, and Tailwind. 
          Focused on creating clean, scalable, and user-friendly interfaces.
        </p>

        <div className="flex justify-cente gap-4">
          <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition">
            View My Work
          </a>

          <a href="" className="px-8 py-3 border border-slate-700 hover:border-blue-500 rounded-full font-medium transition">
            Contact Me
          </a>
        </div>


      </div>
    </section>
  );
};

export default Hero;