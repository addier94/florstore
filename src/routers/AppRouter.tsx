import { getAuth } from "@firebase/auth";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import app from "../services/firebase-config";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const auth = getAuth(app);
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
