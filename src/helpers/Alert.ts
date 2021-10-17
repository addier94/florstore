import { ALERT, IAlertType } from "../redux/types/alertType";

type keyAlert = "loading" | "success" | "errors";

type valAlert = boolean | string | string[];

export const loadingOrAlert = (key: keyAlert, val: valAlert): IAlertType => ({
  type: ALERT,
  payload: { [key]: val },
});
