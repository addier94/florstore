import { FC } from "react";
import { useForm } from "../../../hooks/useForm";
import { IProducts } from "../../../redux/types/productsUserType";
import { FcCancel } from "react-icons/fc";
import { FiSave } from "react-icons/fi";

interface IPros {
  product: IProducts;
  setSelectId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const DeleteProduct: FC<IPros> = ({ product, setSelectId }) => {
  const { handleInputChange, name } = useForm({ name: product.name });

  const handleUpdate = (name: string) => {
    const updateData = product;
    updateData["name"] = name;
    console.log("update ", updateData);
  };
  return (
    <form className="flex">
      <input
        className="w-full bg-transparent outline-none text-black"
        type="text"
        autoFocus
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <div className="flex">
        <FcCancel
          onClick={() => setSelectId(undefined)}
          className="shadow-s-btn-icon mr-5 rounded-sm text-red-700 cursor-pointer"
        />
        <FiSave
          onClick={() => handleUpdate(name)}
          className="text-green-700 shadow-s-btn-icon rounded-sm mr-4 cursor-pointer"
        />
      </div>
    </form>
  );
};
