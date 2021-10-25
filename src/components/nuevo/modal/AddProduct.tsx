import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { startCreateProduct } from "../../../redux/actions/productsUserAction";
import { SET_SEARCH_PRODUCTS } from "../../../redux/types/productsUserType";
import { FormSubmit } from "../../../utils/TypeScript";

export const AddProduct = () => {
  const { name, handleInputChange, reset } = useForm({ name: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    dispatch(startCreateProduct(name, reset));
  };

  useEffect(() => {
    dispatch({ type: SET_SEARCH_PRODUCTS, payload: { name } });
  }, [dispatch, name]);
  
  return (
    <form onSubmit={handleSubmit} className="mb-4 flex justify-between">
      <div>
        <input
          placeholder="Nombro para el producto"
          className="w-full border-none outline-none bg-transparent text-s-gray py-2 px-4 shadow-s-input2 focus:shadow-s-input-hover rounded-lg"
          autoComplete="off"
          autoFocus
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        {/* {newProduct.name.length > 0 && (
          <VscChromeClose className="absolute right-4 top-3 w-5 h-5 cursor-pointer" />
        )} */}
      </div>
      <button
        type="submit"
        className="hover:opacity-70 bg-s-primary font-semibold shadow-s-btn px-3 text-white rounded-md ml-2"
      >
        Crear
      </button>
    </form>
  );
};
