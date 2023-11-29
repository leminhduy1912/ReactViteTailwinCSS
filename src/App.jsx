import "./App.css";
import Navbar from "./customer/components/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
// import HomePage from "./customer/pages/HomePage/HomePage";
// import HomePage from "./customer/pages/HomePage/HomePage";

export default function App() {
  return (
    <div className="">
      <Navbar />
      {/* <div className="flex justify-center items-center w-10"> */}
      <HomePage />
    </div>
  );
}
