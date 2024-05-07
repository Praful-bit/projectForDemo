import { useState } from "react";
import { useTshirt } from "../../Context";

function Cart() {
  const { TShirts, handleDecrease, handleIncrease } = useTshirt();
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
        Cart
      </button>
      {isOpen && (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-md shadow-lg w-96">
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4">Cart Items</h3>
              {TShirts.map((tshirt) => (
                <div
                  key={tshirt.id}
                  className="mb-4 border-b border-gray-300 pb-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold mb-2">{tshirt.tshirt}</p>
                      <p className="mb-2">{tshirt.price}</p>
                    </div>
                    <div className="flex items-center">
                      <button
                        className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full mr-2"
                        onClick={() => handleDecrease(tshirt.id, tshirt.qun)}
                      >
                        -
                      </button>
                      <button
                        className="bg-green-500 text-white px-3 py-1 rounded-full ml-2"
                        onClick={() => handleIncrease(tshirt.id, tshirt.qun)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {/* Add total amount here */}
              <button
                onClick={toggleCart}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white mt-4 rounded-lg py-2 px-4 shadow-md hover:shadow-lg transition duration-300"
              >
                Order
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
