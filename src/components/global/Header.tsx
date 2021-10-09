import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { NavLink, useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  return (
    <>
      <div className="bg-s-body fixed top-0 left-0 w-full">
        <header className="flex justify-between">
          <div className="p-4">
            <div className="flex mb-4">
              <NavLink
                exact={true}
                activeClassName="shadow-s-input-hover"
                className="py-1 px-4 rounded-lg mr-1"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                activeClassName="shadow-s-input-hover"
                className="py-1 px-4 rounded-lg mr-1"
                to="/nuevo"
              >
                Nuevo
              </NavLink>
              <NavLink
                activeClassName="shadow-s-input-hover"
                className="py-1 px-4 rounded-lg mr-1"
                to="/detalles"
              >
                Detalles
              </NavLink>
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-full border-none outline-none bg-transparent text-s-gray py-3 pl-5 pr-12 shadow-s-input2 focus:shadow-s-input-hover rounded-2xl"
                placeholder="Buscar"
              />
              <IoIosSearch className="absolute right-3 top-2 w-8 h-8 text-s-gray2 cursor-pointer hover:text-s-gray" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between m-4 rounded-xl">
            <FaRegUserCircle
              onClick={() => history.push("/perfil")}
              className="mb-3 w-10 h-10 block shadow-s-btn rounded-full cursor-pointer hover:opacity-75"
            />
            <AiOutlineLogout className="w-8 h-8 text-red-700 block shadow-s-btn rounded-full cursor-pointer hover:opacity-75" />
          </div>
        </header>
      </div>
    </>
  );
};
