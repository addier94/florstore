import { FC } from "react";
import { GiCash } from "react-icons/gi";
import { GrCodeSandbox } from "react-icons/gr";
import { IPDAllFields } from "../../../redux/types/productDetailType";

type IPDetail = {
  pDetail: IPDAllFields;
  index: number;
  longItem: number;
};

export const ListProductDetail: FC<IPDetail> = ({
  pDetail,
  index,
  longItem,
}) => {
  return (
    <div className="flex justify-center mt-2">
      <div className="mx-2 w-24">
        <div className="flex  justify-between mb-2 text-xs text-gray-200">
          <button className="shadow-s-btn px-1 py-1 rounded-sm bg-green-800">
            Editar
          </button>
          <button className="shadow-s-btn px-1 py-1 rounded-sm bg-red-700">
            Borrar
          </button>
        </div>
        <div className="leading-4 w-44 font-medium text-sm">
          <span className="bg-gray-900 mr-1 shadow-s-btn text-white rounded-md px-1">
            {indexDesc(longItem, index)}
          </span>
          mabel
        </div>
      </div>
      <div className="mx-2 w-16 h-7 shadow-s-btn rounded-lg relative overflow-hidden">
        <p className="w-full text-center px-2 outline-none border-none text-black font-semibold bg-transparent">
          {pDetail.box}
        </p>
      </div>
      <div className="mx-2 w-16 pt-2 pb-6 shadow-s-btn rounded-lg relative overflow-hidden">
        <GrCodeSandbox className="h-10 w-10 p-1 shadow-s-input2 rounded-md mx-auto" />
        <div className="w-16 outline-none border-none text-black font-semibold bg-transparent absolute left-0 bottom-0 px-3">
          {pDetail.qty}
        </div>
      </div>
      <div className="mx-2 w-16 pt-2 pb-6 shadow-s-btn rounded-lg relative overflow-hidden">
        <GiCash className="h-10 w-10 p-1 shadow-s-input2 rounded-md mx-auto" />
        <div className="w-16 outline-none border-none text-black font-semibold bg-transparent absolute left-0 bottom-0 px-3">
          {pDetail.itemPrice}
        </div>
      </div>
      <div className="mx-2 w-16 pt-2 pb-2 shadow-s-btn rounded-lg relative overflow-hidden bg-s-primary flex items-center justify-center flex-col leading-5 text-white font-bold">
        <p className="text-white">{pDetail.total}</p>
      </div>
    </div>
  );
};

const indexDesc = (longItem: number, index: number) => {
  return longItem - index;
};
