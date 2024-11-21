export default function ContactUs() {
  return (
    <>
      <section className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-24 pt-8">
        <div className="space-y-8">
          <div className="space-y-5">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-deepTeal">
              Connect with us, drive change{" "}
              <span className="text-lightCoral">together</span>
            </h1>
            <p className="text-gray-500 text-sm w-full md:w-4/5">
              Reach out to learn more about our programs, or to share your ideas
              and support for our mission.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="font-semibold text-lg">Main phone number</h1>
              <p className="text-gray-500 font-semibold">
                1-800-CHARITY (1-800-242-7489)
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-lg">
                Training & certification
              </h1>
              <p className="text-gray-500 font-semibold">
                Please visit the training section
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-lg">For donation related</h1>
              <p className="text-gray-500 font-semibold">
                Please visit the donation section
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-lg">Email address</h1>
              <p className="text-gray-500 font-semibold">
                support@winteraid.org
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-lg">Find our locations</h1>
              <p className="text-gray-500 font-semibold">Search on the map</p>
            </div>
          </div>
        </div>
        <div className="px-5 md:px-12">
          <div
            className="card bg-base-100 w-full shrink-0 shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Address</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profession</span>
                </label>
                <input
                  type="text"
                  placeholder="Profession"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Comments</span>
                </label>
                <input
                  type="text"
                  placeholder="Comments"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-lightCoral text-faWhite font-bold">
                  Join With Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
