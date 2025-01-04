import Aos from "aos";
import { useEffect } from "react";

const projects = [
  {
    name: "Roomify",
    image: "https://i.ibb.co.com/6PyDQKV/Screenshot-2025-01-05-001306.png",
    link: "https://roomifysky.netlify.app",
  },
  {
    name: "Visa Navigator",
    image: "https://i.ibb.co.com/vdR5Zsq/Screenshot-2025-01-05-001156.png",
    link: "https://visa-navigator.netlify.app",
  },
  {
    name: "Lingo Bingo",
    image: "https://i.ibb.co.com/2vxpZWx/Screenshot-2025-01-05-001030.png",
    link: "https://lingo-bingo.netlify.app/",
  },
];

function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section data-aos="fade-up" data-aos-duration="1000" className="py-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold">{project.name}</h3>
                <a
                  href={project.link}
                  className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  View More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
