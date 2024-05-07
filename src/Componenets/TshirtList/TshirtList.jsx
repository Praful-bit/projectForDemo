/* eslint-disable react/prop-types */

// import { } from "react";
import { useTshirt } from "../../Context";

function TshirtList({ tshirt }) {
  const { deleteItem, handleAddToCart } = useTshirt();

  
  
  return (
    <div className="flex items-center justify-between mb-4 bg-gray-100 rounded-lg p-4">
      <div>
        <p className="text-xl font-semibold text-gray-900 pr-4">
          T-Shirt: {tshirt.tshirt}
          <span className="text-black pl-3">Description: {tshirt.desc}</span>
          <span className="text-green-600 pl-3">Price: ${tshirt.price}</span>
          <span className="text-black pl-4">
            Quantity(L): {tshirt.quantity.l}
          </span>
          <span className="text-black pl-4">
            Quantity(M): {tshirt.quantity.m}
          </span>
          <span className="text-black pl-4">
            Quantity(S): {tshirt.quantity.s}
          </span>
        </p>
      </div>
      <button
        className="inline-flex ml-16 w-14 h-12 rounded-lg text-xl border border-black/10 justify-center items-center bg-green-500 hover:bg-blue-700 transition duration-300"
        onClick={handleAddToCart}
      >
        Add
      </button>
      <button
        className="inline-flex mr-8 w-14 h-12 rounded-lg text-xl border border-black/10 justify-center items-center bg-gray-100 hover:bg-gray-400 transition duration-300"
        onClick={() => deleteItem(tshirt.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TshirtList;
