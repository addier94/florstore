import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "@firebase/auth";
import { Dispatch } from "redux";
import { IUserLogin, IUserRegister } from "../../utils/TypeScript";
import { validRegister } from "../../utils/Valid";
import { ALERT, IAlertType } from "../types/alertType";
import { AUTH, IAuthType } from "../types/authType";

export const startRegisterWithEmailPasswordName =
  (userRegister: IUserRegister) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    const check = validRegister(userRegister);

    if (check.errLength > 0) {
      return dispatch({ type: ALERT, payload: { errors: check.errMsg } });
    }

    try {
      dispatch({ type: ALERT, payload: { loading: true } });
      const auth = getAuth();
      const { name, email, password } = userRegister;
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(user, { displayName: name });
      dispatch({ type: ALERT, payload: { success: `Hola ${name}` } });

      dispatch({
        type: AUTH,
        payload: { uid: user.uid, name: user.displayName, email: user.email },
      });
      dispatch({ type: ALERT, payload: { loading: false } });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: { errors: error.message ?? "Error al registrar" },
      });
    }
  };

export const startLogout =
  () => async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      const auth = getAuth();
      // dispatch({ type: ALERT, payload: { loading: true } });
      await signOut(auth);

      dispatch({ type: AUTH, payload: {} });
      // dispatch({ type: ALERT, payload: { loading: false } });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: { errors: error.message ?? "Error al cerrar su cuenta" },
      });
    }
  };

export const startLogin =
  (userLogin: IUserLogin) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    try {
      const auth = getAuth();
      dispatch({ type: ALERT, payload: { loading: true } });

      const { email, password } = userLogin;
      const { user } = await signInWithEmailAndPassword(auth, email, password);

      dispatch({
        type: AUTH,
        payload: { uid: user.uid, name: user.email, email: user.email },
      });

      dispatch({ type: ALERT, payload: { loading: false } });
    } catch (error: any) {
      dispatch({
        type: ALERT,
        payload: { errors: error.message ?? "Email o Contraseña incorrecto" },
      });
    }
  };
