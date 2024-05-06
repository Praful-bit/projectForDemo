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
      quantity: 0,
    },
  ],
  addTshirt: (tshirt) => {},
  addDescription: (desc) => {},
  addPrice: (price) => {},
  addQuantity: (quantity) => {},
  deleteItem: (id) => {},
  handleAddToCart:()=>{}
});

export const TshirtProvider = TshirtContext.Provider

export const useTshirt =()=>{
   return useContext(TshirtContext)
}