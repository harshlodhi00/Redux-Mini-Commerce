import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreseQuantity, increseQuantity } from "../Features/BasketSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { products, amount, total } = useSelector(
    (store) => store.BasketSliceReducer
  );

  return (
    <div className="w-1/2 m-auto text-center ">
      <h2 className="">Cart</h2>
      <ul>
        {products.map((item) => (
          <li
            key={item.id}
            className="flex flex-row border-2 border-gray-400 my-4 justify-evenly"
          >
            <img
              className="w-14 h-14 mx-2 my-2"
              src={item.image}
              alt={item.title}
            />
            <div className="">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <div className="text-green-500 mr-2">$ {item.price}</div>
            </div>
            <div className=" flex flex-row">
              <button
                className="w-4 h-6 bg-green-400 m-2"
                onClick={() => {
                  dispatch(increseQuantity(item.id));
                }}
              >
                {" "}
                +{" "}
              </button>
              <div className="text-center align-middle flex ">
                {" "}
                {item.quantity}
              </div>
              <button
                className="w-4 h-6 bg-red-400 m-2"
                onClick={() => {
                  dispatch(decreseQuantity(item.id));
                }}
              >
                {" "}
                -{" "}
              </button>
            </div>
          </li>
        ))}
      </ul>

      <h1 className=" text-2xl font-semibold">
        Total Items: <span className=" text-red-500 font-bold "> {amount}</span>
      </h1>
      <h1 className=" text-2xl font-semibold">
        Total Price: <span className=" text-red-500 font-bold ">$ {total}</span>
      </h1>

      
    </div>
  );
};

export default Cart;
