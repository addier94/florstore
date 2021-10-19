export const CREATE_PRODUCTS_USER_ID = "CREATE_PRODUCTS_USER_ID";

export interface IProductsUser {
  uid: string;
  userID: string;
  name: string;
  createdAt: number;
}

export interface IProductsUserType {
  type: typeof CREATE_PRODUCTS_USER_ID;
  payload: IProductsUser;
}
