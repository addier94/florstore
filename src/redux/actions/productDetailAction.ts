import { addDoc, collection, deleteDoc, doc } from "@firebase/firestore";
import { Dispatch } from "react";
import { loadingOrAlert } from "../../helpers/Alert";
import { getAllPDetail } from "../../helpers/getAllPDetail";
import { slugify } from "../../helpers/Slugify";
import { db } from "../../services/firebase-config";
import { IPDetail, RooState } from "../../utils/TypeScript";
import { IAlertType } from "../types/alertType";
import { IAuth } from "../types/authType";
import {
  DELETE_PD,
  GET_PDETAIL,
  ICreateProductDetailType,
  IGetPDetailType,
  IPDAllFields,
  IPDDeleteType,
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
export const startDeletePDetail =
  (pDetail: IPDAllFields) =>
  async (dispatch: Dispatch<IAlertType | IPDDeleteType>, state: RooState) => {
    try {
      dispatch(loadingOrAlert("loading", true));
      const url = getUrl(state().auth, pDetail);

      const pDetailRef = doc(db, url);
      await deleteDoc(pDetailRef);
      dispatch({
        type: DELETE_PD,
        payload: { uid: pDetail.uid },
      });

      dispatch(loadingOrAlert("loading", false));
    } catch (error) {
      dispatch(loadingOrAlert("errors", "error al eliminar"));
    }
  };

// ------------------helpers-----------------------
const getUrlAndIdOfUser = (auth: IAuth) => {
  const userID: string = auth.uid || "";
  const userName: string = slugify(auth.name || "");

  return { url: `${userName}/product-detail/${userID}`, userID };
};

const addProductDetail = (pDetail: IPDAllFields): ICreateProductDetailType => ({
  type: SET_PRODUCT_DETAIL,
  payload: pDetail,
});

const getUrl = (auth: IAuth, item: IPDAllFields): string => {
  const userID: string = auth.uid || "";
  const userName: string = slugify(auth.name || "");

  return `${userName}/product-detail/${userID}/${item.uid}`;
};
