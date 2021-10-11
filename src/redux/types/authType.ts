export const AUTH = "AUTH";

export interface IAuth {
  uid?: string;
  name?: string;
}

export interface IAuthType {
  type: typeof AUTH;
  payload: IAuth;
}
