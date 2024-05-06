/* eslint-disable react/prop-types */
import { useState } from "react";


function Card({ onClose, setQuantity }) {
  const [quantityInput, setQuantityInput] = useState({ l: 0, m: 0, s: 0 });

    const handleSubmit = (e) => {
      e.preventDefault();
      setQuantity(quantityInput);
      onClose();
    };
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Set Quantity</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center">
            <label htmlFor="quantity" className="mr-2">
              Quantity 
            </label>
            <input
              id="quantity"
              type="number"
              className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              value={quantityInput}
              onChange={(e)=>setQuantityInput(e.target.value)}
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Set
            </button>
            <button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Card;
