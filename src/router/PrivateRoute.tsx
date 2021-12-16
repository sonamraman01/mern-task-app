import { PropsWithChildren } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { token } from "../hooks/Constants";

const PrivateRoute = ({ children, ...rest }: PropsWithChildren<RouteProps>) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
