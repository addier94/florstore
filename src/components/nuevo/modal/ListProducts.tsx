import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../utils/TypeScript";
import Moment from "react-moment";
import {
  IProducts,
  productFormat,
} from "../../../redux/types/productsUserType";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { AiFillEdit } from "react-icons/ai";
import { startDelitingProduct } from "../../../redux/actions/productsUserAction";

export const ListProducts = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootStore) => state.productsUser);

  const products = ({ searchByName, productList }: productFormat) => {
    return searchByName.length > 0 ? searchByName : productList;
  };

  const descIndex = (index: number) => {
    const itemLength =
      state.searchByName.length > 0 ? state.searchByName : state.productList;
    return itemLength.length - index;
  };

  const deleteProduct = (item: IProducts) => {
    dispatch(startDelitingProduct(item));
  };

  return (
    <div className="w-full h-72 overflow-y-scroll">
      {products &&
        products(state).map((item, index) => (
          <div key={item.uid} className="flex justify-between mb-2">
            <div>
              <span className="bg-s-primary text-white p-1 rounded-md mr-1">
                {descIndex(index)}
              </span>
              {item.name}
              <Moment className="text-gray-400 ml-2" fromNow>
                {item.createdAt}
              </Moment>
            </div>
            <div className="flex">
              <RiDeleteBin7Fill
                onClick={() => deleteProduct(item)}
                className="shadow-s-btn-icon mr-5 rounded-sm text-red-700 cursor-pointer"
              />
              <AiFillEdit className="text-green-700 shadow-s-btn-icon rounded-sm mr-2 cursor-pointer" />
            </div>
          </div>
        ))}
    </div>
  );
};
