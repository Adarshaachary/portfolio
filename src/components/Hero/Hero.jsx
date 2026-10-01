import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../../assets/resume/Adarsha.pdf";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        {/* Greeting */}
        <p
          data-scroll-animation="fade-up"
          style={{ transitionDelay: "0.1s" }}
          className="text-cyan-400 text-lg mb-3"
        >
          Hello, I'm
        </p>

        {/* Name */}
        <h1
          data-scroll-animation="fade-up"
          style={{ transitionDelay: "0.25s" }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Adarsha Acharya
        </h1>

        {/* Role */}
        <h2
          data-scroll-animation="fade-up"
          style={{ transitionDelay: "0.4s" }}
          className="text-2xl md:text-3xl text-gray-300 mb-6"
        >
          Frontend Developer | React.js | JavaScript
        </h2>

        {/* Description */}
        <p
          data-scroll-animation="fade-up"
          style={{ transitionDelay: "0.55s" }}
          className="text-gray-400 max-w-2xl leading-8 mb-8"
        >
          I am an Information Science and Engineering student passionate about
          building responsive, user-friendly web applications using HTML, CSS,
          JavaScript, React, and Tailwind CSS. I enjoy learning modern web
          technologies and creating real-world projects.
        </p>

        {/* Buttons */}
        <div
          data-scroll-animation="fade-up"
          style={{ transitionDelay: "0.7s" }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="
              bg-cyan-500
              hover:bg-cyan-600
              hover:-translate-y-1
              hover:shadow-[0_8px_25px_rgba(34,211,238,0.25)]
              active:scale-95
              text-black
              font-semibold
              px-6
              py-3
              rounded-lg
              transition-all
              duration-300
            "
          >
            Contact Me
          </a>

          <a
            href={resume}
            download="Adarsha-Acharya-Resume.pdf"
            className="
              border
              border-cyan-500
              text-cyan-400
              hover:bg-cyan-500
              hover:text-black
              hover:-translate-y-1
              hover:shadow-[0_8px_25px_rgba(34,211,238,0.20)]
              active:scale-95
              font-semibold
              px-6
              py-3
              rounded-lg
              transition-all
              duration-300
            "
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div
          data-scroll-animation="fade-up"
          style={{ transitionDelay: "0.85s" }}
          className="flex gap-6 mt-10 text-3xl"
        >
          <a
            href="https://github.com/Adarshaachary"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-cyan-400
              hover:-translate-y-1
              hover:scale-110
              transition-all
              duration-300
            "
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/adarsh-acharya548"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hover:text-cyan-400
              hover:-translate-y-1
              hover:scale-110
              transition-all
              duration-300
            "
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;