function About() {
  return (
    <section
  id="about"
  className="py-20 px-6 md:px-12 lg:px-20"
>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-widest text-sm">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Who I Am
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Get to know more about me, my background, and my passion for
            frontend development.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div className="flex justify-center">

            <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-8xl font-bold shadow-xl">
              AA
            </div>

          </div>

          {/* Right Side */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Frontend Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              I am an Information Science and Engineering student passionate
              about frontend development and building responsive,
              user-friendly web applications using HTML, CSS,
              JavaScript, React, Tailwind CSS, and Bootstrap.
            </p>

            <p className="text-gray-400 leading-8 mb-10">
              I enjoy learning modern technologies, solving real-world
              problems, and continuously improving my skills by building
              practical projects. My goal is to become a skilled software
              engineer and contribute to impactful products.
            </p>

            {/* Information Cards */}
            <div className="grid grid-cols-2 gap-5">

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  3+
                </h4>

                <p className="text-gray-400 mt-2">
                  Projects Completed
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  2027
                </h4>

                <p className="text-gray-400 mt-2">
                  Graduation Year
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  React
                </h4>

                <p className="text-gray-400 mt-2">
                  Currently Learning
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  Open
                </h4>

                <p className="text-gray-400 mt-2">
                  Available for Internships
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;