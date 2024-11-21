import { AiFillInstagram } from "react-icons/ai";
import { FaHandsHelping, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";
export default function Footer() {
  return (
    <footer className="bg-deepTeal font-poppins">
      <div className="w-11/12 mx-auto">
        <div className="footer text-base-content p-10">
          <aside>
            <div className="flex items-center gap-4 pb-4">
              <FaHandsHelping className="text-4xl font-bold text-softPeach" />
              <h3 className="text-2xl font-bold text-softPeach">WinterAid</h3>
            </div>

            <p className="text-faWhite text-justify font-semibold  w-full md:w-3/4 lg:w-2/5">
              You can help us to save lives during a disaster, get clean water
              running in the most remote areas, and much more.
            </p>
            <div className="text-softPeach text-xl flex items-center justify-center gap-5 pt-4">
              <a href="https://www.facebook.com/">
                <MdOutlineFacebook />
              </a>
              <a href="https://www.instagram.com/">
                <AiFillInstagram />
              </a>
              <a href="https://twitter.com/">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedin />
              </a>
            </div>
          </aside>
          <nav className="text-faWhite">
            <h6 className="footer-title">Donations</h6>
            <a className="link link-hover">Volunteers</a>
            <a className="link link-hover">Region</a>
            <a className="link link-hover">Materials</a>
          </nav>
          <nav className="text-faWhite">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <nav className="text-faWhite">
            <h6 className="footer-title">STAY IN TOUCH</h6>
            <a className="link link-hover">1-800-CHARITY</a>
            <a className="link link-hover">support@winteraid.org</a>
          </nav>
        </div>
      </div>
      <div className="p-4 border-t-2 border-teal-600 w-11/12 mx-auto">
        <aside>
          <p className="text-faWhite text-center text-sm">
            Copyright © {new Date().getFullYear()} - All right reserved by
            WinterAid
          </p>
        </aside>
      </div>
    </footer>
  );
}
