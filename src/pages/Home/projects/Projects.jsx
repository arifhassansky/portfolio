import Aos from "aos";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("Projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

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
                <Link
                  to={`/details/${project.id}`}
                  className="inline-block px-4 py-2 bg-primary text-white rounded-md hover:bg-black hover:text-white transition-colors"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
