import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const amount = useSelector((store) => store.BasketSliceReducer.amount);
  return (
    <div className="flex - flex-row justify-between px-6 py-4 bg-gray-500 ">
      <NavLink className="bg-blue-400 text-2xl font-bold rounded-xl px-2 py-1 ">
        Mini E-Commerce
      </NavLink>
      <ul>
        <NavLink
          to={"/"}
          className="bg-blue-400 text-2xl font-bold rounded-xl px-2 py-1 mx-2 "
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className="bg-blue-400 text-2xl font-bold rounded-xl px-2 py-1 mx-2 "
        >
          About
        </NavLink>
        <NavLink
          to={"/cart"}
          className="bg-blue-400 text-2xl font-bold rounded-xl px-2 py-1 mx-2 "
        >
          Cart
          <span className="bg-red-500 align-top text-sm rounded-2xl px-0.5 py-0.7 ml-1 text-white">
            {amount}
          </span>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
