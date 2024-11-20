import CollectionPoint from "./CollectionPoint";
import ExtraSection from "./ExtraSection";
import Instructions from "./Instructions";
import SupportedDivision from "./SupportedDivision";

export default function HowItWorks() {
  return (
    <>
      <div className="w-10/12 mx-auto my-16 flex flex-col items-center">
        <Instructions />
        <CollectionPoint />
      </div>
      <SupportedDivision />
      <ExtraSection />
    </>
  );
}
