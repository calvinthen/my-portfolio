import ProjectCard from "./ProjectCard";

const Projects = () => {
  
  const projects = [
    {
      title: "DragonNest Mod Manager",
      description: "A desktop GUI application to manage, install, and delete specific game mod files safely without breaking the game client.",
      tech: ["Python", "Tkinter", "File I/O"],
    },
    {
      title: "DevFolio Portfolio",
      description: "A high-performance personal portfolio website featuring modern UI/UX, responsive design, and animations.",
      tech: ["React", "Tailwind CSS", "Vite"],
    },
    {
      title: "E-Commerce Dashboard",
      description: "A mock analytics dashboard for tracking sales data, featuring charts and data visualization.",
      tech: ["React", "Chart.js", "API Integration"],
    },
  ];
  
  return (
    <section id="projects" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
                Featured <span className="text-blue-500"> Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title} 
                        description={project.description} 
                        tech={project.tech}
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Projects;