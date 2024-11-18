import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="my-6 py-12">
        <div className="card bg-base-100 w-1/4 mx-auto shrink-0 shadow-2xl">
          <div className="text-center px-5 py-3">
            <h1 className="text-2xl font-bold">Login Your Account</h1>
          </div>
          <div className="px-7 py-3">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="flex w-full flex-col border-opacity-50 form-control mt-2">
              <button className="btn btn-primary font-bold">Login</button>
              <div className="divider">OR</div>
              <button className="btn btn-outline mb-3 text-indigo-700">
                <FaGoogle /> Sign In with Google
              </button>
              {/* <button className="btn btn-outline mb-3 text-green-500">
                <FaGithub /> Sign In with Github
              </button> */}
            </div>
            <div className="flex items-center justify-center text-sm pb-3 font-semibold">
              <p className="pr-2">Don't Have An Account?</p>
              <Link
                to="/register"
                className="text-indigo-700 font-bold underline"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
