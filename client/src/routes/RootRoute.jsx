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
import {ProductContextProvider} from "../context/ProductContext.jsx";
const Login = React.lazy(() => import("../pages/Login.jsx"));
const Registration = React.lazy(() => import("../pages/Registration.jsx"));
const Products = React.lazy(() => import("../pages/Products.jsx"));
const CartItems = React.lazy(() => import("../pages/CartItems.jsx"));
const Services = React.lazy(() => import("../pages/Services.jsx"));
const Checkout = React.lazy(() => import("../pages/CheckOut.jsx"));
const AboutUs = React.lazy(() => import("../pages/AboutUs.jsx"));
function RootRoute() {
  return (
    <UserContextProvider>
        <ProductContextProvider>
            <Header />
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"products"} element={
                    <React.Suspense fallback={<Loaders />}>
                        <Products />
                    </React.Suspense>
                } />
                <Route path={"services"} element={
                    <React.Suspense fallback={<Loaders />}>
                        <Services />
                    </React.Suspense>} />

                <Route path={"checkout"} element={
                    <React.Suspense fallback={<Loaders />}>
                        <Checkout />
                    </React.Suspense>} />

                <Route path={"about-us"} element={
                    <React.Suspense fallback={<Loaders />}>
                        <AboutUs />
                    </React.Suspense>} />
                <Route
                    path={"cart-items"}
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
            </Routes>
        </ProductContextProvider>
    </UserContextProvider>
  );
}

export default RootRoute;
