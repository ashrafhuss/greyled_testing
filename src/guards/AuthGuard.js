import React from "react";
import { Navigate } from 'react-router-dom'
const authGuard = (Element) => {
    return (props) => {
      console.log("props in guard", props);
        const token = localStorage.getItem("xAuthToken");
        const user = localStorage.getItem("user");

        if (token && user) {
            return <Element {...props}/> ;
        } else {
            return <Navigate to = "/studentSignup" />
        }
    };
};

export default authGuard;