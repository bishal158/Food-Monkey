import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles/CartItems.css";
import { useContext } from "react";
import { CartItemContext } from "../../context/CartItemContext.jsx";
import { BASEURL } from "../../../config.js";

function CartItems() {
  const { cartItem } = useContext(CartItemContext);
  return (
    <>
      <div className={"container-fluid cart-items-details"}>
        <div className={"row"}>
          <div className={"col-md-8 cart-items-table"}>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Food</th>
                  <th scope="col">Food Image</th>
                  <th scope="col">Food Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove Food</th>
                </tr>
              </thead>
              <tbody>
                {cartItem.length > 0 &&
                  cartItem.map((cart, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <img
                            src={`${BASEURL}` + cart.product.product_image_1}
                            alt={".."}
                          />
                        </td>
                        <td>{cart.product.product_name}</td>
                        <td>{cart.quantity}</td>
                        <td>
                          <FontAwesomeIcon icon="fa-solid fa-bangladeshi-taka-sign" />{" "}
                          {cart.quantity * cart.product.product_price}
                        </td>
                        <td>
                          <FontAwesomeIcon
                            icon="fa-solid fa-trash"
                            className={"link-danger"}
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className={"col-md-4 payment-receipt-display"}>
            <p>Total Items x{2}</p>
            <p>Subtotal ${10220}</p>
            <Link to={"/checkout"} className={"payment-review-button"}>
              Review Payment and Checkout
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
