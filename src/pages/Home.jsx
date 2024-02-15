
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar"
import Footer from "../components/Footer";

export default function Home() {
  
  return (
    <>
    <NavBar/>
      <div className="relative bg-coffee1 bg-cover bg-center h-[800px] text-white">
        <div className="absolute top-1/2 left-20 font-semibold text-[52px]">
          Your Fav Coffee Here!{" "}
        </div>
        <Link
          to={"/view-our-menu"}
          className="absolute bottom-5 right-20 border px-3 py-4 lg:px-8 lg:py-6 hover:bg-nav-color"
        >
          View Our Menu
        </Link>
      </div>
      <div className=" bg-gray-600 text-center py-5 px-8">
        We offer a wide selection of spacialty coffee to accompany your morning
        routine. Don{`'`}t forget to try our signature drink, the 3rd Latte!{" "}
      </div>

      <div className=" bg-nav-color py-20">
        <div className="text-center font-bold text-[52px] my-5">Stop By for a Cup</div>
        <div className="flex justify-evenly items-center text-center">
          <div className="">
            <div>Location</div>
            <div>Russian Conf, Norodom Blvd, Phnom Penh</div>
          </div>
          <div className="border-l border-black px-6">
            <div>Hours of Operation</div>
            <div>
              We are open 7 day a week for your convenience :<br/>
              Mon - Fri 7am - 6pm<br/>
              Sat - Sun 8am - 3pm
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
