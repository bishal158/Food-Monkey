import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Header.css";
import logo from "../../assets/favicon/favicon-32x32.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [top, setTop] = useState(true);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 1 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  const [width, setWidth] = useState(false);
  useEffect(() => {
    const getWidth = () => {
      window.innerWidth < 768 ? setWidth(true) : setWidth(false);
    };
    window.addEventListener("resize", getWidth);
    return () => window.removeEventListener("resize", getWidth);
  }, [width]);

  const user = true;

  return (
    <>
      <nav
        className={`navbar navbar-expand-sm  ${!top && `fixed-top effect`} `}
      >
        <div className="container">
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
          {width && (
            <FontAwesomeIcon
              icon={faUser}
              type="button"
              className={"user-icon"}
            />
          )}
          {!width && (
            <div className={"user-content"}>
              <Link className={"login"} to={"/login"}>
                Log in
              </Link>
              <Link className={"register"} to={"/register"}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
export default Header;
