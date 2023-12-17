import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Header.css";
import logo from "../../assets/favicon/favicon-32x32.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/UserContext.jsx";
import { Tooltip } from "react-tooltip";
import Sheet from "react-modal-sheet";
// import width from '../../helpers/ScreenWidth.jsx'
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 1 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const { userEmail, setuserEmail } = useContext(UserContext);
  const user = true;
  const email = "bishal@gmail.com";
  if (user) {
    setuserEmail(email);
  }

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

          {!userEmail && (
            <div className={"user-content"}>
              <Link className={"login"} to={"/login"}>
                Log in
              </Link>
              <Link className={"register"} to={"/register"}>
                Sign Up
              </Link>
            </div>
          )}
          {userEmail && (
              <div className={"user-info"}>
                  <NavLink to={"/"} className={"user-info-content"}>
                      <FontAwesomeIcon icon="fa-solid fa-user" className={"mx-1"}/>
                      {userEmail}
                  </NavLink>
                  <NavLink
                      to={"/products"}
                      className={"user-info-content order-food-tool"}
                  >
                      <FontAwesomeIcon icon="fa-solid fa-utensils"/>
                  </NavLink>

                  <NavLink
                      to={"/cart-items"}
                      className={"user-info-content cart-tool"}
                  >
                      <FontAwesomeIcon icon="fa-solid fa-cart-plus"/>
                      <span className="cart-counter">3</span>
                  </NavLink>

                  <NavLink
                      to={"/services"}
                      className={"user-info-content service-tool"}
                  >
                      <FontAwesomeIcon icon="fa-solid fa-truck"/>
                  </NavLink>
                  <NavLink
                      to={"/checkout"}
                      className={"user-info-content credit-tool"}
                  >
                      <FontAwesomeIcon icon="fa-solid fa-credit-card"/>
                  </NavLink>
                  <NavLink
                      to={"/about-us"}
                      className={"user-info-content about-us-tool"}
                  >
                      <FontAwesomeIcon icon="fa-solid fa-circle-info"/>
                  </NavLink>
                  <NavLink to={"/"} className={"user-info-content logout-tool"}>
                      <FontAwesomeIcon icon="fa-solid fa-right-from-bracket"/>
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
        snapPoints={[500, 400, 200, 0]}
      >
        <Sheet.Container>
          <Sheet.Header></Sheet.Header>
          <Sheet.Content>
            {!userEmail && (
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
            {userEmail && (
              <>
                <NavLink to={"/"} className={"user"}>
                  <FontAwesomeIcon icon="fa-solid fa-user" className={"mx-1"} />
                  {userEmail}
                </NavLink>
                <NavLink to={"/products"} className={"user-info-content-modal"}>
                  <FontAwesomeIcon icon="fa-solid fa-utensils" /> Order Foods
                </NavLink>
                <NavLink
                  to={"/cart-items"}
                  className={"user-info-content-modal"}
                >
                  <FontAwesomeIcon icon="fa-solid fa-cart-plus" /> Cart Items
                </NavLink>
                <NavLink to={"/services"} className={"user-info-content-modal"}>
                  <FontAwesomeIcon icon="fa-solid fa-truck" /> Our Services
                </NavLink>
                <NavLink to={"/checkout"} className={"user-info-content-modal"}>
                  <FontAwesomeIcon icon="fa-solid fa-credit-card" /> Check Out
                </NavLink>
                <NavLink to={"/about-us"} className={"user-info-content-modal"}>
                  <FontAwesomeIcon icon="fa-solid fa-circle-info" /> About Us
                </NavLink>
                <NavLink to={"/"} className={"user-info-content-modal"}>
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
      <Tooltip anchorSelect=".cart-tool" place="top">
        Cart Items
      </Tooltip>
      <Tooltip anchorSelect=".credit-tool" place="bottom-start">
        Check Out
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
      <Tooltip anchorSelect=".logout-tool" place="top">
        Log Out
      </Tooltip>
    </>
  );
};
export default Header;
