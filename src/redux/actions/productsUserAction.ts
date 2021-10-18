import { Dispatch } from "react";
import { loadingOrAlert } from "../../helpers/Alert";
import { IAlertType } from "../types/alertType";
import { IProductsUser, IProductsUserType } from "../types/productsUserType";

export const startCreateProduct =
  (blog: IProductsUser) =>
  async (dispatch: Dispatch<IAlertType | IProductsUserType>) => {
    try {
    } catch (err: any) {
      dispatch(loadingOrAlert("errors", "Error al crear el producto"));
    }
  };
