import { createContext } from "react";
import { useItems } from "../hooks/useItems";

export const itemsContext = createContext({});

export const ItemsContextProvider = ({ children }) => {
  const itemsContextValue = useItems();

  return (
    <itemsContext.Provider value={itemsContextValue}>
      {children}
    </itemsContext.Provider>
  );
};
