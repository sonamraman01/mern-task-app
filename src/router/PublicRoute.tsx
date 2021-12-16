import { PropsWithChildren } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { token } from "../hooks/Constants";
// import { entities } from "../hooks/Constants";

const PublicRoute = ({ children, ...rest }: PropsWithChildren<RouteProps>) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? (
          <Redirect
            to={{
              pathname: "/todo",
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default PublicRoute;
