import { FC } from "react";
import { useForm } from "../../../hooks/useForm";
import { IProducts } from "../../../redux/types/productsUserType";
import { FcCancel } from "react-icons/fc";
import { FiSave } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { startUpdateProduct } from "../../../redux/actions/productsUserAction";
import { FormSubmit } from "../../../utils/TypeScript";

interface IPros {
  product: IProducts;
  setSelectId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const UpdateProduct: FC<IPros> = ({ product, setSelectId }) => {
  const dispatch = useDispatch();

  const { handleInputChange, name } = useForm({ name: product.name });

  const handleUpdate = (e: FormSubmit) => {
    e.preventDefault();
    const newProduct = { ...product };
    newProduct["name"] = name;
    dispatch(startUpdateProduct(newProduct));
  };
  return (
    <form onSubmit={handleUpdate} className="flex">
      <input
        className="w-full bg-transparent outline-none text-black"
        type="text"
        autoFocus
        name="name"
        value={name}
        onChange={handleInputChange}
      />
      <div className="flex items-start">
        <FcCancel
          onClick={() => setSelectId(undefined)}
          className="shadow-s-btn-icon mr-5 rounded-sm text-red-700 cursor-pointer"
        />
        <button
          type="submit"
          className="shadow-s-btn-icon rounded-sm mr-4 cursor-pointer"
        >
          <FiSave className="text-green-700 " />
        </button>
      </div>
    </form>
  );
};
