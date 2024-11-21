import { useNavigate } from "react-router-dom";

export default function Dashboard({ user }) {
  const navigate = useNavigate();

  return (
    <section className="w-11/12 mx-auto py-12 px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Welcome, {user?.name || "User"}!
          </h2>
          <p className="text-gray-500 mt-2">Here's your profile information.</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={user?.image || "https://via.placeholder.com/150"}
            alt={user?.name || "User"}
            className="w-32 h-32 rounded-full shadow-md mb-4"
          />
          <div className="text-left w-full mt-4">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Name:</span> {user?.name || "N/A"}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Email:</span>{" "}
              {user?.email || "N/A"}
            </p>
          </div>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 bg-lightCoral text-white font-semibold rounded hover:bg-deepTeal transition"
          >
            Update Profile
          </button>
        </div>
      </div>
    </section>
  );
}
