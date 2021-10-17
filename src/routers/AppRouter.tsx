import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { login } from "../redux/actions/authAction";
import { ALERT } from "../redux/types/alertType";
import app from "../services/firebase-config";
import { AuthenticatedRoute } from "./AuthenticatedRoute";
import { AuthRouter } from "./AuthRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth(app);
    dispatch({ type: ALERT, payload: { loading: true } });

    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      dispatch({ type: ALERT, payload: { loading: false } });
    });
  }, [dispatch, setIsLoggedIn]);
  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/auth"
          component={AuthRouter}
          isLoggedIn={isLoggedIn}
        />
        <PrivateRoute
          path="/"
          component={AuthenticatedRoute}
          isLoggedIn={isLoggedIn}
        />

        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
