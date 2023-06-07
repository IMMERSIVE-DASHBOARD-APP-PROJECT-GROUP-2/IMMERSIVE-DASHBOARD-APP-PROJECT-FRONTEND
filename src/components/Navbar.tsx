import React, { FC } from "react";
import logo from "../images/logo-ALTA-white.png";
import { Link } from "react-router-dom";

interface NavbarProps {
  children?: React.ReactNode;
  listname?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children, listname }) => {
  return (
    <div className="2xl-container w-screen h-screen grid grid-rows-5 grid-cols-4">
      <div className="row-span-5 bg-alta-blue shadow-3xl text-white">
        <div className="grid justify-items-center py-10">
          <img src={logo} alt="" className="w-40" />
        </div>
        <ul className="menu menu-vertical px-5">
          <div className="border-b-2 border-white mb-3" />
          <li className="rounded-none cursor-pointer hover:bg-alta-orange items-left">
            <Link to={"#"} className="rounded-none text-white text-base">
              Dashboard
            </Link>
          </li>
          <li className="rounded-none cursor-pointer hover:bg-alta-orange items-left">
            <Link to={"#"} className="rounded-none text-white text-base">
              Mentee
            </Link>
          </li>
          <div className="border-b-2 border-white pt-3" />
          <li className="rounded-none cursor-pointer hover:bg-alta-orange items-left mt-3">
            <Link
              to={"/userlist"}
              className="rounded-none text-white text-base"
            >
              User
            </Link>
          </li>
          <li className="rounded-none cursor-pointer hover:bg-alta-orange items-left">
            <Link
              to={"/classlist"}
              className="rounded-none text-white text-base"
            >
              Class
            </Link>
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
