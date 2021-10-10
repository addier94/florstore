import { Route, Redirect } from "react-router-dom";
import { IProsRoute } from "../utils/TypeScript";

export const PrivateRoute = ({
  isLoggedIn,
  component: Component,
  ...rest
}: IProsRoute) => {
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
