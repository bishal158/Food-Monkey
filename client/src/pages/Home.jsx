import Banner from "./components/Banner.jsx";
import Cities from "./components/Cities.jsx";
import FoodCategories from "./components/FoodCategories.jsx";
import MostOrderedFood from "./components/MostOrderedFood.jsx";

function Home() {
  return (
    <>
      <Banner />
      <MostOrderedFood />
      <Cities />
      <FoodCategories />
    </>
  );
}

export default Home;
