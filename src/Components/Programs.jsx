export default function Programs() {
  return (
    <>
      <div className="hero bg-base-200 w-10/12 mx-auto rounded-xl p-6 md:p-10">
        <div className="flex flex-col lg:flex-row-reverse justify-between">
          <img
            src="https://i.ibb.co.com/Q8wckFN/image3.jpg"
            className="w-full lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="w-full lg:w-1/3 pt-10">
            <h1 className="text-xl md:text-3xl font-semibold text-deepTeal">
              Offering diverse programs focused on education
            </h1>
            <p className="pt-3 pb-6 md:py-6 text-gray-500 text-sm">
              Offering diverse programs focused on education, healthcare,
              environment, and community development for sustainable positive
              impact.
            </p>
            <button className="btn bg-lightCoral rounded-full text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
