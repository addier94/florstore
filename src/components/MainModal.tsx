import { VscChromeClose } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { handleModal } from "../redux/actions/uiModalAction";
import { AddProduct } from "./nuevo/modal/AddProduct";
import { ListProducts } from "./nuevo/modal/ListProducts";

export const MainModal = () => {
  const dispatch = useDispatch();

  return (
    <div className="absolute left-0 top-0 min-h-screen w-full z-40 flex items-center justify-center bg-s-transparent">
      <VscChromeClose
        onClick={() => dispatch(handleModal(false))}
        className="w-10 h-10 cursor-pointer absolute right-0 top-0 z-50 text-white"
      />
      <div className="bg-s-body w-96 h-96 rounded-2xl p-5 my-10 animate__animated animate__fadeIn animate__faster">
        <AddProduct />
        <ListProducts />
      </div>
    </div>
  );
};
