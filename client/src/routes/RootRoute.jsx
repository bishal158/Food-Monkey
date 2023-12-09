import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "../context/UserContext.jsx";
import React from "react";
import Home from "../pages/Home.jsx";
library.add(fab, fas);
import Header from "../pages/components/Header.jsx";
import Loaders from "../shared/Loaders.jsx";
const Login = React.lazy(() => import("../pages/Login.jsx"));
const Registration = React.lazy(() => import("../pages/Registration.jsx"));

function RootRoute() {
  return (
    <UserContextProvider>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
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
    </UserContextProvider>
  );
}

export default RootRoute;
