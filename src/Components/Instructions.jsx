export default function Instructions() {
  return (
    <>
      <div>
        <h2 className="text-4xl font-bold text-deepTeal text-center pb-5">
          Donation Steps
        </h2>
        <p className="text-center text-gray-500">
          Providing a general overview of the donation process
        </p>
        <ul className="steps steps-vertical lg:steps-horizontal text-deepTeal font-semibold py-12">
          <li className="step step-accent">Step-1 : Browse Campaigns</li>
          <li className="step step-accent">Step-2 : Register</li>
          <li className="step">Step-3 : View Campaign Details</li>
          <li className="step">Step-4 : Form Fill-up</li>
          <li className="step">Step-5 : Submit</li>
        </ul>
      </div>
      <div className="grid grid-cols-5 gap-8">
        <div className="card bg-base-100 shadow-xl items-center transform transition-transform duration-700 hover:scale-125">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-deepTeal">
              Browse Campaigns
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Choose a campaign that resonates with your donation goals,
              supporting those in need by providing essential winter clothing to
              vulnerable communities across different regions of Bangladesh.
            </p>
          </div>
          <div className="card-actions pb-5">
            <button className="btn btn-sm bg-lightCoral text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl items-center transform transition-transform duration-700 hover:scale-125">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-deepTeal">
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
        <div className="card bg-base-100 shadow-xl items-center transform transition-transform duration-700 hover:scale-125">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-deepTeal">
              View Campaign Details
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Check the campaigns specific needs, including the type of clothing
              and the quantity required, to ensure your donation meets the
              listed requirements effectively.
            </p>
          </div>
          <div className="card-actions pb-5">
            <button className="btn btn-sm bg-lightCoral text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl items-center transform transition-transform duration-700 hover:scale-125">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-deepTeal">
              Fill Donation Form
            </h2>
            <p className="text-sm text-gray-500 text-justify">
              Provide your donation details, including item type, quantity,
              pickup location, and any additional notes to help streamline the
              collection process.
            </p>
          </div>
          <div className="card-actions pb-5">
            <button className="btn btn-sm bg-lightCoral text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl items-center transform transition-transform duration-700 hover:scale-125">
          <figure className="px-5 pt-5">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="text-center flex flex-col flex-grow gap-3 items-center p-5">
            <h2 className="text-lg font-semibold text-deepTeal">
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
      <div role="alert" className="alert alert-warning my-16">
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
