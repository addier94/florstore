import { Dispatch } from "react";
import { loadingOrAlert } from "../../helpers/Alert";
import { IAlertType } from "../types/alertType";
import {
  CREATE_PRODUCT,
  GET_ALL_OWN_PRODUCTS,
  ICreateProductType,
  IGetAllProductType,
  IProducts,
} from "../types/productsUserType";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../../services/firebase-config";
import { RooState } from "../../utils/TypeScript";
import { validProduct } from "../../utils/Valid";
import { getAllOwnProducts } from "../../helpers/getAllOwnProducts";
import { slugify } from "../../helpers/Slugify";

export const startGetProducts =
  (userName: string, userID: string) =>
  async (dispatch: Dispatch<IAlertType | IGetAllProductType>) => {
    try {
      // Get all products on firestore []
      const products = await getAllOwnProducts(slugify(userName), userID);

      dispatch({ type: GET_ALL_OWN_PRODUCTS, payload: products });
    } catch (error) {
      dispatch(loadingOrAlert("errors", "Error al obtener productos"));
    }
  };

export const startCreateProduct =
  (name: string, reset: () => void) =>
  async (
    dispatch: Dispatch<IAlertType | ICreateProductType>,
    state: RooState
  ) => {
    const userID = state().auth.uid || "";
    const userName = state().auth.name || "";

    // Make userID, userName exist and format properly
    const check = validProduct(userID, name);

    if (check.errLength) {
      return dispatch(loadingOrAlert("errors", check.errMsg));
    }

    try {
      dispatch(loadingOrAlert("loading", true));

      const newProduct: any = { userID, name, createdAt: Date.now() };

      const { id } = await addDoc(
        collection(db, `/${slugify(userName)}/product/${userID}`),
        newProduct
      );

      newProduct["uid"] = id;
      dispatch(addProduct(newProduct));

      dispatch(loadingOrAlert("loading", false));
      reset();
      dispatch(loadingOrAlert("success", "Producto Creado"));
    } catch (err: any) {
      dispatch(loadingOrAlert("errors", "Error al crear el producto"));
    }
  };

export const addProduct = (product: IProducts): ICreateProductType => ({
  type: CREATE_PRODUCT,
  payload: product,
});
