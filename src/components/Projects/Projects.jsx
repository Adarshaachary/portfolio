import projects from "../../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section
  id="projects"
  className="py-20 px-6 md:px-12 lg:px-20"
>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5">
            Some projects I've built while learning web development.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;