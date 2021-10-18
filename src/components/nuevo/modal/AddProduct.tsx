export const AddProduct = () => {
  return (
    <form className="mb-4 flex justify-between">
      <div>
        <input
          placeholder="Nombro para el producto"
          className="w-full border-none outline-none bg-transparent text-s-gray py-2 px-4 shadow-s-input2 focus:shadow-s-input-hover rounded-lg"
          autoComplete="off"
          autoFocus
          name="name"
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
