import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = (WrappedComponent) => {
    return (props) => {
        const token = localStorage.getItem("xAuthToken");

        if (token) {
            return <Route 
            element = { <WrappedComponent {...props}/> }
            />;
        } else {
            return <Navigate to = "/studentSignup" />
        }
    };
};

export default ProtectedRoute;