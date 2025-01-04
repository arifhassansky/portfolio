import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between py-2">
        {/* Left Section */}
        <div className="mb-2 md:mb-0 text-center lg:text-left">
          <h3 className="text-xl font-bold text-white">Md. Arif Hassan</h3>
          <p className="text-sm mt-2">
            Web Developer | Passionate about crafting clean and
            <br className="hidden lg:block" />
            user-friendly experiences.
          </p>
        </div>
        {/* Center Section */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {/* Social Icons */}
          <div className="flex ml-20 mt-6 space-x-4 justify-center lg:justify-start">
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
              href="https://www.linkedin.com/in/arif-hassan-8a4642317/"
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
              href="https://github.com/arifhassansky?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src="https://i.imgur.com/oATe77x.png"
                alt="Github"
                className="w-7 h-7 rounded-full bg-white"
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
