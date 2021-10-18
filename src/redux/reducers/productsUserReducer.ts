import {
  CREATE_PRODUCTS_USER_ID,
  IProductsUser,
  IProductsUserType,
} from "../types/productsUserType";

const productsUserReducer = (
  state: IProductsUser[] = [],
  action: IProductsUserType
): IProductsUser[] => {
  switch (action.type) {
    case CREATE_PRODUCTS_USER_ID:
      return state;
    default:
      return state;
  }
};

export default productsUserReducer;
