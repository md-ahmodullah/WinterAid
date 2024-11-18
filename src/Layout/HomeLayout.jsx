import Navbar from "../Components/Navbar";
import Login from "../Pages/Login";

export default function HomeLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Login />
      </main>
    </>
  );
}
