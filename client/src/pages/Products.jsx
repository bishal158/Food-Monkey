import { Promotion } from "./components/Promotion.jsx";
import "./styles/Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Filter } from "../features/Filter.jsx";
import { ProductList } from "./components/ProductList.jsx";
// import width from '../helpers/ScreenWidth.jsx'
function Products() {
  return (
    <>
      <Promotion />
      <h1 className={"search-filter-button-header"}>
        Find your desired food and order
      </h1>
      <div className={"search-filter-button"}>
        <input type="text" placeholder="Search Food" />
        <button>
          <FontAwesomeIcon icon="fa-solid fa-sliders" /> Filter
        </button>
      </div>
      <div className={"products-filter-container"}>
        <div className={"filter-screen"}>
          <Filter />
        </div>
        <div className={"product-list-screen"}>
          <ProductList />
        </div>
      </div>
    </>
  );
}

export default Products;
