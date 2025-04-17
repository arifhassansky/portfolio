import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (to) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    }
  };

  const navlinks = (
    <>
      <li>
        <ScrollLink
          to="banner"
          smooth={true}
          duration={1000}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
          onClick={() => handleScroll("banner")}
        >
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="about"
          smooth={true}
          duration={1000}
          offset={-85}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
          onClick={() => handleScroll("about")}
        >
          About
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="skills"
          smooth={true}
          duration={1000}
          offset={-190}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
          onClick={() => handleScroll("skills")}
        >
          Skills
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="education"
          smooth={true}
          duration={1000}
          offset={-140}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
          onClick={() => handleScroll("education")}
        >
          Education
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={1000}
          offset={-140}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
          onClick={() => handleScroll("projects")}
        >
          Projects
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="contacts"
          smooth={true}
          duration={1000}
          offset={-85}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
          onClick={() => handleScroll("contacts")}
        >
          Contacts
        </ScrollLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-50 bg-[#051129] px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow text-base"
          >
            {navlinks}
          </ul>
        </div>
        <a className="w-24">
          <img src={logo} />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 text-base">{navlinks}</ul>
      </div>

      <div className="navbar-end">
        <div className="p-2">
          <ScrollLink
            to="contacts"
            smooth={true}
            duration={1000}
            className="w-full px-8 py-3 text-lg text-white hover:text-black hover:bg-white bg-primary rounded-lg duration-300"
            onClick={() => handleScroll("contacts")}
          >
            Hire Me
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
