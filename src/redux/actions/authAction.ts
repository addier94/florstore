import { Dispatch } from "redux";
import { IUserRegister } from "../../utils/TypeScript";
import { IAlertType } from "../types/alertType";
import { IAuthType } from "../types/authType";

export const startRegisterWithEmailPasswordName =
  (userRegister: IUserRegister) =>
  async (dispatch: Dispatch<IAuthType | IAlertType>) => {};
