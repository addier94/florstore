import { IPDetail } from "../../utils/TypeScript";

export const SET_PRODUCT_DETAIL = "SET_PRODUCT_DETAIL";
export const GET_PDETAIL = "GET_PDETAIL";
export const DELETE_PD = "DELETE_PD";

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

export interface IPDDeleteType {
  type: typeof DELETE_PD;
  payload: { uid: string };
}

export type IProductDetailType =
  | ICreateProductDetailType
  | IGetPDetailType
  | IPDDeleteType;
