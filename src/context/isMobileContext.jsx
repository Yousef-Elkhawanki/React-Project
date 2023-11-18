import { createContext, useEffect, useState } from "react";

export const isMobileContext = createContext();

function IsMobileProvider({ children }) {
  const [isMobile, setIsMobile] = useState();
  const isMobileHandler = (e) => {
    setIsMobile(e.matches);
  };
  useEffect(() => {
    window
      .matchMedia("(max-width:768px)")
      .addEventListener("change", isMobileHandler);
    setIsMobile(window.matchMedia("(max-width:768px)").matches);
  }, []);
  return (
    <isMobileContext.Provider value={{ isMobile }}>
      {children}
    </isMobileContext.Provider>
  );
}

export default IsMobileProvider;
