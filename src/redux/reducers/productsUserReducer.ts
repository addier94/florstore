import {
  CREATE_PRODUCT,
  GET_ALL_OWN_PRODUCTS,
  IProducts,
  IProductsUserType,
} from "../types/productsUserType";

const productsUserReducer = (
  state: IProducts[] = [],
  action: IProductsUserType
): IProducts[] => {
  switch (action.type) {
    case GET_ALL_OWN_PRODUCTS:
      return action.payload;

    case CREATE_PRODUCT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default productsUserReducer;
