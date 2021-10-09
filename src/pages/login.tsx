import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-80 p-8 my-6 rounded-s-sm bg-s-body shadow-s-main"
        style={{ height: "520px" }}
      >
        <div className="flex justify-center mb-6">
          <AiOutlineLogin className="w-12 h-12 shadow-s-btn-icon rounded-full" />
        </div>
        <div className="text-center text-2xl tracking-wider font-bold">
          Iniciar sesión
        </div>

        <form className="mt-8">
          <div className="py-2">
            <input
              type="email"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="email"
            />
          </div>
          <div className="pt-3">
            <input
              type="password"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            className="hover:opacity-70 bg-s-primary font-semibold shadow-s-btn mt-8 w-full py-3 text-white rounded-3xl"
          >
            Login
          </button>
        </form>
        <div className="shadow-s-btn hover:opacity-70 rounded-3xl mt-4 flex justify-center py-3 cursor-pointer">
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="ml-2 font-semibold">Iniciar sesion con google</p>
        </div>
        <p className="mt-4 text-s-gray2 text-center">
          Aún no tengo una
          <Link
            to="/register"
            className="text-s-gray ml-1 font-semibold hover:opacity-70"
          >
            Cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
