// import React from "react";
// import Header from "../Pages/header";
// import { useState, useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import storage from "../services/storage";

import React from "react";
import { Navigate } from "react-router-dom";
import GetStorage from "../services/storage";
const ProtectedRoutes = ({ children }) => {
  const token = GetStorage.get("xAuthToken");
  console.log("IN protected", token);
  if (!token) {
    return <Navigate to="/studentSignin" replace />;
  }
  return children;
};

export default ProtectedRoutes;

/* export default function Protected(props) {
  const navigate = Navigate();
  let Cmp = props.Cmp;
  useEffect(() => {
    if (!localStorage.get("user")) {
      navigate("/studentSignup");
    }
  }, []);
  return (
    <div>
      <Cmp />
    </div>
  );
} */
