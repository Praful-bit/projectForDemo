/* eslint-disable react/prop-types */

import { useTshirt } from "../../Context";

function TshirtList() {
  const { deleteItem, handleAddToCart, TShirts } = useTshirt();

  return (
    <div className="flex flex-col space-y-4">
      {TShirts.map((tshirt, index) => {
        // Check if the tshirt object has a nested structure
        const nestedTshirt = tshirt[0] || tshirt;

        return (
          <div
            key={index}
            className="flex items-center justify-between bg-gray-100 rounded-lg p-4"
          >
           
            {console.log("TShirt object:", nestedTshirt)}
            {console.log("ID:", nestedTshirt.id)}
            {console.log("Description:", nestedTshirt.desc)}
            {console.log("Price:", nestedTshirt.price)}
            {console.log("Quantity:", nestedTshirt.quantity)}

            <div className="flex items-center space-x-4">
              <p className="text-xl font-semibold text-gray-900">
                T-Shirt: {nestedTshirt.tshirt}
              </p>
              <p className="text-black">Description: {nestedTshirt.desc}</p>
              <p className="text-green-600">Price: ${nestedTshirt.price}</p>
              <p className="text-black">
                Quantity(L): {nestedTshirt.quantity?.l}
              </p>
              <p className="text-black">
                Quantity(M): {nestedTshirt.quantity?.m}
              </p>
              <p className="text-black">
                Quantity(S): {nestedTshirt.quantity?.s}
              </p>
            </div>
            <div className="flex space-x-4">
              <button
                className="w-14 h-12 rounded-lg text-xl border border-black/10 flex justify-center items-center bg-green-500 hover:bg-blue-700 transition duration-300"
                onClick={() => handleAddToCart(nestedTshirt.id)}
              >
                Add
              </button>
              <button
                className="w-14 h-12 rounded-lg text-xl border border-black/10 flex justify-center items-center bg-gray-100 hover:bg-gray-400 transition duration-300"
                onClick={() => deleteItem(nestedTshirt.id)}
              >
                ❌
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TshirtList;
