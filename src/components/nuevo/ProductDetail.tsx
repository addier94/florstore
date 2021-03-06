import { useSelector } from "react-redux";
import { IPDAllFields } from "../../redux/types/productDetailType";
import { IProducts } from "../../redux/types/productsUserType";
import { RootStore } from "../../utils/TypeScript";
import { AddProductDetail } from "./addProductDetail/AddProductDetail";
import { Calculate } from "./getCalculations/Calculate";
import ListProductDetail from "./listProductDetail/ListProductDetail";

export const ProductDetail = () => {
  const {
    productDetailReducer: { data: allPDetail },
    productsUser: { productList },
  } = useSelector((state: RootStore) => state);

  return (
    <>
      <Calculate />
      <AddProductDetail />
      <div
        className=" overflow-y-scroll pl-2"
        style={{ height: "calc(100vh - 262px)" }}
      >
        {allPDetail &&
          allPDetail.map((item, index) => (
            <ListProductDetail
              pDetail={item}
              key={item.uid}
              index={index}
              longItem={allPDetail.length}
              productName={getNameProduct(item, productList)}
            />
          ))}
      </div>
    </>
  );
};

const getNameProduct = (
  singlePDetail: IPDAllFields,
  productList: IProducts[]
) => {
  const current = productList.find(
    (item) => item.uid === singlePDetail.productID
  );

  return current?.name || "";
};
