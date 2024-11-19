export default function Inspire() {
  return (
    <>
      <section className="w-10/12 mx-auto my-6 md:my-12 lg:my-20">
        <div className="grid grid-cols-1 lg:grid-cols-6 items-center gap-6">
          <div className="col-span-5 space-y-4">
            <h1 className="text-5xl font-semibold text-deepTeal">
              Inspiring <span className="text-lightCoral">stories</span> from
              supporters
            </h1>
            <p className="text-gray-500">
              Discover heartfelt stories from our supporters, sharing their
              experiences and the impact of our work.
            </p>
          </div>
          <div>
            <button className="btn btn-md bg-lightCoral text-faWhite font-bold rounded-full">
              What do you think?
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-14">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title pb-4">Empowering change</h2>
              <p className="text-gray-500">
                Their work inspires hope and real change, fostering sustainable
                practices for a healthier planet.
              </p>
              <div className="flex items-center gap-3 pt-10">
                <div>
                  <img
                    src="https://i.ibb.co.com/m8K5WTc/propic1.png"
                    alt=""
                    className="w-12 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">David Lee</h2>
                  <p className="font-semibold text-gray-500 text-sm">
                    Environmentalist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title pb-4">Inspiring commitment</h2>
              <p className="text-gray-500">
                Their collaborations create lasting impact and change lives,
                empowering communities.
              </p>
              <div className="flex items-center gap-3 pt-10">
                <div>
                  <img
                    src="https://i.ibb.co.com/1ZG3ZCZ/propc2.png"
                    alt=""
                    className="w-12 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">John Aley</h2>
                  <p className="font-semibold text-gray-500 text-sm">
                    Activist
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title pb-4">Impactful work</h2>
              <p className="text-gray-500">
                I trust their accountability and ethical practices, ensuring my
                contributions make a meaningful difference.
              </p>
              <div className="flex items-center gap-3 pt-10">
                <div>
                  <img
                    src=" https://i.ibb.co.com/5xdjjXc/Screenshot-4.png"
                    alt=""
                    className="w-12 rounded-full"
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Nick Fury</h2>
                  <p className="font-semibold text-gray-500 text-sm">
                    Philanthropist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
