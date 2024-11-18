import { FaGoogle } from "react-icons/fa";

import { Link } from "react-router-dom";
export default function Register() {
  return (
    <>
      <div className="my-6 py-12">
        <div className="card bg-base-100 w-1/4 mx-auto shrink-0 shadow-2xl">
          <div className="text-center px-5 py-3">
            <h1 className="text-2xl font-bold">Create Your Account</h1>
          </div>
          <div className="px-7 py-3">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="password"
                className="input input-bordered w-full"
              />
            </div>
            <div className="flex items-center gap-2 pt-4">
              <input type="checkbox" name="terms" className="checkbox" />
              <p className="text-sm text-gray-500">
                I accept the Terms and Conditions
              </p>
            </div>
            <div className="flex w-full flex-col border-opacity-50 form-control mt-6">
              <button className="btn btn-primary font-bold">Register</button>
              <div className="divider">OR</div>
              <button className="btn btn-outline mb-3 text-indigo-700">
                <FaGoogle /> Sign Up with Google
              </button>
            </div>
            <div className="flex items-center justify-center text-sm pb-3 font-semibold">
              <p className="pr-2">Already have an account?</p>
              <Link to="/login" className="text-indigo-700 font-bold underline">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
