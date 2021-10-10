import { Redirect, Route } from "react-router-dom";
import { IProsRoute } from "../utils/TypeScript";

export const PublicRoute = ({
  isLoggedIn,
  component: Component,
  ...rest
}: IProsRoute) => {
  return (
    <Route
      {...rest}
      component={(props: any) =>
        isLoggedIn ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
