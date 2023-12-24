import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext.jsx";
import React from "react";
import Home from "../pages/Home.jsx";
library.add(fab, fas);
import Header from "../pages/components/Header.jsx";
import Loaders from "../features/Loaders.jsx";
import { ProductContextProvider } from "../context/ProductContext.jsx";
import Footer from "../pages/components/Footer.jsx";
import NotFound404 from "../pages/NotFound404.jsx";
import { AdminAddProducts } from "../admin/component/AdminAddProducts.jsx";
const Login = React.lazy(() => import("../pages/Login.jsx"));
const Registration = React.lazy(() => import("../pages/Registration.jsx"));
const Products = React.lazy(() => import("../pages/Products.jsx"));
const CartItems = React.lazy(() => import("../pages/Cart.jsx"));
const Services = React.lazy(() => import("../pages/Services.jsx"));
const Checkout = React.lazy(() => import("../pages/CheckOut.jsx"));
const ContactUs = React.lazy(() => import("../pages/ContactUs.jsx"));
const AboutUs = React.lazy(() => import("../pages/AboutUs.jsx"));
const ProductDetails = React.lazy(() => import("../pages/ProductDetails.jsx"));
function RootRoute() {
  return (
    <UserContextProvider>
      <ProductContextProvider>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route
            path={"products"}
            element={
              <React.Suspense fallback={<Loaders />}>
                <Products />
              </React.Suspense>
            }
          />
          <Route
            path="/product-details/:id"
            element={
              <React.Suspense fallback={<Loaders />}>
                <ProductDetails />
              </React.Suspense>
            }
          />
          <Route
            path={"services"}
            element={
              <React.Suspense fallback={<Loaders />}>
                <Services />
              </React.Suspense>
            }
          />

          <Route
            path={"checkout"}
            element={
              <React.Suspense fallback={<Loaders />}>
                <Checkout />
              </React.Suspense>
            }
          />
          <Route
            path={"contact-us"}
            element={
              <React.Suspense fallback={<Loaders />}>
                <ContactUs />
              </React.Suspense>
            }
          />
          <Route
            path={"about-us"}
            element={
              <React.Suspense fallback={<Loaders />}>
                <AboutUs />
              </React.Suspense>
            }
          />
          <Route
            path={"cart"}
            element={
              <React.Suspense fallback={<Loaders />}>
                <CartItems />
              </React.Suspense>
            }
          />
          <Route
            path={"login"}
            element={
              <React.Suspense fallback={<Loaders />}>
                <Login />
              </React.Suspense>
            }
          />
          <Route
            path={"register"}
            element={
              <React.Suspense fallback={<Loaders />}>
                <Registration />
              </React.Suspense>
            }
          />
          <Route path={"admin/add-products"} element={<AdminAddProducts />} />
          <Route path={"*"} element={<NotFound404 />} />
        </Routes>
        <Footer />
      </ProductContextProvider>
    </UserContextProvider>
  );
}

export default RootRoute;
