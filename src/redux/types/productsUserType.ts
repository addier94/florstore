export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const GET_ALL_OWN_PRODUCTS = "GET_ALL_OWN_PRODUCTS";

export interface IProducts {
  uid?: string;
  userID: string;
  name: string;
  createdAt: number;
}
export interface ICreateProductType {
  type: typeof CREATE_PRODUCT;
  payload: IProducts;
}

export type IGetAllProduct = Array<IProducts>;

export interface IGetAllProductType {
  type: typeof GET_ALL_OWN_PRODUCTS;
  payload: IProducts[];
}
export type IProductsUserType = ICreateProductType | IGetAllProductType;
