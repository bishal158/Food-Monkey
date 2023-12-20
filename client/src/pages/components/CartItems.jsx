import { Link } from "react-router-dom";
import Salad from "../../assets/images/promotion/Starter.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './styles/CartItems.css'
function CartItems() {
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
              <tr>
                <th scope="row">1</th>
                <td>
                  <img src={Salad} alt={".."}/>
                </td>
                <td>Salad</td>
                <td>
                    <span className={'inc-dec-button'}>
                      <FontAwesomeIcon icon="fa-solid fa-plus" className={'mx-2 fa-sm'}/>
                    </span>
                  x2
                  <span>
                      <FontAwesomeIcon icon="fa-solid fa-minus" className={'mx-2 fa-sm'}/>
                    </span>
                </td>
                <td><FontAwesomeIcon icon="fa-solid fa-bangladeshi-taka-sign"/> 1000</td>
                <td>
                  <FontAwesomeIcon icon="fa-solid fa-trash" className={'link-danger'}/>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>
                  <img src={Salad} alt={".."}/>
                </td>
                <td>Salad</td>
                <td>
                    <span className={'inc-dec-button'}>
                      <FontAwesomeIcon icon="fa-solid fa-plus" className={'mx-2 fa-sm'}/>
                    </span>
                  x2
                  <span>
                      <FontAwesomeIcon icon="fa-solid fa-minus" className={'mx-2 fa-sm'}/>
                    </span>
                </td>
                <td><FontAwesomeIcon icon="fa-solid fa-bangladeshi-taka-sign"/> 1000</td>
                <td>
                  <FontAwesomeIcon icon="fa-solid fa-trash" className={'link-danger'}/>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>
                  <img src={Salad} alt={".."}/>
                </td>
                <td>Salad</td>
                <td>
                    <span className={'inc-dec-button'}>
                      <FontAwesomeIcon icon="fa-solid fa-plus" className={'mx-2 fa-sm'}/>
                    </span>
                  x2
                  <span>
                      <FontAwesomeIcon icon="fa-solid fa-minus" className={'mx-2 fa-sm'}/>
                    </span>
                </td>
                <td><FontAwesomeIcon icon="fa-solid fa-bangladeshi-taka-sign"/> 1000</td>
                <td>
                  <FontAwesomeIcon icon="fa-solid fa-trash" className={'link-danger'}/>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>
                  <img src={Salad} alt={".."}/>
                </td>
                <td>Salad</td>
                <td>
                    <span className={'inc-dec-button'}>
                      <FontAwesomeIcon icon="fa-solid fa-plus" className={'mx-2 fa-sm'}/>
                    </span>
                  x2
                  <span>
                      <FontAwesomeIcon icon="fa-solid fa-minus" className={'mx-2 fa-sm'}/>
                    </span>
                </td>
                <td><FontAwesomeIcon icon="fa-solid fa-bangladeshi-taka-sign"/> 1000</td>
                <td>
                  <FontAwesomeIcon icon="fa-solid fa-trash" className={'link-danger'}/>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div className={"col-md-4 payment-receipt-display"}>
            <p>Total Items x{2}</p>
            <p>Subtotal ${10220}</p>
            <Link to={"/checkout"} className={'payment-review-button'}>Review Payment and Checkout</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItems;
