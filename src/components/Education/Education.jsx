import React from "react";

const educationData = [
  {
    degree: "Bachelor of Engineering (B.E)",
    branch: "Information Science & Engineering",
    institution: "Atria Institute of Technology",
    duration: "2023 - 2027",
    score: "CGPA: 8.02",
    description:
      "Currently pursuing B.E. in Information Science & Engineering with an interest in software development, web technologies, databases, and problem-solving.",
  },
  {
    degree: "Pre-University Course (PUC)",
    branch: "Science Stream",
    institution: "R N Shetty Composite PU College",
    duration: "2021 - 2023",
    score: "Percentage: 91.33%",
    description:
      "Completed Pre-University education under Karnataka Pre-University Board with strong academic performance.",
  },
  {
    degree: "Secondary School Education",
    branch: "CBSE Curriculum",
    institution: "Government High School Aloor",
    duration: "2018 - 2021",
    score: "Percentage: 92%",
    description:
      "Completed secondary education with a strong foundation in mathematics, science, and computer fundamentals.",
  },
];

const Education = () => {
  return (
    <section
  id="education"
  className="py-20 px-6 md:px-12 lg:px-20"
>
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          My{" "}
          <span className="text-blue-500">
            Education
          </span>
        </h2>


        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-1 bg-blue-500"></div>


          {educationData.map((edu, index) => (

            <div
              key={index}
              className="relative pl-12 mb-10"
            >

              {/* Timeline Dot */}
              <div
                className="
                absolute 
                left-0 
                top-6 
                w-8 
                h-8 
                rounded-full 
                bg-blue-500 
                border-4 
                border-gray-900"
              ></div>


              {/* Card */}
              <div
                className="
                bg-white/5
                backdrop-blur-md
                border
                border-white/10
                rounded-2xl
                p-6
                transition
                duration-300
                hover:-translate-y-2
                hover:border-blue-500"
              >

                <h3 className="text-2xl font-semibold">
                  {edu.degree}
                </h3>


                <h4 className="text-blue-400 mt-2">
                  {edu.branch}
                </h4>


                <p className="mt-3 text-lg">
                  {edu.institution}
                </p>


                <div className="flex flex-wrap gap-5 mt-4 text-gray-300">

                  <span>
                    📅 {edu.duration}
                  </span>

                  <span>
                    ⭐ {edu.score}
                  </span>

                </div>


                <p className="mt-4 text-gray-400 leading-relaxed">
                  {edu.description}
                </p>


              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;