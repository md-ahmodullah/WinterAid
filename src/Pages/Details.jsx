import { BiCommentDetail } from "react-icons/bi";
import { MdAttachEmail } from "react-icons/md";
import { PiMapPinAreaFill } from "react-icons/pi";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
export default function Details() {
  const data = useLoaderData();
  const { id } = useParams();
  const details = data.find((d) => d.id === Number(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon");
    e.target.reset();
  };
  return (
    <>
      <div className="card bg-base-100 shadow-xl items-center grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 p-4 md:p-16">
        <div className="bg-gray-100 rounded-lg">
          <figure className="px-5 pt-5">
            <img
              src={details?.image}
              alt={details?.title}
              className="rounded-xl object-cover"
            />
          </figure>
          <div>
            <div className="flex flex-col flex-grow items-start gap-3 p-5">
              <div className="bg-gray-200 rounded-lg px-5 py-2">
                <p>
                  {details?.status === "Active" && (
                    <span className=" text-green-500 text-base font-semibold">
                      {details?.status}
                    </span>
                  )}
                  {details?.status === "Upcoming" && (
                    <span className="text-purple-600 text-base font-semibold  rounded-full px-4 py-2">
                      {details?.status}
                    </span>
                  )}
                  {details?.status === "Completed" && (
                    <span className="text-red-500 text-base font-semibold  rounded-full px-4 py-2">
                      {details?.status}
                    </span>
                  )}
                </p>
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-black">
                {details?.title}
              </h2>

              <p className="text-base md:text-lg font-medium text-gray-500 flex items-center gap-4">
                <PiMapPinAreaFill className="text-xl" />
                {details?.division}
              </p>

              <p className="text-sm md:text-base text-gray-500 text-justify flex items-start gap-4">
                <BiCommentDetail className="text-2xl" />
                {details?.description}
              </p>
              <p className="text-sm md:text-base text-gray-500 text-justify flex items-center gap-4">
                <MdAttachEmail className="text-xl" />
                {details?.contactInfo}
              </p>
            </div>
            <div className="card-actions pb-5">
              <Link
                to="/"
                className="btn btn-md bg-lightCoral text-white font-medium text-base ml-5"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <h2 className="text-2xl font-bold text-deepTeal text-center pt-8">
              Donation Form
            </h2>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Quantity of Items
                  </span>
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
                  <span className="label-text font-semibold">Item Type</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g., jackets, blankets, sweater"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Pickup Location
                  </span>
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
                  <span className="label-text font-semibold">
                    Additional notes
                  </span>
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
