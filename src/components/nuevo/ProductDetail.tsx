import { useSelector } from "react-redux";
import { RootStore } from "../../utils/TypeScript";
import { AddProductDetail } from "./addProductDetail/AddProductDetail";
import { ListProductDetail } from "./listProductDetail/ListProductDetail";

export const ProductDetail = () => {
  const { data: allPDetail } = useSelector(
    (state: RootStore) => state.productDetailReducer
  );
  return (
    <div>
      <AddProductDetail />
      <div
        className=" overflow-y-scroll pl-2"
        style={{ height: "calc(100vh - 234px)" }}
      >
        {allPDetail &&
          allPDetail.map((item, index) => (
            <ListProductDetail
              pDetail={item}
              key={item.uid}
              index={index}
              longItem={allPDetail.length}
            />
          ))}
      </div>
    </div>
  );
};
