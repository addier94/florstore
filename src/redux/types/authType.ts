export const AUTH = "AUTH";

export interface IAuth {
  uid?: string | null;
  name?: string | null;
  email?: string | null;
  tax?: string | null;
}

export interface IAuthType {
  type: typeof AUTH;
  payload: IAuth;
}
