import React from "react";
import { Navigate } from "react-router-dom";
import Storage from "../services/Storage";

const Redirect = ({ children }) => {
  const token = Storage.get("xAuthToken");

  if (token) {
    return <Navigate to="/adminDashBord" replace />;
  }
  return children;
};
export default Redirect;
