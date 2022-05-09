import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

export default function App(){
  return(
    <Router>
      <Routes>
        {routes.map((route,index) => (
          <Route 
          key={index}
          path={route.path}
          element={
            <route.layout>
              <route.component></route.component>
              <h2>Child Component</h2>
            </route.layout>
          }
          />
        ))}
      </Routes>
    </Router>
  );
}
