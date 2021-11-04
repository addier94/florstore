import { AddProductDetail } from "./addProductDetail/AddProductDetail";
import { ListProductDetail } from "./listProductDetail/ListProductDetail";

export const ProductDetail = () => {
  return (
    <div>
      <AddProductDetail />
      <div
        className=" overflow-y-scroll pl-2"
        style={{ height: "calc(100vh - 234px)" }}
      >
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
        <ListProductDetail />
      </div>
    </div>
  );
};
