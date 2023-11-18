import { createContext, useState } from "react";

export const SearchContext = createContext();

function SearchContextPrvider({ children }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <SearchContext.Provider value={{ setSearchValue, searchValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextPrvider;
