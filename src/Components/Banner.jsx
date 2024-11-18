export default function Banner() {
  return (
    <section className="flex items-center w-10/12 mx-auto my-12 gap-4 pb-6">
      <div className="w-1/2 space-y-8">
        <h1 className="text-6xl text-deepTeal font-semibold">
          Share Warmth, <br />
          Spread Smiles
        </h1>
        <p className="text-lg text-gray-400 pb-3 w-3/5">
          Join WinterAid to donate winter clothing, bring warmth to vulnerable
          communities, and make a difference in lives across Bangladesh.
        </p>
        <button className="btn btn-md bg-lightCoral text-white font-semibold rounded-full">
          Make a Donation
        </button>
      </div>
      <div className="w-1/2 p-5">
        <div className="carousel">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://i.ibb.co.com/S7J5F0s/image6.jpg"
              className="w-full rounded-xl"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://i.ibb.co.com/JzHjVXV/image8.jpg"
              className="w-full rounded-xl"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://i.ibb.co.com/X33JDW2/images12.jpg"
              className="w-full rounded-xl"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://i.ibb.co.com/1dkx7fH/image9.jpg"
              className="w-full rounded-xl"
            />
          </div>
        </div>
        <div className="flex justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>
    </section>
  );
}
