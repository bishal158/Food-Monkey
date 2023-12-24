import "./styles/ProductList.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext.jsx";
export const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className={"product-list-container"}>
        <h1>Our Dishes!!</h1>
        <div className={"products"}>
          {products.length > 0 &&
            products.map((product) => {
              return (
                <div className={"product-card"} key={product._id}>
                  <div className={"product-cover"}>
                    <img
                      src={"http://localhost:5000/" + product.product_image_1}
                      alt={"..."}
                    />
                  </div>
                  <div className={"product-details"}>
                    <p>{product.product_name}</p>
                    <div className={"product-price-rating"}>
                      <p>
                        {product.product_price}
                        <FontAwesomeIcon
                          icon="fa-solid fa-bangladeshi-taka-sign"
                          className={"fa-sm fa-fade link-primary"}
                        />
                      </p>
                      <p>
                        4.5/5
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className={"fa-sm fa-flip link-danger"}
                        />
                      </p>
                    </div>
                    <div className={"product-button"}>
                      <button>
                        Add to Cart{" "}
                        <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
                      </button>
                      <button>
                        <Link
                          to={`/product-details/${product._id}`}
                          className={"product-details-button"}
                        >
                          Product Details
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
