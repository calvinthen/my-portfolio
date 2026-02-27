interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[]; 
  image: string;
}

const ProjectCard = ({ title, description, tech, image }: ProjectCardProps) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 shadow-lg border border-slate-700 group">

      <div className="h-48 bg-slate-700 flex items-center justify-center group-hover:bg-blue-900/20 transition">
        <img src={image} alt={title} className="w-full h-full group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-6"> 
        <h3 className="text-3xl font-bold text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-400 mb-4 text-xl leading-relaxed"> 
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
            >
              {item}
            </span>
          ))}
        </div>

      </div>
      
    </div>
  );
};

export default ProjectCard;