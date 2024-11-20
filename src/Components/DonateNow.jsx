export default function DonateNow() {
  return (
    <>
      <div className="hero bg-base-200 w-10/12 mx-auto rounded-xl p-5 md:p-8">
        <div className="flex flex-col lg:flex-row-reverse justify-evenly">
          <img
            src="https://i.ibb.co.com/pP4Ygr9/home-charity-tab-4.jpg"
            className="w-full lg:max-w-md rounded-lg shadow-2xl"
          />
          <div className="w-full lg:w-1/3 pt-10">
            <h1 className="text-xl md:text-3xl font-semibold text-black">
              Every contribution directly supports our causes
            </h1>
            <p className="pt-3 pb-6 md:py-6 text-gray-500 text-base">
              Our mission is to empower individuals and families through
              comprehensive services, fostering resilience, dignity, and
              positive community impact for a brighter future.
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
