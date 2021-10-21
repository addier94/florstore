import { useSelector } from "react-redux";
import { RootStore } from "../../../utils/TypeScript";

export const ListProducts = () => {
  const products = useSelector((state: RootStore) => state.productsUser);
  return (
    <div className="w-full h-72 overflow-y-scroll">
      {products &&
        products.map((item) => <div key={item.uid}>{item.name}</div>)}
    </div>
  );
};
