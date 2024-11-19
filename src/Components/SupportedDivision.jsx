import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
export default function SupportedDivision() {
  const [divisions, setDivisions] = useState([]);
  useEffect(() => {
    fetch("/division.json")
      .then((res) => res.json())
      .then((data) => setDivisions(data));
  }, []);
  console.log(divisions);

  return (
    <section className="py-20 bg-gray-100 my-20">
      <div className="text-center pb-6">
        <h2 className="text-5xl font-semibold text-deepTeal pb-5">
          Support <span className="text-lightCoral">our mission</span>, change
          lives today
        </h2>
        <p className="text-gray-500 w-2/5 mx-auto">
          Showcasing campaigns across divisions in Bangladesh. Your donations
          empower us to continue our vital work, creating lasting impact and
          positive change.
        </p>
      </div>
      <div className="overflow-hidden my-5 py-3 border-y-4 border-teal-800">
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
        <h2 className="text-2xl font-semibold text-gray-500 pt-6">
          Don't see your area? Join as a volunteer to expand our reach!
        </h2>
        <button className="btn btn-wide bg-lightCoral text-faWhite font-bold">
          Join Us
        </button>
      </div>
    </section>
  );
}
