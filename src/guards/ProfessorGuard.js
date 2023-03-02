import React from "react";
import { Navigate } from 'react-router-dom'
const authGuard = (Element) => {
    return (props) => {
        const token = localStorage.getItem("xAuthToken");
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        if (token && user) {
            if (user.role === 'STUDENT') {
                console.log(true);
            }
            return <Element /> ;
        } else {
            return <Navigate to = "/studentSignup" / >
        }
    };
};

export default authGuard;