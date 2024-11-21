import { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
export default function Login() {
  const navigate = useNavigate();
  const { loginUser, signInWithGoogle, passwordResetMailSend } =
    useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");

    const validation = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!validation.test(password)) {
      setErrMessage("Must be at least 6 char including upper & lower case");
      return;
    }

    loginUser(email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.split("auth/")[1];
        const displayError = errorMessage.split(").")[0];
        setErrMessage(displayError);
      });
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => navigate("/"))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message.split("auth/")[1];
        const displayError = errorMessage.split(").")[0];
        setErrMessage(displayError);
      });
  };

  const handleForgotPassword = () => {
    const email = emailRef.current.value;
  };

  const handleShow = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="my-6 py-5 lg:py-16">
        <div className="card bg-base-100 w-4/5 md:w-1/2 lg:w-1/3 mx-auto shrink-0 shadow-2xl">
          <div className="text-center px-5 py-3">
            <h1 className="text-2xl font-bold text-deepTeal">Login</h1>
          </div>
          <div className="px-7 py-3 space-y-2">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
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
                    placeholder="Email"
                    ref={emailRef}
                    required
                  />
                </label>
              </div>
              <div className="form-control">
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
                    placeholder="password"
                    required
                  />
                  {isShow ? (
                    <FaEyeSlash onClick={handleShow} />
                  ) : (
                    <FaEye onClick={handleShow} />
                  )}
                </label>
                <label className="label">
                  <Link
                    to="/reset-password"
                    href="#"
                    className="label-text-alt link link-hover"
                    onClick={handleForgotPassword}
                  >
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="flex w-full flex-col border-opacity-50 form-control mt-2">
                <div>
                  {errMessage && (
                    <span className="text-base text-red-500 flex items-center gap-1 pb-3">
                      <IoWarning className="text-xl" /> {errMessage}
                    </span>
                  )}
                </div>
                <button className="btn bg-lightCoral font-bold text-faWhite">
                  Login
                </button>
                <div className="divider">OR</div>
                <button
                  className="btn btn-outline mb-3 text-lightCoral"
                  onClick={handleGoogleLogin}
                >
                  <FaGoogle /> Sign In with Google
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center text-xs pb-6 font-medium">
            <p className="pr-2">Don't Have An Account?</p>
            <Link
              to="/auth/register"
              className="text-lightCoral font-bold underline"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
