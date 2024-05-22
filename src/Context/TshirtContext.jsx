/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react'

export const TshirtContext = createContext({
  TShirts: [],
  addTshirt: (tshirt) => {},
  addDescription: (desc) => {},
  addPrice: (id, price) => {},
  addQuantity: (quantity) => {},
  deleteItem: (id) => {},
  handleAddToCart: (price, tshirt) => {},
  handleIncrease: (id) => {},
  handleDecrease: (id) => {},
  fetchData:()=>{}
});

export const TshirtProvider = TshirtContext.Provider

export const useTshirt =()=>{
   return useContext(TshirtContext)
}