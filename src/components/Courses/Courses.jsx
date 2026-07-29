import courses from "../../data/courses";
import CourseCard from "./CourseCard";

function Courses() {
  return (
    <section
  id="courses"
  className="py-20 px-6 md:px-12 lg:px-20"
>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            Courses
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Certifications & Learning
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Courses and certifications that have strengthened my frontend
            development and programming skills.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              {...course}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Courses;