import { addDoc, collection } from "@firebase/firestore";
import { Dispatch } from "react";
import { loadingOrAlert } from "../../helpers/Alert";
import { getAllPDetail } from "../../helpers/getAllPDetail";
import { slugify } from "../../helpers/Slugify";
import { db } from "../../services/firebase-config";
import { IPDetail, RooState } from "../../utils/TypeScript";
import { IAlertType } from "../types/alertType";
import { IAuth } from "../types/authType";
import {
  GET_PDETAIL,
  ICreateProductDetailType,
  IGetPDetailType,
  IPDAllFields,
  SET_PRODUCT_DETAIL,
} from "../types/productDetailType";

export const startCreateProductDetail =
  (pDetail: IPDetail) =>
  async (
    dispatch: Dispatch<IAlertType | ICreateProductDetailType>,
    state: RooState
  ) => {
    try {
      dispatch(loadingOrAlert("loading", true));
      const { url, userID } = getUrlAndIdOfUser(state().auth);

      const newData: any = {
        ...pDetail,
        userID,
        createdAt: Date.now(),
      };
      const { id } = await addDoc(collection(db, url), newData);
      newData["uid"] = id;

      dispatch(addProductDetail(newData));

      dispatch(loadingOrAlert("loading", false));
    } catch (error) {
      dispatch(loadingOrAlert("errors", "Error registro no creado"));
    }
  };

export const startGetPDetail =
  () =>
  async (dispatch: Dispatch<IAlertType | IGetPDetailType>, state: RooState) => {
    try {
      const pDetail = await getAllPDetail(
        slugify(state().auth.name || ""),
        state().auth.uid || ""
      );
      dispatch(loadingOrAlert("loading", true));

      dispatch({ type: GET_PDETAIL, payload: pDetail });

      dispatch(loadingOrAlert("loading", false));
    } catch (error) {
      dispatch(loadingOrAlert("errors", "Error al obtener registros"));
    }
  };

const getUrlAndIdOfUser = (auth: IAuth) => {
  const userID: string = auth.uid || "";
  const userName: string = slugify(auth.name || "");

  return { url: `${userName}/product-detail/${userID}`, userID };
};

const addProductDetail = (pDetail: IPDAllFields): ICreateProductDetailType => ({
  type: SET_PRODUCT_DETAIL,
  payload: pDetail,
});
