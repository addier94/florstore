import { Dispatch } from "react";
import { loadingOrAlert } from "../../helpers/Alert";
import { IAlertType } from "../types/alertType";
import {
  ADD_PRODUCT,
  ICreateProductType,
  IGetAllProductType,
  IProducts,
  SET_LIST_PRODUCTS,
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

      dispatch({ type: SET_LIST_PRODUCTS, payload: products });
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

    // Validate if the format is correct and that name product does not exist in Firestore
    const check = validProduct(userID, name, state().productsUser.productList);
    if (check.errLength)
      return dispatch(loadingOrAlert("errors", check.errMsg));

    try {
      dispatch(loadingOrAlert("loading", true));

      const newProduct: IProducts = { userID, name, createdAt: Date.now() };

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
  type: ADD_PRODUCT,
  payload: product,
});
