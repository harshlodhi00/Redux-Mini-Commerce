import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../Features/BasketSlice";

const Product = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <>
      <div className="mt-10 mx-auto">
        {data ? (
          <div className="grid grid-cols-2 mx-8 md:grid-cols-5 sm:grid-cols-2   ">
            {data.map((item, index) => (
              <div
                key={item.id}
                className="flex border-gray-500 border-2 m-2 rounded-xl justify-center flex-col text-center  "
              >
                <img
                  className=" w-40 h-40 border-gray-100 mx-auto my-2  "
                  src={item.image}
                  alt="product Image"
                />
                <h3 className=" w-60 h-14 text-md mx-2 text-center ">
                  {item.title}
                </h3>
                <h2 className="text-center font-bold text-sky-400   ">
                  $ {item.price}
                </h2>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="w-40 h-10 bg-green-400 rounded-xl mx-auto mt-4 mb-2 hover:bg-green-500 active:bg-blue-400"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default Product;
