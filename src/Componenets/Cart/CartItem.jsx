/* eslint-disable react/prop-types */

import { useState } from "react";
import FinalValue from "./FinalValue";

function CartItem(props) {
  const [numberOfItems, setNumberOfItems] = useState(1);

  const handleIncrease = () => {
    setNumberOfItems(numberOfItems + 1);
  };

  const handleDecrease = () => {
    if (numberOfItems > 1) {
      setNumberOfItems(numberOfItems - 1);
    }
  };

  return (
    <div>
      <div className="mb-4 border-b border-gray-300 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold mb-2">{props.tshirt}</p>
            <p className="mb-2">
              ${props.price} * {numberOfItems} = ${props.price * numberOfItems}
            </p>
            <FinalValue finalValue= {props.price * numberOfItems} />{" "}
          
          </div>
          <div className="flex items-center">
            <button
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2"
              onClick={handleDecrease}
            >
              -
            </button>
            <button
              className="bg-green-500 text-white px-3 py-1 rounded-full mr-2"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
