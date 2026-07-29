import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
  className="py-8 px-6 text-center"
>
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        <h2 className="text-2xl font-bold mb-2">
          Adarsha Acharya
        </h2>

        <p className="text-gray-400 text-center mb-6">
          Frontend Developer | React Learner | Information Science Student
        </p>

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/Adarshaachary"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/adarsh-acharya548"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:adarshaacharya72@gmail.com"
            className="hover:text-cyan-400 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-500 text-sm mt-8">
          © 2026 Adarsh Acharya. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;