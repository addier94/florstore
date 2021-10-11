import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/auth" component={AuthRouter} isLoggedIn={false} />
        <PrivateRoute
          path="/"
          component={AuthenticatedRoute}
          isLoggedIn={false}
        />

        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
