export default function Instructions() {
  return (
    <>
      <div className="pt-6">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-deepTeal text-center pb-5 w-full lg:w-2/3 mx-auto">
          Instructions for <span className="text-lightCoral">donation</span> and
          How it <span className="text-lightCoral">works</span>
        </h2>
        <p className="text-sm md:text-base text-center text-gray-500 w-full lg:w-1/2 mx-auto">
          Providing instructions for donation, information about collection
          points, and list supported divisions
        </p>
        <ul className="steps steps-vertical lg:steps-horizontal text-black font-semibold py-6 lg:py-9">
          <li className="step step-accent">Step-1 : Browse Campaigns</li>
          <li className="step step-accent">Step-2 : Register</li>
          <li className="step">Step-3 : View Campaign Details</li>
          <li className="step">Step-4 : Form Fill-up</li>
          <li className="step">Step-5 : Submit</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5">
        <div
          className="card bg-base-100 shadow-xl items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co.com/C28NJMj/browse-removebg-preview.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-black">
              Browse Campaigns
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Choose a campaign that resonates with your donation goals,
              supporting those in need by providing essential winter cloths.
            </p>
          </div>
          <div className="card-actions pb-5">
            <button className="btn btn-sm bg-lightCoral text-white">
              Learn More
            </button>
          </div>
        </div>
        <div
          className="card bg-base-100 shadow-xl items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co.com/3r6WNW2/register.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-black">
              Login or Sign Up
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Sign in to your existing account or quickly create a new one to
              start contributing and making a difference with your winter
              donations.
            </p>
          </div>
          <div className="card-actions pb-5">
            <button className="btn btn-sm bg-lightCoral text-white">
              Learn More
            </button>
          </div>
        </div>
        <div
          className="card bg-base-100 shadow-xl items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co.com/HCgxknt/details.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-black">
              View Campaign Details
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Check the campaigns specific needs, including the type of clothing
              and the quantity required, to ensure your effective donation .
            </p>
          </div>
          <div className="card-actions pb-5">
            <button className="btn btn-sm bg-lightCoral text-white">
              Learn More
            </button>
          </div>
        </div>
        <div
          className="card bg-base-100 shadow-xl items-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co.com/ZdwWJ0d/form.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-black">
              Fill Donation Form
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Provide your donation details, including item type, quantity,
              pickup location, and any notes to help streamline the collection
              process.
            </p>
          </div>
          <div className="card-actions pb-5">
            <button className="btn btn-sm bg-lightCoral text-white">
              Learn More
            </button>
          </div>
        </div>
        <div
          className="card bg-base-100 shadow-xl items-center "
          data-aos="fade-up"
        >
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co.com/JvB0Fh5/submit-removebg-preview.png"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-black">
              Submit Your Donation
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Finalize your donation and wait for a volunteer to reach out with
              pickup arrangements or drop-off location details.
            </p>
          </div>
          <div className="card-actions pb-5">
            <button className="btn btn-sm bg-lightCoral text-white">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div role="alert" className="alert alert-warning my-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span className="text-gray-600">
          Warning: Items should be clean and in good condition! Ensure proper
          packaging to protect items during transportation.!
        </span>
      </div>
    </>
  );
}
