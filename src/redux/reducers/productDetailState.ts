import {
  IPDetailState,
  IProductDetailType,
  SET_PRODUCT_DETAIL,
} from "../types/productDetailType";

const initState = {
  data: [],
};

const productDetailReducer = (
  state: IPDetailState = initState,
  action: IProductDetailType
) => {
  switch (action.type) {
    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        data: [action.payload, ...state.data],
      };

    default:
      return state;
  }
};

export default productDetailReducer;
