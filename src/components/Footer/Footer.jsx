import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
        py-8
        px-6
        text-center
        opacity-0
        animate-[fadeUp_0.8s_ease-out_0.2s_forwards]
      "
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Name */}
        <h2
          className="
            text-2xl
            font-bold
            mb-2
            transition-all
            duration-300
            hover:text-cyan-400
          "
        >
          Adarsha Acharya
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-center mb-6">
          Frontend Developer | React Learner | Information Science Student
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/Adarshaachary"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300
              hover:text-cyan-400
              hover:-translate-y-1
              hover:scale-110
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
              transition-all
              duration-300
              hover:text-cyan-400
              hover:-translate-y-1
              hover:scale-110
            "
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:adarshaacharya72@gmail.com"
            className="
              transition-all
              duration-300
              hover:text-cyan-400
              hover:-translate-y-1
              hover:scale-110
            "
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-8">
          © 2026 Adarsh Acharya. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;