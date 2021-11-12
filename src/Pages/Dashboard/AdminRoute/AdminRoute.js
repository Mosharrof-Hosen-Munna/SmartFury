import React from "react";
import { Spinner } from "react-bootstrap";
import { Route, Redirect } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { loading, databaseUser } = useAuth();

  if (loading) {
    return (
      <div className="text-center mx-auto py-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        databaseUser?.role === "admin" ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
