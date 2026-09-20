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
            Get to know more about me, my background, and my journey in
            frontend and full-stack web development.
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
              Frontend & Full-Stack Developer
            </h3>

            <p className="text-gray-400 leading-8 mb-6">
              I am an Information Science and Engineering student passionate
              about building responsive, user-friendly web applications.
              I work with HTML, CSS, JavaScript, React, TypeScript,
              Bootstrap, and responsive web design to create clean and
              interactive user interfaces.
            </p>

            <p className="text-gray-400 leading-8 mb-6">
              I also have hands-on experience with Node.js, Express.js,
              REST APIs, and MySQL through full-stack projects like
              SmartWish. I enjoy connecting frontend interfaces with
              backend services, working with databases, and building
              practical solutions to real-world problems.
            </p>

            <p className="text-gray-400 leading-8 mb-10">
              I am continuously improving my development skills through
              practical projects and learning modern web technologies.
              My goal is to grow as a software engineer and contribute
              to meaningful products.
            </p>

            {/* Information Cards */}
            <div className="grid grid-cols-2 gap-5">

              {/* Projects */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  3+
                </h4>

                <p className="text-gray-400 mt-2">
                  Projects Completed
                </p>
              </div>

              {/* Graduation */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  2027
                </h4>

                <p className="text-gray-400 mt-2">
                  Graduation Year
                </p>
              </div>

              {/* Development Focus */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-cyan-500 transition">
                <h4 className="text-cyan-400 text-2xl font-bold">
                  Full-Stack
                </h4>

                <p className="text-gray-400 mt-2">
                  Development Focus
                </p>
              </div>

              {/* Internship */}
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