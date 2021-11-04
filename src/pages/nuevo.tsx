import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MainModal } from "../components/MainModal";
import { ProductDetail } from "../components/nuevo/ProductDetail";
import { startGetPDetail } from "../redux/actions/productDetailAction";

import { RootStore } from "../utils/TypeScript";

const Nuevo = () => {
  const dispatch = useDispatch();
  const { show } = useSelector((state: RootStore) => state.modal);

  useEffect(() => {
    dispatch(startGetPDetail());
  }, [dispatch]);

  return (
    <>
      <ProductDetail />
      {show && <MainModal />}
    </>
  );
};
export default Nuevo;
