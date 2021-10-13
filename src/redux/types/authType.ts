export const AUTH = "AUTH";

export interface IAuth {
  uid?: string | null;
  name?: string | null;
}

export interface IAuthType {
  type: typeof AUTH;
  payload: IAuth;
}
