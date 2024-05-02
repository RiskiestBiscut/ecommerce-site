/* eslint-disable react/prop-types */
import { createContext } from "react";
import all_product from '../Assets/all_product.js';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextVal = {all_product};

  return (
    <ShopContext.Provider value={contextVal}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider;