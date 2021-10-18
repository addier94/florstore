import { useSelector } from "react-redux";
import { ProductDetail } from "../components/nuevo/ProductDetail";
import { ProductModal } from "../components/nuevo/ProductModal";
import { RootStore } from "../utils/TypeScript";

const Nuevo = () => {
  const { show } = useSelector((state: RootStore) => state.modal);

  return (
    <>
      <ProductDetail />
      {show && <ProductModal />}
    </>
  );
};
export default Nuevo;
