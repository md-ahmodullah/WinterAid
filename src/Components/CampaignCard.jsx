import { BiCommentDetail } from "react-icons/bi";
import { PiMapPinAreaFill } from "react-icons/pi";
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
        <div className="flex flex-col flex-grow items-start gap-3 p-5">
          <div className="bg-gray-200 rounded-lg px-5 py-2">
            <p>
              {cardData.status === "Active" && (
                <span className=" text-green-500 text-base font-semibold">
                  {cardData.status}
                </span>
              )}
              {cardData.status === "Upcoming" && (
                <span className="text-purple-600 text-base font-semibold  rounded-full px-4 py-2">
                  {cardData.status}
                </span>
              )}
              {cardData.status === "Completed" && (
                <span className="text-red-500 text-base font-semibold  rounded-full px-4 py-2">
                  {cardData.status}
                </span>
              )}
            </p>
          </div>
          <h2 className="text-base lg:text-lg font-semibold text-black relative">
            {cardData.title}
          </h2>
          <p className="text-sm lg:text-base font-medium text-gray-500 flex items-center gap-4">
            <PiMapPinAreaFill /> {cardData.division}
          </p>
          <p className="text-xs lg:text-sm text-gray-500 flex items-start gap-4">
            <BiCommentDetail className="text-4xl" />
            {cardData.description}
          </p>
        </div>
        <div className="card-actions pb-5">
          <Link
            to={`/campaigns/${cardData.id}`}
            className="btn btn-wide bg-lightCoral text-white font-bold text-base"
          >
            Donate Now
          </Link>
        </div>
      </div>
    </>
  );
}
