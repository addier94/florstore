import { VscAdd } from "react-icons/vsc";
import { GrCodeSandbox } from "react-icons/gr";
import { GiCash } from "react-icons/gi";
import { useDispatch } from "react-redux";

import ProductSelected from "./ProductSelected";

import { useEffect, useState } from "react";

import { calcTotal, sanitize } from "./productDetail.helpers";
import { handleModal } from "../../../redux/actions/uiModalAction";
import { useForm } from "../../../hooks/useForm";
import { FormSubmit } from "../../../utils/TypeScript";
import { loadingOrAlert } from "../../../helpers/Alert";
import { startCreateProductDetail } from "../../../redux/actions/productDetailAction";

const initState = { box: "", qty: "", itemPrice: "" };
const initStateVariation = { total: "", productID: "" };

export const AddProductDetail = () => {
  const dispatch = useDispatch();

  const [validObj, setValidObj] = useState(false);
  const [variation, setVariation] = useState(initStateVariation);
  const { box, qty, itemPrice, handleInputChange, values, reset } =
    useForm(initState);

  useEffect(() => {
    const { valid, bad } = sanitize(box, qty, itemPrice);
    if (!valid) {
      dispatch(loadingOrAlert("errors", `${bad} inválido`));
      setValidObj(false);
    } else {
      if (box && qty && itemPrice) {
        setValidObj(true);
        const total = calcTotal(box, qty, itemPrice);
        setVariation((v) => ({ ...v, total }));
      } else {
        setValidObj(false);
      }
    }
  }, [box, qty, itemPrice, dispatch]);

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    if (validObj && variation.productID) {
      const newProductDetail = { ...values, ...variation };
      dispatch(startCreateProductDetail(newProductDetail));
      reset();
      setVariation(initStateVariation);
    } else {
      dispatch(loadingOrAlert("errors", "Revisa tus registros"));
    }
  };

  return (
    <form className="flex justify-center pb-2" onSubmit={handleSubmit}>
      <div className="mx-2 w-24">
        <VscAdd
          onClick={() => dispatch(handleModal(true))}
          className="h-7 w-full p-0 mb-2 shadow-s-btn rounded-xl cursor-pointer"
        />
        <ProductSelected variation={variation} setVariation={setVariation} />
      </div>
      <div className="mx-2 w-16 h-7 shadow-s-btn rounded-lg relative overflow-hidden">
        <input
          className="w-full text-center px-2 outline-none border-none text-black font-semibold bg-transparent"
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
          className="w-16 outline-none border-none text-black font-semibold bg-transparent absolute left-0 bottom-0 px-3"
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
          className="w-16 outline-none border-none text-black font-semibold bg-transparent absolute left-0 bottom-0 px-3"
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
