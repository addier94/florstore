import { useSelector } from "react-redux";
import { RootStore } from "../../../utils/TypeScript";
import Moment from "react-moment";
import { useCallback } from "react";
import { productFormat } from "../../../redux/types/productsUserType";

export const ListProducts = () => {
  const state = useSelector((state: RootStore) => state.productsUser);

  const products = useCallback(
    ({ searchByName, productList }: productFormat) => {
      return searchByName.length > 0 ? searchByName : productList;
    },
    []
  );

  const descIndex = useCallback(
    (index: number) => {
      const itemLength =
        state.searchByName.length > 0 ? state.searchByName : state.productList;
      return itemLength.length - index;
    },
    [state]
  );

  return (
    <div className="w-full h-72 overflow-y-scroll">
      {products &&
        products(state).map((item, index) => (
          <div key={item.uid}>
            <div>
              <span>{descIndex(index)}</span>
              {item.name}
              <Moment className="text-gray-400 ml-2" fromNow>
                {item.createdAt}
              </Moment>
            </div>
          </div>
        ))}
    </div>
  );
};
