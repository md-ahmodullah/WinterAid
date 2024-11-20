import { Link } from "react-router-dom";
export default function Details() {
  return (
    <>
      <div className="card bg-base-100 shadow-xl items-center grid grid-cols-1 lg:grid-cols-2 gap-5 p-4 md:p-10">
        <div>
          <figure className="px-5 pt-5">
            <img
              src="https://i.ibb.co.com/R2Ncw8d/images12.jpg"
              // {cardData.image}
              // {cardData.title}
              alt=""
              className="rounded-xl object-cover"
            />
          </figure>
          <div>
            <div className="text-center flex flex-col flex-grow items-start gap-3 p-5">
              <h2 className="text-xl font-semibold text-black relative">
                thtilte here goes{" "}
                <span className="absolute text-green-500 text-xs font-semibold -right-16 -top-2 border border-green-500 rounded-full px-3 py-1">
                  Active
                </span>
              </h2>

              {/* {cardData.title} */}
              <p className="text-lg font-semibold text-black">Division</p>
              {/* {cardData.division} */}
              <p className="text-base text-gray-600 text-justify">
                description
              </p>
              {/* {cardData.description} */}
              <p className="text-base text-gray-600 text-justify">
                contactInfo
              </p>
            </div>
            <div className="card-actions pb-5 justify-center">
              <Link
                to="/"
                className="btn btn-wide bg-lightCoral text-white font-bold text-base"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <h2 className="text-2xl font-bold text-deepTeal text-center pt-8 font-poppins">
              Donation Form
            </h2>
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Quantity of Items</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 2 jackets, 3 blankets"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Item Type</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., 2 jackets, 3 blankets"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Pickup Location</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. House 12, Road 5, Dhanmondi, Dhaka"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Additional notes</span>
                </label>
                {/* <input
                  type="text"
                  placeholder="Additional notes"
                  className="input input-bordered"
                  required
                /> */}
                <textarea
                  name="notes"
                  placeholder="Additional notes (optional)"
                  className="input input-bordered pt-2"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-lightCoral text-faWhite font-bold">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
