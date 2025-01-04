import About from "../about/About";
import Banner from "../banner/Banner";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
