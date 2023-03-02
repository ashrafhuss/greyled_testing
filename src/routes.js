import React from "react";
// import { lazy } from "react";
// const StudentSignup = lazy(() =>
//     import ('./Pages/studentSignup'))
// const ProfessorSignup = lazy(() =>
//     import ('./Pages/professorSignup'))
// const ProfessorSignin = lazy(() =>
//     import ('./Pages/professorSingin'))
// const StudentSignin = lazy(() =>
//     import ('./Pages/studentSignin'))
// const CreateClass = lazy(() =>
//     import ('./Pages/createClass'))
// const ClassSelect = lazy(() =>
//     import ('./Pages/classSelect'))
// const AssignDefaultBook = lazy(() =>
//     import ('./Pages/assignDefaultBook'))
// const AssignSingleBook = lazy(() =>
//         import ('./Pages/assignSignleBook'))
import StudentSignup from "./Pages/studentSignup";
import ProfessorSignup from "./Pages/professorSignup";
import ProfessorSignin from "./Pages/professorSingin";
import StudentSignin from "./Pages/studentSignin";
import CreateClass from "./Pages/createClass";
// import ClassSelect from "./Pages/classSelect";
import AssignDefaultBook from "./Pages/assignDefaultBook";
import AssignSingleBook from "./Pages/assignSignleBook";
import AuthGuard from "./guards/AuthGuard"
import ProfessorGuard from "./guards/ProfessorGuard"
import ProtectedRoute from "./guards/Protected";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const routes = [{
        authGuard: false,
        path: "/",
        component: AuthGuard(CreateClass),
        exact: true,
    },
    {
        authGuard: false,
        path: "/studentSignup",
        component: StudentSignup,
        exact: true,
    },
    {
        authGuard: false,
        path: "/studentSignin",
        component: StudentSignin,
        exact: true,
    },
    {
      authGuard: false,
      path: "/professorSignin",
      component: ProfessorSignin,
      exact: true,
    },
    {
      authGuard: false,
      path: "/professorSignup",
      component: ProfessorSignup,
      exact: true,
    },
    {
      authGuard: true,
      path: "/createClass",
      component: AuthGuard(CreateClass),
      exact: true,
    },
    {
      authGuard: true,
      path: "/defaultBook",
      component: ProfessorGuard(AssignDefaultBook),
      exact: true,
    },
    {
      authGuard: true,
      path: "/singleBook",
      component: ProfessorGuard(AssignSingleBook),
      exact: true,
    },
];