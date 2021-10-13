import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
} from "@firebase/auth";
import { Dispatch } from "redux";
import { IUserRegister } from "../../utils/TypeScript";
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

      // if (user.displayName) {
      dispatch({
        type: AUTH,
        payload: { uid: user.uid, name: user.displayName },
      });
      // }
    } catch (error: any) {
      console.log("error", error);
      dispatch({ type: ALERT, payload: { errors: "Something wrong" } });
    }
  };
