import myPicture from "../../../assets/arif.png";
import { Typewriter } from "react-simple-typewriter";
import resume from "../../../assets/Arif's Frontend Resume.pdf";

const Banner = () => {
  return (
    <div id="banner" className="pt-20">
      <div className="w-11/12 mx-auto flex items-center justify-center">
        <div className="px-4 lg:flex lg:items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
            <p className="text-primary text-xl font-bold flex items-center justify-center lg:justify-start">
              Hi, I&apos;m passionate about coding!
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-2">
              Md. Arif Hassan
            </h1>
            <p className="text-2xl text-primary h-8 lg:text-4xl font-bold my-4 leading-tight">
              <Typewriter
                words={[
                  "Frontend Web developer",
                  "Full Stack Developer",
                  "MERN Stack Web Developer",
                ]}
                typeSpeed={40}
                deleteSpeed={40}
                cursor
                loop
              />
            </p>
            <p className="text-gray-500 mt-4 text-justify">
              I specialize in creating fast, responsive, and user-friendly web
              applications using the latest technologies like Javascript, React,
              Next.js, Typescript, Node.js, and Mongoose. Let&apos;s build
              something amazing together!
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1wjNHk3ERLh8VyEiJOXUVxFh0xqqCsKk1/view?usp=sharing",
                    "_blank"
                  )
                }
                className="btn text-white border-none bg-primary 
                 mt-6 px-3 md:px-6 py-2 hover:text-black hover:bg-white text-lg transition-all duration-300"
              >
                View Resume
              </button>
              <button className="btn ml-4 text-white border-none bg-primary mt-6 px-3 md:px-6 py-2 hover:text-black hover:bg-white text-lg transition-all duration-300">
                <a href={resume} download="Arif's Frontend Resume.pdf">
                  Download Resume
                </a>
              </button>
            </div>
            {/* Social Icons */}
            <div className="flex  lg:ml-24 mt-8 space-x-4 justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/arifhearthacker/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="https://i.ibb.co.com/swKMGKv/2021-Facebook-icon-svg.png"
                  alt="Facebook"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a
                href="https://x.com/arifskypro"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="https://i.ibb.co.com/3Yd0c93/free-twitter-logo-icon-2429-thumb.png"
                  alt="Twitter"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/arif-hassan-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="https://i.ibb.co.com/b1Tvsq6/linkedin.webp"
                  alt="LinkedIn"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a
                href="https://github.com/arifhassansky"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src="https://i.imgur.com/oATe77x.png"
                  alt="Github"
                  className="w-8 h-8 rounded-full bg-white"
                />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className=" lg:w-1/2 mt-8 flex justify-center">
            <img src={myPicture} alt="Arif Hassan" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
