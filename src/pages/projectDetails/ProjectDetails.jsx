import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const [project, setProject] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch("/Projects.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredProject = data.find((project) => project.id == id);
        setProject(filteredProject);
      });
  }, [id]);

  return (
    <div className="w-10/12 mx-auto pt-40 pb-28">
      {/* Image and Buttons */}
      <div className="text-center">
        <img
          src={project.image}
          alt={project.name}
          className="lg:w-[80%] mx-auto rounded-lg shadow-md hover:scale-105 duration-300"
        />
        <div className="flex justify-center gap-4 mt-8">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-teal-500 hover:bg-teal-600 px-4 py-2 rounded-md shadow-md"
          >
            Live Project
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-gray-800 hover:bg-gray-900 px-4 py-2 rounded-md shadow-md"
          >
            GitHub Repository
          </a>
        </div>
      </div>

      {/* Project Name and Description */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-200">{project.name}</h2>
        <p className="mt-4 text-gray-200 text-justify">{project.description}</p>
      </div>

      {/* Technologies, Challenges, and Improvements */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Technologies */}
        <div>
          <h3 className="text-xl font-semibold text-primary">
            Technologies Used
          </h3>
          <ul className="mt-4 space-y-2 text-gray-200">
            {project.techStack?.map((tech, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">🔹</span>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Challenges and Improvements */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary">
              Challenges Faced
            </h3>
            <p className="mt-4 text-gray-200 text-justify">
              {project.challenges}
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">
              Future Improvements
            </h3>
            <p className="mt-4 text-gray-200 text-justify">
              {project.improvements}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
