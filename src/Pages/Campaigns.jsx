import { useLoaderData } from "react-router-dom";
import CampaignCard from "../Components/CampaignCard";
export default function Campaigns() {
  const data = useLoaderData();

  return (
    <>
      <div className="w-10/12 mx-auto my-12">
        <div className="flex flex-col items-center gap-3 pb-10">
          <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold text-deepTeal pb-5 text-center">
            Support <span className="text-lightCoral">our mission</span>, change
            lives today
          </h2>
          <p className="text-gray-500 w-4/5 lg:w-3/5 mx-auto text-center">
            Showcasing campaigns across divisions in Bangladesh. Your donations
            empower us to continue our vital work, creating lasting impact and
            positive change.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          {data.map((cardData) => (
            <CampaignCard key={cardData.id} cardData={cardData} />
          ))}
        </div>
      </div>
    </>
  );
}
