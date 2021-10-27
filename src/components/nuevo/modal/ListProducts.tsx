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
import { DeleteProduct } from "./DeleteProduct";
import { useState } from "react";

export const ListProducts = () => {
  const dispatch = useDispatch();
  const [selectId, setSelectId] = useState<string | undefined>(undefined);
  const state = useSelector((state: RootStore) => state.productsUser);

  const products = ({ searchByName, productList }: productFormat) => {
    return searchByName.length > 0 ? searchByName : productList;
  };

  const descIndex = (index: number) => {
    const itemLength =
      state.searchByName.length > 0 ? state.searchByName : state.productList;
    return itemLength.length - index;
  };

  const handleDelete = (item: IProducts) => {
    dispatch(startDelitingProduct(item));
  };

  return (
    <div className="w-full h-72 overflow-y-scroll">
      {products &&
        products(state).map((item: IProducts, index) => (
          <div key={item.uid} className="flex justify-between mb-2">
            <div className="flex items-center">
              <span className="bg-s-primary text-white px-1 rounded-md mr-1">
                {descIndex(index)}
              </span>
              {!isEdit(selectId, item.uid) && (
                <span className="flex items-center">
                  {item.name}
                  <AiFillEdit
                    onClick={() => setSelectId(item.uid)}
                    className="ml-1 text-green-700 cursor-pointer"
                  />
                </span>
              )}
              {isEdit(selectId, item.uid) && (
                <DeleteProduct product={item} setSelectId={setSelectId} />
              )}
              {/* <Moment className="text-gray-400 ml-2" fromNow>
                {item.createdAt}
              </Moment> */}
            </div>

            {!isEdit(selectId, item.uid) && (
              <div className="flex">
                <RiDeleteBin7Fill
                  onClick={() => handleDelete(item)}
                  className="shadow-s-btn-icon mr-4 rounded-sm text-red-700 cursor-pointer"
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

const isEdit = (selectId: any, itemId: any): boolean => {
  return selectId === itemId;
};
