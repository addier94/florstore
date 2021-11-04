import { IPDetail } from "../../utils/TypeScript";

export const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL";
export const GET_PDETAIL = "GET_PDETAIL";

export interface IPDetailState {
  data: IPDAllFields[];
}

export interface IPDAllFields extends IPDetail {
  uid: string;
  userID: string;
  createdAt: number;
}

export interface ICreateProductDetailType {
  type: typeof SET_PRODUCT_DETAIL;
  payload: IPDAllFields;
}

export interface IGetPDetailType {
  type: typeof GET_PDETAIL;
  payload: IPDAllFields[];
}

export type IProductDetailType = ICreateProductDetailType | IGetPDetailType;
