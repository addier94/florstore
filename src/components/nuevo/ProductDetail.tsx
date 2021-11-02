import { VscAdd } from "react-icons/vsc";
import { GrCodeSandbox } from "react-icons/gr";
import { GiCash } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { handleModal } from "../../redux/actions/uiModalAction";
import ProductSelected from "./ProductSelected";
import { useForm } from "../../hooks/useForm";
import { FormSubmit, RootStore } from "../../utils/TypeScript";
import { useCallback, useEffect, useState } from "react";
import { loadingOrAlert } from "../../helpers/Alert";
import { calcTotal, sanitize } from "./productDetail";

interface IPDetail {
  box: string;
  qty: string;
  itemPrice: string;
}

const initState: IPDetail = {
  box: "",
  qty: "",
  itemPrice: "",
};

export const ProductDetail = () => {
  const dispatch = useDispatch();

  const [variation, setVariation] = useState({ total: "", productID: "" });
  const { box, qty, itemPrice, handleInputChange, values } = useForm(initState);

  const addTotal = useCallback((val: string) => {
    setVariation({ ...variation, total: val });
  }, []);

  useEffect(() => {
    const { valid, bad } = sanitize(box, qty, itemPrice);
    if (!valid) {
      dispatch(loadingOrAlert("errors", `${bad} inválido`));
    } else {
      if (box && qty && itemPrice) {
        const total = calcTotal(box, qty, itemPrice);
        addTotal(total);
      }
    }
  }, [box, qty, itemPrice, dispatch, addTotal]);

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    const { valid } = sanitize(box, qty, itemPrice);
    if (!valid || !variation.total) {
      dispatch(
        loadingOrAlert("errors", `No es posible hacer cáculos aritmeticos`)
      );
    } else {
      const newProductDetail = { ...values, ...variation };
      console.log(newProductDetail);
    }
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="mx-2 w-24">
        <VscAdd
          onClick={() => dispatch(handleModal(true))}
          className="h-7 w-full p-0 mb-2 shadow-s-btn rounded-xl cursor-pointer"
        />
        <ProductSelected variation={variation} setVariation={setVariation} />
      </div>
      <div className="mx-2 w-16 h-7 shadow-s-btn rounded-lg relative overflow-hidden">
        <input
          className="w-full text-center px-2 outline-none border-none text-s-primary font-semibold bg-transparent"
          type="text"
          placeholder="0"
          name="box"
          value={values.box}
          onChange={handleInputChange}
        />
      </div>
      <div className="mx-2 w-16 pt-2 pb-6 shadow-s-main rounded-lg relative overflow-hidden">
        <label htmlFor="qty">
          <GrCodeSandbox className="h-10 w-10 p-1 shadow-s-input2 rounded-md mx-auto" />
        </label>
        <input
          className="w-16 outline-none border-none text-s-primary font-semibold bg-transparent absolute left-0 bottom-0 px-3"
          type="text"
          id="qty"
          placeholder="0"
          name="qty"
          value={qty}
          onChange={handleInputChange}
        />
      </div>
      <div className="mx-2 w-16 pt-2 pb-6 shadow-s-main rounded-lg relative overflow-hidden">
        <label htmlFor="itemPrice">
          <GiCash className="h-10 w-10 p-1 shadow-s-input2 rounded-md mx-auto" />
        </label>
        <input
          className="w-16 outline-none border-none text-s-primary font-semibold bg-transparent absolute left-0 bottom-0 px-3"
          type="text"
          id="itemPrice"
          placeholder="0"
          name="itemPrice"
          value={itemPrice}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="mx-2 w-16 pt-2 pb-2 shadow-s-main rounded-lg relative overflow-hidden bg-s-primary flex items-center justify-center flex-col leading-5 text-white font-bold"
      >
        <p className="text-white">{variation.total}</p>
      </button>
    </form>
  );
};
