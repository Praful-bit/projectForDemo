import { useState } from "react";
import "./App.css";
import { TshirtProvider } from "./Context/TshirtContext";
import TshirtFrom from "./Componenets/TshirtFrom/TshirtFrom";
import TshirtList from "./Componenets/TshirtList/TshirtList";
import Cart from "./Componenets/Cart/Cart";

function App() {
  const [count, setCount] = useState(0);
  const [TShirts, setTShirts] = useState([]);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  const addTshirt = (tshirt) => {
    setTShirts((prev) => [{ id: Date.now(), ...tshirt }, ...prev]);
  };

  const addDescription = (desc) => {
    setTShirts((prev) => [{ id: Date.now(), ...desc }, ...prev]);
  };

  const addPrice = (price) => {
    setTShirts((prev) => [{ id: Date.now(), ...price }, ...prev]);
  };

  const addQuantity = (quantity) => {
    setTShirts((prev) => [{ id: Date.now(), ...quantity }, ...prev]);
  };

  const deleteItem = (id) => {
    setTShirts((prev) => prev.filter((tshirt) => tshirt.id !== id));
  };

  return (
    <TshirtProvider
      value={{
        TShirts,
        addDescription,
        addPrice,
        addTshirt,
        deleteItem,
        addQuantity,
        handleAddToCart,
      }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold ml-3">T-Shirt App</h1>
        <div className="flex justify-center items-center">
          <Cart count={count} TShirts={TShirts} />
        </div>
      </div>
      <div className="mb-4">
        <div className="flex ">
          <div className="mb-4 w-full">
            <TshirtFrom />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-y-3">
        {TShirts.map((tshirt, desc, price, quantity) => (
          <div key={tshirt.id} className="w-full">
            <TshirtList
              tshirt={tshirt}
              desc={desc}
              price={price}
              quantity={quantity}
            />
          </div>
        ))}
      </div>
    </TshirtProvider>
  );
}

export default App;
