import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between pt-2 pb-4">
        {/* Left Section */}
        <div className="mb-2 md:mb-0 text-center lg:text-left">
          <h3 className="text-xl font-bold text-white">Md. Arif Hassan</h3>
          <p className="text-sm mt-1">
            Web Developer | Passionate about crafting clean{" "}
            <br className="hidden lg:block" /> and user-friendly experiences.
          </p>
        </div>
        {/* Center Section */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {/* Social Icons */}
          <div className="flex  items-center ml-20 mt-6 space-x-4 justify-center lg:justify-start">
            <a
              href="https://www.facebook.com/arifhearthacker/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src="https://i.ibb.co.com/swKMGKv/2021-Facebook-icon-svg.png"
                alt="Facebook"
                className="w-7 h-7 rounded-full"
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
                className="w-7 h-7 rounded-full"
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
                className="w-7 h-7 rounded-full"
              />
            </a>
            <a
              href="https://github.com/arifhassansky"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src="https://i.ibb.co.com/60fMj740/github.webp"
                alt="Github"
                className="w-10 h-10 rounded-full bg-white"
              />
            </a>
          </div>
        </div>
        {/* Right Section */}
        <div className="text-center md:text-right mt-5">
          <p>
            &copy; {new Date().getFullYear()} Md. Arif Hassan. All Rights
            Reserved.
          </p>
        </div>
        <ScrollToTop smooth width="41px" height="20px" color="#00CDB8" />
      </div>
    </footer>
  );
};

export default Footer;
