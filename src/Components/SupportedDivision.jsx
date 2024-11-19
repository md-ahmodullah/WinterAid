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
    <section className="py-8 bg-gray-100 my-20">
      <div className="w-10/12 mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-deepTeal pb-3">
            Supported Divisions
          </h2>
          <p className="text-gray-500">
            Showcasing campaigns across divisions in Bangladesh
          </p>
        </div>
        <div className="overflow-hidden my-5 py-3 border-y-4 border-teal-800">
          <Marquee gradient={false} speed={50}>
            {divisions.map((division, index) => (
              <div
                key={index}
                className="inline-block mx-6 text-lg font-semibold text-gray-700"
              >
                {division.name}:{" "}
                <span className={division.color}>{division.status}</span>
              </div>
            ))}
          </Marquee>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="text-3xl font-bold text-deepTeal">
              Don't see your area?
            </h2>
            <p className="text-gray-500">
              Join as a volunteer to expand our reach!
            </p>
            <button className="btn btn-wide bg-lightCoral text-faWhite font-bold">
              Join Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
