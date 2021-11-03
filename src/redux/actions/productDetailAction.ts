import { addDoc, collection } from "@firebase/firestore";
import { Dispatch } from "react";
import { loadingOrAlert } from "../../helpers/Alert";
import { slugify } from "../../helpers/Slugify";
import { db } from "../../services/firebase-config";
import { IPDetail, RooState } from "../../utils/TypeScript";
import { IAlertType } from "../types/alertType";
import { IAuth } from "../types/authType";
import {
  ICreateProductDetailType,
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

const getUrlAndIdOfUser = (auth: IAuth) => {
  const userID: string = auth.uid || "";
  const userName: string = slugify(auth.name || "");

  return { url: `${userName}/product-detail/${userID}`, userID };
};

const addProductDetail = (pDetail: IPDAllFields): ICreateProductDetailType => ({
  type: SET_PRODUCT_DETAIL,
  payload: pDetail,
});
