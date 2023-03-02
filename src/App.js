import React, { Suspense, useEffect, useState } from "react";
import "./App.css";
import CreateRoutes from "./Routes/Route";
import AuthGuard from "./guards/AuthGuard";
import store from "./Store/store";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NotFoundPage from "./Pages/notFound";
import { routes } from "./routes";
import { Provider } from "react-redux";
function App() {
  console.log(routes)
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const {component:Component} = route;
           return ( 
            <Route
              key={route.path}
              path={route.path}
              // exact={route.exact}
              // render={(props)=>(<Component {...props} title={"Statuc"}/>)}
              element={<Component from={route.path}/>}
            />
            );
          })
        }
        <Route path="*" element={<Navigate to="/404" />} />
        <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
