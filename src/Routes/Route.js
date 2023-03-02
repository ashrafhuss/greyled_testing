import React from "react";
import StudentSignup from "../Pages/studentSignup";
import ProfessorSignup from "../Pages/professorSignup";
import ProfessorSignin from "../Pages/professorSingin";
import StudentSignin from "../Pages/studentSignin";
import CreateClass from "../Pages/createClass";
import ClassSelect from "../Pages/classSelect";
import AssignDefaultBook from "../Pages/assignDefaultBook";
import AssignSingleBook from "../Pages/assignSignleBook";
import ProtectedRoutes from "../guards/Protected.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function CreateRoutes() {
  return (
    <Router>
      <div className="routes">
        <div></div>

        <Routes>
          <Route exact path="/" element={<ClassSelect />}></Route>
          <Route
            exact
            //authGuard={false}
            path="/studentSignup"
            element={<StudentSignup />}
          ></Route>
          <Route
            exact
            // authGuard={false}
            path="/studentSignin"
            element={<StudentSignin />}
          ></Route>

          <Route
            exact
            //authGuard={false}
            path="/professorSignin"
            element={<ProfessorSignin />}
          ></Route>
          <Route
            exact
            //authGuard={false}
            path="/professorSignup"
            element={<ProfessorSignup />}
          ></Route>
          <Route
            exact //authGuard={true}
            path="/createClass"
          >
            <ProtectedRoutes Cmp={CreateClass} />
          </Route>

          <Route
            exact //authGuard={true}
            path="/defaultBook"
            element={
              <ProtectedRoutes>
                <AssignDefaultBook />
              </ProtectedRoutes>
            }
          ></Route>
          <Route
            exact //authGuard={true}
            path="/singleBook"
          >
            <ProtectedRoutes Cmp={AssignSingleBook} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default CreateRoutes;
