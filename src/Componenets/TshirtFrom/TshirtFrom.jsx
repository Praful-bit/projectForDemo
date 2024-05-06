import { useState } from "react";
import { useTshirt } from "../../Context";
import TshirtQuantity from "./TshirtQuantity";


function TshirtForm() {
  const { addTshirt } = useTshirt();
  const [tshirt, setTshirt] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity,setQuantity] = useState({l:0,m:0,s:0})
  
  const add = (e) => {
    e.preventDefault();
    if (!tshirt || !desc || !price ) return;
    addTshirt({
      tshirt,
      desc,
      price,
      quantity: { l: quantity.l, m: quantity.m, s: quantity.s },
    });
    setTshirt("");
    setDesc("");
    setPrice(0);
    setQuantity({l:0,m:0,s:0})
  };

  return (
    <div className="p-4 bg-gray-800 rounded-xl">
      <div className="flex">
        <div className="flex items-center space-x-4 mb-1 p-3">
          <label htmlFor="tshirtName" className="text-white">
            T-Shirt Name
          </label>
          <input
            value={tshirt}
            onChange={(e) => setTshirt(e.target.value)}
            id="tshirtName"
            type="text"
            placeholder="T-Shirt Name"
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white mr-2"
          />
        </div>
        <div className="flex items-center space-x-4 mb-1 p-3">
          <label htmlFor="description" className="text-white">
            Description
          </label>
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            id="description"
            type="text"
            placeholder="Description"
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white mr-2"
          />
        </div>
        <div className="flex items-center space-x-4 mb-1 p-3">
          <label htmlFor="price" className="text-white">
            Price
          </label>
          <input
            id="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-700 text-white mr-2"
          />
        </div>
        <TshirtQuantity setQuantity={setQuantity} />
        <button
          type="submit"
          onClick={add}
          className="bg-gradient-to-r from-green-500 to-green-600 text-white mt-3 mb-3 ml-2 mr-2 rounded-lg py-2 px-6 shadow-md hover:shadow-lg transition duration-300"
        >
          Add
        </button>
      </div>
       
    </div>
  );
}

export default TshirtForm;
