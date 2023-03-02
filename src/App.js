import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import { routes } from "./routes";
import CreateRoutes from "./Routes/Route";
import AuthGuard from "./guards/AuthGuard";
import store from "./Store/store";
import { BrowserRouter as Router, Switch, Routes, Navigate, Route } from "react-router-dom";
import StudentSignup from "./Pages/studentSignup";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div className="page-wrapper"></div>}>
          <Routes>
            {routes.map((route, index) => {
              const { path, authGuard, component: Component, exact = false } = route;
              const GreyledRoute = Route;

              return (
                <GreyledRoute
                  path={path}
                  exact={exact}
                  element={<Component />}
                  key={path + index + "page_route"}
                />
              );
            })}
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
