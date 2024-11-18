export default function CollectionPoint() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8">
        <div className="border-2 border-gray-200 p-5 space-y-5 rounded-xl">
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-medium text-deepTeal">
              Can I donate money instead of clothes?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we also accept money via Mobile Banking, Bank Account etc.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-deepTeal">
              What types of clothes are most needed?
            </div>
            <div className="collapse-content">
              <p>Blankets, Jackets, Sweater and so on.</p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-deepTeal">
              Can I join with you as a volunteer?
            </div>
            <div className="collapse-content">
              <p>
                Obviously, we are waiting for you. Take our warm love and join
                with us.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus bg-base-200 ">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium text-deepTeal">
              Do you have any other service like foods or shelter etc?
            </div>
            <div className="collapse-content">
              <p>
                Not yet, but we are working on that. Will bring it soon. Thanks
                for your attention!
              </p>
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 p-3 space-y-3 rounded-xl">
          <h1 className="text-xl font-semibold text-center border-b-2 pb-2 text-deepTeal">
            Collection Points
          </h1>
          <div className="border-l-4 rounded-2xl border-cyan-800 p-2">
            <h2 className="text-lg font-semibold text-lightCoral">
              📍 Dhaka Main Center
            </h2>
            <p className="font-semibold text-lightCoral">
              🏠 House 12, Road 5, Dhanmondi, Dhaka
            </p>
            <p className="font-semibold text-lightCoral">📞 +880123-456-789</p>
            <p className="font-semibold text-lightCoral">
              🕒 Mon-Fri: 9 AM - 6 PM
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 pt-3">
            <h2 className="text-xl font-semibold text-center text-deepTeal">
              Find Your Nearest Collect Points
            </h2>
            <p className="text-gray-500 text-sm px-20 text-center">
              Provide your area longitude and lattitude info to find your
              nearset collect points
            </p>
            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-info w-full"
              />
              <button className="btn bg-lightCoral text-white">Search</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
