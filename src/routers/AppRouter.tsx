import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps,
} from "react-router-dom";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/auth" component={AuthRouter} isLoggedIn={true} />
        <PrivateRoute
          path="/"
          component={AuthenticatedRoute}
          isLoggedIn={true}
        />

        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
