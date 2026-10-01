import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  tech,
  github,
  demo,
}) {
  return (
    <div
      className="
        h-full
        bg-black
        border border-gray-800
        rounded-xl
        p-6
        transition-all
        duration-300
        hover:border-cyan-500
        hover:-translate-y-2
        hover:shadow-[0_12px_35px_rgba(34,211,238,0.12)]
        group
      "
    >

      {/* Project Title */}
      <h3
        className="
          text-2xl
          font-semibold
          mb-4
          transition-all
          duration-300
          group-hover:text-cyan-400
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-4 leading-7">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">

        {tech.map((item) => (
          <span
            key={item}
            className="
              bg-cyan-500/20
              text-cyan-400
              px-3
              py-1
              rounded-full
              text-sm
              transition-all
              duration-300
              hover:bg-cyan-500/30
              hover:scale-105
            "
          >
            {item}
          </span>
        ))}

      </div>

      {/* Links */}
      <div className="flex gap-6">

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            gap-2
            transition-all
            duration-300
            hover:text-cyan-400
            hover:-translate-y-1
          "
        >
          <FaGithub
            className="
              transition-transform
              duration-300
              group-hover:scale-110
            "
          />
          GitHub
        </a>

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              transition-all
              duration-300
              hover:text-cyan-400
              hover:-translate-y-1
            "
          >
            <FaExternalLinkAlt
              className="
                transition-transform
                duration-300
                hover:rotate-12
              "
            />
            Live Demo
          </a>
        )}

      </div>

    </div>
  );
}

export default ProjectCard;