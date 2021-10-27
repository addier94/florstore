export const ADD_PRODUCT = "ADD_PRODUCT";
export const SET_LIST_PRODUCTS = "SET_LIST_PRODUCTS";
export const SET_SEARCH_PRODUCTS = "SET_SEARCH_PRODUCTS";
export const SET_DELETE_PRODUCT = "SET_DELETE_PRODUCT";
export const SET_UPDATE_PRODUCT = "SET_UPDATE_PRODUCT";

export interface IProducts {
  uid?: string;
  userID: string;
  name: string;
  createdAt: number;
}

type uid = string;

export interface productFormat {
  productList: IProducts[];
  searchByName: IProducts[];
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

export interface IDeleteProductType {
  type: typeof SET_DELETE_PRODUCT;
  payload: uid;
}

export interface IUpdateProductType {
  type: typeof SET_UPDATE_PRODUCT;
  payload: IProducts;
}
export type IProductsUserType =
  | ICreateProductType
  | IGetAllProductType
  | ISearchProductType
  | IDeleteProductType
  | IUpdateProductType;
