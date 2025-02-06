import Aos from "aos";
import { useEffect } from "react";
import about from "../../../../public/about.json";
import Lottie from "lottie-react";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      id="about"
      className="p-6 w-11/12 mx-auto my-20"
    >
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-12 text-center underline decoration-primary underline-offset-8">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="lg:flex items-center gap-8">
        <div className="lg:w-1/2 mx-auto">
          <Lottie animationData={about} loop={true} />
        </div>
        <div className="lg:w-1/2 mx-auto text-justify">
          <p className="text-lg mb-4">
            Hi, I&apos;m{" "}
            <strong className="text-primary">Md: Arif Hassan</strong>, and
            I&apos;m a junior web developer with a strong passion for learning
            and creating user-friendly websites and applications. I started
            coding a while ago, and since then, I&apos;ve enjoyed the process of
            solving problems and seeing my ideas come to life through code.
          </p>
          <p className="text-lg mb-4 text-justify">
            I&apos;m comfortable working with technologies like{" "}
            <span className="text-primary">
              HTML, CSS, and JavaScript, React,
            </span>{" "}
            and I&apos;m currently diving deeper into React to build dynamic,
            interactive user interfaces. I enjoy working on projects that allow
            me to improve my skills and apply new concepts, and I&apos;m always
            eager to take on challenges that push me to grow as a developer.
          </p>
          <p className="text-lg mb-4">
            Outside of coding, I love playing sports such as football and
            basketball, which help me stay active and develop teamwork skills. I
            also enjoy painting, as it gives me a creative outlet and helps me
            think outside the box.
          </p>
          <p className="text-lg">
            As I continue to build my career as a web developer, I am excited to
            collaborate with others and learn from experienced professionals. I
            am always eager to take on new opportunities that will help me grow
            both as a developer and as an individual.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
