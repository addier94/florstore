import React from "react";
import { useSelector } from "react-redux";
import { IPDAllFields } from "../../../redux/types/productDetailType";
import { RootStore } from "../../../utils/TypeScript";

export const Calculate = React.memo(() => {
  const {
    productDetailReducer: { data },
    auth: { tax },
  } = useSelector((state: RootStore) => state);

  return (
    <>
      <div
        className="mb-4 flex justify-between items-center mx-auto px-2"
        style={{ maxWidth: "428px" }}
      >
        <div className="flex justify-center ">
          <div className="bg-yellow-700 shadow-s-btn text-white px-1 rounded-md mr-2">
            {subTotal(data)}
          </div>
          <div className="bg-green-700 shadow-s-btn text-white px-1 rounded-md mr-2">
            {tax}%
          </div>
          <div className="bg-pink-700 shadow-s-btn text-white px-1 rounded-md mr-2">
            {iva(data, tax || "")}
          </div>
          <div className="bg-purple-700 shadow-s-btn text-white px-1 rounded-md mr-2 ">
            {total(data, tax || "")}
          </div>
        </div>
        <div className="bg-gray-700 shadow-s-btn text-white px-1 rounded-md ">
          {investment(data)}
        </div>
      </div>
    </>
  );
});

const subTotal = (pDetails: IPDAllFields[]) => {
  let sumTotal = 0;
  pDetails.map((val) => (sumTotal += parseFloat(val.total)));
  return sumTotal;
};

const iva = (pDetails: IPDAllFields[], tax: string) => {
  let sumTotal = subTotal(pDetails);
  return (sumTotal * parseFloat(tax)) / 100;
};

const total = (pDetail: IPDAllFields[], tax: string) => {
  return subTotal(pDetail) - iva(pDetail, tax);
};

const investment = (pDetail: IPDAllFields[]) => {
  let total = 0;
  pDetail.map((item) => (total += parseFloat(item.box)));
  return total;
};
