export const CREATE_PRODUCTS_USER_ID = "CREATE_PRODUCTS_USER_ID";

export interface IProductsUser {
  userID: string;
  name: string;
  createdAt: Date;
}

export interface IProductsUserType {
  type: typeof CREATE_PRODUCTS_USER_ID;
  payload: IProductsUser;
}
