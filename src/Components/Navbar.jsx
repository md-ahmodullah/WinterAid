import { useContext } from "react";
import { FaHandsHelping } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
export default function Navbar() {
  const { user } = useContext(AuthContext);

  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/campaigns">Campaigns</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/how-to-help">How to Help</NavLink>
    </>
  );
  return (
    <div className="bg-deepTeal font-poppins">
      <div className="navbar w-11/12 mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-softPeach"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <FaHandsHelping className="text-2xl md:text-3xl font-bold text-softPeach" />
            <Link
              to="/"
              className="text-lg md:text-2xl font-bold text-softPeach"
            >
              WinterAid
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12 text-faWhite">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="border-2 border-fuchsia-100 rounded-full py-1.5 w-12">
              <img
                src="https://i.ibb.co.com/0nbscck/412627369-901661941600568-1170305148117395746-n-1.jpg"
                alt=""
                className="rounded-full"
              />
            </div>
          ) : (
            <Link
              to="/"
              className="btn btn-sm md:btn-md bg-[#FFDAB9] text-deepTeal"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
