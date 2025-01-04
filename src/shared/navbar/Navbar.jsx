import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const navlinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "font-bold px-4 py-2 rounded text-primary"
              : "px-4 py-2 rounded hover:text-primary"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive
              ? "font-bolda px-4 py-2 rounded"
              : "px-4 py-2 rounded hover:text-primary"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar w-11/12 mx-auto">
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
          <button className="w-full px-8 py-3 text-lg text-white bg-primary rounded-lg hover:bg-black">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
