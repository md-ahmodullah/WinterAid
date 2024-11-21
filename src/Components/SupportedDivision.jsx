import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
export default function SupportedDivision() {
  const [divisions, setDivisions] = useState([]);
  useEffect(() => {
    fetch("/division.json")
      .then((res) => res.json())
      .then((data) => setDivisions(data));
  }, []);

  return (
    <section className="py-12 md:py-20 bg-gray-100 my-20">
      <div className="text-center pb-6 w-11/12 mx-auto">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold text-deepTeal pb-5">
          Support <span className="text-lightCoral">our mission</span>, change
          lives today
        </h2>
        <p className="text-gray-500 w-4/5 lg:w-3/5 mx-auto">
          Showcasing campaigns across divisions in Bangladesh. Your donations
          empower us to continue our vital work, creating lasting impact and
          positive change.
        </p>
      </div>
      <div className="overflow-hidden my-4 py-3 border-y-4 border-teal-800">
        <Marquee gradient={false} speed={50}>
          {divisions.map((division, index) => (
            <div
              key={index}
              className="inline-block px-6 text-lg font-semibold text-gray-700"
            >
              {division.name}:{" "}
              <span className={division.color}>{division.status}</span>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-lg md:text-2xl font-semibold text-gray-500 pt-6 text-center">
          Don't see your area?
          <br /> Join as a volunteer to expand our reach!
        </h2>
        <button className="btn btn-wide bg-lightCoral text-faWhite font-bold">
          Join Us
        </button>
      </div>
    </section>
  );
}
