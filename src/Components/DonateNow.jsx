export default function DonateNow() {
  return (
    <>
      <div className="hero bg-base-200 w-10/12 mx-auto rounded-xl px-20 py-10">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img
            src="https://i.ibb.co.com/pP4Ygr9/home-charity-tab-4.jpg"
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div className="w-1/3">
            <h1 className="text-3xl font-semibold">
              Every contribution directly supports our causes
            </h1>
            <p className="py-6 text-gray-500">
              Our mission is to empower individuals and families through
              comprehensive services, fostering resilience, dignity, and
              positive community impact for a brighter future.
            </p>
            <button className="btn bg-lightCoral rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
