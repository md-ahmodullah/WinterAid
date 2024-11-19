import CollectionPoint from "./CollectionPoint";
import Instructions from "./Instructions";
import SupportedDivision from "./SupportedDivision";

export default function HowItWorks() {
  return (
    <>
      <div className="w-10/12 mx-auto my-20 flex flex-col items-center">
        <Instructions />
        <CollectionPoint />
        <SupportedDivision />
      </div>
    </>
  );
}
