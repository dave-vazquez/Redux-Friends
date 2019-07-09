import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...theRest }, props) => {
  return (
    <Route
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          props.match.history.push("/login");
        }
      }}
    />
  );
};

export default ProtectedRoute;
