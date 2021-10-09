import { RiArrowGoBackFill } from "react-icons/ri";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center flex-col justify-center">
      <button className="shadow-s-input mb-2 rounded-full px-5 py-4 hover:opacity-75">
        <RiArrowGoBackFill className="w-14 h-14" />
      </button>
      <h2 className="shadow-s-main p-8 font-bold rounded-3xl text-3xl my-4">
        <span className="text-red-700">404</span> | NotFound
      </h2>
    </div>
  );
};

export default NotFound;
