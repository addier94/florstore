import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "@firebase/auth";
import { Dispatch } from "redux";
import { loadingOrAlert } from "../../helpers/Alert";
import { IUserLogin, IUserRegister } from "../../utils/TypeScript";
import { validRegister } from "../../utils/Valid";
import { IAlertType } from "../types/alertType";
import { AUTH, IAuthType } from "../types/authType";

export const startRegisterWithEmailPasswordName =
  (userRegister: IUserRegister) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    const check = validRegister(userRegister);

    if (check.errLength > 0) {
      return dispatch(loadingOrAlert("errors", check.errMsg));
    }

    try {
      const auth = getAuth();
      dispatch(loadingOrAlert("loading", true));

      const { user } = await createUserWithEmailAndPassword(
        auth,
        userRegister.email,
        userRegister.password
      );
      dispatch(loadingOrAlert("success", `Hola ${userRegister.name}`));
      await updateProfile(user, { displayName: userRegister.name });

      const { uid, displayName: name, email } = user;
      dispatch(login(uid, name, email));

      dispatch(loadingOrAlert("loading", false));
    } catch (error: any) {
      dispatch(loadingOrAlert("errors", "Error al realizar el registro"));
    }
  };

export const startLogout =
  () => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      const auth = getAuth();
      dispatch(loadingOrAlert("loading", true));

      await signOut(auth);
      dispatch({ type: AUTH, payload: {} });

      dispatch(loadingOrAlert("loading", false));
    } catch (error: any) {
      dispatch(loadingOrAlert("errors", "Error Su cuenta no se ha cerrado"));
    }
  };

export const startLogin =
  (userLogin: IUserLogin) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      const auth = getAuth();
      dispatch(loadingOrAlert("loading", true));

      const { user: userAuth } = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      const { uid, displayName: name, email } = userAuth;
      dispatch(login(uid, name, email));

      dispatch(loadingOrAlert("loading", false));
      dispatch(loadingOrAlert("success", `Hola ${name}`));
    } catch (error: any) {
      dispatch(loadingOrAlert("errors", "Email o Password incorrecto"));
    }
  };

type uid = string | null;
type name = string | null;
type email = string | null;

export const login = (uid: uid, name: name, email: email): IAuthType => ({
  type: AUTH,
  payload: { uid, name, email },
});
