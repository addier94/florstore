import { useSelector } from "react-redux";
import { MainModal } from "../components/MainModal";
import { ProductDetail } from "../components/nuevo/ProductDetail";

import { RootStore } from "../utils/TypeScript";

const Nuevo = () => {
  const { show } = useSelector((state: RootStore) => state.modal);

  return (
    <>
      <ProductDetail />
      {show && <MainModal />}
    </>
  );
};
export default Nuevo;
