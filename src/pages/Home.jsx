import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Education from "../components/Education/Education";
import Courses from "../components/Courses/Courses";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";


const Home = () => {

  return (
    <>

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Education />

        <Courses />

        <Projects />

        <Contact />

      </main>

      <Footer />

    </>
  );
};


export default Home;