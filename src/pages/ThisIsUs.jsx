import ImageCoffeeLeft from "../assets/iced-espresso-recipe-2.jpg";
import ImageCoffeeRight from "../assets/iced-americano-3.jpg"
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
export default function ThisIsUs() {
  return (
    <>
      <NavBar />
      <div className=" bg-orange-100 text-center py-10 px-20">
        <div className="text-bold text-[52px] my-4">Your Fav Coffee Here!</div>
        <div className="my-4 px-20 text-lg">
          At Group3_Coffee_Shop, we{`'`}re passionate about serving the best
          coffee in town. Our locally sourced beans are carefully selected and
          roasted to perfection. Come and enjoy a warm cup of coffee served with
          a smile.
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src={ImageCoffeeLeft} className="w-1/2 mr-32 h-[800px]" />
        <div>
          <div className="font-bold text-[32px]">
            The Best Coffee in <br /> the Neighborhood
          </div>
          <div>Discover Our Wide Range Of Coffees</div>
          <div className="border border-black py-3 px-4 w-[200px] text-center">
            View Menu
          </div>
        </div>
      </div>

      <div className=" bg-slate-600 py-10 px-20">
        Quality Ingredients. Perfectly Brewed Coffee.
      </div>

      <div className="flex justify-center items-center">
        <div>
          <div className="font-bold text-[32px]">
            From Our Hearts <br />
            to Your Cup
          </div>
          <div>Join Our Coffee Community</div>
          <div className="border border-black py-3 px-4 w-[200px] text-center">
            Visit Us
          </div>
        </div>
        <img src={ImageCoffeeRight} className="w-1/2 ml-32 h-[800px] " />
      </div>
      <Footer />
    </>
  );
}
