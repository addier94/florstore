import { VscAdd } from "react-icons/vsc";
import { GrCodeSandbox } from "react-icons/gr";
import { GiCash } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { handleModal } from "../../redux/actions/uiModalAction";
import ProductSelected from "./ProductSelected";
import { useForm } from "../../hooks/useForm";
import { FormSubmit, InputChange, IPDCalculate } from "../../utils/TypeScript";
import { useEffect, useState } from "react";
import { loadingOrAlert } from "../../helpers/Alert";

const calculateSubtotal = (qty: string, itemPrice: string) => {
  return (parseFloat(qty) * parseFloat(itemPrice)).toString();
};
const calculateTotal = (box: string, subTotal: string) => {
  return (parseFloat(subTotal) - parseFloat(box)).toString();
};
type PDValidate = {
  valid: boolean;
  bad: string;
};
const sanitize = (box: string, qty: string, itemPrice: string): PDValidate => {
  const rege = /^\d*\.?\d*$/;
  let result = { valid: false, bad: "" };
  // true when is match (rege.test(box))
  if (!rege.test(box.trim())) {
    result["bad"] = box.strike();
    result["valid"] = false;
    return result;
  } else if (!rege.test(qty.trim())) {
    result["bad"] = qty.strike();
    result["valid"] = false;
    return result;
  } else if (!rege.test(itemPrice.trim())) {
    result["bad"] = itemPrice.strike();
    result["valid"] = false;
    return result;
  } else {
    result["valid"] = true;
    return result;
  }
};

type IPDetail = {
  box: string;
  qty: string;
  itemPrice: string;
};

const initState: IPDetail = {
  box: "",
  qty: "",
  itemPrice: "",
};

type IPDetailCalculated = {
  productID: "";
  subtotal: "";
  total: "";
  totalLessIva: "";
};

export const ProductDetail = () => {
  const dispatch = useDispatch();
  const { box, qty, itemPrice, handleInputChange, values } = useForm(initState);

  useEffect(() => {
    const { valid, bad } = sanitize(box, qty, itemPrice);
    if (!valid) {
      dispatch(loadingOrAlert("errors", `${bad} inválido`));
    } else {
      if (box && qty && itemPrice) {
        const subTotal = calculateSubtotal(qty, itemPrice);
        const total = calculateTotal(box, subTotal);
        console.log("subTotal:", subTotal);
        console.log("total:", total);
      }
    }
  }, [box, qty, itemPrice, dispatch]);

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    console.log("onSubmit", values);
  };

  return (
    <form className="flex justify-center" onSubmit={handleSubmit}>
      <div className="mx-2 w-24">
        <VscAdd
          onClick={() => dispatch(handleModal(true))}
          className="h-7 w-full p-0 mb-2 shadow-s-btn rounded-xl cursor-pointer"
        />
        <ProductSelected />
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
        <p className="text-red-700">28394</p>
        <p className="text-yellow-200">28394</p>
        <p className="text-green-900">8393</p>
      </button>
    </form>
  );
};
