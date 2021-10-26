import {
  ADD_PRODUCT,
  IProducts,
  IProductsUserType,
  productFormat,
  SET_DELETE_PRODUCT,
  SET_LIST_PRODUCTS,
  SET_SEARCH_PRODUCTS,
} from "../types/productsUserType";

const initState: productFormat = {
  productList: [],
  searchByName: [],
};

const productsUserReducer = (
  state: productFormat = initState,
  action: IProductsUserType
): productFormat => {
  switch (action.type) {
    case SET_LIST_PRODUCTS:
      return { ...state, productList: orderByDate(action.payload) };

    case ADD_PRODUCT:
      return { ...state, productList: [action.payload, ...state.productList] };

    case SET_SEARCH_PRODUCTS:
      if (action.payload.name) {
        let searchMatches: IProducts[] = state.productList.filter((item) =>
          item.name.toLowerCase().includes(action.payload.name.toLowerCase())
        );
        if (searchMatches.length === 0) {
          searchMatches.push(itemNotRegistered(action.payload.name));
        }
        return { ...state, searchByName: searchMatches };
      }

      return {
        ...state,
        productList: state.productList,
        searchByName: [],
      };

    case SET_DELETE_PRODUCT:
      return {
        ...state,
        productList: deleteProduct(state.productList, action.payload),
      };
    default:
      return state;
  }
};

export default productsUserReducer;

const orderByDate = (productList: IProducts[]): IProducts[] => {
  return productList.sort((a, b) => b.createdAt - a.createdAt);
};

const itemNotRegistered = (name: string) => {
  return {
    uid: "87",
    name: `${name} aun no esta registrado`,
    createdAt: 832948493955,
    userID: "02095938095485",
  };
};

const deleteProduct = (products: IProducts[], userId: string) => {
  return products.filter((item) => item.uid !== userId);
};
