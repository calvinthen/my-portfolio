interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[]; 
  image: string;
  link?: string;
}

const ProjectCard = ({ title, description, tech, image ,link}: ProjectCardProps) => {
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

        <div className="flex flex-wrap gap-2 mb-5">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20"
            >
              {item}
            </span>
          ))}
        </div>

        {link && (
          <a 
            href={link}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition mt-auto"
          >
            View Live Demo
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}

      </div>
      
    </div>
  );
};

export default ProjectCard;