import CollectionPoint from "./CollectionPoint";
import Instructions from "./Instructions";

export default function HowItWorks() {
  return (
    <>
      <div className="w-10/12 mx-auto my-20 flex flex-col items-center">
        <Instructions />
        <CollectionPoint />
      </div>
    </>
  );
}
