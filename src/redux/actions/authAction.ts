import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { Dispatch } from "redux";
import { IUserRegister } from "../../utils/TypeScript";
import { validRegister } from "../../utils/Valid";
import { ALERT, IAlertType } from "../types/alertType";
import { IAuthType } from "../types/authType";

export const startRegisterWithEmailPasswordName =
  (userRegister: IUserRegister) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {
    const check = validRegister(userRegister);

    if (check.errLength > 0) {
      return dispatch({ type: ALERT, payload: { errors: check.errMsg } });
    }

    try {
    } catch (error: any) {
      dispatch({ type: ALERT, payload: { errors: "Something wrong" } });
    }
  };
