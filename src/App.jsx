import { useEffect, useState } from "react";
import "./App.css";
import { TshirtProvider } from "./Context/TshirtContext";
import TshirtFrom from "./Componenets/TshirtFrom/TshirtFrom";
import TshirtList from "./Componenets/TshirtList/TshirtList";
import Cart from "./Componenets/Cart/Cart";

function App() {
  const [TShirts, setTShirts] = useState([]);

  const [count, setCount] = useState(0);
  const [qun, setQun] = useState(1);

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

  const handleAddToCart = async(price, tshirt) => {
    setTShirts((prev) =>
      prev.map((prevT) =>
        prevT.tshirt === tshirt ? { ...price, ...tshirt } : prevT
      )
    )
    const res =await fetch(`https://t-shirt-10da8-default-rtdb.firebaseio.com/tshirt.json`,{
      method:"POST",
      body:JSON.stringify(TShirts)
    })
    const resData = res.json()
    console.log(resData);
    setCount(count + 1);
  };

  const handleDecrease = (id) => {
    if (qun[id] > 1) {
      setQun((prevValues) => ({
        ...prevValues,
        [id]: (prevValues[id] || 0) - 1,
      }));
    }
  };
  const handleIncrease = (id) => {
    setQun((prevValues) => ({
      ...prevValues,
      [id]: (prevValues[id] || 0) + 1,
    }));
  };
       
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://t-shirt-10da8-default-rtdb.firebaseio.com/tshirt.json`
        );
        const resData = await res.json();
        const array = [];
        for (const key in resData) {
          // console.log(resData[key]);
          array.push({ id: key, ...resData[key] });
        }
        // console.log(array);
        setTShirts(array);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
useEffect(()=>{fetchData()},[])
    console.log(TShirts);

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
        handleDecrease,
        handleIncrease,
       fetchData,
      }}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold ml-3">T-Shirt App</h1>
        <div className="flex justify-center items-center">
          <Cart TShirts={TShirts} qun={qun} count={count} />
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
