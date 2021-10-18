import { Route, Redirect } from "react-router-dom";
import { IProsRoute } from "../utils/TypeScript";

export const PrivateRoute = ({
  isLoggedIn,
  component: Component,
  ...rest
}: IProsRoute) => {
  localStorage.setItem("lastPath", rest.location.pathname);

  return (
    <>
      <Route
        {...rest}
        component={(props: any) =>
          isLoggedIn ? <Component {...props} /> : <Redirect to="/auth/login" />
        }
      />
    </>
  );
};
