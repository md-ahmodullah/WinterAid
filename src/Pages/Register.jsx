import { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle, FaLink } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Register() {
  const [isShow, setIsShow] = useState(false);
  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="my-6 py-5 lg:py-16">
        <div className="card bg-base-100 w-4/5 md:w-1/2 lg:w-2/5 mx-auto shrink-0 shadow-2xl">
          <div className="text-center px-5 py-3">
            <h1 className="text-2xl font-bold text-deepTeal">Register</h1>
          </div>
          <div className="px-7 py-3 space-y-2">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <MdDriveFileRenameOutline />
                <input
                  type="text"
                  name="name"
                  placeholder="Nick Fury"
                  className="grow"
                  required
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Photo URL</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaLink className="text-sm text-gray-500" />
                <input
                  type="text"
                  name="photo"
                  placeholder="https://i.ibb.co.com/9bbt3x8/nickfury.jpg"
                  className="grow"
                  required
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="email"
                  name="email"
                  className="grow"
                  placeholder="nickfury@revengers.com"
                />
              </label>
            </div>
            <div>
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type={isShow ? "text" : "password"}
                  name="password"
                  className="grow"
                  placeholder="Z^a6vf8P#"
                />
                {isShow ? (
                  <FaEyeSlash onClick={handleShow} />
                ) : (
                  <FaEye onClick={handleShow} />
                )}
              </label>
            </div>
            <div className="flex items-center gap-2 pt-4">
              <input
                type="checkbox"
                name="terms"
                className="checkbox"
                required
              />
              <p className="text-sm text-gray-500">
                I accept the Terms and Conditions
              </p>
            </div>
            <div className="flex w-full flex-col border-opacity-50 form-control mt-6">
              <button className="btn bg-lightCoral font-semibold text-faWhite">
                Register
              </button>
              <div className="divider">OR</div>
              <button className="btn btn-outline mb-3 text-lightCoral">
                <FaGoogle /> Sign Up with Google
              </button>
            </div>
            <div className="flex items-center justify-center text-sm pb-3 font-semibold">
              <p className="pr-2">Already have an account?</p>
              <Link
                to="/auth/login"
                className="text-lightCoral font-bold underline"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
