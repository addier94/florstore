import {
  GET_PDETAIL,
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

    case GET_PDETAIL:
      return {
        ...state,
        data: action.payload.sort((a, b) => b.createdAt - a.createdAt),
      };

    default:
      return state;
  }
};

export default productDetailReducer;
