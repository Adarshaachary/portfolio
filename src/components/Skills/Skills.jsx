import skills from "../../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div
          data-scroll-animation="fade-up"
          style={{ transitionDelay: "0.1s" }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I Work With
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            These are the technologies I use to build modern web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

          {skills.map((skill, index) => (
            <div
              key={skill.id}
              data-scroll-animation="scale"
              style={{
                transitionDelay: `${0.2 + index * 0.08}s`,
              }}
              className="h-full"
            >
              <div
                className="
                  h-full
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-[1.03]
                  hover:drop-shadow-[0_10px_25px_rgba(34,211,238,0.15)]
                "
              >
                <SkillCard
                  icon={skill.icon}
                  name={skill.name}
                  color={skill.color}
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;