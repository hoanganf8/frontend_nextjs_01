/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";
import { reducer, initialState } from "../reducers/rootReducer";
//Tạo Context
export const GlobalContext = createContext();
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Provider;
