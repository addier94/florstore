import { Redirect, Route } from "react-router-dom";
import { IProsRoute } from "../utils/TypeScript";

export const PublicRoute = ({
  isLoggedIn,
  component: Component,
  ...rest
}: IProsRoute) => {
  const path = localStorage.getItem("lastPath") || "/";

  return (
    <Route
      {...rest}
      component={(props: any) =>
        isLoggedIn ? <Redirect to={path} /> : <Component {...props} />
      }
    />
  );
};
