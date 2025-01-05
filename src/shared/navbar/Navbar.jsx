import { Link } from "react-scroll";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <Link
          to="banner"
          smooth={true}
          duration={500}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="about"
          smooth={true}
          duration={500}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="skills"
          smooth={true}
          duration={500}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link
          to="education"
          smooth={true}
          duration={500}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
        >
          Education
        </Link>
      </li>
      <li>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
        >
          Projects
        </Link>
      </li>
      <li>
        <Link
          to="contacts"
          smooth={true}
          duration={500}
          activeClass="font-bold text-primary"
          className="px-4 py-2 rounded hover:text-primary"
        >
          Contacts
        </Link>
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
            className="menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base"
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
          <Link
            to="contacts"
            className="w-full px-8 py-3 text-lg text-white hover:text-black hover:bg-white  bg-primary rounded-lg duration-300"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
