import { Dispatch } from "react";
import { loadingOrAlert } from "../../helpers/Alert";
import { IAlertType } from "../types/alertType";
import {
  CREATE_PRODUCTS_USER_ID,
  IProductsUser,
  IProductsUserType,
} from "../types/productsUserType";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../services/firebase-config";
import { RooState } from "../../utils/TypeScript";
import { validProduct } from "../../utils/Valid";
import { getAllOwnProducts } from "../../helpers/getAllOwnProducts";

export const startGetProducts =
  (userID: string) =>
  async (dispatch: Dispatch<IAlertType | IProductsUserType>) => {
    try {
      dispatch(loadingOrAlert("loading", true));

      const products = await getAllOwnProducts(userID);

      console.log("products", products);

      dispatch(loadingOrAlert("loading", false));
    } catch (error) {
      dispatch(loadingOrAlert("errors", "Error al obtener productos"));
    }
  };

export const startCreateProduct =
  (name: string) =>
  async (
    dispatch: Dispatch<IAlertType | IProductsUserType>,
    state: RooState
  ) => {
    const userID = state().auth.uid || "";
    const check = validProduct(userID, name);

    if (check.errLength) {
      return dispatch(loadingOrAlert("errors", check.errMsg));
    }
    try {
      dispatch(loadingOrAlert("loading", true));

      const newProduct: any = { userID, name, createdAt: Date.now() };

      const { id } = await addDoc(
        collection(db, `/${userID}/user/products`),
        newProduct
      );

      newProduct["uid"] = id;
      dispatch(addProduct(newProduct));

      dispatch(loadingOrAlert("loading", false));
      dispatch(loadingOrAlert("success", "Producto Creado"));
    } catch (err: any) {
      dispatch(loadingOrAlert("errors", "Error al crear el producto"));
    }
  };

export const addProduct = (product: IProductsUser): IProductsUserType => ({
  type: CREATE_PRODUCTS_USER_ID,
  payload: product,
});
