/* eslint-disable react/prop-types */
import { useState, } from "react";
import CartItem from "./CartItem";

function Cart({ count, TShirts }) {
  const [isOpen, setIsOpen] = useState(false);
 

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };


 

  return (
    <>
      <button
        className="bg-green-500 text-white mt-3 mb-3 ml-2 mr-2 rounded-lg py-2 px-6 shadow-md hover:shadow-lg transition duration-300"
        onClick={toggleCart}
      >
        Cart {count}
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md shadow-lg w-96">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Cart Items</h3>
              {TShirts.map((tshirt) => (
                <CartItem
                  key={tshirt.id}
                  tshirt={tshirt.tshirt}
                  price={tshirt.price}
                />
              ))}
              <button
                onClick={toggleCart}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white mt-4 rounded-lg py-2 px-4 shadow-md hover:shadow-lg transition duration-300"
                >
                Odder
              </button>
              <button
                className="bg-gradient-to-r from-green-500 to-green-600 text-white mt-4 rounded-lg py-2 ml-48 px-4 shadow-md hover:shadow-lg transition duration-300"
                onClick={toggleCart}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
