import {
  ADD_PRODUCT,
  IProducts,
  IProductsUserType,
  productFormat,
  SET_LIST_PRODUCTS,
  SET_SEARCH_PRODUCTS,
} from "../types/productsUserType";

 

const initState: productFormat = {
  productList: [],
  searchByName: [],
} 

const productsUserReducer = (
  state: productFormat = initState,
  action: IProductsUserType
): productFormat => {

  switch (action.type) {
    case SET_LIST_PRODUCTS:
      return {...state, productList: orderByDate(action.payload)};

    case ADD_PRODUCT:
      return {...state, productList: [action.payload, ...state.productList]};

      case SET_SEARCH_PRODUCTS:
      
      let data: IProducts[]

      if (action.payload.name) {
         data = state.productList.filter((item) =>
          item.name.toLowerCase().includes(action.payload.name.toLowerCase())
        )
        return {...state, searchByName: [...data]};
      } else {
        data = state.productList
      }

      return {...state, productList: [...data], searchByName: []};
    default:
      return state;
  }
};

export default productsUserReducer;

const orderByDate = (productList: IProducts[]):IProducts[] => {
  return productList.sort((a, b) => b.createdAt - a.createdAt);
};
