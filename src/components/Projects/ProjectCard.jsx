import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}) {
  return (
    <div className="bg-black border border-gray-800 rounded-xl p-6 hover:border-cyan-500 transition duration-300">

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span
            key={item}
            className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-6">

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-cyan-400 transition"
        >
          <FaGithub />
          GitHub
        </a>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cyan-400 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>
        )}

      </div>

    </div>
  );
}

export default ProjectCard;