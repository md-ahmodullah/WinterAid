import { Link } from "react-router-dom";
export default function CampaignCard({ cardData }) {
  return (
    <>
      <div className="card bg-base-100 shadow-xl items-center">
        <figure className="px-5 pt-5">
          <img
            src={cardData.image}
            alt={cardData.title}
            className="rounded-xl object-cover"
          />
        </figure>
        <div className="text-center flex flex-col flex-grow items-start gap-3 p-5">
          <h2 className="text-base lg:text-xl font-semibold text-black relative">
            {cardData.title}{" "}
            {cardData.status === "Active" && (
              <span className="absolute text-green-500 text-xs font-semibold -right-16 -top-2 border border-green-500 rounded-full px-3 py-1">
                {cardData.status}
              </span>
            )}
            {cardData.status === "Upcoming" && (
              <span className="absolute text-purple-600 text-xs font-semibold -right-20 -top-3 border border-purple-600 rounded-full px-3 py-1">
                {cardData.status}
              </span>
            )}
            {cardData.status === "Completed" && (
              <span className="absolute text-red-500 text-xs font-semibold -right-22 -top-3 border border-red-500 rounded-full px-3 py-1">
                {cardData.status}
              </span>
            )}
            {/* <span className="absolute text-green-500 text-xs font-semibold -right-16 -top-2 border border-green-500 rounded-full px-3 py-1">
              {cardData.status}
            </span> */}
          </h2>
          <p className="text-base lg:text-lg font-semibold text-black">
            {cardData.division} Division
          </p>
          <p className="text-sm lg:text-base text-gray-600 text-justify">
            {cardData.description}
          </p>
        </div>
        <div className="card-actions pb-5">
          <Link
            to="/"
            className="btn btn-wide bg-lightCoral text-white font-bold text-base"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </>
  );
}
