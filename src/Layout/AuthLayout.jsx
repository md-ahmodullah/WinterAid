import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
export default function AuthLayout() {
  return (
    <>
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main className="min-h-[calc(100vh-394px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
