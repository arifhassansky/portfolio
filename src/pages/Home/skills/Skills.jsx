import { FaHtml5 } from "react-icons/fa";
// import { SiJavascript, SiMongodb } from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      id="skills"
      className="lg:mt-32 mt-20 w-11/12 mx-auto"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl pb-2 md:pb-4 underline underline-offset-8 text-center font-bold">
        Skills
      </h1>

      <div className="skills-section">
        <div className="mb-12">
          <div className="Technical-bars grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 md:max-w-7xl mx-8  mt-10  pb-16 pt-8 justify-center">
            <div className="bar flex flex-col items-center text-center">
              <FaHtml5 className="html w-[132px] h-10 text-[#c95d2e] hover:scale-110 duration-300" />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">HTML5</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="css"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">CSS3</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                alt="javascript"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">JavaScript</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="react"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">React</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="mongodb"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">MongoDB</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                alt="express.js"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">Express.Js</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                alt="node.js"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">Node.Js</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"
                alt="vercel"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">Vercel</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white"
                alt="canva"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">Canva</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white"
                alt="figma"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">Figma</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white"
                alt="chart.js"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">Chart.js</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"
                alt="ESLint"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">ESLint</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="tailwind css"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">Tailwind CSS</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white"
                alt="npm"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">NPM</span>
              </div>
            </div>

            <div className="bar flex flex-col items-center text-center">
              <img
                className="style h-10 mx-auto hover:scale-110 duration-300"
                src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
                alt="jwt"
              />
              <div className="info text-center mt-2">
                <span className="text-lg font-medium">JWT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional skills */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="heading1 text-3xl text-center underline underline-offset-8 decoration-primary font-semibold mb-12">
            Professional <span className="text-primary">Skills</span>
          </h1>

          <div className="professional-skills grid grid-cols-2 md:grid-cols-4 gap-10 text-center justify-center">
            <div className="mb-12">
              <div
                className="mb-4 radial-progress  text-black border-4 bg-primary border-primary"
                style={{ "--value": 85 }}
                role="progressbar"
              >
                85%
              </div>
              <h1 className="text-lg font-medium">Communication Skills</h1>
            </div>

            <div className="mb-12">
              <div
                className="mb-4 radial-progress  text-black border-4 bg-primary border-primary"
                style={{ "--value": 80 }}
                role="progressbar"
              >
                80%
              </div>
              <h1 className="text-lg font-medium">Spoken English</h1>
            </div>

            <div className="mb-12">
              <div
                className="mb-4 radial-progress bg-primary border-primary text-black border-4 "
                style={{ "--value": 90 }}
                role="progressbar"
              >
                90%
              </div>
              <h1 className="text-lg font-medium">Problem Solving</h1>
            </div>

            <div className="mb-12">
              <div
                className="mb-4 radial-progress bg-primary border-primary text-black border-4"
                style={{ "--value": 80 }}
                role="progressbar"
              >
                80%
              </div>
              <h1 className="text-lg font-medium">Teamwork</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
