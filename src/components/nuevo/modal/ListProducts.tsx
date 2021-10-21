import { useSelector } from "react-redux";
import { RootStore } from "../../../utils/TypeScript";
import Moment from "react-moment";

export const ListProducts = () => {
  const products = useSelector((state: RootStore) => state.productsUser);

  const descIndex = (products: number, index: number): number => {
    return products - index;
  };

  return (
    <div className="w-full h-72 overflow-y-scroll">
      {products &&
        products.map((item, index) => (
          <div key={item.uid}>
            <div>
              <span>{descIndex(products.length, index)}</span>
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
