import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Header.css";
import logo from "../../assets/favicon/favicon-32x32.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/UserContext.jsx";
import { Tooltip } from "react-tooltip";
import Sheet from "react-modal-sheet";
import { CartItemContext } from "../../context/CartItemContext.jsx";

const Header = () => {
  const { cartItem } = useContext(CartItemContext);
  const [isOpen, setOpen] = useState(false);
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 1 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const {
    fullName,
    setFullname,
    phone,
    setPhone,
    email,
    setEmail,
    isAdmin,
    setIsAdmin,
  } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:5000/api/user", {
      credentials: "include",
    })
      .then((response) => {
        response.json().then((userData) => {
          setFullname(userData.fullName);
          setPhone(userData.phone);
          setEmail(userData.email);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const logout = async () => {
    await fetch("http://localhost:5000/api/logout", {
      credentials: "include",
      method: "POST",
    });
    setFullname(null);
    setPhone(null);
    setEmail(null);
  };
  return (
    <>
      <nav
        className={`navbar navbar-expand-sm   ${!top && `fixed-top effect`} `}
      >
        <div className="header-container">
          <Link className="navbar-brand" to={"/"}>
            <ul className={"brand"}>
              <li className={"mx-3"}>
                <img src={logo} alt={"logo"} />
              </li>
              <li>F</li>
              <li>o</li>
              <li>o</li>
              <li>d</li>
              <li>M</li>
              <li>o</li>
              <li>n</li>
              <li>k</li>
              <li>e</li>
              <li>y</li>
            </ul>
          </Link>
          <FontAwesomeIcon
            icon={faBars}
            type="button"
            className={"user-icon"}
            onClick={() => setOpen(true)}
          />

          {!email && (
            <div className={"user-content"}>
              <Link className={"login"} to={"/login"}>
                Log in
              </Link>
              <Link className={"register"} to={"/register"}>
                Sign Up
              </Link>
            </div>
          )}
          {email && (
            <div className={"user-info"}>
              <NavLink to={"/"} className={"user-info-content user-tool"}>
                <FontAwesomeIcon icon="fa-solid fa-user" className={"mx-1"} />
                {fullName}
              </NavLink>

              {/* condition */}
              {isAdmin ? (
                <>
                  <NavLink
                    to={"/admin/add-products"}
                    className={"user-info-content add-products-tool"}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-plus" />
                  </NavLink>
                  <NavLink
                    to={"/admin/view-orders"}
                    className={"user-info-content view-orders-tool"}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to={"/products"}
                    className={"user-info-content order-food-tool"}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-utensils" />
                  </NavLink>
                  <NavLink
                    to={"/cart"}
                    className={"user-info-content cart-tool"}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-cart-plus" />
                    <span className="cart-counter">{cartItem.length}</span>
                  </NavLink>
                  <NavLink
                    to={"/services"}
                    className={"user-info-content service-tool"}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-truck" />
                  </NavLink>
                  <NavLink
                    to={"/checkout"}
                    className={"user-info-content credit-tool"}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-credit-card" />
                  </NavLink>
                  <NavLink
                    to={"/contact-us"}
                    className={"user-info-content contact-us-tool"}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-address-book" />
                  </NavLink>
                  <NavLink
                    to={"/about-us"}
                    className={"user-info-content about-us-tool"}
                  >
                    <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                  </NavLink>
                </>
              )}

              <NavLink
                to={"/login"}
                onClick={logout}
                className={"user-info-content logout-tool"}
              >
                <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
              </NavLink>
            </div>
          )}
        </div>
      </nav>
      {/*  Pop Up model */}

      <Sheet
        className={"header-sheet"}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent={"content-height"}
        snapPoints={[550, 500, 400, 200, 0]}
      >
        <Sheet.Container>
          <Sheet.Header></Sheet.Header>
          <Sheet.Content>
            {!email && (
              <>
                <h1>Welcome to Food Monkey !!!</h1>
                <p>Log or Sign up first to continue</p>
                <NavLink className={"user-info-content-modal"} to={"/login"}>
                  Log in
                </NavLink>
                <NavLink className={"user-info-content-modal"} to={"/register"}>
                  Sign Up
                </NavLink>
              </>
            )}
            {email && (
              <>
                <NavLink to={"/"} className={"user"}>
                  <FontAwesomeIcon icon="fa-solid fa-user" className={"mx-1"} />
                  {fullName}
                </NavLink>
                {isAdmin ? (
                  <>
                    <NavLink
                      to={"/admin/add-products"}
                      className={"user-info-content-modal"}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-plus" /> Add Product
                    </NavLink>
                    <NavLink
                      to={"/view-orders"}
                      className={"user-info-content-modal"}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> View
                      Orders
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to={"/products"}
                      className={"user-info-content-modal"}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-utensils" /> Order
                      Foods
                    </NavLink>
                    <NavLink to={"/cart"} className={"user-info-content-modal"}>
                      <FontAwesomeIcon icon="fa-solid fa-cart-plus" /> Cart
                      Items
                    </NavLink>
                    <NavLink
                      to={"/services"}
                      className={"user-info-content-modal"}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-truck" /> Our Services
                    </NavLink>
                    <NavLink
                      to={"/checkout"}
                      className={"user-info-content-modal"}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-credit-card" /> Check
                      Out
                    </NavLink>
                    <NavLink
                      to={"/contact-us"}
                      className={"user-info-content-modal"}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-address-book" />{" "}
                      Contact Us
                    </NavLink>
                    <NavLink
                      to={"/about-us"}
                      className={"user-info-content-modal"}
                    >
                      <FontAwesomeIcon icon="fa-solid fa-circle-info" /> About
                      Us
                    </NavLink>
                  </>
                )}

                <NavLink
                  to={"/"}
                  onClick={logout}
                  className={"user-info-content-modal"}
                >
                  <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" /> Log
                  Out
                </NavLink>
              </>
            )}
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
      {/*    Tooltip for header content*/}
      <Tooltip anchorSelect=".user-tool" place="top">
        {fullName}
      </Tooltip>
      <Tooltip anchorSelect=".cart-tool" place="top">
        Cart Items
      </Tooltip>
      <Tooltip anchorSelect=".credit-tool" place="bottom-start">
        Check Out
      </Tooltip>
      <Tooltip anchorSelect=".contact-us-tool" place="top">
        Contact Us
      </Tooltip>
      <Tooltip anchorSelect=".about-us-tool" place="top">
        About Us
      </Tooltip>
      <Tooltip anchorSelect=".service-tool" place="top">
        Our Service
      </Tooltip>
      <Tooltip anchorSelect=".order-food-tool" place="top">
        Order Food
      </Tooltip>
      <Tooltip anchorSelect=".add-products-tool" place="top">
        Add Products
      </Tooltip>
      <Tooltip anchorSelect=".view-orders-tool" place="top">
        View Orders
      </Tooltip>
      <Tooltip anchorSelect=".logout-tool" place="top">
        Log Out
      </Tooltip>
    </>
  );
};
export default Header;
