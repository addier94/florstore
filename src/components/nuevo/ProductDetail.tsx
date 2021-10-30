import { VscAdd } from "react-icons/vsc";
import { BsBox } from "react-icons/bs";
import { GrCodeSandbox } from "react-icons/gr";
import { GiCash } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { handleModal } from "../../redux/actions/uiModalAction";
import ProductSelected from "./ProductSelected";

export const ProductDetail = () => {
  const dispach = useDispatch();
  return (
    <form className="flex justify-center">
      <div className="mx-2 w-24">
        <VscAdd
          onClick={() => dispach(handleModal(true))}
          className="h-10 w-full p-0 mb-2 shadow-s-btn rounded-xl cursor-pointer"
        />
        {/* <input
          type="text"
          placeholder="Seleccionar"
          className="w-full px-2 outline-none bg-transparent"
        /> */}
        <ProductSelected />
      </div>
      <div className="mx-2 w-16 pt-2 pb-6 shadow-s-main rounded-lg relative overflow-hidden">
        <label htmlFor="box">
          <BsBox className="h-10 w-10 p-1 shadow-s-input2 rounded-md mx-auto" />
        </label>
        <input
          type="number"
          placeholder="0"
          id="box"
          className="w-16 outline-none border-none text-s-primary font-semibold bg-transparent absolute left-0 bottom-0 px-3"
        />
      </div>
      <div className="mx-2 w-16 pt-2 pb-6 shadow-s-main rounded-lg relative overflow-hidden">
        <label htmlFor="qty">
          <GrCodeSandbox className="h-10 w-10 p-1 shadow-s-input2 rounded-md mx-auto" />
        </label>
        <input
          type="number"
          placeholder="0"
          id="qty"
          className="w-16 outline-none border-none text-s-primary font-semibold bg-transparent absolute left-0 bottom-0 px-3"
        />
      </div>
      <div className="mx-2 w-16 pt-2 pb-6 shadow-s-main rounded-lg relative overflow-hidden">
        <label htmlFor="price">
          <GiCash className="h-10 w-10 p-1 shadow-s-input2 rounded-md mx-auto" />
        </label>
        <input
          type="number"
          placeholder="0"
          id="price"
          className="w-16 outline-none border-none text-s-primary font-semibold bg-transparent absolute left-0 bottom-0 px-3"
        />
      </div>
      <div className="mx-2 w-16 pt-2 pb-6 shadow-s-main rounded-lg relative overflow-hidden bg-s-primary"></div>
    </form>
  );
};
