import { createContext, useContext, useState } from "react";

export const dataContext = createContext();

function DataProvider({ children }) {
  const [data, setData] = useState([]);

  

 

  return (
    <dataContext.Provider
      value={{ data }}
    >
      {children}
    </dataContext.Provider>
  );
}

export function useData() {
  return useContext(dataContext);
}

export default DataProvider;
