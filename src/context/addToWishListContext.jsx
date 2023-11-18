import { createContext, useState } from "react";

export const addToWishListContext = createContext();

function AddToWishListProvider({ children }) {
  const getDataWishList = JSON.parse(localStorage.getItem("wishList"));
  const [wishListItem, setWishListItem] = useState(0);
  return (
    <addToWishListContext.Provider value={{ wishListItem, setWishListItem }}>
      {children}
    </addToWishListContext.Provider>
  );
}

export default AddToWishListProvider;
