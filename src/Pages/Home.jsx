import { Outlet } from "react-router-dom";
import About from "../Components/About";
import Banner from "../Components/Banner";
import HowItWorks from "../Components/HowItWorks";
export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-t from-gray-100 to-white">
        <Banner />
        {/* <SwiperSS /> */}
      </div>
      <div className="mb-8 md:mb-16">
        <About />
        <Outlet />
      </div>
      <div>
        <HowItWorks />
      </div>
    </>
  );
}
