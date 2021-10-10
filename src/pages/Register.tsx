import React from "react";
import { MdSwitchAccount } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className="w-80 p-8 my-6 rounded-s-sm bg-s-body shadow-s-main"
        style={{ height: "570px" }}
      >
        <div className="flex justify-center mb-6">
          <MdSwitchAccount className="w-12 h-12 shadow-s-btn-icon rounded-full" />
        </div>
        <div className="text-center text-2xl tracking-wider font-bold">
          Crear cuenta
        </div>

        <form className="mt-8">
          <div className="py-2">
            <input
              type="text"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="Nombre"
            />
          </div>
          <div className="py-2">
            <input
              type="email"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="Email"
            />
          </div>
          <div className="pt-3">
            <input
              type="password"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="Password"
            />
          </div>
          <div className="pt-3">
            <input
              type="cf_password"
              className="w-full border-none outline-none bg-transparent text-s-gray py-3 px-6 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
              placeholder="Confirm password"
            />
          </div>
          <button
            type="submit"
            className="hover:opacity-70 bg-s-primary font-semibold shadow-s-btn mt-8 w-full py-3 text-white rounded-3xl"
          >
            Registro
          </button>
        </form>
        <p className="mt-4 text-s-gray2 text-center">
          Ya tengo una
          <Link
            to="/login"
            className="text-s-gray ml-1 font-semibold hover:opacity-70"
          >
            Cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
