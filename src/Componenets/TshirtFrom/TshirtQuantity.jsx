/* eslint-disable react/prop-types */
import { useState } from 'react'
import Card from '../Card/Card'
function TshirtQuantity({setQuantity}) {
    const [isCardOpen,setIsCardOpen] = useState(false)
    const [size, setSize] = useState(0);

    
    const open = (selectedSize) => {
      setSize(selectedSize);
      setIsCardOpen(true);
    };
    const close=()=>{
        setIsCardOpen(false)
    }

  return (
    <div className="flex items-center space-x-2">
      <button
        className="bg-gray-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => open("l")}
      >
        L
      </button>
      <button
        className="bg-gray-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => open("m")}
      >
        M
      </button>
      <button
        className="bg-gray-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => open("s")}
      >
        S
      </button>

      {isCardOpen && (
        <Card
          onClose={close}
          setQuantity={(quantity) => {
            setQuantity((prevQuantity) => ({
              ...prevQuantity,
              [size]: quantity,
            }));
            close();
          }}
        />
      )}
    </div>
  );
}

export default TshirtQuantity