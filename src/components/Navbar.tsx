import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../images/logo-ALTA-white.png";

interface NavbarProps {
  children?: React.ReactNode;
  listname?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children, listname }) => {
  const location = useLocation();

  const isActiveRoute = (route: string): boolean => {
    return location.pathname === route;
  };

  return (
    <div className="2xl-container w-screen h-screen grid grid-rows-5 grid-cols-4">
      <div className="row-span-5 bg-alta-blue shadow-3xl text-white">
        <div className="grid justify-items-center py-10">
          <img src={logo} alt="" className="w-40" />
        </div>
        <ul className="menu menu-vertical px-5">
          <div className="border-b-2 border-white mb-3" />
          <li className="rounded-none cursor-pointer hover:bg-alta-orange items-left">
            <NavLink
              to={"/dashboard"}
              className={`rounded-none text-white text-base ${
                isActiveRoute("/dashboard") ? "text-alta-orange" : ""
              }`}
            >
              Dashboard
            </NavLink>
          </li>
          <li className="rounded-none cursor-pointer hover:bg-alta-orange items-left">
            <NavLink
              to={"/mentee"}
              className={`rounded-none text-white text-base ${
                isActiveRoute("/mentee") ? "text-alta-orange" : ""
              }`}
            >
              Mentee
            </NavLink>
          </li>
          <div className="border-b-2 border-white pt-3" />
          <li className="rounded-none cursor-pointer hover:bg-alta-orange items-left mt-3">
            <NavLink
              to={"/userlist"}
              className={`rounded-none text-white text-base ${
                isActiveRoute("/userlist") ? "bg-alta-orange" : ""
              }`}
            >
              User
            </NavLink>
          </li>
          <li className="rounded-none cursor-pointer hover:bg-alta-orange items-left">
            <NavLink
              to={"/classlist"}
              className={`rounded-none text-white text-base ${
                isActiveRoute("/classlist") ? "bg-alta-orange" : ""
              }`}
            >
              Class
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="col-span-3 text-alta-blue bg-white shadow-md py-6 px-10">
        <div className="flex-none">
          <h1 className="text-2xl font-semibold">Immersive Dashboard</h1>
          <div className="grid grid-cols-2">
            <h1 className="text-xl">{listname}</h1>
            <h1 className="text-xl text-end">Hello, </h1>
          </div>
        </div>
      </div>
      <div className="row-span-4 col-span-3 py-6 px-10">{children}</div>
    </div>
  );
};

export default Navbar;
