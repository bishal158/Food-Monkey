import { Promotion } from "./components/Promotion.jsx";
import "./styles/Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Filter } from "../features/Filter.jsx";
import { ProductList } from "./components/ProductList.jsx";
import Sheet from "react-modal-sheet";
import {useState} from "react";
// import width from '../helpers/ScreenWidth.jsx'
function Products() {
    const [filter, setFilter] = useState(false);
  return (
    <>
      <Promotion />
      <h1 className={"search-filter-button-header"}>
        Find your desired food and order
      </h1>
      <div className={"search-filter-button"}>
        <input type="text" placeholder="Search Food" />
        <button onClick={() => setFilter(true)}>
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
        <Sheet isOpen={filter} onClose={() => setFilter(false)} detent={"content-height"}>
            <Sheet.Container>
                <Sheet.Header />
                <Sheet.Content>
                    <Filter/>
                </Sheet.Content>
            </Sheet.Container>
            <Sheet.Backdrop />
        </Sheet>
    </>
  );
}

export default Products;
