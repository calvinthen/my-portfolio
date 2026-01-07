const ProjectCard = ({title, description, tech}) => {
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition duration-300 shadow-lg border border-slate-700 group">

      <div className="h-48 bg-slate-700 flex items-center">
        <span> Waiting for Image... </span>
      </div>

      <div className=""> 
        <h3>
          {title}
        </h3>

        <p> 
          {description}
        </p>

        <div className="">
          {tech.map((item, index) => (
            <span 
              key={index} 
              className=""
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