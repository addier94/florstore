import { Dispatch } from "react";
import { loadingOrAlert } from "../../helpers/Alert";
import { IAlertType } from "../types/alertType";
import {
  ADD_PRODUCT,
  ICreateProductType,
  IDeleteProductType,
  IGetAllProductType,
  IProducts,
  IUpdateProductType,
  SET_DELETE_PRODUCT,
  SET_LIST_PRODUCTS,
  SET_UPDATE_PRODUCT,
} from "../types/productsUserType";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "@firebase/firestore";
import { db } from "../../services/firebase-config";
import { RooState } from "../../utils/TypeScript";
import { validProduct } from "../../utils/Valid";
import { getAllOwnProducts } from "../../helpers/getAllOwnProducts";
import { slugify } from "../../helpers/Slugify";
import { IAuth } from "../types/authType";

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
    const { url, userID } = getUrlAndIdOfUser(state().auth);

    // Validate if the format is correct and that name product does not exist in Firestore
    const check = validProduct({
      userID,
      name,
      products: state().productsUser.productList,
    });
    if (check.errLength)
      return dispatch(loadingOrAlert("errors", check.errMsg));

    try {
      dispatch(loadingOrAlert("loading", true));

      const newProduct: IProducts = { userID, name, createdAt: Date.now() };

      const { id } = await addDoc(collection(db, url), newProduct);

      newProduct["uid"] = id;
      dispatch(addProduct(newProduct));

      dispatch(loadingOrAlert("loading", false));
      reset();
      dispatch(loadingOrAlert("success", "Producto Creado"));
    } catch (err: any) {
      dispatch(loadingOrAlert("errors", "Error al crear el producto"));
    }
  };

export const startDelitingProduct =
  (product: IProducts) =>
  async (
    dispatch: Dispatch<IAlertType | IDeleteProductType>,
    state: RooState
  ) => {
    const url = getUrl(state().auth, product);

    try {
      dispatch(loadingOrAlert("loading", true));

      const productRef = doc(db, url);
      await deleteDoc(productRef);

      dispatch({ type: SET_DELETE_PRODUCT, payload: product.uid || "" });

      dispatch(loadingOrAlert("success", `${product.name} Eliminado`));
      dispatch(loadingOrAlert("loading", false));
    } catch (error) {
      dispatch(loadingOrAlert("errors", `Error el eliminar ${product.name}`));
    }
  };

export const startUpdateProduct =
  (product: IProducts) =>
  async (
    dispatch: Dispatch<IAlertType | IUpdateProductType>,
    state: RooState
  ) => {
    const url = getUrl(state().auth, product);

    const check = validProduct({
      userID: `${state().auth.uid}`,
      name: product.name,
      products: state().productsUser.productList,
    });
    if (check.errLength)
      return dispatch(loadingOrAlert("errors", check.errMsg));
    try {
      dispatch(loadingOrAlert("loading", true));

      const newProduct = { ...product };
      delete newProduct.uid;

      const productRef = doc(db, url);
      await updateDoc(productRef, newProduct);

      dispatch({ type: SET_UPDATE_PRODUCT, payload: product });

      dispatch(loadingOrAlert("success", `${product.name} Actualizado`));
      dispatch(loadingOrAlert("loading", false));
    } catch (error) {
      dispatch(loadingOrAlert("errors", `Error al actualizar ${product.name}`));
    }
  };

export const addProduct = (product: IProducts): ICreateProductType => ({
  type: ADD_PRODUCT,
  payload: product,
});

const getUrl = (auth: IAuth, item: IProducts): string => {
  const userID: string = auth.uid || "";
  const userName: string = slugify(auth.name || "");

  return `${userName}/product/${userID}/${item.uid}`;
};

const getUrlAndIdOfUser = (auth: IAuth): { url: string; userID: string } => {
  const userID: string = auth.uid || "";
  const userName: string = slugify(auth.name || "");

  return { url: `${userName}/product/ ${userID}`, userID };
};
