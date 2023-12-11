import Banner from "./components/Banner.jsx";
import Cities from "./components/Cities.jsx";
import ContactUs from "./components/ContactUs.jsx";
import FoodCategories from "./components/FoodCategories.jsx";
import MostOrderedFood from "./components/MostOrderedFood.jsx";
import Support from "./components/Support.jsx";

function Home() {
  return (
    <>
      <Banner />
      <MostOrderedFood />
      <Cities />
      <ContactUs/>
      <Support />
      <FoodCategories />
    </>
  );
}

export default Home;
