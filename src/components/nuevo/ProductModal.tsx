import { VscChromeClose } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { handleModal } from "../../redux/actions/uiModalAction";
import { FormSubmit } from "../../utils/TypeScript";

export const ProductModal = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
  };

  return (
    <div className="absolute left-0 top-0 min-h-screen w-full z-50 flex items-center justify-center bg-s-transparent">
      <VscChromeClose
        onClick={() => dispatch(handleModal(false))}
        className="w-10 h-10 cursor-pointer absolute right-0 top-0 z-50 text-white"
      />
      <div className="bg-s-body w-96 h-96 rounded-2xl p-5 my-10 animate__animated animate__fadeIn animate__faster">
        <form onSubmit={handleSubmit} className="mb-4 flex justify-between">
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
        <div className="w-full h-72 overflow-y-scroll">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            ex rem dicta accusamus voluptatibus ea eius, consectetur asperiores
            natus quis suscipit facilis nostrum aperiam deserunt ipsa veritatis
            quasi officia laborum. Eius molestias nobis veniam ut quidem
            reiciendis ea minima temporibus explicabo assumenda libero,
            obcaecati praesentium quas amet maiores suscipit porro inventore
            facilis voluptatem dolorem rerum deleniti provident. Obcaecati,
            aliquid voluptatum? Beatae nobis provident consequatur architecto
            commodi facere! Voluptates sint ea quasi placeat a eos rem
            praesentium maiores rerum, harum deleniti perferendis ab doloribus
            saepe repellat vitae et quae ad commodi? Veritatis cupiditate
            repellat, dolore cumque laudantium et quibusdam fuga? Dolorem minima
            quo quibusdam minus eum quaerat odio ex suscipit, repellat harum in
            iure itaque illum cumque, labore tempore debitis doloribus!
          </p>
        </div>
      </div>
    </div>
  );
};
