export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_LIST_PRODUCTS = "SET_LIST_PRODUCTS";
export const SET_SEARCH_PRODUCTS = "SET_SEARCH_PRODUCTS";

export interface IProducts {
  uid?: string;
  userID: string;
  name: string;
  createdAt: number;
}

export interface productFormat  {
  productList: IProducts[],
  searchByName: IProducts[]
}

export interface ICreateProductType {
  type: typeof ADD_PRODUCT;
  payload: IProducts;
}

export type IGetAllProduct = Array<IProducts>;

export interface IGetAllProductType {
  type: typeof SET_LIST_PRODUCTS;
  payload: IProducts[];
}

export interface ISearchProductType {
  type: typeof SET_SEARCH_PRODUCTS;
  payload: IProducts;
}
export type IProductsUserType =
  | ICreateProductType
  | IGetAllProductType
  | ISearchProductType;
