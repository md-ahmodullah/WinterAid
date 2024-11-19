import { BiSolidDonateHeart } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { PiNotepadBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <section className="w-10/12 mx-auto my-16">
      <div className="w-full lg:w-3/5 mx-auto text-center space-y-4 md:space-y-6 pb-5 lg:pb-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-deepTeal font-semibold">
          Commitment to <span className="text-lightCoral">impactful</span>{" "}
          change and <span className="text-lightCoral">community</span> welfare
        </h1>
        <p className="text-sm lg:text-lg text-gray-500 w-full lg:w-3/5 mx-auto">
          Discover our commitment to social welfare, ethical governance, and
          impactful change.
        </p>
      </div>
      <div className="about flex flex-col lg:flex-row justify-center text-deepTeal">
        <NavLink
          to="/"
          className="flex items-center gap-4 py-4 px-10 bg-gray-100 rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl"
        >
          <div>
            <TbTargetArrow className="text-4xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p>About us & History</p>
          </div>
        </NavLink>
        <NavLink
          to="/programs"
          className="flex items-center gap-4 py-4 px-10 bg-gray-100"
        >
          <div>
            <PiNotepadBold className="text-4xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Our Programs</h3>
            <p className="">Make a Change</p>
          </div>
        </NavLink>
        <NavLink
          to="/partners"
          className="flex items-center gap-4 py-4 px-10 bg-gray-100"
        >
          <div>
            <FaUsers className="text-4xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Our Partners</h3>
            <p className="">Long-Time Partners</p>
          </div>
        </NavLink>
        <NavLink
          to="/donate-now"
          className="flex items-center gap-6 py-4 px-10 bg-gray-100 rounded-b-xl lg:rounded-bl-none lg:rounded-r-xl"
        >
          <div>
            <BiSolidDonateHeart className="text-4xl" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Donate Now</h3>
            <p className="">Save a Life</p>
          </div>
        </NavLink>
      </div>
    </section>
  );
}
