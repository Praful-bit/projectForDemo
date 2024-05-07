/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react'

export const TshirtContext = createContext({
  TShirts: [
    {
      id: 1,
      tshirt: "Tshirt Name",
      desc: "description",
      price: 0,
      quantity: { l: 0, m: 0, s: 0 } ,
    },
  ],
  addTshirt: (tshirt) => {},
  addDescription: (desc) => {},
  addPrice: (id, price) => {},
  addQuantity: (quantity) => {},
  deleteItem: (id) => {},
  handleAddToCart: (price,tshirt) => {},
  handleIncrease:(id,qun)=>{},
  handleDecrease:(id,qun)=>{},
  qun:1,
  totalAmount:0
});

export const TshirtProvider = TshirtContext.Provider

export const useTshirt =()=>{
   return useContext(TshirtContext)
}