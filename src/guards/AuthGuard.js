import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

const AuthGuard = ({ element: Component, xAuthToken, path, ...rest }) => {
    console.log(xAuthToken);
  return xAuthToken ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to="/studentSignin"
      state={{ from: path }}
      replace={true}
    />
  );
};

export default AuthGuard;
