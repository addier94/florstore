import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { loadingOrAlert } from "../helpers/Alert";
import { login } from "../redux/actions/authAction";
import { startGetProducts } from "../redux/actions/productsUserAction";
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
    dispatch(loadingOrAlert("loading", true));

    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName, user.email));
        setIsLoggedIn(true);
        dispatch(startGetProducts(user.displayName || "/user", user.uid));
      } else {
        setIsLoggedIn(false);
      }
      dispatch(loadingOrAlert("loading", false));
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
